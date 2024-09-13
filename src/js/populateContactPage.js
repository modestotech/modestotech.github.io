import { getContactLinkElements, appendIfNotExists } from './utils/contactUtils.js'

function onReCaptchaSuccess(token) {
  var linkElements = getContactLinkElements();

  const container = document.querySelector('#contact-container');

  if (linkElements) {
    appendIfNotExists(container.children[0], linkElements.emailElement);
    appendIfNotExists(container.children[1], linkElements.phoneElement);
    appendIfNotExists(container.children[2], linkElements.linkedinElement);
    appendIfNotExists(container.children[3], linkElements.githubElement);
  }

  document.getElementById('card-container').classList.remove("hidden");
  document.getElementById('recaptcha-container').classList.add("hidden");
}

window.onReCaptchaSuccess = onReCaptchaSuccess;
