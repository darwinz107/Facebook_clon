
import { InferenceClient } from "@huggingface/inference";
import { data } from "react-router-dom";

//https://facebook-clon-nestjs-production.up.railway.app/user/
const route = "http://localhost:3000/user/";
const route2= "https://facebook-clon-nestjs-production.up.railway.app/user/";
export const handlerApi = async (e,name,cellphone,email,password)=>{

    e.preventDefault();

    const response = await fetch(`${route2}app/register`,{
        
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

export const registerApi = async (name,cellphone,email,password)=>{

   

    const response = await fetch(`${route2}app/register`,{
        
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify({name,cellphone, email,password})
    });

    const data = await response.json()
    console.log(data)
    if (response.ok){
    return data}
    else{
        return "Register failed! Try it again"
    }

}

export const resgisterUserNest = async (name,cellphone,email,password,gender) =>{

    const response = await fetch(`${route2}create`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({name,cellphone,gender,email,password})
    });

    const data = await response.text();
    if(data != ""){
        return alert(data);}
    
}

export const getTokenH = async ()=>{

    

    const response = await fetch(`${route2}tokeHuggin/token`,{
        
        method:"GET",
        headers:{
            "Content-Type": "application/json"
        },
        
    });

    const data = await response.json()
    return data

}

export const chatIA=async (prompts,token)=>{

   
  const response = await  fetch(`https://api-inference.huggingface.co/models/facebook/bart-large-cnn`,{
    method:"POST",
       headers:{
        "Authorization":`Bearer ${token}`,
        "Content-Type": "application/json"
       },
       body: JSON.stringify({
        inputs:prompts
       })

    });

    if(!response.ok){
        console.error("Error:", response.status,await response.text())
        return;
    }

    const data = await response.json();

    if(response.ok){
    console.log(data)
        return data[0].summary_text
    }else{
        return null
    }
}


export const Deepseek = async (prompt,token) =>{


const client = new InferenceClient(token.tokenH);

const chatCompletion = await client.chatCompletion({
    provider: "fireworks-ai",
    model: "deepseek-ai/DeepSeek-R1",
    messages: [
        {
            role: "user",
            content: prompt,
        },
    ],
});



console.log(chatCompletion.choices[0].message);
return chatCompletion.choices[0].message.content;
}

export const DeepseekNest = async (prompt) =>{
  
    const response = await fetch(`${route2}deepseek`,{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({prompt})
    });
    const data = await response.json();
    return data;
}

export const geminiNest = async (prompt) =>{
    
    const response = await fetch(`${route2}gemini`,{
     method:'POST',
     headers:{
        'Content-Type':'application/json'
     },
     body:JSON.stringify({prompt})
    });
    const data = await response.json();
    return data;
}

export const generateImg = async (prompt)=>{

    const response = await fetch(`${route2}generate/image`,{
        
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify({
          prompt:prompt
        })
        
    });

    const data = await response.json()
    return data

}

export const redtubeAPI = async() =>{

 const response = await fetch(`${route2}redtube`,{
  method:'GET'
 });

 const data = await response.json();

 return data;
}


export const apiTestVideos = async() =>{
    const response = await fetch(`${route2}generate/imgStorie`,{
        method:'GET'
    });

    const data = await response.json();

    return data;
}

export const users = async() =>{
    const response = await fetch(`${route2}infoUsers`,{
        method:'GET',
        //credentials:'include'
    });
    const data = await response.json();
    return data;
}

export const interaction = async(id,id2,message)=>{
    const response = await fetch(`${route2}interaction/${id}/${id2}`,{
    method:'POST',
    headers:{
        'Content-Type':'application/json'
    },
    body:JSON.stringify({
        message
    })
    });

    const data = await response.json();

    return data;
}

export const getInteraction = async(id,id2) =>{
    const response = await fetch(`${route2}loadInteraction/${id}/${id2}`,{
        method:"GET"
    })

    const data = await response.json();
    return data;
}

export const getIdToken = async()=>{
    const response = await fetch(`${route2}facebook`,{
    method:"GET",
    credentials:"include"
    });

    const data = await response.json();
    return data;
}

export const createdRolNest = async(rol)=>{
    const response = await fetch(`${route2}post/rol`,{
     method:"POST",
     headers:{
        "Content-Type":"application/json"
     },
     body:JSON.stringify({rol})
    });
    
    const data = await response.json();
    return data;
}

export const getRoless = async()=>{
    const response = await fetch(`${route2}get/roles`,{
        method:"GET"
    });
    const data = await response.json();
    return data;
}

export const getMsjReceptors = async(id)=>{
    const response = await fetch(`${route2}messages/receptor/${id}`,{
       method:"GET"
    });

    const data = await response.json();
    return data;
}


export const msjNotSeen = async(id)=>{
  const response = await fetch(`${route2}total/notseen/${id}`,{
    method:"GET"
  });

  const data = await response.json();
  return data;
}

export const msjsNotSeenByUser = async(id,id2)=>{
  const response = await fetch(`${route2}notseenbyuser/${id}/${id2}`,{
    method:"GET"
  });

  const data = await response.json();
  return data;
}

export const updateLikeSeen = async(id,id2)=>{
  const response = await fetch(`${route2}change/seen/${id}/${id2}`,{
    method:"PATCH",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify({seen:true})
  });

  const data = await response.json();
  return data;
}