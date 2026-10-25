import {
  getContactLinkElements,
  appendIfNotExists,
} from "./utils/contactUtils.js";

function populateElements() {
  var linkElements = getContactLinkElements();

  const container = document.querySelector("#contact-container");

  if (linkElements) {
    appendIfNotExists(container.children[0], linkElements.emailElement);
    appendIfNotExists(container.children[1], linkElements.phoneElement);
    appendIfNotExists(container.children[2], linkElements.linkedinElement);
    appendIfNotExists(container.children[3], linkElements.githubElement);
  }
}

document.addEventListener("DOMContentLoaded", populateElements);
