const themeToggle = document.getElementById("theme-toggle");

document.addEventListener("DOMContentLoaded", () => {
  const themeToggleContainer = document.getElementById(
    "theme-toggle-container"
  );

  const savedTheme = localStorage.getItem("theme");

  var theme;

  if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
    theme = savedTheme;
  } else {

    var browserPreferenceIsDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    theme = browserPreferenceIsDark ? "dark" : "light";
  }

  updateLogo(theme);
  themeToggle.checked = theme === "dark";

  // Remove the hidden class to display the toggle and logo
  themeToggleContainer.classList.remove("hidden");
});

themeToggle.addEventListener("change", function () {
  const newTheme = themeToggle.checked ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", newTheme);
  updateLogo(newTheme);
  localStorage.setItem("theme", newTheme);
});

function updateLogo(theme) {
  const logo = document.getElementById("navbar-logo");
  logo.classList.add("hidden");
  var logoResource = theme === 'dark'
    ? "/images/modesto_software_logo_for_dark_mode.png"
    : "/images/modesto_software_logo_for_light_mode.png";
  logo.setAttribute("src", logoResource);
  logo.classList.remove("hidden");
}
