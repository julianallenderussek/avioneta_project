
// Get Elements
const hamburgerButton = document.getElementById('container-hamburger')
const navbar = document.getElementsByClassName('nav-mobile')[0]
const dropDownMenu = document.getElementsByClassName('menu-mobile-dropdown')[0]
const formButton = document.getElementById('buton-enviar')
const logoAvioneta = document.getElementById('logo-azul')

const menuBar1 = document.getElementsByClassName('bar1')[0]
const menuBar2 = document.getElementsByClassName('bar2')[0]
const menuBar3 = document.getElementsByClassName('bar3')[0]

//Event Lisenteners
formButton.addEventListener('click', (event) => {
  event.preventDefault()
  validation()
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



//Send Email function
function sendEmail(name, last_name, phone, user_email, razon_visita = 'ninguna') {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "ffuentesdelaparra@gmail.com",
    Password: "mschbavemdoqhfng",
    // To: (`${user_email}`, 'jallenderussek@gmail.com', 'ffuentesdelaparra@gmail.com'),
    To: `${user_email}`,
    From: "contacto@avioneta.org",
    Subject: `Estimado ${name} gracias por tu interés en AVIONETA`,
    Body: `Estimado: ${name}:<br/>
    Muchas gracias por ponerte en contacto con nosotros. <br/>
    Un miembro del equipo te contactará estos días para una plática inicial por el medio que te sea mas conveniente.

    De cualquier forma, te dejamos nuestro Whatsapp: +1 (415) 326-4326 <br/>
    Con cariño, <br/>
    El equipo AVIONETA`,
  }).then(
    message => alert('Gracias por contactarnos, un correo fue enviado a tu mail')
  );
  console.log(`${user_email}`, 'jallenderussek@gmail.com', 'ffuentesdelaparra@gmail.com')
}

function sendEmailtoMe(name, last_name, phone, user_email, razon_visita = 'ninguna') {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "ffuentesdelaparra@gmail.com",
    Password: "mschbavemdoqhfng",
    // To: (`${user_email}`, 'jallenderussek@gmail.com', 'ffuentesdelaparra@gmail.com'),
    To: `ffuentesdelaparra@gmail.com`,
    From: "contacto@avioneta.org",
    Subject: `${name} gracias por tu interés en AVIONETA`,
    Body: `Estimado: ${name}:<br/>
    Muchas gracias por ponerte en contacto con nosotros. <br/>
    Un miembro del equipo te contactará estos días para una plática inicial por el medio que te sea mas conveniente.

    De cualquier forma, te dejamos nuestro Whatsapp: +1 (415) 326-4326 <br/>
    Con cariño, <br/>
    El equipo AVIONETA
    
    DATOS DEL CLIENTE
    Nombre: ${name}
    <br/>
    Apellido: ${last_name}
    <br/>
    Email: ${user_email}
    <br/>
    Razón Vista: ${razon_visita}
    <br/>
    Télefono: ${phone}
    <br/>`,
  }).then(
    message => alert('Gracias por contactarnos, un correo fue enviado a tu mail')
  );
  console.log(`${user_email}`, 'jallenderussek@gmail.com', 'ffuentesdelaparra@gmail.com')
}

// const test = (event) => {console.log('this button works')}


//Form Validation
function validation() {
  console.log('validating')
  var name = document.getElementById('name').value
  var last_name = document.getElementById('last_name').value
  var user_email = document.getElementById('user_email').value
  var phone = document.getElementById('phone').value
  //var razon_visita = document.getElementById('razon_visita').value
  var error_message = document.getElementById('error_message');
  var text;

  // if (name.length < 1) {
  //   text = "Favor de ingresar un nombre"
  //   error_message.innerHTML = text
  //   return false
  // }

  // if (last_name.length < 1) {
  //   text = "Favor de ingresar un apellido"
  //   error_message.innerHTML = text
  //   return false
  // }
  
  if (isNaN(phone)) {
    text = "Favor de ingresar un télefono valido"
    error_message.innerHTML = text
    return false
  }

  if (user_email.length < 1) {
    text = "Favor de ingresar un email"
    error_message.innerHTML = text
    return false
  }
    console.log(user_email)
    
    sendEmail(name, last_name, phone, user_email)
    sendEmailtoMe(name, last_name, phone, user_email)
    alert('Gracias por contactarnos. Un correo electronico fue enviado a tu mail')
    return true
}



