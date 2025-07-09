


export const handlerApi = async (e,email,password)=>{

    e.preventDefault();

    const response = await fetch("http://localhost:3000/app/register",{
        
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify({email,password})
    });

    const data = await response.json()
    console.log(data)
    alert("Register succesful")

}