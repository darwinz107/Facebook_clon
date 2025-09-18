import { jwtDecode } from "jwt-decode"
const route = "http://localhost:3000/";
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
    const response = await fetch(`${route}user/token`,{
        method:"GET",
        credentials:'include'
    });

    const data = await response.json();
    return data;
}