

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
const leftArrow2 = document.getElementById('left-arrow2')
const rightArrow2 = document.getElementById('right-arrow2')

const paragraphDescription = document.getElementById('carrusel-paragraph-descripcion')
const profileImage = document.getElementById('carrusel-profile-image')


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

leftArrow2.addEventListener('click', () => { 
  console.log('you pressed the left arrow')
  count -= 1;
  if (count === -1) {
    count = 5;
  } 
  carruselHandler(count)
})

rightArrow2.addEventListener('click', () => {
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
  profileImage.src =persons[count].profileimg
  //make carrusel div appear
  // add inline style position absoluto, top, left, etc.
  
}

const persons = 
[
    {
      name: 'Fernando Fuentes',
      subtitle: 'Tema Builder, Solution Designer',
      profileimg: '../styles/equipo/fernando/profile_image.png',
      logo1: '../styles/equipo/fernando/',
      logo2: '../styles/equipo/fernando/',
      logo3: '../styles/equipo/fernando/',
      logo4: '../styles/equipo/fernando/',
      linkdin: 'www.linked-in.com',
      descripcion: '¡Hola! Soy Fer, Fernando, Fuentes, Güero…como prefieras. Desde chico, me apasiona el emprendimiento y las energías renovables. Desde chico, sueño con cambiar el mundo y dejar una huella de buen tamaño que el pasar de los años no borre. Desde chico, mi papá me educó con honestidad y cariño que los problemas por consumo de alcohol y otras adicciones eran hereditarios en su lado de la familia, y me puso el ejemplo ayudando a sus seres queridos a navegar estos problemas. En 2009 empecé a leer del tema extracurricularmente, y se me hizo tan intelectualmente estimulante como el emprendimiento y las energías renovables. <br><br> En 2011, comienzo a ayudar a un ser muy querido con…'
  },
  {
    name: 'Dr. Luis Fernado Diaz',
    profileimg: '../styles/equipo/drluis/profile_image.png',
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
      profileimg: '../styles/equipo/josemanuel/profile_image.png',
      subtitle: 'Operaciones y Finanzas, Comercial',
      logo1: '../styles/equipo/josemanuel/finvenergy.png',
      logo2: '../styles/equipo/josemanuel/universidad_panamericana.png',
      logo3: '../styles/equipo/josemanuel/trep_camp.png',
      logo4: '../styles/equipo/josemanuel/zagartha_ma.svg',
      linkdin: 'www.linked-in.com',
      descripcion: 'Mi título de Ingeniero Industrial me ha permitido experimentar en muchos lados durante mi carrera profesional. Empecé en Recursos Humanos porque estoy convencido de que el capital más valioso en las empresas son las personas. Después, brinqué a Finanzas porque quería entender la entraña de los negocios desde la perspectiva numérica. Más tarde, estuve en Operaciones donde aprendí algo de Administración, Finanzas, Ventas, Derecho y Project Management en las empresas. Finalmente, decidí aplicar todo ese aprendizaje en algunos emprendimientos en los que trabajé durante 4 años. <br><br> Mi experiencia me ha dado la oportunidad de observar a…'
  },
  {
    name: 'Dess Galtán',
    profileimg: '../styles/equipo/dess/profile_image.png',
    subtitle: 'Tema Builder, Solution Designer',
    logo1: '../styles/equipo/dess/itesm.png',
    logo2: '../styles/equipo/dess/cussi.svg',
    logo3: '../styles/equipo/dess/anahuac.png',
    logo4: '../styles/equipo/dess/fucidim.png',
    linkdin: 'www.linked-in.com',
    descripcion: 'Soy Abogada y me apasionan los emprendimientos sociales. Estudié en el Instituto Tecnológico y de Estudios Superiores Monterrey, y ahí conocí los emprendimientos sociales. Desde entonces me hice fan del tema. Me inscribí a todos los grupos estudiantiles y ONG´s que pude para aprender más y aportar.<br><br> Tengo dos maestrías, una en la Universidad Anáhuac del Sur en Derecho de las Empresas. Quería aprender más de cómo siendo abogada podría apoyar a pequeños negocios y emprendedores. La otra en Acción Política por la Universidad Francisco de Vitoria en Madrid, España. Esta la hice porque siempre quise estudiar en el extranjero y quería que mis …'
  },
  {
    name: 'Daniela Barrera',
    profileimg: '../styles/equipo/dany/profile_image.png',
    subtitle: 'Tema Builder, Solution Designer',
    logo1: '../styles/equipo/dany/iapde.png',
    logo2: '../styles/equipo/dany/palermo.png',
    logo3: '../styles/equipo/dany/madison.png',
    logo4: 'foto4',
    linkdin: 'www.linked-in.com',
    descripcion: 'Hola, soy Dany y me apasiona estudiar y comprender el comportamiento humano, razón por la cual disfruto de viajar y conocer gente nueva, y por la cual decidí estudiar Psicología Clínica. Siempre he considerado que podemos aprender haciendo y sobre todo de aquellos quienes nos rodean. Mi carrera como psicóloga la realicé en Buenos Aires, Argentina, donde tuve la oportunidad de expandir y enriquecer mi conocimiento sobre otras culturas, tanto en lo personal como en lo profesional.<br><br> Hoy en día soy candidata a un título de MBA en el Instituto Panamericano de Alta Dirección, donde he logrado fusionar mis dos pasiones: el factor humano y los negocios.'
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






