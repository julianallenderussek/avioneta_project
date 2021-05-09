

/// Navbar ---- Begin ----
// Get Elements
const hamburgerButton = document.getElementsByClassName('container-hamburger')[0]
const navbar = document.getElementsByClassName('nav-mobile')[0]
const dropDownMenu = document.getElementsByClassName('menu-mobile-dropdown')[0]
const formButton = document.getElementById('buton-enviar')
const logoAvioneta = document.getElementById('logo-azul')
const carruselEquipo = document.getElementsByClassName('carrussel-equipo-desktop')[0]

//Get Elements Equipo Palce Holders
const placeholderFernando = document.getElementById('fernando-div')
const placeholderDrLuis = document.getElementById('luisdiaz-div')
const placeholderJoseArredondo = document.getElementById('josearredondo-div')
const placeholderDessGaltan = document.getElementById('danybecerra-div')
const placeholderDanyBecerra = document.getElementById('danybecerra-div')
const placeholderTreehouse = document.getElementById('treehouse-div')

const menuBar1 = document.getElementsByClassName('bar1')[0]
const menuBar2 = document.getElementsByClassName('bar2')[0]
const menuBar3 = document.getElementsByClassName('bar3')[0]

//Functions
const toggleMenu = () => {
  console.log('toggling')
  navbar.classList.toggle('dark-blue')
  dropDownMenu.classList.toggle('active')
  hamburgerButton.classList.toggle('closebutton')
  menuBar1.classList.toggle('background-white')
  menuBar2.classList.toggle('background-white')
  menuBar3.classList.toggle('background-white')
  
  // if (logoAvioneta.src === 'http://localhost:5501/styles/detox/assets_detox/logo-avioneta_azul.png') {
  //   logoAvioneta.src = 'http://localhost:5501/styles/detox/assets_detox/logo_blanco_avioneta.png'
  // } else if (logoAvioneta.src === 'http://localhost:5501/styles/detox/assets_detox/logo_blanco_avioneta.png') {
  //   logoAvioneta.src = 'http://localhost:5501/styles/detox/assets_detox/logo-avioneta_azul.png'
  // }
}


/// Navbar --- END----
hamburgerButton.addEventListener('click', toggleMenu)

  
placeholderFernando.addEventListener('click', (event) => {
  event.preventDefault();
  console.log('Fernando selected');
  count = 1
  carruselHandler(count)
})

placeholderDrLuis.addEventListener('click', (event) => {
  event.preventDefault()
  console.log('Dr Luis');
  setCount(2)
})

placeholderJoseArredondo.addEventListener('click', (event) => {
  event.preventDefault()
  console.log('Jose Selected');
  setCount(3)
})

placeholderDessGaltan.addEventListener('click', (event) => {
  event.preventDefault()
  console.log('Dess selectd');
  setCount(4)
})

placeholderDanyBecerra.addEventListener('click', (event) => {
  event.preventDefault()
  console.log('Dany selected');
  setCount(5)
})

placeholderTreehouse.addEventListener('click', (event) => {
  event.preventDefault()
  console.log('Treehouse in the house');
  setCount(6)
})






