const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const menuItem = document.querySelectorAll('.menu-item');
const closeIcon = document.querySelector('.close-icon');

function toggleMenu() {
  if (mobileMenu.classList.contains('showMenu')) {
    mobileMenu.classList.remove('showMenu');
    closeIcon.style.display = 'none';
    hamburger.style.display = 'block';
  } else {
    mobileMenu.classList.add('showMenu');
    closeIcon.style.display = 'block';
    hamburger.style.display = 'none';
  }
}

hamburger.addEventListener('click', toggleMenu);
closeIcon.addEventListener('click', toggleMenu);
menuItem.forEach(
  (menuItem) => {
    menuItem.addEventListener('click', toggleMenu);
  },
);