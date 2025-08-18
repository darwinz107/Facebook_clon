
import React, { useState } from 'react'
import {  Deepseek, DeepseekNest, geminiNest, generateImg, getTokenH } from '../connectionApi/Api'
import { setImg } from '../methods/funcionePendejas'

export const Authorized = () => {
 
  const [prompt, setprompt] = useState("")
  const [textIA, settextIA] = useState("xd")
  const [imgJson, setimgJson] = useState("")
  


  

  const generateIA = async (e) =>{
  e.preventDefault()
   
   const result = await DeepseekNest(prompt)
   const text = result.message.split("</think>")
   console.log(text);
   settextIA(text[1].trim());
   
  }
  const generateImageIA = async (e) =>{
  e.preventDefault()
  const json = await geminiNest(prompt)
  console.log(json)
  setimgJson(json)
  
  if (!json.text){
    setImg(json);
    document.getElementById('response').innerText = 'Generated image succesful!';
    
    

   const img = document.createElement('img').src =`data:image/jpeg;base64,${json.binary}`;
   document.getElementById('response').appendChild(img);
  }else{
  document.getElementById('response').innerText = json.text}
  
  }
  return (
   <>
   <h2>Generate text</h2>
   <form action="" method="post"
   onSubmit={(event)=>generateIA(event)}
   >

    <label htmlFor="prompt">Escribe lo que sea: </label> 
    <input type="text" 
    onChange={(e)=>setprompt(e.target.value)}
    />
     
     <button type="submit">Enviar</button>
   </form>
    <br />
    <p>{textIA}</p>

<br />
<h2>Generate Image</h2>
<form action="" method="post"
   onSubmit={(event)=>generateImageIA(event)}
   >

    <label htmlFor="prompt">Escribe lo que sea: </label> 
    <input type="text" 
    onChange={(e)=>setprompt(e.target.value)}
    />
     
     <button type="submit">Enviar</button>
   </form>
    <br />
    <div className='imgGenerate' id='imgGenerate'>
    <p id='response'></p>  
    
      </div>
   </>
   

  )
}
