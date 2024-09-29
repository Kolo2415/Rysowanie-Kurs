const darkButton = document.getElementById('dark');
const lightButton = document.getElementById('light');
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
const body = document.body;

if (currentTheme) {
  body.setAttribute('data-theme', currentTheme);
}

darkButton.onclick = () => {
  body.setAttribute('data-theme', 'dark');
  removeActive();
  darkButton.classList.add('active-theme');
  localStorage.setItem('theme', 'dark');
};

lightButton.onclick = () => {
  body.setAttribute('data-theme', 'light');
  removeActive();
  lightButton.classList.add('active-theme');
  localStorage.setItem('theme', 'light');
};