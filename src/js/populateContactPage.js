import {
  getContactLinkElements,
  appendIfNotExists,
} from "./utils/contactUtils.js";

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateCaptcha() {
  const num1 = getRandomInt(1, 10);
  const num2 = getRandomInt(1, 10);
  const question = `What is ${num1} + ${num2}?`;
  const answer = num1 + num2;

  document.getElementById("captcha-question").innerText = question;
  document.getElementById("captcha-question").dataset.answer = answer;
}

function populateElements() {
  var linkElements = getContactLinkElements();

  const container = document.querySelector("#contact-container");

  if (linkElements) {
    appendIfNotExists(container.children[0], linkElements.emailElement);
    appendIfNotExists(container.children[1], linkElements.phoneElement);
    appendIfNotExists(container.children[2], linkElements.linkedinElement);
    appendIfNotExists(container.children[3], linkElements.githubElement);
  }
  document.getElementById("card-container").classList.remove("hidden");
  document.getElementById("captcha-container").classList.add("hidden");
}

function validateCaptcha(event) {
  const userAnswer = document.getElementById("captcha-answer").value;
  const correctAnswer =
    document.getElementById("captcha-question").dataset.answer;
  const feedbackMessage = document.getElementById('feedback-message');

  event.preventDefault();

  if (userAnswer != correctAnswer) {
    feedbackMessage.innerText = "Wrong answer, try again.";
    return false;
  }

  feedbackMessage.innerText = "";
  populateElements();
  return true;
}

document.addEventListener("DOMContentLoaded", function () {
  generateCaptcha();
  document
    .getElementById("captcha-form")
    .addEventListener("submit", validateCaptcha);
});
