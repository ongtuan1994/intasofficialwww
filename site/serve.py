#!/usr/bin/env python3
"""Static dev server for the INTAS site. Works on Windows, macOS and Linux.

    Windows:  py serve.py
    macOS:    python3 serve.py

Then open http://localhost:8888

Why not `python -m http.server`? That sends no Cache-Control, so browsers
serve stale pages after you edit a file and you end up debugging a change
that already works. This sends no-store and withholds Last-Modified, so
every reload fetches fresh.
"""
import functools
import http.server
import os

PORT = 8888
DIRECTORY = os.path.dirname(os.path.abspath(__file__))


class NoCacheHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-store, no-cache, must-revalidate, max-age=0")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
        super().end_headers()

    def send_header(self, keyword, value):
        # never answer a conditional request with 304
        if keyword == "Last-Modified":
            return
        super().send_header(keyword, value)


if __name__ == "__main__":
    handler = functools.partial(NoCacheHandler, directory=DIRECTORY)
    print(f"Serving {DIRECTORY}\n  http://localhost:{PORT}  (Ctrl+C to stop)")
    http.server.ThreadingHTTPServer(("127.0.0.1", PORT), handler).serve_forever()
