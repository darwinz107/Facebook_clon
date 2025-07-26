import { jwtDecode } from "jwt-decode";

    const token = localStorage.getItem("token");
    const decoded = jwtDecode(token)


export const generateInfoUser = async () =>{


    const response = await fetch(`http://localhost:3000/auth/user/${decoded.id}`,{
      
        method:'GET',
    });

    
    const data = await response.json()
    return data;
}

export const updateInfoUser = async (name,cellphone,email) =>{

    const response = await fetch(`http://localhost:3000/auth/update/${decoded.id}`,{
        method:'PUT',
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({name,cellphone,email})
    });
    return response.json()

}