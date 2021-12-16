const jsUrl = "http://localhost:3000/";

export const getUsers = async () => {
  try {
    const resource = jsUrl + "users";
    const resp = await fetch(resource);
    const data = await resp.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const getUserByEmail = async (email) => {
  try {
    const resource = jsUrl + "users?email=" + email;
    const resp = await fetch(resource);
    const data = await resp.json();
    return data[0];
  } catch (error) {
    throw error;
  }
};

export const getUserById = async (id) => {
  try {
    const resource = jsUrl + "users/" + id;
    const resp = await fetch(resource);
    const data = await resp.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const postUser = async (user) => {
  try {
    const resource = jsUrl + "users";
    const resp = await fetch(resource, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const data = await resp.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const getDoctors = async () => {
  try {
    const resource = jsUrl + "doctors";
    const resp = await fetch(resource);
    const data = await resp.json();
    return data;
  } catch (error) {
    throw error;
  }
};

// esta funcion lo que hace es recibir un parametro que uso como parametro a la url de la API
// en el caso de doctors algo asi: localhost:3000/doctors?esp=Cardiologia
// es la unica diferencia con getDoctors
export const getDoctorsFilter = async (filtro) => {
  try {
    const resource = jsUrl + `doctors?esp=${filtro}`;
    const resp = await fetch(resource);
    const data = await resp.json();
    return data;
  } catch (error) {
    throw error;
  }
};


export const getEspecialidades = async () => {
  try {
    const resource = jsUrl + "especialidades";
    const resp = await fetch(resource);
    const data = await resp.json();
    return data;
  } catch (error) {
    throw error;
  }
};