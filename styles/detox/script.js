
// Get Elements
const hamburgerButton = document.getElementById('container-hamburger')
const navbar = document.getElementsByClassName('nav-mobile')[0]
const dropDownMenu = document.getElementsByClassName('menu-mobile-dropdown')[0]
const formButton = document.getElementById('buton-enviar')

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
    Subject: `Avioneta Contacto: ${name} gracias por ponerte en contacto`,
    Body: `Estimado: ${name}:<br/>
     Muchas gracias por contactarnos. <br/>
     Uno de nuestros agentes se pondra en contacto contigo enseguida. <br/>Gracias por dejarnos tus datos, por favor verifica si son correctos.<br/> 
     Sino nos puedes escribir al siguiente numéro. 8124486070 <br/>
     <br/>
    
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

function sendEmailtoMe(name, last_name, phone, user_email, razon_visita = 'ninguna') {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "ffuentesdelaparra@gmail.com",
    Password: "mschbavemdoqhfng",
    // To: (`${user_email}`, 'jallenderussek@gmail.com', 'ffuentesdelaparra@gmail.com'),
    To: `ffuentesdelaparra@gmail.com`,
    From: "contacto@avioneta.org",
    Subject: `Avioneta Contacto: ${name} gracias por ponerte en contacto`,
    Body: `Estimado: ${name}:<br/>
     Muchas gracias por contactarnos. <br/>
     Uno de nuestros agentes se pondra en contacto contigo enseguida. <br/>Gracias por dejarnos tus datos, por favor verifica si son correctos.<br/> 
     Sino nos puedes escribir al siguiente numéro. 8124486070 <br/>
     <br/>
    
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



