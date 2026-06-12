import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function Login() {

 const navigate = useNavigate();

 const [email,setEmail] = useState("");
 const [password,setPassword] = useState("");

 const ingresar = async () => {

  try {

   const response = await api.post("/login",{
    email,
    password
   });

   if(response.data === "ok"){

    navigate("/usuarios");

   }else{

    alert("Credenciales incorrectas");

   }

  }
  catch(error){

   console.log(error);
   alert("Error al conectar con el servidor");

  }

 };

 return (

  <div className="contenedor">

   <h2>Login</h2>

   <input
    type="email"
    placeholder="Correo"
    value={email}
    onChange={(e)=>setEmail(e.target.value)}
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