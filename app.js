/* =========================================================
   GOLD FORECASTING MODEL — UNIVERSAL JS
   - Scroll progress bar
   - Navbar "scrolled" shadow
   - Active nav link highlight
   ========================================================= */

(() => {
  "use strict";

  const progressBar = document.getElementById("progressBar");
  const navbar = document.querySelector(".navbar");
  const navLinks = Array.from(document.querySelectorAll(".nav-link"));

  // 1) Active link (based on filename)
  const setActiveNav = () => {
    const file = (location.pathname.split("/").pop() || "index.html").toLowerCase();
    navLinks.forEach(a => {
      const href = (a.getAttribute("href") || "").toLowerCase();
      const active = href === file;
      a.classList.toggle("active", active);
      a.setAttribute("aria-current", active ? "page" : "false");
    });
  };

  // 2) Navbar scrolled style
  const setNavbarScrolled = () => {
    if (!navbar) return;
    navbar.classList.toggle("scrolled", window.scrollY > 8);
  };

  // 3) Progress bar based on scroll position
  const setProgress = () => {
    if (!progressBar) return;

    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;

    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = `${pct}%`;
  };

  // Run on load
  document.addEventListener("DOMContentLoaded", () => {
    setActiveNav();
    setNavbarScrolled();
    setProgress();
  });

  // Run on scroll
  window.addEventListener("scroll", () => {
    setNavbarScrolled();
    setProgress();
  }, { passive: true });

})();
