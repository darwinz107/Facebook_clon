

 
export const validation = async (email,password) =>{

    localStorage.removeItem('token')
 try {
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
 } catch (error) {
    console.log(error)
 }
    
}


