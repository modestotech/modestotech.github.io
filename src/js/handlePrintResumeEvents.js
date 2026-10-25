import { fillContactLinks } from "./utils/contactUtils.js";

function handleBeforePrint() {
  fillContactLinks();

  const previousTitle = document.title;
  // Local date as YYYY-MM-DD (the Swedish locale happens to use that format).
  // toISOString() would give the UTC date, which is yesterday just after midnight in Sweden.
  const formattedDate = new Date().toLocaleDateString("sv-SE");
  const fullName = document.querySelector('meta[name="author"]').content;
  document.title = `${fullName} - Resume (printed ${formattedDate})`;

  // Always print in light mode: dark mode would give light text on a dark (or white) page.
  // Only the page is switched, not the saved preference, so it's restored after printing.
  const previousTheme = document.documentElement.getAttribute("data-theme");
  document.documentElement.classList.remove("dark");
  document.documentElement.setAttribute("data-theme", "light");

  window.addEventListener(
    "afterprint", () => {
      document.title = previousTitle;
      document.documentElement.classList.toggle("dark", previousTheme === "dark");
      document.documentElement.setAttribute("data-theme", previousTheme);
    }, { once: true }
  );
}

// The contact icons only show up when printing, so the browser wouldn't download the icon font
// until then - too late, and they print as empty boxes. Start loading it now instead.
document.fonts.load("1em boxicons");

window.addEventListener("beforeprint", handleBeforePrint);

document
  .getElementById("print-button")
  .addEventListener("click", function () {
    window.print();
  });
