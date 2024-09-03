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
    // Get the current theme from the document or default to light
    const currentTheme =
      document.documentElement.getAttribute("data-theme") || "light";
    theme = currentTheme;
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
  var logoResource = theme === 'dark' ? "/images/logo_light.png" : "/images/logo_dark.png";
  logo.setAttribute("src", logoResource);
  logo.classList.remove("hidden");
}
