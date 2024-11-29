

// Inicialize o EmailJS
(function() {
  emailjs.init("Drs4S5mzE0Hk4MQK9"); // Substitua pela sua Public Key
})();

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contatoForm");
  const menuMobile = document.getElementById('menu');
  const menuAbrir = document.getElementById('btn-open');
  const menuFechar = document.getElementById('btn-close');

  // Evento para envio do formulário
  form.addEventListener("submit", async function enviarEmail(event) {
    event.preventDefault();

    const params = {
      nome: document.getElementById("nome").value,
      assunto: document.getElementById("assunto").value,
      email: document.getElementById("email").value,
      mensagem: document.getElementById("mensagem").value,
    };

    try {
      const response = await emailjs.send("service_c8tcnl9", "template_nagnt4g", params);
      alert("E-mail enviado com sucesso!");
      form.reset(); // Limpa o formulário
    } catch (error) {
      alert("Erro ao enviar o e-mail: " + error.text);
    }
  });

  // Evento para abrir o menu
  menuAbrir.addEventListener("click", function openMenu() {
    console.log("Abrindo menu...");
    menuMobile.classList.remove('hidden');
    menuMobile.classList.add('flex');
  });

  // Evento para fechar o menu
  menuFechar.addEventListener("click", function closeMenu() {
    console.log("Fechando menu...");
    menuMobile.classList.remove('flex');
    menuMobile.classList.add('hidden');
  });
});

