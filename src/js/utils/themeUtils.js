export function getCurrentTheme() {
    const savedTheme = localStorage.getItem("theme");

    var theme;

    if (savedTheme) {
      theme = savedTheme;
    } else {
      var browserPreferenceIsDark =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;

      theme = browserPreferenceIsDark ? "dark" : "light";
    }

    return theme;
  }
