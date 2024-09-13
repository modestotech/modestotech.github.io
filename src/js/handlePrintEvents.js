import { getContactLinkElements, appendIfNotExists } from "./utils/contactUtils.js";

function handleBeforePrint() {
  const container = document.querySelector("#contact-container");

  var linkElements = getContactLinkElements();

  if (linkElements) {
    appendIfNotExists(container.children[0], linkElements.emailElement);
    appendIfNotExists(container.children[1], linkElements.phoneElement);
    appendIfNotExists(container.children[2], linkElements.linkedinElement);
    appendIfNotExists(container.children[3], linkElements.githubElement);
  }

  const previousTitle = document.title;
  var now = new Date();
  var formattedDate = now.toISOString().split("T")[0];
  document.title = `Max Modesto Wallin - Resume (printed ${formattedDate})`;

  window.addEventListener(
    "afterprint", () => { document.title = previousTitle; }, { once: true }
  );
}

window.addEventListener("beforeprint", handleBeforePrint);

document
  .getElementById("print-button")
  .addEventListener("click", function () {
    window.print();
  });
