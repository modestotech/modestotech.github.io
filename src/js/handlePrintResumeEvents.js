import { getContactLinkElements, appendIfNotExists } from "./utils/contactUtils.js";

function handleBeforePrint() {
  const container = document.querySelector("#contact-container");

  var linkElements = getContactLinkElements();

  if (linkElements) {
    appendIfNotExists(container.children[0], linkElements.emailElement);
    appendIfNotExists(container.children[1], linkElements.linkedinElement);
    appendIfNotExists(container.children[2], linkElements.githubElement);
    appendIfNotExists(container.children[3], linkElements.phoneElement);
  }

  const previousTitle = document.title;
  var now = new Date();
  var formattedDate = now.toISOString().split("T")[0];
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

window.addEventListener("beforeprint", handleBeforePrint);

document
  .getElementById("print-button")
  .addEventListener("click", function () {
    window.print();
  });
