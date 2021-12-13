import { register } from "./users.js";

// Capturo el formulario
const form_login = document.querySelector("#needs-validation");

form_login.addEventListener("submit", async (event) => {
  // obtengo los valores de los dos input
  const username = document.querySelector("#username").value;
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  const password2 = document.querySelector("#password2").value;

  // agrego la clase de BS was-validated para que muestre si hay problemas
  form_login.classList.add("was-validated");
  event.preventDefault();
  event.stopPropagation();

  if (form_login.checkValidity()) {
    try {
      if (password === password2) {
        const usuario = {
          username,
          email,
          password,
        };
        const usuario_nuevo = await register(usuario);
        if (usuario_nuevo) {
          // ojo con la funcion alert !!!
          window.location.href = "login.html";
        } else {
          // cambiar la porqueria de alert
          alert("Ese correo ya esta registrado...");
        }
      } else {
        //password2.classList.add("is-invalid");
        // cambiar la porqueria de alert
        alert("Las contraseñas no concuerdas...");
      }
    } catch (error) {
      alert(error);
    }
  }
});
