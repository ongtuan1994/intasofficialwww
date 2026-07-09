#!/usr/bin/env bash
# Adds the two DNS records needed to point www.intas.helixco.ai at Vercel.
# Usage:  CF_API_TOKEN=your_token  bash add-cloudflare-dns.sh
set -euo pipefail

: "${CF_API_TOKEN:?Set CF_API_TOKEN to a Cloudflare token with Zone:DNS:Edit on helixco.ai}"
ZONE_NAME="helixco.ai"
API="https://api.cloudflare.com/client/v4"
AUTH=(-H "Authorization: Bearer ${CF_API_TOKEN}" -H "Content-Type: application/json")

echo "→ Looking up zone id for ${ZONE_NAME}…"
ZONE_ID=$(curl -s "${API}/zones?name=${ZONE_NAME}" "${AUTH[@]}" \
  | python -c "import sys,json;print(json.load(sys.stdin)['result'][0]['id'])")
echo "  zone id: ${ZONE_ID}"

add_record() {  # type name content proxied
  local type="$1" name="$2" content="$3" proxied="$4"
  echo "→ ${type}  ${name}  →  ${content}"
  # delete any existing record with same type+name so this is re-runnable
  local ids
  ids=$(curl -s "${API}/zones/${ZONE_ID}/dns_records?type=${type}&name=${name}" "${AUTH[@]}" \
    | python -c "import sys,json;[print(r['id']) for r in json.load(sys.stdin)['result']]")
  for id in $ids; do
    curl -s -X DELETE "${API}/zones/${ZONE_ID}/dns_records/${id}" "${AUTH[@]}" >/dev/null
    echo "  (removed existing ${id})"
  done
  curl -s -X POST "${API}/zones/${ZONE_ID}/dns_records" "${AUTH[@]}" \
    -d "{\"type\":\"${type}\",\"name\":\"${name}\",\"content\":\"${content}\",\"ttl\":1,\"proxied\":${proxied}}" \
    | python -c "import sys,json;d=json.load(sys.stdin);print('  OK' if d['success'] else '  FAIL '+json.dumps(d['errors']))"
}

# 1) ownership verification (TXT) — must NOT be proxied
add_record "TXT"   "_vercel.helixco.ai"        "vc-domain-verify=www.intas.helixco.ai,91818660faa3d502ad69" false
# 2) routing (CNAME) — DNS only (grey cloud) so Vercel can issue SSL
add_record "CNAME" "www.intas.helixco.ai"      "cname.vercel-dns.com" false

echo "✔ Done. Vercel will verify + issue SSL within a few minutes."
