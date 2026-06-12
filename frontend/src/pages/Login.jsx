import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

 const navigate = useNavigate();

 const [usuario,setUsuario] = useState("");
 const [password,setPassword] = useState("");

 const ingresar = () => {

  if(usuario === "admin" && password === "1234"){

   navigate("/usuarios");

  }else{

   alert("Credenciales incorrectas");

  }

 };

 return (

  <div className="contenedor">

   <h2>Login</h2>

   <input
    type="text"
    placeholder="Usuario"
    value={usuario}
    onChange={(e)=>setUsuario(e.target.value)}
   />

   <input
    type="password"
    placeholder="Contraseña"
    value={password}
    onChange={(e)=>setPassword(e.target.value)}
   />

   <button onClick={ingresar}>
    Ingresar
   </button>

  </div>

 );

}

export default Login;