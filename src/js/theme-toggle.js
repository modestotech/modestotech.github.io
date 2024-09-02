document.addEventListener('DOMContentLoaded', () => {
    const toggleCheckbox = document.getElementById('theme-toggle');
    const themeToggleContainer = document.getElementById('theme-toggle-container');

    const savedTheme = localStorage.getItem('theme');

    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
        toggleCheckbox.checked = savedTheme === 'dark';
    } else {
        // Get the current theme from the document or default to light
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
        toggleCheckbox.checked = currentTheme === 'dark';
    }

    // Remove the hidden class to display the toggle and logo
    themeToggleContainer.classList.remove('hidden');

    // Update theme based on checkbox state
    toggleCheckbox.addEventListener('change', () => {
      const newTheme = toggleCheckbox.checked ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', newTheme);
      // Save the theme preference in localStorage
      localStorage.setItem('theme', newTheme);
    });
  });
