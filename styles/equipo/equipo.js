

/// Navbar ---- Begin ----
// Get Elements
const hamburgerButton = document.getElementsByClassName('container-hamburger')[0]
const navbar = document.getElementsByClassName('nav-mobile')[0]
const dropDownMenu = document.getElementsByClassName('menu-mobile-dropdown')[0]
const formButton = document.getElementById('buton-enviar')
const logoAvioneta = document.getElementById('logo-azul')
const carruselEquipo = document.getElementsByClassName('carrussel-equipo-desktop')[0]
const body = document.getElementsByTagName('body')[0]
const carruselLogo1 = document.getElementById('carrusel-logo1')
const carruselLogo2 = document.getElementById('carrusel-logo2')
const carruselLogo3 = document.getElementById('carrusel-logo3')
const carruselLogo4 = document.getElementById('carrusel-logo4')
const carruselTitel = document.getElementById('carrusel-title')
const carruselSubtitle = document.getElementById('carrusel-position-subtitle')
const linkedInProfile = document.getElementById('linked-in-carrusel')
const leftArrow = document.getElementById('left-arrow')
const rightArrow = document.getElementById('right-arrow')
const paragraphDescription = document.getElementById('carrusel-paragraph-descripcion')

//Get Elements Equipo Palce Holders
const placeholderFernando = document.getElementById('fernando-div')
const placeholderDrLuis = document.getElementById('luisdiaz-div')
const placeholderJoseArredondo = document.getElementById('josearredondo-div')
const placeholderDessGaltan = document.getElementById('dessgaltan-div')
const placeholderDanyBecerra = document.getElementById('danybecerra-div')
const placeholderTreehouse = document.getElementById('treehouse-div')

const menuBar1 = document.getElementsByClassName('bar1')[0]
const menuBar2 = document.getElementsByClassName('bar2')[0]
const menuBar3 = document.getElementsByClassName('bar3')[0]

let count = 0;
console.log(count)

leftArrow.addEventListener('click', () => { 
  console.log('you pressed the left arrow')
  count -= 1;
  if (count === -1) {
    count = 5;
  } 
  carruselHandler(count)
})

rightArrow.addEventListener('click', () => {
  console.log('you pressed the right key');
  count += 1
  if (count === 6) {
    count = 0;
  }
  carruselHandler(count)
})


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

console.log

const carruselHandler = (count) => {
  // Add opacity 50% to body
  carruselTitel.innerHTML = persons[count].name
  carruselSubtitle.innerHTML = persons[count].subtitle
  paragraphDescription.innerHTML = persons[count].descripcion
  carruselLogo1.src = persons[count].logo1
  carruselLogo2.src = persons[count].logo2
  carruselLogo3.src = persons[count].logo3
  carruselLogo4.src = persons[count].logo4
  linkedInProfile.herf = persons[count].linkdin
  //make carrusel div appear
  // add inline style position absoluto, top, left, etc.
  
}

const persons = 
[
    {
      name: 'Fernando Fuentes',
      subtitle: 'Tema Builder, Solution Designer',
      logo1: '../styles/equipo/fernando/pennstate.png',
      logo2: '../styles/equipo/fernando/sunpower.png',
      logo3: '../styles/equipo/fernando/hypernet.png',
      logo4: '../styles/equipo/fernando/ucsandiego.png',
      linkdin: 'www.linked-in.com',
      descripcion: '¡Hola! Soy Fer, Fernando, Fuentes, Güero…como prefieras. Desde chico, me apasiona el emprendimiento y las energías renovables. Desde chico, sueño con cambiar el mundo y dejar una huella de buen tamaño que el pasar de los años no borre. Desde chico, mi papá me educó con honestidad y cariño que los problemas por consumo de alcohol y otras adicciones eran hereditarios en su lado de la familia, y me puso el ejemplo ayudando a sus seres queridos a navegar estos problemas. En 2009 empecé a leer del tema extracurricularmente, y se me hizo tan intelectualmente estimulante como el emprendimiento y las energías renovables. <br><br> En 2011, comienzo a ayudar a un ser muy querido con…'
  },
  {
    name: 'Dr. Luis Fernado Diaz',
    subtitle: 'Asesor Médico, Dir. de Salud.',
    logo1: '../styles/equipo/drluis/unam.png',
    logo2: '../styles/equipo/drluis/centro_juvenil.png',
    logo3: '../styles/equipo/drluis/la_salle.png',
    logo4: '../styles/equipo/drluis/SEPD.png',
    linkdin: 'www.linked-in.com',
    descripcion: 'Hola, soy Luis. Creo que a todos nos gustan las historias, contarlas y/o escucharlas. Desde siempre recuerdo historias de mi vida, y muchas historias que me han contado. Siempre me ha gustado mucho platicar, y más aun, escuchar. Ese es el principal motivo por el cual soy psiquiatra. Me apasiona aprender de la vida de las personas, aun cuando el motivo por el cual las conozco no es muy agradable. Al final, conozco lo más profundo de sus preocupaciones, miedos y pasiones. <br><br> El tema de adicciones lo exploré desde la residencia, y he visto que hay mucha área de oportunidad en profesionalizar su tratamiento y utilizar la tecnología.'
  },
  {
      name: 'Jose Luis',
      subtitle: 'Operaciones y Finanzas, Comercial',
      logo1: 'foto1',
      logo2: 'foto2',
      logo3: 'foto3',
      logo4: 'foto4',
      linkdin: 'www.linked-in.com',
      descripcion: 'bla bla bla fernando'
  },
  {
    name: 'Dess Galtán',
    subtitle: 'Tema Builder, Solution Designer',
    logo1: 'foto1',
    logo2: 'foto2',
    logo3: 'foto3',
    logo4: 'foto4',
    linkdin: 'www.linked-in.com',
    descripcion: 'bla bla bla fernando'
  },
  {
    name: 'Daniela Barrera',
    subtitle: 'Tema Builder, Solution Designer',
    logo1: 'foto1',
    logo2: 'foto2',
    logo3: 'foto3',
    logo4: 'foto4',
    linkdin: 'www.linked-in.com',
    descripcion: 'bla bla bla fernando'
  },
  {
    name: 'Threehouse',
    subtitle: 'Tema Builder, Solution Designer',
    logo1: 'foto1',
    logo2: 'foto2',
    logo3: 'foto3',
    logo4: 'foto4',
    linkdin: 'www.linked-in.com',
    descripcion: 'bla bla bla fernando'
  }
]
  
placeholderFernando.addEventListener('click', (event) => {
  event.preventDefault();
  console.log('Fernando selected');
  count = 0;
  carruselHandler(count)
  return count
})

placeholderDrLuis.addEventListener('click', (event) => {
  event.preventDefault()
  console.log('Dr Luis');
  count = 1
  carruselHandler(count)
})

placeholderJoseArredondo.addEventListener('click', (event) => {
  event.preventDefault()
  console.log('Jose Selected');
  count = 2
  carruselHandler(count)
})

placeholderDessGaltan.addEventListener('click', (event) => {
  event.preventDefault()
  console.log('Dess selectd');
  count = 3
  carruselHandler(count)
})

placeholderDanyBecerra.addEventListener('click', (event) => {
  event.preventDefault()
  console.log('Dany selected');
  count = 4
  carruselHandler(count)
})

placeholderTreehouse.addEventListener('click', (event) => {
  event.preventDefault()
  console.log('Treehouse in the house');
  count = 5
  carruselHandler(count)
})






