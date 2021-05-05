
const hamburgerButton = document.getElementsByClassName('container-hamburger')[0]

const navbar = document.getElementsByClassName('nav-mobile')[0]

const dropDownMenu = document.getElementsByClassName('menu-mobile-dropdown')[0]

const toggleMenu = () => {
  navbar.classList.toggle('dark-blue')
  dropDownMenu.classList.toggle('active')
  hamburgerButton.classList.toggle('closebutton')
}