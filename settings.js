document.addEventListener('DOMContentLoaded', () => {
  const settingsElement = document.querySelector('body div div label');

  settingsElement.addEventListener('click', () => {
    document.querySelector('body').classList.toggle('dark');
  });
});
document.addEventListener('DOMContentLoaded', () => {
  // Wybieramy burgera i menu
  const burgerElement = document.querySelector('.burger input');
  const menuElement = document.querySelector('#menu ul');

  // Nasłuchujemy na kliknięcie burgera
  burgerElement.addEventListener('click', () => {
    // Sprawdzamy, czy menu jest widoczne i przełączamy między `none` a `flex`
    if (menuElement.style.display === 'flex') {
      menuElement.style.display = 'none';
      console.log('xd');
    } else {
      menuElement.style.display = 'flex';
    }
  });
});
