import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { validateRol } from '../methods/validateRol';
import { deleteTokenNest, validateRolNest } from '../methods/token';


export const NavBar = () => {

const [showMenu, setshowMenu] = useState(false);

const navigate = useNavigate();
const handleProfileBar = () => setshowMenu(!showMenu);

const logout = async () =>{
   const msj = await deleteTokenNest();
    alert(msj.session);
    navigate('/login');
}
    const autorizado = async (e) =>{
        e.preventDefault()
        
        const isValidated = await validateRolNest();
        console.log(isValidated.acess);
        if(isValidated.acess){
         navigate('/autorizado');
        }else{
          alert("You are not authorized to access this page");
        }
    }

  return (
    <>
    <nav className='navbar'>
      <ul className='navbar-list'>
        <li className='navbar-item' onClick={(e)=>autorizado(e)}
        style={{cursor: 'pointer'}}
        >Only Admin</li>
        <li className='navbar-item'><Link  to={'/noautorizado'}>Anybody</Link></li>
        
      </ul>
      <div className='profile-bar'>
        <img src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740" 
        alt="User Avatar" 
        onClick={handleProfileBar}
        style={{cursor: 'pointer',width: '40px', height: '40px', borderRadius: '50%'}}
        className='profile-avatar'
        />
        {showMenu && (
            <div className='profile-menu'>
                <button onClick={()=>navigate('/updateProfile')}>Update profile</button>
                <button onClick={logout}>Logout</button>
            </div>
        )}
      </div>
    </nav>
    </>
  )
}
