

 
export const validation = async (email,password) =>{


    const response = await fetch("http://localhost:3000/validation/validation",{
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

    
 
    const response = await fetch("http://localhost:3000/user/validate/login",{
     method:'POST',
     headers:{
        'Content-Type':'application/json'
     },
     body: JSON.stringify({email,password})
    });

    const data = response.json();
    return data;
}
