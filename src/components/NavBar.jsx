import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { validateRol, validateRolNest } from '../methods/validateRol';
import { logout } from '../methods/token';


export const NavBar = () => {

const [showMenu, setshowMenu] = useState(false);

const navigate = useNavigate();
const handleProfileBar = () => setshowMenu(!showMenu);

const logoutSession = async () =>{
   const msj = await logout();
   alert(msj.session);
   navigate('/login')
}
    const autorizado = async(e) =>{
        e.preventDefault()
        
        const isValidated = await validateRolNest();
        console.log(isValidated);
        if(isValidated.acess == true){
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
        <li className='navbar-item'><Link to={'/generatePdf'}>Report</Link></li>
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
                <button onClick={logoutSession}>Logout</button>
            </div>
        )}
      </div>
    </nav>
    </>
  )
}
