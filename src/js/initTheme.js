// Runs synchronously in <head> to set the theme before first paint (avoids a flash).
// Mirrors getCurrentTheme() in utils/themeUtils.js; this can't import it since it isn't a module.
(function () {
  var theme;
  try {
    theme = localStorage.getItem("theme");
  } catch (e) {}

  if (!theme) {
    theme = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  if (theme === "dark") {
    document.documentElement.classList.add("dark");
  }
  document.documentElement.setAttribute("data-theme", theme);
})();
