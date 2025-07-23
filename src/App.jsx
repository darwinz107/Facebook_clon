import { useState } from 'react'
import { handlerApi } from './assets/connectionApi/Api'
import { Link, useNavigate } from 'react-router-dom'
import { validation } from './methods/validation'


function App() {
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")

  const navigate = useNavigate();

  const authorizedToken = async (e) =>{
     e.preventDefault();
    const token = await validation(email,password);

    if(token != null){
      localStorage.setItem("token",token)
      navigate('/principal')
    }

}


  return (
    <>

   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_J0Hvb7GRs26Xv_LZYATWFCw4T7UHT7lvUw&s" alt=""/>

  // <img src="public\s-l400 (1).jpg" alt=""/>

   <form  method="post"
   className='form'
    onSubmit={(e)=>authorizedToken(e)}
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
   <button type="submit"
   >Login</button>
   <p>You haven't an account? Register <Link to="/register" >here</Link></p>
   </form>

    </>
  )
}

export default App
