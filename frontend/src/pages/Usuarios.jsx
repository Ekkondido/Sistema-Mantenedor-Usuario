import { useEffect, useState } from "react";
import api from "../services/api";

function Usuarios() {

 const [usuarios,setUsuarios] = useState([]);

 const [id,setId] = useState(null);

 const [nombre,setNombre] = useState("");
 const [email,setEmail] = useState("");
 const [password,setPassword] = useState("");
 const [rol,setRol] = useState("");

 const cargarUsuarios = async () => {

  try{

   const response = await api.get("/usuarios");

   setUsuarios(response.data);

  }
  catch(error){

   console.log(error);

  }

 };

 useEffect(()=>{

  cargarUsuarios();

 },[]);

 const guardarUsuario = async () => {

  try{

   const usuario = {

    nombre,
    email,
    password,
    rol

   };

   if(id){

    await api.put(`/usuarios/${id}`,usuario);

   }else{

    await api.post("/usuarios",usuario);

   }

   limpiar();

   cargarUsuarios();

  }
  catch(error){

   console.log(error);

  }

 };

 const editarUsuario = (usuario) => {

  setId(usuario.id);

  setNombre(usuario.nombre);
  setEmail(usuario.email);
  setPassword(usuario.password);
  setRol(usuario.rol);

 };

 const eliminarUsuario = async (id) => {

  try{

   await api.delete(`/usuarios/${id}`);

   cargarUsuarios();

  }
  catch(error){

   console.log(error);

  }

 };

 const limpiar = () => {

  setId(null);

  setNombre("");
  setEmail("");
  setPassword("");
  setRol("");

 };

 return (

  <div className="contenedor">

   <h2>Mantenedor de Usuarios</h2>

   <input
    type="text"
    placeholder="Nombre"
    value={nombre}
    onChange={(e)=>setNombre(e.target.value)}
   />

   <input
    type="email"
    placeholder="Email"
    value={email}
    onChange={(e)=>setEmail(e.target.value)}
   />

   <input
    type="password"
    placeholder="Password"
    value={password}
    onChange={(e)=>setPassword(e.target.value)}
   />

   <input
    type="text"
    placeholder="Rol"
    value={rol}
    onChange={(e)=>setRol(e.target.value)}
   />

   <button onClick={guardarUsuario}>

    {id ? "Actualizar Usuario" : "Crear Usuario"}

   </button>

   {id &&

    <button onClick={limpiar}>
     Cancelar
    </button>

   }

   <hr />

   <table border="1">

    <thead>

     <tr>

      <th>ID</th>
      <th>Nombre</th>
      <th>Email</th>
      <th>Rol</th>
      <th>Acciones</th>

     </tr>

    </thead>

    <tbody>

     {

      usuarios.map((usuario)=>(

       <tr key={usuario.id}>

        <td>{usuario.id}</td>
        <td>{usuario.nombre}</td>
        <td>{usuario.email}</td>
        <td>{usuario.rol}</td>

        <td>

         <button
          onClick={()=>editarUsuario(usuario)}
         >
          Editar
         </button>

         <button
          onClick={()=>eliminarUsuario(usuario.id)}
         >
          Eliminar
         </button>

        </td>

       </tr>

      ))

     }

    </tbody>

   </table>

  </div>

 );

}

export default Usuarios;