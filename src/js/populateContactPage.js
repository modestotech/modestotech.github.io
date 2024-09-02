document.addEventListener('DOMContentLoaded', function() {
  // Email
  const emailElement = document.createElement('a');
  emailElement.href = 'mailto:modestotechnology@gmail.com';
  emailElement.textContent = 'modestotechnology@gmail.com';

  // Phone
  const phoneElement = document.createElement('a');
  phoneElement.href = 'tel:+46705631571';
  phoneElement.textContent = '+46705631571';

  // LinkedIn
  const linkedinElement = document.createElement('a');
  linkedinElement.href = 'https://www.linkedin.com/in/maxmw';
  linkedinElement.textContent = 'linkedin.com/in/maxmw';
  linkedinElement.target = '_blank';

  // Github
  const githubElement = document.createElement('a');
  githubElement.href = 'https://github.com/modestotech';
  githubElement.textContent = 'github.com/modestotech';
  githubElement.target = '_blank';

  // Insert content into the HTML
  document.querySelector('.card-body .space-y-4').children[0].appendChild(emailElement);
  document.querySelector('.card-body .space-y-4').children[1].appendChild(phoneElement);
  document.querySelector('.card-body .space-y-4').children[2].appendChild(linkedinElement);
  document.querySelector('.card-body .space-y-4').children[3].appendChild(githubElement);
});
