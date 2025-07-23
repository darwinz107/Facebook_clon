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