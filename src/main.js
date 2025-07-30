import './style.scss'

const themeToggle = document.querySelector('.input-theme')


themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
});



