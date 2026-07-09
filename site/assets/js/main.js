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
      if (e.target.closest("a.nav-link")) links.classList.remove("open");
    });
  }

  // ---- contact form: open the user's mail app pre-filled (no backend needed) ----
  var form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var f = form.elements;
      var to = "info@tasolve.com";
      var subject = "Website enquiry" + (f.service && f.service.value ? " — " + f.service.value : "");
      var body =
        "Name: " + (f.name ? f.name.value : "") + "\n" +
        "Email: " + (f.email ? f.email.value : "") + "\n" +
        "Phone: " + (f.phone ? f.phone.value : "") + "\n" +
        "Service: " + (f.service ? f.service.value : "") + "\n\n" +
        (f.message ? f.message.value : "");
      var success = document.querySelector(".form-success");
      if (success) success.classList.add("show");
      window.location.href =
        "mailto:" + to +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);
    });
  }
});
