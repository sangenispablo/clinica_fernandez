import { getUserByEmail, postUser } from "./providers.js";

export const login = async (email, password) => {
  const user = await getUserByEmail(email);
  if (user) {
    if (user.password === password) {
      // debo guardar en el LS al usuario logeado
      const user_logged = {
        username: user.username,
        email: user.email,
        lastname: user.lastname,
        firstname: user.firstname,
      };
      window.localStorage.setItem("user_logged", JSON.stringify(user_logged));
      return user;
    } else {
      throw "Credenciales incorrectas";
    }
  } else {
    throw "Credenciales incorrectas";
  }
};

export const logout = () => {
  if (window.localStorage.getItem("user_logged")) {
    window.localStorage.removeItem("user_logged");
    location.reload(true);
  }
};

export const logged = () => {
  return JSON.parse(window.localStorage.getItem("user_logged"));
};

export const register = async (user) => {
  try {
    const user_exist = await getUserByEmail(user.email);
    if (!user_exist) {
      // antes de guardar el usuario chequear que todo este bien
      // {
      //  "username": "admin",
      //  "email": "admin@gmail.com",
      //  "password": "1234",
      //  "id": 1
      // }
      if (user.username != "") {
        if (user.password != "") {
          // luego de verificar si el username no es vacio junto a la clave
          // chequeo el email con un regEx
          console.log(validarEmail(user.email));
          if (validarEmail(user.email)) {
            const user_new = await postUser(user);
            return user_new;
          }
        }
      }
      throw "Error en los datos del usuario !!!";
    } else {
      return undefined;
    }
  } catch (error) {
    throw error;
  }
};

const validarEmail = (valor) => {
  if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/.test(valor)) {
    return true;
  } else {
    return false;
  }
};
