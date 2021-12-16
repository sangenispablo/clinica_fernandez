import { getEspecialidades } from "./providers.js";
import { logged, logout } from "./users.js";

// arriba importamos las funciones que necesitamos de users.js que a su vez esta usando providers.js

const user_logged = logged();

if (user_logged) {
  // poner o sacar la clase hide_nav-item
  document.querySelector("#dropdown_user").classList.remove("hide_nav-item");
  document.querySelector("#btn_login").classList.add("hide_nav-item");
  document.querySelector("#btn_register").classList.add("hide_nav-item");
  document.querySelector("#dropdown09").innerHTML = user_logged.username;
  const btn_logout = document.querySelector("#btn_logout");
  // al boton del logout le asocio la funcion logout para borrar el LS
  btn_logout.addEventListener("click", logout);
} else {
  document.querySelector("#dropdown_user").classList.add("hide_nav-item");
  document.querySelector("#btn_login").classList.remove("hide_nav-item");
  document.querySelector("#btn_logout").classList.remove("hide_nav-item");
}

// Aca vamos con todo el tema de la generacion dinamica de cards y demas

// Aca generamos dinamicamente las cards de servicios o especialidades
const serviciosCards = document.querySelector(".servicios--cards");
getEspecialidades().then((especialidades) => {
  especialidades.forEach((esp) => {
    const html = `<img class="img-fluid" src="${esp.image}" alt="" width="20%">
                  <p>${esp.name}</p>`;
    let cardDiv = document.createElement("div");
    if (user_logged) {
      cardDiv = document.createElement("button");
      cardDiv.addEventListener("click", () => {
        window.location.href = `../doctors.html?esp=${esp.name}`;
      });
    }
    cardDiv.classList.add("cardServ");
    cardDiv.innerHTML = html;
    serviciosCards.appendChild(cardDiv);
  });
});




/**
 * Cuando todo lo de arriba se hizo sacao el preload
 */
const preloader = document.querySelector("#preloader");
if (preloader) {
  window.addEventListener("load", () => {
    preloader.remove();
  });
}


function scrollServices() {
  window.scrollTo(0, 525);
}