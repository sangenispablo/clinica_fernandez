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

<<<<<<< HEAD
export const getServices = async () => {
  try {
    const resource = jsUrl + "services";
=======
export const getDoctors = async () => {
  try {
    const resource = jsUrl + "doctors";
>>>>>>> cba634bbdedeacec54a26d72c3b02e855897a796
    const resp = await fetch(resource);
    const data = await resp.json();
    return data;
  } catch (error) {
    throw error;
  }
<<<<<<< HEAD
  try{
    const user_logged = logged();
  }
};
=======
};
>>>>>>> cba634bbdedeacec54a26d72c3b02e855897a796
