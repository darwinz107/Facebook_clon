
const route = "http://localhost:3000/";
 
export const validation = async (email,password) =>{


    const response = await fetch(`${route}user/validation/validation`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify({email,password})
    });
    const data = await response.json()
    console.log(data)
   
    if(response.ok){
      
        console.log("data ok es ejecutado")
        return await data.token
    }else{
        return null
    }
}

 export  const  validationUserNest = async (email,password) =>{

    
 
    const response = await fetch(`${route}user/validate/login`,{
     method:'POST',
     headers:{
        'Content-Type':'application/json'
     },
     body: JSON.stringify({email,password})
    });

    const data = response.json();
    return data;
}


