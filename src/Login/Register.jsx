
import React, { useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'
import { registerApi } from '../connectionApi/Api'



export const Register = () => {

    const [name, setname] = useState("")
    const [celllphone, setcelllphone] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")

    const navigate = useNavigate();

  return (
   
<>
 <button className='btnBack'
 onClick={
   ()=>navigate('/login')
 }
 >Back</button>
<form  method="post"
onSubmit={(event) =>registerApi(event,name,celllphone,email,password)}
>
 
 <label htmlFor="name">Name: </label>
 <input type="name" 
 onChange={(e)=>setname(e.target.value)}
 />

 <label htmlFor="cellphone">Cellphone: </label>
 <input type="number" name="number" id="number" 
 onChange={(event)=>setcelllphone(event.target.value)}
 />

  <label htmlFor="email">Email: </label>
  <input type="email" name="email" id="email" 
  onChange={(e)=>setemail(e.target.value)}
  />

 <label htmlFor="password">Password: </label>
 <input type="password" name="password" id="password" 
 onChange={(e)=>setpassword(e.target.value)}
 />

  <button type="submit"
  onClick={()=>console.log("Hiciste click a enviar")}
  >Register</button>
</form>
</>

    
  )
}
