
const dropdownButton = document.getElementById('drop-down');
const dropdownMenu = document.getElementById('drop-menu');

//dropdown mobile
const dropdownButton1 = document.getElementById('mobile-button');
const dropdownMenu1 = document.getElementById('mobile-drop');

//menu mobile
const menuMobile = document.getElementById('menu')
const menuAbrir = document.getElementById('btn-open');
const menuFechar = document.getElementById('btn-close')


dropdownButton.addEventListener('click', () => {
  // Toggle a classe 'hidden' para mostrar ou esconder o menu
  dropdownMenu.classList.toggle('hidden');
});

// Clique fora do dropdown para fechá-lo
window.addEventListener('click', (event) => {
  if (!dropdownButton.contains(event.target)) {
    dropdownMenu.classList.add('hidden');
  }
});

dropdownButton1.addEventListener('click', () => {
  dropdownMenu1.classList.toggle('hidden');
});

// Fechar o dropdown quando clicar fora dele
window.addEventListener('click', (e) => {
  if (!dropdownButton1.contains(e.target)) {
      dropdownMenu1.classList.add('hidden');
  }
});



function openMenu(){
  menuMobile.classList.remove('hidden')
  menuMobile.classList.add('flex')

}


function closeMenu(){
menuMobile.classList.remove('flex')
menuMobile.classList.add('hidden')

}


//esse é meu form teria melhoria para ele, quero enviar para meu email, fça as alterações necessárias

// function openMenu(){
//   menuMobile.classList.remove('hidden')
//   menuMobile.classList.add('flex')
// }

// function closeMenu(){
//   menuMobile.classList.remove('flex')
//   menuMobile.classList.add('hidden')
// }

const emailRecipient = "sebastian_49@hotmail.com";
const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  let nome = document.getElementById('nome').value;
  let email = document.getElementById('email').value;
  let mensagem = document.getElementById('mensagem').value;
  let formacao = document.getElementById('facu').value;
  let contEsnino = document.getElementById('ensino').value;
  let endereco = document.getElementById('endereco').value;
  let telefone = document.getElementById('num-tel').value;
  let city = document.getElementById('city').value;
  let estado = document.getElementById('estado').value;
  let ceep = document.getElementById('ceep').value;

  let data = {
    nome,
    email,
    mensagem,
    formacao,
    contEsnino,
    endereco,
    telefone,
    city,
    estado,
    ceep
  };

  let convertData = JSON.stringify(data);
  localStorage.setItem('lead', convertData);

  let content = document.getElementById('content');
  let carregando = `<p>Carregando...</p>`;
  let pronto = `<p>Pronto! Entraremos em contato em breve.</p>`;
  content.innerHTML = carregando;

  emailjs.send('service_32j995a', 'template_v993iim', {
    to_email: emailRecipient,
    from_name: nome,
    message: mensagem,
    formacao: formacao,
    contEsnino: contEsnino,
    endereco: endereco,
    telefone: telefone,
    city: city,
    estado: estado,
    ceep: ceep
  }, '55YUpuEACEctodqfO7_74') // Substitua YOUR_PRIVATE_KEY pela sua chave privada
  .then(function(response) {
    console.log('SUCCESS!', response.status, response.text);
    content.innerHTML = pronto;
  }, function(error) {
    console.error('FAILED...', error);
    content.innerHTML = `<p>Ocorreu um erro. Tente novamente mais tarde.</p>`;
  });
});