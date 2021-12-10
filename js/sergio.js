
//pagina medico modal

const openEls = document.querySelectorAll("[data-open]");
const isVisible = "is-visible";
const closeEls = document.querySelectorAll("[data-close]");

for(const el of openEls) {
  el.addEventListener("click", function() {
    const modalId = this.dataset.open;
    document.getElementById(modalId).classList.add(isVisible);
  });
}

for (const el of closeEls) {
	el.addEventListener("click", function() {
		document.querySelector(".modal.is-visible").classList.remove(isVisible);
	});
}






//formulario

document.addEventListener("DOMContentLoaded", function() {
	document.getElementById("formulario").addEventListener('submit', validarFormulario); 
  });

function valida_envia(){
	
	//valido el nombre
	if (document.fvalida.nombre.value.length==0){
		   alert("Tiene que escribir su Nombre y Apellido")
		   document.fvalida.nombre.focus()
		   return 0;
	}
 
	//valido la edad. tiene que ser entero mayor que 18
	if (document.fvalida.edad.value<18){
		   alert("Debe ser mayor de 18 años.")
		   document.fvalida.edad.focus()
		   return 0;
	}
 
	//valido el interés
	if (document.fvalida.interes.selectedIndex==0){
		   alert("Debe seleccionar un motivo de su contacto.")
		   document.fvalida.interes.focus()
		   return 0;
	}
 
	//el formulario se envia
	alert("Muchas gracias por enviar el formulario");
	document.fvalida.submit();
}



function genera_tabla() {
	// Obtener la referencia del elemento body
	var table = document.getElementsById(body);
  
}
  




let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');

table.appendChild(thead);
table.appendChild(tbody);

// Adding the entire table to the body tag
document.getElementById('body').appendChild(table);

// Creating and adding data to first row of the table
let row_1 = document.createElement('tr');
let heading_1 = document.createElement('th');
heading_1.innerHTML = "Lunes";
let heading_2 = document.createElement('th');
heading_2.innerHTML = "Martes";
let heading_3 = document.createElement('th');
heading_3.innerHTML = "Miercoles";
let heading_4 = document.createElement('th');
heading_4.innerHTML = "jueves";
let heading_5 = document.createElement('th');
heading_5.innerHTML = "VIernes";

row_1.appendChild(heading_1);
row_1.appendChild(heading_2);
row_1.appendChild(heading_3);
row_1.appendChild(heading_4);
row_1.appendChild(heading_5);
thead.appendChild(row_1);


// Creating and adding data to second row of the table
let row_2 = document.createElement('tr');
let row_2_data_1 = document.createElement('td');
row_2_data_1.innerHTML = "3pm";
let row_2_data_2 = document.createElement('td');
row_2_data_2.innerHTML = "3pm";
let row_2_data_3 = document.createElement('td');
row_2_data_3.innerHTML = "3pm";
let row_2_data_4 = document.createElement('td');
row_2_data_4.innerHTML = "3pm";
let row_2_data_5 = document.createElement('td');
row_2_data_5.innerHTML = "3pm";

row_2.appendChild(row_2_data_1);
row_2.appendChild(row_2_data_2);
row_2.appendChild(row_2_data_3);
row_2.appendChild(row_2_data_4);
row_2.appendChild(row_2_data_5);
tbody.appendChild(row_2);

let row_3 = document.createElement('tr');
let row_3_data_1 = document.createElement('td');
row_3_data_1.innerHTML = "4pm";
let row_3_data_2 = document.createElement('td');
row_3_data_2.innerHTML = "4pm";
let row_3_data_3 = document.createElement('td');
row_3_data_3.innerHTML = "4pm";
let row_3_data_4 = document.createElement('td');
row_3_data_4.innerHTML = "4pm";
let row_3_data_5 = document.createElement('td');
row_3_data_5.innerHTML = "4pm";

