
document.querySelector(".menu-btn").addEventListener("click", () => {
document.querySelector(".nav-menu").classList.toggle("show");
});

const btnEnviar = document.getElementById('btn-enviar');

const validate = (e) => {
  e.preventDefault();
  const nombreDeUsuario = document.getElementById('usuario');
  const direccionEmail = document.getElementById('email');
  if (usuario.value === "") {
    alert("Por favor, escribe tu nombre de usuario.");
    usuario.focus();
    return false;
  }
    
  if (email.value === "") {
    alert("Por favor, escribe tu correo electrónico");
    email.focus();
    return false;
  }

  if (!emailValido(email.value)) {
    alert("Por favor, escribe un correo electrónico válido");
    emailAddress.focus();
    return false;
  }
  
  return true; //Se pueden enviar los datos del formulario al servidor
}

const emailValido = email => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

btnEnviar.addEventListener('click', validate);

