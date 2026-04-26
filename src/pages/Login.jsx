import { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // Usamos un objeto para capturar 1 o más errores
    const [errors, setErrors] = useState({});

    const fullDataValidation = (e) => {
        e.preventDefault();
        let objetoErrors = {};
        // Validación de input completo
        if (!email.trim() || !password.trim()){
            objetoErrors.allFields = "Debes incluir todos los campos";
            setErrors(objetoErrors);
            return;
            }
        if (password.length < 6){
            objetoErrors.passwordLength = "El Password debe tener al menos 6 caracteres"
        }
        setErrors(objetoErrors);

        if (Object.keys(objetoErrors).length === 0) {
        console.log("Datos Almacenados Con Éxito!");
        }
        setEmail("");
        setPassword("");
    }
    return (
    <>
          <form className="formulario" onSubmit={fullDataValidation}>
        {" "}
        {errors.allFields && <p className="error-text">{errors.allFields}</p>}
        <div className="form-group">
          <label>Email</label>
          <input
            type="text"
            name="nombre"
            className="form-control"
            onChange={(e) => {setEmail(e.target.value); setErrors({})}}
            value={email}
          />
        </div>
        <div className="form-group">
          <label>Contraseña</label>
          <input
            type="password"
            name="apellido"
            className="form-control"
            onChange={(e) => { setPassword(e.target.value); setErrors({}); }}
            value={password}
          />
          {errors.passwordLength && <small className="error-small">{errors.passwordLength}</small>}
        </div>
        <button type="submit" className={`btn ${Object.keys(errors).length > 0 ? 'btn-error' : 'btn-primary'}`}>
          Enviar
        </button>
      </form>
    </>
    );
};

export default Login;