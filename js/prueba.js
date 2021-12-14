import { getEspecialidades } from "./providers.js";

getEspecialidades().then((data) => {
    console.log(data);
     data.forEach((especialidad) => {
       const card = document.createElement("div");
       card.innerHTML = `
            <div id="cardEsp" class="card-doctores m-3 border border-5 mb-3" style="width: 18rem;">
                <img src="${especialidad.image}" class="card-img-top" alt="foto-doctor">
                <h5 class="m-3">${especialidad.esp}</h5>
                <div class="card-body">
                <p class="card-text">${especialidad.name}</p>
                </div>
            </div>
            `;
       document.getElementById("container-especialidades").appendChild(card);
     });
})

