import { getDoctorsFilter } from "./providers.js";

// lo primero que tengo que hacer es obtener todo lo que viene desde la url
const valores = window.location.search;
// saco solamente los parametros
const urlParams = new URLSearchParams(valores);
// pregunto si en esos parametros esta el "esp"
let esp;
if (urlParams.has("esp")) {
  esp = urlParams.get('esp');  
}

getDoctorsFilter(esp).then((data) => {
  data.forEach((doctors) => {
    const card = document.createElement("div");
    card.innerHTML = `
            <div id="cardEsp" class="card-doctores m-3 border border-5 mb-3" style="width: 18rem; background: white">
                <img src="${doctors.image}" class="card-img-top" alt="foto-doctor">
                <h5 class="m-3">${doctors.esp}</h5>
                <div class="card-body">
                <p class="card-text">${doctors.name}</p>
                </div>
            </div>
            `;
    document.getElementById("container-Doctor").appendChild(card);
  });
});
