// Email and phone are base64-encoded to keep them out of plain-text scrapes
const contactInfo = {
  email: "bWF4QG1vZGVzdG9zb2Z0d2FyZS5jb20=",
  phone: "KzQ2NzA1NjMxNTcx",
  linkedinHandle: "maxmw",
  githubHandle: "modestotech",
};

export function getContactLinkElements() {
    // Email
    const email = atob(contactInfo.email);
    const emailElement = document.createElement('a');
    emailElement.href = `mailto:${email}`;
    emailElement.textContent = email;

    // Phone
    const phone = atob(contactInfo.phone);
    const phoneElement = document.createElement('a');
    phoneElement.href = `tel:${phone}`;
    phoneElement.textContent = phone;

    // LinkedIn
    const linkedInHandle = contactInfo.linkedinHandle;
    const linkedinElement = document.createElement('a');
    linkedinElement.href = `https://www.linkedin.com/in/${linkedInHandle}`;
    linkedinElement.textContent = `linkedin.com/in/${linkedInHandle}`;
    linkedinElement.target = '_blank';

    // Github
    const githubHandle = contactInfo.githubHandle;
    const githubElement = document.createElement('a');
    githubElement.href = `https://github.com/${githubHandle}`;
    githubElement.textContent = `github.com/${githubHandle}`;
    githubElement.target = '_blank';

    return {
      emailElement,
      phoneElement,
      linkedinElement,
      githubElement
    }
}

export function appendIfNotExists(parent, child) {
  if (parent && !parent.querySelector("a")) {
    parent.appendChild(child);
  }
}
