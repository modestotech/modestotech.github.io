const themeToggle = document.getElementById("theme-toggle");

document.addEventListener("DOMContentLoaded", () => {
  const themeToggleContainer = document.getElementById(
    "theme-toggle-container"
  );

  const savedTheme = localStorage.getItem("theme");

  var theme;

  if (savedTheme) {
    theme = savedTheme;

  } else {
    var browserPreferenceIsDark = window.matchMedia
      && window.matchMedia('(prefers-color-scheme: dark)').matches;

      theme = browserPreferenceIsDark ? "dark" : "light";
  }

  if (theme === "dark") {
    enableDarkMode();
    themeToggle.checked = true;
  } else {
    enableLightMode();
  }

  // Remove the hidden class to display the toggle and logo
  themeToggleContainer.classList.remove("hidden");
});

themeToggle.addEventListener("change", function () {
  if (themeToggle.checked) {
    enableDarkMode();
  } else {
    enableLightMode()
  }
});

function enableLightMode() {
  // classList is for Tailwind
  document.documentElement.classList.remove("dark");
  // data-theme is for DaisyUI
  document.documentElement.setAttribute("data-theme", "light");

  persistTheme("light");
  updateLogo("light");
  setMetaTags();
}

function enableDarkMode() {
  document.documentElement.classList.add("dark");
  document.documentElement.setAttribute("data-theme", "dark");

  persistTheme("dark");
  updateLogo("dark");
  setMetaTags("dark");
}

function persistTheme(theme) {
  localStorage.setItem("theme", theme);
}

function updateLogo(theme) {
  const logo = document.getElementById("navbar-logo");
  logo.classList.add("hidden");
  var logoResource = theme === 'dark'
    ? "/images/modesto_software_logo_for_dark_mode.png"
    : "/images/modesto_software_logo_for_light_mode.png";
  logo.setAttribute("src", logoResource);
  logo.classList.remove("hidden");
}

function setMetaTags(theme) {
  const themeColorTag = document.head.querySelector('.meta-theme[name="theme-color"]');
  const colorSchemeTag = document.head.querySelector('.meta-theme[name="color-scheme"]');

  if (themeColorTag && colorSchemeTag) {
    if (theme === 'dark') {
      themeColorTag.content = "#18181B";
      colorSchemeTag.content = "dark";
    } else {
      themeColorTag.content = "#FAFAFA";
      colorSchemeTag.content = "light";
    }
  } else {
    console.warn('Required meta tags not found');
  }
}