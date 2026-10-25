// Email and phone are base64-encoded to keep them out of plain-text scrapes
const contactInfo = {
  email: "bWF4QG1vZGVzdG9zb2Z0d2FyZS5jb20=",
  phone: "KzQ2NzA1NjMxNTcx",
  linkedinHandle: "maxmw",
  githubHandle: "modestotech",
};

function getContactLinkElements() {
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
    linkedinElement.rel = 'noopener';

    // Github
    const githubHandle = contactInfo.githubHandle;
    const githubElement = document.createElement('a');
    githubElement.href = `https://github.com/${githubHandle}`;
    githubElement.textContent = `github.com/${githubHandle}`;
    githubElement.target = '_blank';
    githubElement.rel = 'noopener';

    return {
      email: emailElement,
      phone: phoneElement,
      linkedin: linkedinElement,
      github: githubElement
    }
}

// Adds the matching link to every element marked with data-contact="email|phone|linkedin|github".
// Slots are matched by name, so their order in the HTML doesn't matter. Safe to call more than once.
export function fillContactLinks() {
  const links = getContactLinkElements();

  document.querySelectorAll("[data-contact]").forEach((slot) => {
    const link = links[slot.dataset.contact];

    if (!link) {
      console.warn(`Unknown contact slot: ${slot.dataset.contact}`);
    } else if (!slot.querySelector("a")) {
      slot.appendChild(link);
    }
  });
}
