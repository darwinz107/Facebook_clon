import React from 'react'

import { Link, useNavigate } from 'react-router-dom'
import { validateRol } from '../methods/validateRol'

export const Principal =()=>{
const navigate = useNavigate()
    const autorizado = (e) =>{
        e.preventDefault()
        
        const isValidated = validateRol();
        if(isValidated == true){
         navigate('/autorizado');
        }
    }


    return(
<>
<nav>
    <ul>

        <li onClick={(e)=>autorizado(e)}
            
            >Autorizado</li>

        <li><Link to="">No autorizada</Link></li>
    </ul>
</nav>
</>
    )
}