row_3.appendChild(row_3_data_1);
row_3.appendChild(row_3_data_2);
row_3.appendChild(row_3_data_3);
row_3.appendChild(row_3_data_4);
row_3.appendChild(row_3_data_5);
tbody.appendChild(row_3);

let row_4 = document.createElement('tr');
let row_4_data_1 = document.createElement('td');
row_4_data_1.innerHTML = "5pm";
let row_4_data_2 = document.createElement('td');
row_4_data_2.innerHTML = "5pm";
let row_4_data_3 = document.createElement('td');
row_4_data_3.innerHTML = "5pm";
let row_4_data_4 = document.createElement('td');
row_4_data_4.innerHTML = "5pm";
let row_4_data_5 = document.createElement('td');
row_4_data_5.innerHTML = "5pm";

row_4.appendChild(row_4_data_1);
row_4.appendChild(row_4_data_2);
row_4.appendChild(row_4_data_3);
row_4.appendChild(row_4_data_4);
row_4.appendChild(row_4_data_5);
tbody.appendChild(row_4);

let row_5 = document.createElement('tr');
let row_5_data_1 = document.createElement('td');
row_5_data_1.innerHTML = "6pm";
let row_5_data_2 = document.createElement('td');
row_5_data_2.innerHTML = "6pm";
let row_5_data_3 = document.createElement('td');
row_5_data_3.innerHTML = "6pm";
let row_5_data_4 = document.createElement('td');
row_5_data_4.innerHTML = "6pm";
let row_5_data_5 = document.createElement('td');
row_5_data_5.innerHTML = "6pm";

row_5.appendChild(row_5_data_1);
row_5.appendChild(row_5_data_2);
row_5.appendChild(row_5_data_3);
row_5.appendChild(row_5_data_4);
row_5.appendChild(row_5_data_5);
tbody.appendChild(row_5);

let row_6 = document.createElement('tr');
let row_6_data_1 = document.createElement('td');
row_6_data_1.innerHTML = "7pm";
let row_6_data_2 = document.createElement('td');
row_6_data_2.innerHTML = "7pm";
let row_6_data_3 = document.createElement('td');
row_6_data_3.innerHTML = "7pm";
let row_6_data_4 = document.createElement('td');
row_6_data_4.innerHTML = "7pm";
let row_6_data_5 = document.createElement('td');
row_6_data_5.innerHTML = "7pm";


row_6.appendChild(row_6_data_1);
row_6.appendChild(row_6_data_2);
row_6.appendChild(row_6_data_3);
row_6.appendChild(row_6_data_4);
row_6.appendChild(row_6_data_5);
tbody.appendChild(row_6);



{
let container = document.getElementById("container");

	let row_1 = document.createElement("tr");
  row_1.className ="card";
  row_1.id = "card" ;
  row_1.innerHTML = "Neurologa Dra Fernandez Fabiana";
  container.appendChild(row_1);

  let row_2 = document.createElement("tr");
  row_2.className ="card";
  row_2.id = "card" ;
  row_2.innerHTML = "Neurologa Dra Liliana Lopez";
  container.appendChild(row_2);

  let row_3 = document.createElement("tr");
  row_3.className ="card";
  row_3.id = "card" ;
  row_3.innerHTML = "Neurologa Dr Gonzales Gabriel";
  container.appendChild(row_3);

  let row_4 = document.createElement("tr");
  row_4.className ="card";
  row_4.id = "card" ;
  row_4.innerHTML = "Neurologa Dr Rodriguez Roberto ";
  container.appendChild(row_4);

  let row_5 = document.createElement("tr");
  row_5.className ="card";
  row_5.id = "card" ;
  row_5.innerHTML = "Neurologa Dra Arias Analia";
  container.appendChild(row_5);

  let row_6 = document.createElement("tr");
  row_6.className ="card";
  row_6.id = "card" ;
  row_6.innerHTML = "Neurologa Dr Martinez Mariano";
  container.appendChild(row_6);

  
}

