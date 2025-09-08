import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { validation, validationUserNest } from './methods/validation'
import { generateTokenNest } from './methods/token'


function App() {
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")

  const navigate = useNavigate();

  /*const authorizedToken = async (e) =>{
     e.preventDefault();
    const token = await validation(email,password);

    if(token != null){
      
      localStorage.setItem("token",token)
      navigate('/principal')
      console.log(`This is token: ${localStorage.getItem("token")}`)
    }

}*/

const authLoginNest = async (e) =>{
  e.preventDefault();
  const res = await validationUserNest(email,password);

  if(res.acces){
   alert(res.message);
   console.log(res.id);
   const token = await generateTokenNest(res.id);
    console.log(token.token);
    navigate('/principal')
    
  }else{
    alert(res.message)
    
  }
}


  return (
    <>
<div className='div-logo-principal'><img className='logoPrincipal' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_J0Hvb7GRs26Xv_LZYATWFCw4T7UHT7lvUw&s" alt=""/>
</div>
   
   {/*<img src="public\s-l400 (1).jpg" alt=""/>*/}

   <form  method="post"
   className='form'
    onSubmit={(e)=>authLoginNest(e)}
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
   <p>You haven't an account? Register <Link to="/register" className='a-register'>here</Link></p>
   </form>

    </>
  )
}

export default App
