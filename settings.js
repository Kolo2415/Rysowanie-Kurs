document.addEventListener('DOMContentLoaded', () => {
  const settingsElement = document.querySelector('.switch input');
  const htmlElement = document.documentElement;


  const currentTheme = localStorage.getItem('theme') || 'light';
  htmlElement.setAttribute('data-theme', currentTheme);


  settingsElement.checked = currentTheme === 'dark';


  const toggleTheme = () => {
    const newTheme = htmlElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };


  settingsElement.addEventListener('change', toggleTheme);
});


document.addEventListener('DOMContentLoaded', () => {
  const burgerElement = document.querySelector('.burger input');
  const menuElement = document.querySelector('#menu ul');

  burgerElement.addEventListener('click', () => {
    if (menuElement.style.display === 'flex') {
      menuElement.style.display = 'none';
      console.log('xd');
    } else {
      menuElement.style.display = 'flex';
      console.log('dx');
    }
  });
});
