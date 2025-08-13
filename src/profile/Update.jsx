import React, { useEffect, useState } from 'react'
import { generateInfoUser, updateInfoNest, updateInfoUser, updateProfileNest } from '../methods/profile'
import { DropNow } from '../components/DropNow'
import { generateTokenNest, logout } from '../methods/token'

export const Update =  () => {

/*  const {name,cellphone,email} = generateInfoUser();*/

const [name, setname] = useState("")
  const [cellphone, setcellphone] = useState("")
  const [email, setemail] = useState("")
  const [gender, setgender] = useState("")

const functionUpdate = async (e) =>{
 e.preventDefault();
   const msj = await updateProfileNest(name,cellphone,email,gender);

   alert(msj.message);
   const id = msj.id;

   logout();
   generateTokenNest(id);

}


 useEffect(() => {
  const setInfo = async() =>{
    const payload = await updateInfoNest();
    console.log(payload)
    setname(payload.name);
    setcellphone(payload.cellphone);
    setemail(payload.email);
    setgender(payload.gender);
  };

  setInfo();
 }, []);
 
  return (
   <>
     <form action="" method="post"
     onSubmit={(e)=>functionUpdate(e)}
     >
      <label htmlFor="">Name: </label>
      <input type="text" 
      value={name}
      onChange={(e)=>setname(e.target.value)}
      />
       <label htmlFor="">Cellphone: </label>
      <input type="number" 
      value={cellphone}
      onChange={(e)=>setcellphone(e.target.value)}
      />
       <label htmlFor="">Email: </label>
      <input type="email" 
      value={email}
      onChange={(e)=>setemail(e.target.value)}
      />
      <br />
      <DropNow gender={gender} setgender={setgender}></DropNow>
      
      <button type="submit">Update</button>

     </form>

   </>
  )
}
