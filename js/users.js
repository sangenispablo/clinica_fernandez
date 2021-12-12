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
    if (user_exist.length === 0) {
      const user_new = await postUser(user);
      return user_new;
    } else {
      return undefined;
    }
  } catch (error) {
    throw error;
  }
};
