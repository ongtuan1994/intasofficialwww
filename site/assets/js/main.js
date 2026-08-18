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
