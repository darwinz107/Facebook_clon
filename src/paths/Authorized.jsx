import React, { useState } from 'react'
import {  Deepseek } from '../assets/connectionApi/Api'

export const Authorized = () => {
 
  const [prompt, setprompt] = useState("")
  const [textIA, settextIA] = useState("xd")

  const generateIA = async (e) =>{
  e.preventDefault()

   const result = await Deepseek(prompt)
   const text = result.split("</think>")
   console.log(text);
   settextIA(text[1].trim());
   
  }

  return (
   <>
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
   </>
  )
}
