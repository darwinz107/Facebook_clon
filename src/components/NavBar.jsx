import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export const NavBar = () => {

const [showMenu, setshowMenu] = useState(false);

const navigate = useNavigate();
const handleProfileBar = () => setshowMenu(!showMenu);

const logout = () =>{
    localStorage.removeItem("token");
    navigate('/login');
}
    const autorizado = (e) =>{
        e.preventDefault()
        
        const isValidated = validateRol();
        if(isValidated == true){
         navigate('/autorizado');
        }
    }

  return (
    <>
    <nav className='navbar'>
      <ul className='navbar-list'>
        <li className='navbar-item' onClick={(e)=>autorizado(e)}
        style={{cursor: 'pointer'}}
        >Autorizado</li>
        <li className='navbar-item'><Link  to={'/noautorizado'}>IDK</Link></li>
        
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
