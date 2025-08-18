import { jwtDecode } from "jwt-decode"


export const validateRol = () =>{

    const token = localStorage.getItem('token')
    const decoded = jwtDecode(token)

    console.log(decoded)
    if (decoded.rol =='admin'){

        return true
    }
    else{
        alert("No autorizado");
        return false
    }
}

export const validateRolNest = async () =>{
    const response = await fetch("http://localhost:3000/user/rol",{
        method:'GET',
        credentials:'include'
    });

    const data = await response.json();
    return data;
}