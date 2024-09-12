import { getCurrentTheme } from './themeUtils.js';

const themeToggle = document.getElementById("theme-toggle");

const lightThemeName = "light";
const darkThemeName = "dark";

document.addEventListener("DOMContentLoaded", () => {
  const themeToggleContainer = document.getElementById(
    "theme-toggle-container"
  );

  var theme = getCurrentTheme();

  if (theme === darkThemeName) {
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
  document.documentElement.classList.remove(darkThemeName);
  // data-theme is for DaisyUI
  document.documentElement.setAttribute("data-theme", lightThemeName);

  persistTheme(lightThemeName);
  updateLogo(lightThemeName);
  setMetaTags(lightThemeName);
}

function enableDarkMode() {
  document.documentElement.classList.add(darkThemeName);
  document.documentElement.setAttribute("data-theme", darkThemeName);

  persistTheme(darkThemeName);
  updateLogo(darkThemeName);
  setMetaTags(darkThemeName);
}

function persistTheme(theme) {
  localStorage.setItem("theme", theme);
}

function updateLogo(theme) {
  const logo = document.getElementById("navbar-logo");
  logo.classList.add("hidden");
  var logoResource = theme === darkThemeName
    ? "/images/modesto_software_logo_for_dark_mode.png"
    : "/images/modesto_software_logo_for_light_mode.png";
  logo.setAttribute("src", logoResource);
  logo.classList.remove("hidden");
}

function setMetaTags(theme) {
  const themeColorTag = document.head.querySelector('.meta-theme[name="theme-color"]');
  const colorSchemeTag = document.head.querySelector('.meta-theme[name="color-scheme"]');

  if (themeColorTag && colorSchemeTag) {
    if (theme === darkThemeName) {
      themeColorTag.content = "#18181B";
      colorSchemeTag.content = darkThemeName;
    } else {
      themeColorTag.content = "#FAFAFA";
      colorSchemeTag.content = lightThemeName;
    }
  } else {
    console.warn('Required meta tags not found');
  }
}
