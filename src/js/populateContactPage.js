import { contactInfo } from './contactInfo.js'

document.addEventListener('DOMContentLoaded', function() {
  // Email
  var email = contactInfo.email;
  const emailElement = document.createElement('a');
  emailElement.href = `mailto:${email}`;
  emailElement.textContent = email;

  // Phone
  var phone = contactInfo.phone;
  const phoneElement = document.createElement('a');
  phoneElement.href = `tel:${phone}`;
  phoneElement.textContent = phone;

  // LinkedIn
  var linkedInHandle = contactInfo.linkedinHandle;
  const linkedinElement = document.createElement('a');
  linkedinElement.href = `https://www.linkedin.com/in/${linkedInHandle}`;
  linkedinElement.textContent = `linkedin.com/in/${linkedInHandle}`;
  linkedinElement.target = '_blank';

  // Github
  var githubHandle = contactInfo.githubHandle;
  const githubElement = document.createElement('a');
  githubElement.href = `https://github.com/${githubHandle}`;
  githubElement.textContent = `github.com/${githubHandle}`;
  githubElement.target = '_blank';

  // Insert content into the HTML
  const contactContainer = document.querySelector('#contact-container');
  contactContainer.children[0].appendChild(emailElement);
  contactContainer.children[1].appendChild(phoneElement);
  contactContainer.children[2].appendChild(linkedinElement);
  contactContainer.children[3].appendChild(githubElement);
});
