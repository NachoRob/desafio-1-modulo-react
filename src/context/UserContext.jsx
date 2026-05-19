import { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  // Inicializamos leyendo el localStorage por si el usuario refresca la página
  const [token, setToken] = useState(
    () => localStorage.getItem("token") || null,
  );
  const [email, setEmail] = useState(
    () => localStorage.getItem("email") || null,
  );
  const [profile, setProfile] = useState(null);

  // Tu backend corriendo de forma local en el puerto libre que configuramos
  const BACKEND_URL = "https://api-backend-pizza-mama-mia.onrender.com/";

  // Requerimiento 1: Método para hacer login consumiendo /api/auth/login
  const login = async (emailInput, passwordInput) => {
    try {
      const response = await fetch(`${BACKEND_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: emailInput, password: passwordInput }),
      });

      const data = await response.json();

      if (response.ok && data.token) {
        setToken(data.token);
        setEmail(data.email);
        localStorage.setItem("token", data.token);
        localStorage.setItem("email", data.email);
        return { success: true };
      } else {
        return {
          success: false,
          error: data.error || "Error al iniciar sesión",
        };
      }
    } catch (error) {
      console.error("Error en login:", error);
      return { success: false, error: "No se pudo conectar con el servidor" };
    }
  };

  // Requerimiento 1: Método para hacer register consumiendo /api/auth/register
  const register = async (emailInput, passwordInput) => {
    try {
      const response = await fetch(`${BACKEND_URL}/api/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: emailInput, password: passwordInput }),
      });

      const data = await response.json();

      if (response.ok && data.token) {
        setToken(data.token);
        setEmail(data.email);
        localStorage.setItem("token", data.token);
        localStorage.setItem("email", data.email);
        return { success: true };
      } else {
        return { success: false, error: data.error || "Error en el registro" };
      }
    } catch (error) {
      console.error("Error en register:", error);
      return { success: false, error: "No se pudo conectar con el servidor" };
    }
  };

  // Requerimiento 2: Método para hacer logout (elimina token y email del estado y almacenamiento)
  const logout = () => {
    setToken(null);
    setEmail(null);
    setProfile(null);
    localStorage.removeItem("token");
    localStorage.removeItem("email");
  };

  // Requerimiento 3: Método para obtener el perfil consumiendo /api/auth/me con el header Authorization
  const getProfile = async () => {
    if (!token) return;

    try {
      const response = await fetch(`${BACKEND_URL}/api/auth/me`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Enviado en el formato estricto que exige la guía
        },
      });

      const data = await response.json();

      if (response.ok) {
        setProfile(data);
      } else {
        console.error("Error al obtener perfil:", data.error);
        if (response.status === 401) logout(); // Desloguea si el token venció o es inválido
      }
    } catch (error) {
      console.error("Error en getProfile:", error);
    }
  };

  return (
    <UserContext.Provider
      value={{ token, email, profile, login, register, logout, getProfile }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
