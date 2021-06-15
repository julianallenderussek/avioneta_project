
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

const hamburgerButton = document.getElementsByClassName('container-hamburger')[0]
const navbar = document.getElementsByClassName('nav-mobile')[0]
const dropDownMenu = document.getElementsByClassName('menu-mobile-dropdown')[0]
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

hamburgerButton.addEventListener

//Send Email function
function sendEmail(name, last_name, phone, user_email, razon_visita = 'ninguna') {
  console.log(user_email);
  Email.send({
    Host: "smtp.gmail.com",
    Username: "avionetacontacto@gmail.com",
    Password: "ddpdmjspcqovghui",
    // To: (`${user_email}`, 'jallenderussek@gmail.com', 'ffuentesdelaparra@gmail.com'),
    To: `${user_email}`,
    From: "contacto@avioneta.org",
    Subject: `${name} gracias por tu interés en AVIONETA`,
    Body: `Estimado ${name}<br/>
    Muchas gracias por ponerte en contacto con nosotros. <br/>
    <br/>
    Un miembro del equipo te contactará estos días para una plática inicial por el medio que te sea mas conveniente. <br/>
    <br/>
    De cualquier forma, te dejamos nuestro Whatsapp: +1 (415) 326-4326 <br/>
    <br/>
    Con cariño, <br/>
    El equipo AVIONETA`,
  }).then(
  );
}

function sendEmailtoMe(name, last_name, phone, user_email, razon_visita = 'ninguna') {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "avionetacontacto@gmail.com",
    Password: "ddpdmjspcqovghui",
    // To: (`${user_email}`, 'jallenderussek@gmail.com', 'ffuentesdelaparra@gmail.com'),
    To: `ffuentesdelaparra@gmail.com`,
    From: "contacto@avioneta.org",
    Subject: `${name} gracias por tu interés en AVIONETA`,
    Body: `Estimado ${name}<br/>
    Muchas gracias por ponerte en contacto con nosotros. <br/>
    Un miembro del equipo te contactará estos días para una plática inicial por el medio que te sea mas conveniente.

    De cualquier forma, te dejamos nuestro Whatsapp: +1 (415) 326-4326 <br/>
    Con cariño, <br/>
    El equipo AVIONETA
    <br/>
    <br/>
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
  );
}

// const test = (event) => {console.log('this button works')}


//Form Validation
function validation(event) {
  event.preventDefault();
  console.log('validating')
  var name = document.getElementById('name').value
  var last_name = document.getElementById('last_name').value
  var user_email = document.getElementById('user_email').value
  var phone = document.getElementById('phone').value
  var razon_visita = document.getElementById('razon_visita').value
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
  
  if (isNaN(phone) || phone.length < 1 ) {
    text = "Favor de ingresar un téléfono válido"
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
    sendEmailtoMe(name, last_name, phone, user_email, razon_visita)
    alert('Gracias por contactarnos. Un correo electronico fue enviado a tu mail')
    return true
}



//Toggle Info Menu
toggleCount = 0

innerHTML1 = '<h3 class="title-paquete">Paquete 1</h3> <ul class="list-paquete"> <li>Este es el paquete 1</li><li>ESTE ES EL PAQUETE 1</li><li>ESTE ES EL PAQUETE Uno</li></ul>'
innerHTML2 = '<h3 class="title-paquete">Paquete 2</h3> <ul class="list-paquete"> <li>Este es el paquete 2</li><li>ESTE ES EL PAQUETE 2</li><li>ESTE ES EL PAQUETE DOS</li></ul>'
innerHTML3 = '<h3 class="title-paquete">Paquete tres</h3> <ul class="list-paquete"> <li>Este es el paquete 4</li><li>ESTE ES EL PAQUETE 3</li><li>ESTE ES EL PAQUETE tres</li></ul>'
innerHTML4 = '<h3 class="title-paquete">Paquete 4</h3> <ul class="list-paquete"> <li>Este es el paquete 4</li><li>ESTE ES EL PAQUETE 2</li><li>ESTE ES EL PAQUETE CUATRO</li></ul>'


displayContainer = document.getElementsByClassName("display_container")
button1 = document.getElementsByClassName('btn1')
button2 = document.getElementsByClassName('btn2')
button3 = document.getElementsByClassName('btn3')
button4 = document.getElementsByClassName('btn4')


// Era la funcionalidad de la flecha.
// function dropdown1() {
//   if (toggleCount == 0) {
//     displayContainer[0].innerHTML = innerHTML1
//     displayContainer[0].style.display = 'flex'
//     button1[0].src = '/assets/Avio_WEB_Asset-18.png'
//     toggleCount = 1;
//   } else if (toggleCount == 1) {
//     displayContainer[0].style.display = 'none'
//     toggleCount = 0;
//     button1[0].src = '/assets/155x50.png'
//     button2[0].src = '/assets/155x50.png'
//     button3[0].src = '/assets/155x50.png'
//     button4[0].src = '/assets/155x50.png'
//   }

// }

// function dropdown2() {
//   if (toggleCount == 0) {
//     displayContainer[0].innerHTML = innerHTML2
//     displayContainer[0].style.display = 'flex'
//     button2[0].src = '/assets/Avio_WEB_Asset-18.png'
//     toggleCount = 1;
//   } else if (toggleCount == 1) {
//     displayContainer[0].style.display = 'none'
//     toggleCount = 0;
//     button1[0].src = '/assets/155x50.png'
//     button2[0].src = '/assets/155x50.png'
//     button3[0].src = '/assets/155x50.png'
//     button4[0].src = '/assets/155x50.png'
//   }
// }

// function dropdown3() {
//   if (toggleCount == 0) {
//     displayContainer[0].innerHTML = innerHTML3
//     displayContainer[0].style.display = 'flex'
//     button3[0].src = '/assets/Avio_WEB_Asset-18.png'
//     toggleCount = 1;
//   } else if (toggleCount == 1) {
//     displayContainer[0].style.display = 'none'
//     toggleCount = 0;
//     button1[0].src = '/assets/155x50.png'
//     button2[0].src = '/assets/155x50.png'
//     button3[0].src = '/assets/155x50.png'
//     button4[0].src = '/assets/155x50.png'
//   }

// }
// function dropdown4() {
//   if (toggleCount == 0) {
//     displayContainer[0].innerHTML = innerHTML4
//     displayContainer[0].style.display = 'flex'
//     button4[0].src = '/assets/Avio_WEB_Asset-18.png'
//     toggleCount = 1;
//   } else if (toggleCount == 1) {
//     displayContainer[0].style.display = 'none'
//     toggleCount = 0;
//     button1[0].src = '/assets/155x50.png'
//     button2[0].src = '/assets/155x50.png'
//     button3[0].src = '/assets/155x50.png'
//     button4[0].src = '/assets/155x50.png'
//   }

// }
