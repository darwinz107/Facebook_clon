import { jwtDecode } from "jwt-decode"
const route = " http://localhost:3000/";
const route2 = "https://facebook-clon-nestjs-production.up.railway.app/";
/*
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
}*/

export const validateRolNest = async () =>{
    const response = await fetch(`${route}user/rol`,{
        method:'GET',
        credentials:'include'
    });

    const data = await response.json();
    return data;
}

export const existToken = async ()=>{
    const response = await fetch(`${route}user/get/token`,{
        method:"GET",
        credentials:'include'
    });

    const data = await response.json();
    console.log(`Estoy en existToken y este es data:`);
    console.log(data);
    return data;
}