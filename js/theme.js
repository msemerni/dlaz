document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.querySelector('.theme-toggle-button');

  let currentMode = localStorage.getItem('mode');

  // Set default mode to light if not stored in local storage
  if (!currentMode) {
    currentMode = 'light';
    localStorage.setItem('mode', currentMode);
  }

  // Apply the current mode
  applyMode(currentMode);


  // Event listener for toggle button click
  toggleButton.addEventListener('click', function () {
    currentMode = currentMode === 'dark' ? 'light' : 'dark';
    localStorage.setItem('mode', currentMode); // Сохраняем выбранный режим в Local Storage
    applyMode(currentMode);
  });

  function applyMode(mode) {
    document.documentElement.setAttribute('data-mode', mode);

    // Toggle button icons
    const lightToggleIcon = toggleButton.querySelector('.lightToggleIcon');
    const darkToggleIcon = toggleButton.querySelector('.darkToggleIcon');

    lightToggleIcon.style.display = mode === 'light' ? 'block' : 'none';
    darkToggleIcon.style.display = mode === 'dark' ? 'block' : 'none';

    // Update the "select" element background
    const selectElement = document.querySelector('select');
    selectElement.classList.toggle('dark-mode', mode === 'dark');
    selectElement.classList.toggle('light-mode', mode === 'light');
  }

});
