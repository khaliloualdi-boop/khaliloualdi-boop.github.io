(function () {
  "use strict";
  var root = document.documentElement;
  var toggle = document.getElementById("theme-toggle");
  var preference = window.matchMedia("(prefers-color-scheme: dark)");
  function labelTheme() {
    var label =
      root.dataset.theme === "dark"
        ? "Switch to light theme"
        : "Switch to dark theme";
    toggle.setAttribute("aria-label", label);
    toggle.title = label;
  }
  if (toggle) {
    labelTheme();
    toggle.addEventListener("click", function () {
      root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
      try {
        localStorage.setItem("theme", root.dataset.theme);
      } catch (e) {}
      labelTheme();
    });
    preference.addEventListener("change", function (event) {
      var saved;
      try {
        saved = localStorage.getItem("theme");
      } catch (e) {}
      if (saved !== "dark" && saved !== "light") {
        root.dataset.theme = event.matches ? "dark" : "light";
        labelTheme();
      }
    });
  }
  var menu = document.querySelector(".menu-toggle");
  var links = document.getElementById("nav-links");
  function closeMenu(returnFocus) {
    links.classList.remove("is-open");
    menu.setAttribute("aria-expanded", "false");
    menu.setAttribute("aria-label", "Open navigation");
    menu.title = "Open navigation";
    if (returnFocus) menu.focus();
  }
  if (menu && links) {
    menu.addEventListener("click", function () {
      var open = menu.getAttribute("aria-expanded") !== "true";
      links.classList.toggle("is-open", open);
      menu.setAttribute("aria-expanded", String(open));
      menu.setAttribute(
        "aria-label",
        open ? "Close navigation" : "Open navigation",
      );
      menu.title = open ? "Close navigation" : "Open navigation";
      if (open) links.querySelector("a").focus();
    });
    document.addEventListener("keydown", function (event) {
      if (
        event.key === "Escape" &&
        menu.getAttribute("aria-expanded") === "true"
      )
        closeMenu(true);
    });
    document.addEventListener("click", function (event) {
      if (!event.target.closest(".nav-inner")) closeMenu(false);
    });
    document.addEventListener("focusin", function (event) {
      if (!event.target.closest(".nav-inner")) closeMenu(false);
    });
    links.addEventListener("click", function (event) {
      if (event.target.closest("a")) closeMenu(false);
    });
    window
      .matchMedia("(min-width: 681px)")
      .addEventListener("change", function () {
        closeMenu(false);
      });
  }
  if (window.renderMathInElement) {
    window.renderMathInElement(document.getElementById("main-content"), {
      delimiters: [
        { left: "$$", right: "$$", display: true },
        { left: "$", right: "$", display: false },
        { left: "\\[", right: "\\]", display: true },
        { left: "\\(", right: "\\)", display: false },
      ],
      throwOnError: false,
    });
  }
})();
