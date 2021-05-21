

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
const displayDiv = document.getElementsByClassName('no-display')[0]
const closeButton = document.getElementById('close-button-button')
const closeButtonMobile = document.getElementById('close-button-mobile')
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
    count = 4;
  } 
  carruselHandler(count)
})

rightArrow.addEventListener('click', () => {
  console.log('you pressed the right key');
  count += 1
  if (count === 5) {
    count = 0;
  }
  carruselHandler(count)
})

leftArrow2.addEventListener('click', () => { 
  console.log('you pressed the left arrow')
  count -= 1;
  if (count === -1) {
    count = 4;
  } 
  carruselHandler(count)
})

rightArrow2.addEventListener('click', () => {
  console.log('taco');
  count += 1
  if (count === 5) {
    count = 0;
  }
  carruselHandler(count)
})

closeButton.addEventListener('click',() => {
  console.log('closing carrusel');
  displayDiv.id = ''
})

closeButtonMobile.addEventListener('click',() => {
  console.log('closing carrusel');
  displayDiv.id = ''
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
  displayDiv.id = 'display-block'
}

const persons = 
[
    {
      name: 'Fernando Fuentes',
      subtitle: 'Team Builder, Solutions Designer',
      profileimg: '../styles/equipo/fernando/profile_image.jpg',
      logo1: '../styles/equipo/fernando/pennstate.png',
      logo2: '../styles/equipo/fernando/sunpower.png',
      logo3: '../styles/equipo/fernando/hypernet.png',
      logo4: '../styles/equipo/fernando/ucsandiego.png',
      linkdin: 'https://www.linkedin.com/in/fernandofuen7es/',
      descripcion: '¡Hola! Soy Fer, Fernando, Fuentes, Güero…como prefieras. Desde chico, me apasiona el emprendimiento y las energías renovables. Desde chico, sueño con cambiar el mundo y dejar una huella de buen tamaño que el pasar de los años no borre. Desde chico, mi papá me educó con honestidad y cariño que los problemas por consumo de alcohol y otras adicciones eran hereditarios en su lado de la familia, y me puso el ejemplo ayudando a sus seres queridos a navegar estos problemas. En 2009 empecé a leer del tema extracurricularmente, y se me hizo tan intelectualmente estimulante como el emprendimiento y las energías renovables.<br><br> En 2011, comienzo a ayudar a un ser muy querido con su problema de consumo. Después de altibajos (así son estos trastornos), en 2018 la cosa se pone seria. Esto coincide con 2 años de experiencia profesional en una startup en Silicon Valley, California, y me permite ver el problema en la familia con ojos de emprendedor. Después de concluir que hay muchísimas áreas de oportunidad en la industria contra las adicciones en México, y una gran necesidad de inyectar talento, energía e ideas disruptivas, nace Avioneta. Como toda startup, en Avioneta nos toca hacer de todo, pero mi enfoque y pasión está principalmente en: (i) formar un equipo interdisciplinario de puro crack; (ii) diseñar servicios multifacéticos basados en ciencias empíricas para tratar problemas de consumo; y (iii) liderar la prevención de estos problemas al educar, concientizar y desestigmatizar a nivel sociedad y a nivel núcleo familiar.<br><br> Cuando me bajo de la Avioneta, me gusta estar presente, desconectado y convivir con seres queridos, pues tenemos los días contados; correr en la naturaleza –trail running–, correr en calle, nadar en aguas abiertas, escribir, leer, escuchar buena música y explorar mis comunidades. ¡Nos vemos pronto, entre nubes!'
  },
  {
    name: 'Dr. Luis Fernando Díaz',
    profileimg: '../styles/equipo/drluis/profile_image.png',
    subtitle: 'Asesor Médico, Dir. de Salud',
    logo1: '../styles/equipo/drluis/unam.png',
    logo2: '../styles/equipo/drluis/centro_juvenil.png',
    logo3: '../styles/equipo/drluis/la_salle.png',
    logo4: '../styles/equipo/drluis/SEPD.png',
    linkdin: 'https://www.luisdiazpsiquiatra.com/',
    descripcion: 'Hola, soy Luis. Creo que a todos nos gustan las historias, contarlas y/o escucharlas. Desde siempre recuerdo historias de mi vida, y muchas historias que me han contado. Siempre me ha gustado mucho platicar, y más aun, escuchar. Ese es el principal motivo por el cual soy psiquiatra. Me apasiona aprender de la vida de las personas, aun cuando el motivo por el cual las conozco no es muy agradable. Al final, conozco lo más profundo de sus preocupaciones, miedos y pasiones.<br><br> El tema de adicciones lo exploré desde la residencia, y he visto que hay mucha área de oportunidad en profesionalizar su tratamiento y utilizar la tecnología. Hay muchos retos por resolver, pero si algo he aprendido es que en el camino te encuentras con las personas adecuadas para resolver estos problemas complejos. México necesita un cambio total en cómo percibimos el consumo de sustancias, como individuos y como sociedad, y la forma como los expertos y no expertos, familiares y seres queridos, abordamos el tema. Empecemos con entender y empatizar con el otro. Quizá después, lo podremos ayudar.<br><br> En mi tiempo libre hago ejercicio, leo de muchos temas, escucho música, Mindfulness y pasar tiempo con la familia. Mucho de lo que hago es relajante, para poder equilibrar el estrés de la vida, los casos difíciles, el aislamiento, y el no poder convivir con muchas personas, a la vieja usanza.'
  },
  {
      name: 'José Manuel Arredondo',
      profileimg: '../styles/equipo/josemanuel/profile_image.png',
      subtitle: 'Operaciones y Finanzas, Comercial',
      logo1: '../styles/equipo/josemanuel/finvenergy.png',
      logo2: '../styles/equipo/josemanuel/universidad_panamericana.png',
      logo3: '../styles/equipo/josemanuel/trep_camp.png',
      logo4: '../styles/equipo/josemanuel/zagartha_ma.svg',
      linkdin: 'https://www.linkedin.com/in/jos%C3%A9-manuel-arredondo-arcos-70447b32/',
      descripcion: 'Mi título de Ingeniero Industrial me ha permitido experimentar en muchos lados durante mi carrera profesional. Empecé en Recursos Humanos porque estoy convencido de que el capital más valioso en las empresas son las personas. Después, brinqué a Finanzas porque quería entender la entraña de los negocios desde la perspectiva numérica. Más tarde, estuve en Operaciones donde aprendí algo de Administración, Finanzas, Ventas, Derecho y Project Management en las empresas. Finalmente, decidí aplicar todo ese aprendizaje en algunos emprendimientos en los que trabajé durante 4 años.<br><br> Mi experiencia me ha dado la oportunidad de observar a las empresas desde distintas perspectivas y aprender de primera mano cómo es que operan y, lo más importante, cómo CREAN VALOR. Me encantaría que, cuando pase a mejor vida, las personas que me conocieron se acordaran de mí como alguien que trabajó para dejar su granito de arena en el país. Formo parte de Avioneta por las ganas de contribuir en un proyecto social que además de generar valor, impacte de manera positiva la vida de las personas y familias que han sufrido un TxCA (trastorno por consumo de alcohol). Acompaño al gran equipo porque creo en las razones de concepción de Avioneta y la visión del proyecto a largo plazo para generar un cambio positivo en México.<br><br> Cuando aterrizo me gusta experimentar en la cocina o en la parrilla, para después sentarme a compartir en la mesa con amigos o familia. Disfruto mucho de una buena novela histórica o una biografía de algún personaje interesante.'
  },
  {
    name: 'Dess Gaitán',
    profileimg: '../styles/equipo/dess/profile_image.png',
    subtitle: 'Legal y Regulatorio, Experta en Emprendimientos Sociales',
    logo1: '../styles/equipo/dess/itesm.png',
    logo2: '../styles/equipo/dess/cussi.svg',
    logo3: '../styles/equipo/dess/anahuac.png',
    logo4: '../styles/equipo/dess/fucidim.png',
    linkdin: 'https://www.linkedin.com/in/desiree-gaitan-93ab898b/?originalSubdomain=mx',
    descripcion: 'Soy Abogada y me apasionan los emprendimientos sociales. Estudié en el Instituto Tecnológico y de Estudios Superiores Monterrey, y ahí conocí los emprendimientos sociales. Desde entonces me hice fan del tema. Me inscribí a todos los grupos estudiantiles y ONG´s que pude para aprender más y aportar.<br><br> Tengo dos maestrías, una en la Universidad Anáhuac del Sur en Derecho de las Empresas. Quería aprender más de cómo siendo abogada podría apoyar a pequeños negocios y emprendedores. La otra en Acción Política por la Universidad Francisco de Vitoria en Madrid, España Esta la hice porque siempre quise estudiar en el extranjero y quería que mis participaciones en búsqueda de mejor incidencia ciudadana fueran de mejor calidad.<br><br> Amo estudiar, así que siempre estoy tomando cursos; por eso he cursado distintos diplomados y programas especializados en diferentes temas como: Emprendimiento, Innovación Social y Políticas Públicas tanto en México, como en el extranjero.<br><br> Tengo la oportunidad de formar parte del equipo Avioneta y desde mi perspectiva legal sumar a que este gran proyecto siga caminando y genere el cambio social que se necesita en el tema de adicciones. Adoro las discusiones inteligentes, amo viajar y comer cosas nuevas, y es que aunque no lo hago mucho, me relaja, me conecta conmigo misma y me da mucha paz. Me apasiona dar clases, cursos etc creo que enseñar, es transformar vidas.<br><br> Actualmente soy socia fundadora de Legalean, despacho legal enfocado en formación y asesoría jurídica y legal en emprendimiento, integridad y responsabilidad social corporativa, startups & scaleups.'
  },
  {
    name: 'Daniela Becerra',
    profileimg: '../styles/equipo/dany/profile_image.png',
    subtitle: 'Marketing & Comms, Psicología',
    logo1: '../styles/equipo/dany/iapde.png',
    logo2: '../styles/equipo/dany/palermo.png',
    logo3: '../styles/equipo/dany/madison.png',
    logo4: '../styles/equipo/dany/puntoazul.png',
    linkdin: 'https://www.linkedin.com/in/daniela-pbc/',
    descripcion: 'Hola, soy Dany y me apasiona estudiar y comprender el comportamiento humano, razón por la cual disfruto de viajar y conocer gente nueva, y por la cual decidí estudiar Psicología Clínica. Siempre he considerado que podemos aprender haciendo y sobre todo de aquellos quienes nos rodean. Mi carrera como psicóloga la realicé en Buenos Aires, Argentina, donde tuve la oportunidad de expandir y enriquecer mi conocimiento sobre otras culturas, tanto en lo personal como en lo profesional.<br><br> Hoy en día soy candidata a un título de MBA en el Instituto Panamericano de Alta Dirección, donde he logrado fusionar mis dos pasiones: el factor humano y los negocios. A lo largo de mi carrera profesional he comprendido que el lenguaje es clave en la comunicación con el otro, por lo que hoy en día me enfoco en poder mejorar e innovar en estrategias de comunicación, donde el foco esté en el cliente y a su vez poder generar valor para la organización considerando s u misión y visión, y poder así transmitir la promesa de marca.<br><br> Me sumé al equipo de AVIONETA con la finalidad de poder agregar valor y darle la importancia y un giro a mis conocimientos de manera significativa, ayudando a aquellos que necesitan un empujoncito más allá de la propia voluntad. Soy orgullosamente mexicana y considero que la misión y visión de AVIONETA ayudarán en el camino de construir un México progresista con soluciones innovadoras y trascendentes.'
  },
  {
    name: 'Threehouse',
    subtitle: 'Diseño Gráfico',
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

/* placeholderTreehouse.addEventListener('click', (event) => {
  event.preventDefault()
  console.log('Treehouse in the house');
  count = 5
  carruselHandler(count)
}) */






