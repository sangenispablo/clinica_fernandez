import { login } from "./users.js";

// Capturo el formulario
const form_login = document.querySelector("#needs-validation");

// Agrego el evento submit al formulario, le pongo async por que voy a ejecutar funciones asincronicas
form_login.addEventListener("submit", async (event) => {
  // cuando se presionó el boton submit el usuario quiere procesar el formulario
  // obtengo los valores de los dos input
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  // agrego la clase de BS was-validated para que muestre si hay problemas
  form_login.classList.add("was-validated");
  event.preventDefault();
  event.stopPropagation();

  // Pregunto por el estado de la validacion del formulario
  if (form_login.checkValidity()) {
    try {
      const usuario = await login(email, password);      
      window.location.href = "index.html";
    } catch (error) {
      alert(error);
    }
  }
});
