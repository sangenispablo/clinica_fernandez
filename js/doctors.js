import { getDoctors } from "./providers.js";

getDoctors().then((data) => {
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
})

