import React from 'react'
import './usuario.css'
import '../../src/assets/imagen-usuario.jpg' ;
import { BsFillPersonFill } from "react-icons/bs";
import prueba from '../../src/assets/imagen-icon.png'
import { useState, useEffect } from 'react';

const Usuario = () => {
    const [usuarios, setUsuarios] = useState([])

    const traerNoticia =async () => {
        let headersList = {
            "Accept": "*/*",
            "User-Agent": "Thunder Client (https://www.thunderclient.com)"
           }
           
           let response = await fetch("https://crudcrud.com/api/ef5e1499039643ae80849e0582860a37/users", { 
             method: "GET",
             headers: headersList
           });
           
           let data = await response.json();
           setUsuarios(data)
           
    }
   useEffect(() => {
  traerNoticia()
   }, [])
   

  return (
    <div id='usuario'>
    {
        usuarios.map(usuario=>(
            <div>
                 <div className='contenedor-imagen'>
            {/* <BsFillPersonFill  className="icono"/> */}
            <img src={prueba} alt="" className='imagen'/>


            </div>
            <div className='contenedor-informacion'>
                <span>
                  Name:  {usuario.name}
                </span>
                <span>Age:</span>
                <span>Occupation:</span>
                <span>Email:</span>
                <span>Contact:</span>

            </div>
            </div>
           
        ))
    }
        
    </div>
  )
}

export default Usuario