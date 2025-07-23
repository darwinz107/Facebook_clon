
import React, { useState } from 'react'
import {  Deepseek, generateImg, getTokenH } from '../assets/connectionApi/Api'

export const Authorized = () => {
 
  const [prompt, setprompt] = useState("")
  const [textIA, settextIA] = useState("xd")
  const [imgJson, setimgJson] = useState("")

  const generateIA = async (e) =>{
  e.preventDefault()
   const HF_TOKEN = await getTokenH();
   const result = await Deepseek(prompt,HF_TOKEN)
   const text = result.split("</think>")
   console.log(text);
   settextIA(text[1].trim());
   
  }
  const generateImageIA = async (e) =>{
  e.preventDefault()
  const json = await generateImg(prompt)
  console.log(json)
  setimgJson(json)
  document.getElementById('response').innerText = 'loading...'
  
  if (!json.text){
    document.getElementById('response').innerText = 'Generated image succesful!'
  
  }else{
  document.getElementById('responde').innerText = json.text}
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
    <div>
    <p id='response'></p>  
    <img src={`data:image/png;base64,${imgJson.binary}`} alt="" /></div>
   </>
   

  )
}
