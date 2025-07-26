import React, { useEffect, useState } from 'react'
import { generateInfoUser, updateInfoUser } from '../methods/profile'

export const Update =  () => {

/*  const {name,cellphone,email} = generateInfoUser();*/

const [name, setname] = useState("")
  const [cellphone, setcellphone] = useState("")
  const [email, setemail] = useState("")


const functionUpdate = async (e) =>{
 e.preventDefault();
  const data = await updateInfoUser(name,cellphone,email);
  localStorage.removeItem('token');
  console.log(data)
  localStorage.setItem("token",data);
}


 useEffect(() => {
  const fetchData = async () =>{
   const info = await generateInfoUser();
   setname(info.name);
   setcellphone(info.cellphone);
   setemail(info.email);
console.log(info);
};
fetchData();
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
      <button type="submit">Update</button>

     </form>

   </>
  )
}
