import { useState } from 'react'
import { handlerApi } from './assets/connectionApi/Api'

function App() {
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")

  return (
    <>
   
   <form  method="post"
   className='form'
    onSubmit={(e)=>handlerApi(e,email,password)}
   >
    <div>
   <label htmlFor="email">Email: </label>
   <input type="email" 
   placeholder='Email'
   className='email'
   onChange={(e)=>{setemail(e.target.value)}}
   />
   </div>
   <div>
   <label htmlFor="pass">Password: </label>
   <input type="password" name="pass" id="pass" 
   onChange={(e)=>{setpassword(e.target.value)}}
  
   />
   </div>
   <br />
   <button type="submit">Register</button>

   </form>

    </>
  )
}

export default App
