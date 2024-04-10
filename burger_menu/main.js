const toggleButton = document.querySelector('.header__toggle');
const menuElement = document.querySelector('.burger-menu');

const closeMenuOutsideClick = (event) => {
  if (!event.target.closest('.header__toggle') && !event.target.closest('.burger-menu')) {
    toggleButton.classList.remove('header__toogle--opened');
    menuElement.classList.remove('burger-menu--opened');
  }
};

toggleButton.addEventListener('click', () => {
  toggleButton.classList.toggle('header__toogle--opened');
  menuElement.classList.toggle('burger-menu--opened');
});

document.addEventListener('click', closeMenuOutsideClick);
