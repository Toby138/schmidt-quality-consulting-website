/* Tobias Schmidt — Website-Verhalten: Navigation, Einblendungen, Kleinigkeiten */
(function () {
  "use strict";

  document.documentElement.classList.remove("no-js");

  /* Mobile Navigation */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* Kopfzeile: Schatten nach dem ersten Scrollen */
  var header = document.querySelector(".site-head");
  function onScroll() {
    if (header) {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    }
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* Sanfte Einblendungen beim Scrollen */
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var items = document.querySelectorAll(".reveal");
  if (reduced || !("IntersectionObserver" in window)) {
    items.forEach(function (el) {
      el.classList.add("is-visible");
    });
  } else {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    items.forEach(function (el) {
      io.observe(el);
    });
  }

  /* Jahr im Footer (DE: #jahr, EN: #year) */
  var year = document.getElementById("jahr") || document.getElementById("year");
  if (year) {
    year.textContent = String(new Date().getFullYear());
  }
})();
