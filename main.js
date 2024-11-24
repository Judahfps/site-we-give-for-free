


const form = document.getElementById('form');

function sendEmail() {

  let parms = {
    nome: document.getElementById("name").value,
    assunto: document.getElementById("assunto").value,
    email: document.getElementById("email").value,
    mensagem: document.getElementById("message").value,
  }
  
  emailjs.send("service_c8tcnl9", "template_nagnt4g", parms)
    .then(alert("Email enviado com sucesso!"));
    form.reset();

}



const menuMobile = document.getElementById('menu')
const menuAbrir = document.getElementById('btn-open');
const menuFechar = document.getElementById('btn-close')


function openMenu(){
  menuMobile.classList.remove('hidden')
  menuMobile.classList.add('flex')

}


function closeMenu(){
menuMobile.classList.remove('flex')
menuMobile.classList.add('hidden')

}