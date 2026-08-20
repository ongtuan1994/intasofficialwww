/* INTAS — mobile nav + contact form (static, no backend) */
document.addEventListener("DOMContentLoaded", function () {
  // ---- mobile nav toggle ----
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      links.classList.toggle("open");
    });
    links.addEventListener("click", function (e) {
      if (e.target.closest("a.nav-link") || e.target.closest(".dropdown a")) links.classList.remove("open");
    });
  }

  // ---- nav dropdowns (desktop hover is CSS; this adds click + keyboard) ----
  var navItems = document.querySelectorAll(".nav-item.has-dropdown");
  var setItemOpen = function (item, open) {
    var t = item.querySelector(".dropdown-toggle");
    item.classList.toggle("open", open);
    if (t) t.setAttribute("aria-expanded", open ? "true" : "false");
  };

  Array.prototype.forEach.call(navItems, function (navItem) {
    var ddToggle = navItem.querySelector(".dropdown-toggle");
    if (!ddToggle) return;

    ddToggle.addEventListener("click", function (e) {
      e.preventDefault();
      var willOpen = !navItem.classList.contains("open");
      // only one menu open at a time
      Array.prototype.forEach.call(navItems, function (other) {
        if (other !== navItem) setItemOpen(other, false);
      });
      setItemOpen(navItem, willOpen);
    });

    document.addEventListener("click", function (e) {
      if (!navItem.contains(e.target)) setItemOpen(navItem, false);
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && navItem.classList.contains("open")) {
        setItemOpen(navItem, false);
        ddToggle.focus();
      }
    });

    Array.prototype.forEach.call(navItem.querySelectorAll(".dropdown a"), function (a) {
      a.addEventListener("click", function () { setItemOpen(navItem, false); });
    });
  });

  // ---- reveal on scroll ----
  var revealables = document.querySelectorAll("[data-reveal]");
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!revealables.length) {
    // nothing to do
  } else if (reduced || !("IntersectionObserver" in window)) {
    // no observer support, or the visitor asked for less motion: show it all
    Array.prototype.forEach.call(revealables, function (el) { el.classList.add("is-in"); });
  } else {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-in");
        observer.unobserve(entry.target);   // reveal once, never re-trigger
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });

    Array.prototype.forEach.call(revealables, function (el) {
      // siblings arrive in sequence rather than as one block
      var group = el.parentNode ? el.parentNode.children : [el];
      var i = 0, n = 0;
      for (; n < group.length; n++) {
        if (group[n] === el) break;
        if (group[n].hasAttribute && group[n].hasAttribute("data-reveal")) i++;
      }
      if (i > 0) el.style.transitionDelay = Math.min(i * 80, 240) + "ms";
      observer.observe(el);
    });
  }

  // ---- chat demo: loop the conversation while it is on screen ----
  var chatDemo = document.querySelector(".chat-demo");
  if (chatDemo) {
    var steps = Array.prototype.slice.call(chatDemo.querySelectorAll("[data-step]"));
    // ms from the top of each cycle; typing indicators sit at index 1 and 4
    var marks = [0, 800, 1900, 3100, 3900, 5000];
    var HOLD = 4200;
    var timers = [];
    var playing = false;

    var stop = function () {
      timers.forEach(clearTimeout);
      timers = [];
      steps.forEach(function (el) { el.classList.remove("show"); });
    };

    var cycle = function () {
      steps.forEach(function (el) { el.classList.remove("show"); });
      steps.forEach(function (el, i) {
        timers.push(setTimeout(function () {
          el.classList.add("show");
          // a typing indicator retires exactly as its reply lands, so the
          // two crossfade in the same grid cell
          if (el.classList.contains("typing") && marks[i + 1] != null) {
            timers.push(setTimeout(function () {
              el.classList.remove("show");
            }, marks[i + 1] - marks[i]));
          }
        }, marks[i]));
      });
      timers.push(setTimeout(cycle, marks[marks.length - 1] + HOLD));
    };

    if (reduced) {
      // the visitor asked for less motion: show the whole exchange at once
      steps.forEach(function (el) { el.classList.add("show"); });
    } else if (!("IntersectionObserver" in window)) {
      cycle();
    } else {
      new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting && !playing) { playing = true; cycle(); }
          else if (!entry.isIntersecting && playing) { playing = false; stop(); }
        });
      }, { threshold: 0.25 }).observe(chatDemo);
    }

    // a language switch swaps text but must not desync the running sequence
    document.addEventListener("intas:langchange", function () {
      if (playing) { stop(); cycle(); }
    });
  }

  // ---- e-wedding mockup: open sequence + live countdown ----
  var invite = document.querySelector(".invite-mock");
  if (invite) {
    var blocks = Array.prototype.slice.call(invite.querySelectorAll("[data-inv]"));
    var cells = {
      d: invite.querySelector('[data-cd="d"]'),
      h: invite.querySelector('[data-cd="h"]'),
      m: invite.querySelector('[data-cd="m"]'),
      s: invite.querySelector('[data-cd="s"]')
    };
    // a mockup, so the date is anchored to load time and always reads forward
    var target = Date.now() + ((12 * 24 + 6) * 60 + 24) * 60 * 1000;
    var pad = function (n) { return n < 10 ? "0" + n : String(n); };
    var tick = null;

    var render = function () {
      var left = Math.max(0, target - Date.now());
      var secs = Math.floor(left / 1000);
      cells.d.textContent = Math.floor(secs / 86400);
      cells.h.textContent = pad(Math.floor(secs / 3600) % 24);
      cells.m.textContent = pad(Math.floor(secs / 60) % 60);
      cells.s.textContent = pad(secs % 60);
    };

    var openSequence = function () {
      blocks.forEach(function (el, i) {
        setTimeout(function () { el.classList.add("show"); }, 120 + i * 130);
      });
    };

    // the invitation's own toggle mirrors the visitor's language, which is
    // the point of the feature rather than decoration
    var langPills = Array.prototype.slice.call(invite.querySelectorAll("[data-inv-lang]"));
    var syncLang = function () {
      var th = document.documentElement.getAttribute("lang") === "th";
      langPills.forEach(function (p) {
        p.classList.toggle("on", p.getAttribute("data-inv-lang") === (th ? "TH" : "EN"));
      });
    };
    syncLang();
    document.addEventListener("intas:langchange", syncLang);

    render();
    if (reduced) {
      // no open sequence and no per-second motion; the invitation just sits there
      blocks.forEach(function (el) { el.classList.add("show"); });
    } else if (!("IntersectionObserver" in window)) {
      openSequence();
      tick = setInterval(render, 1000);
    } else {
      new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            if (!tick) { openSequence(); render(); tick = setInterval(render, 1000); }
          } else if (tick) {
            clearInterval(tick);
            tick = null;
          }
        });
      }, { threshold: 0.2 }).observe(invite);
    }
  }

  // ---- shared: run a loop only while its panel is on screen ----
  var whileVisible = function (el, start, stop) {
    if (!("IntersectionObserver" in window)) { start(); return; }
    var live = false;
    new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && !live) { live = true; start(); }
        else if (!entry.isIntersecting && live) { live = false; stop(); }
      });
    }, { threshold: 0.25 }).observe(el);
  };

  // ---- 01 consulting: a feasibility model re-solving across scenarios ----
  var caseMock = document.querySelector(".mock-case");
  if (caseMock) {
    var SCENARIOS = [
      { key: "base", bars: [0.42, 0.58, 0.35, 0.72, 0.50, 0.64, 0.88], irr: 27.5, ebitda: 53, pay: 4.3 },
      { key: "up",   bars: [0.55, 0.70, 0.48, 0.86, 0.62, 0.78, 1.00], irr: 34.2, ebitda: 71, pay: 3.5 },
      { key: "down", bars: [0.30, 0.44, 0.26, 0.55, 0.38, 0.48, 0.66], irr: 19.8, ebitda: 38, pay: 5.6 }
    ];
    var caseBars = Array.prototype.slice.call(caseMock.querySelectorAll(".bars span"));
    var caseTabs = Array.prototype.slice.call(caseMock.querySelectorAll("[data-sc]"));
    var figOf = function (n) { return caseMock.querySelector('[data-fig="' + n + '"]'); };
    var caseAt = 0, caseTimer = null, caseAnim = null;

    // ease the printed figures rather than snapping them
    var countTo = function (el, from, to, decimals, ms) {
      var t0 = null;
      var step = function (ts) {
        if (t0 === null) t0 = ts;
        var k = Math.min(1, (ts - t0) / ms);
        var eased = 1 - Math.pow(1 - k, 3);
        el.textContent = (from + (to - from) * eased).toFixed(decimals);
        if (k < 1) caseAnim = requestAnimationFrame(step);
      };
      caseAnim = requestAnimationFrame(step);
    };

    var applyScenario = function (sc, animate) {
      caseTabs.forEach(function (t) { t.classList.toggle("on", t.getAttribute("data-sc") === sc.key); });
      caseBars.forEach(function (b, i) { b.style.setProperty("--h", sc.bars[i]); });
      var pairs = [[figOf("irr"), sc.irr, 1], [figOf("ebitda"), sc.ebitda, 0], [figOf("pay"), sc.pay, 1]];
      pairs.forEach(function (p) {
        if (!animate) { p[0].textContent = p[1].toFixed(p[2]); return; }
        countTo(p[0], parseFloat(p[0].textContent) || 0, p[1], p[2], 800);
      });
    };

    var caseStart = function () {
      caseTimer = setInterval(function () {
        caseAt = (caseAt + 1) % SCENARIOS.length;
        applyScenario(SCENARIOS[caseAt], !reduced);
      }, 3600);
    };
    var caseStop = function () {
      clearInterval(caseTimer); caseTimer = null;
      if (caseAnim) cancelAnimationFrame(caseAnim);
    };

    applyScenario(SCENARIOS[0], false);
    if (!reduced) whileVisible(caseMock, caseStart, caseStop);
  }

  // ---- 02 software: month-end reconciliation ----
  var ledger = document.querySelector(".mock-ledger");
  if (ledger) {
    var ledRows = Array.prototype.slice.call(ledger.querySelectorAll("[data-led]"));
    var ledTotal = ledger.querySelector("[data-led-total]");
    var ledCount = ledger.querySelector("[data-led-count]");
    var TOTAL = 7800000, INVOICES = 201;
    var baht = function (n) { return "฿" + Math.round(n).toLocaleString("en-US"); };
    var ledTimers = [], ledRaf = null;

    var ledClear = function () {
      ledTimers.forEach(clearTimeout); ledTimers = [];
      if (ledRaf) { cancelAnimationFrame(ledRaf); ledRaf = null; }
    };

    var ramp = function (ms) {
      var t0 = null;
      var step = function (ts) {
        if (t0 === null) t0 = ts;
        var k = Math.min(1, (ts - t0) / ms);
        var eased = 1 - Math.pow(1 - k, 3);
        ledTotal.textContent = baht(TOTAL * eased);
        ledCount.textContent = Math.round(INVOICES * eased);
        if (k < 1) ledRaf = requestAnimationFrame(step);
      };
      ledRaf = requestAnimationFrame(step);
    };

    var ledCycle = function () {
      ledClear();
      ledRows.forEach(function (r) { r.classList.remove("show", "tick"); });
      ledTotal.textContent = baht(0);
      ledCount.textContent = "0";
      ramp(2600);
      ledRows.forEach(function (r, i) {
        ledTimers.push(setTimeout(function () { r.classList.add("show"); }, 200 + i * 320));
        ledTimers.push(setTimeout(function () { r.classList.add("tick"); }, 480 + i * 320));
      });
      ledTimers.push(setTimeout(ledCycle, 200 + ledRows.length * 320 + 3200));
    };

    if (reduced) {
      ledRows.forEach(function (r) { r.classList.add("show", "tick"); });
      ledTotal.textContent = baht(TOTAL);
      ledCount.textContent = String(INVOICES);
    } else {
      whileVisible(ledger, ledCycle, ledClear);
    }
  }

  // ---- contact form: POST to Web3Forms, emailed to info@tasolve.com ----
  var form = document.getElementById("contact-form");
  if (form) {
    var successBox = document.querySelector(".form-success");
    var errorBox = document.querySelector(".form-error");
    var submitBtn = form.querySelector('button[type="submit"]');
    var t = function (k) { return (window.INTAS && window.INTAS.t) ? window.INTAS.t(k) : k; };

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (successBox) successBox.classList.remove("show");
      if (errorBox) errorBox.classList.remove("show");

      // native required-field validation
      if (!form.checkValidity()) { form.reportValidity(); return; }

      var btnLabel = submitBtn ? submitBtn.textContent : "";
      if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = t("contact.f.sending"); }

      fetch(form.action, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      })
        .then(function (r) { return r.json().catch(function () { return {}; }).then(function (d) { return { ok: r.ok, d: d }; }); })
        .then(function (res) {
          if (res.ok && res.d.success) {
            form.reset();
            if (successBox) successBox.classList.add("show");
            successBox && successBox.scrollIntoView({ behavior: "smooth", block: "center" });
          } else {
            if (errorBox) errorBox.classList.add("show");
          }
        })
        .catch(function () { if (errorBox) errorBox.classList.add("show"); })
        .finally(function () {
          if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = btnLabel; }
        });
    });
  }
});
