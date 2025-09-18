import { jwtDecode } from "jwt-decode";

    const token = localStorage.getItem("token");
    const route = "http://localhost:3000/";


export const generateInfoUser = async () =>{
    
const decoded = jwtDecode(token);
    console.log(`this is id: ${decoded.id}`)
    const response = await fetch(`${route}auth/user/${decoded.id}`,{
      
        method:'GET',
    });

    
    const data = await response.json()
    return data;
}

export const updateInfoUser = async (name,cellphone,email) =>{
const decoded = jwtDecode(token);
    const response = await fetch(`${route}auth/update/${decoded.id}`,{
        method:'PUT',
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({name,cellphone,email})
    });
    return response.json()

}

export const updateInfoNest = async () =>{

    const response = await fetch(`${route}user/insert/infoUpdate`,{
     method:'GET',
     credentials:'include'
    });

    const data =await response.json();
    return data;
}

export const updateProfileNest = async (name,cellphone,email,gender) =>{

    const response = await fetch(`${route}user/update`,{
        method:'PATCH',
        credentials:'include',
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            name,
            cellphone,
            email,
            gender
        })
    });

    const data = await response.json();
    return data;
}