
import React, { useState } from 'react'
import {DropNow} from '../components/DropNow'
import { Link, useNavigate } from 'react-router-dom'
import { registerApi, resgisterUserNest } from '../connectionApi/Api'



export const Register = () => {

    const [name, setname] = useState("")
    const [celllphone, setcelllphone] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [gender, setgender] = useState("")
    const navigate = useNavigate();


    const validateRegister = async (e) =>{
     e.preventDefault();
    const msg = await resgisterUserNest(name,celllphone,email,password,gender)
    }

  return (
   
<>
 <button className='btnBack'
 onClick={
   ()=>navigate('/login')
 }
 >Back</button>
<form   method="post"
onSubmit={(e) =>validateRegister(e)}
>
 <div className='container-register'>
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
  <DropNow gender={gender} setgender={setgender}></DropNow>
  <button type="submit"
  onClick={()=>console.log("Hiciste click a enviar")}
  >Register</button>
  </div>
</form>

</>

    
  )
}
