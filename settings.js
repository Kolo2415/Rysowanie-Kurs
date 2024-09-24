document.addEventListener('DOMContentLoaded', () => {
  const settingsElement = document.querySelector('body div div label');

  settingsElement.addEventListener('click', () => {
    document.querySelector('body').classList.toggle('dark');
  });
});
