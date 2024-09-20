const contactInfo = {
  email: "max@modestosoftware.com",
  phone: "+46705631571",
  linkedinHandle: "maxmw",
  githubHandle: "modestotech",
};

export function getContactLinkElements() {
    // Email
    const email = contactInfo.email;
    const emailElement = document.createElement('a');
    emailElement.href = `mailto:${email}`;
    emailElement.textContent = email;

    // Phone
    const phone = contactInfo.phone;
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
