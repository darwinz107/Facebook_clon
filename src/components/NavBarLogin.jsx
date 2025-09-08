import React from 'react'
import { useNavigate } from 'react-router-dom'

export const NavBarLogin = () => {
 
  const navigate = useNavigate();

  return (
   <>
   <nav className='navbarNot'>
    <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_J0Hvb7GRs26Xv_LZYATWFCw4T7UHT7lvUw&s" alt="" className='navbarNotlogin-img' />
    <input type="text" 
    className='search'
    placeholder='search facebook'
    
    />
    </div>
    
    <ul className='navbarNot-list'>
        <li className='navbarNot-item'><img src="https://img.icons8.com/?size=100&id=WdfaBglokAlJ&format=png&color=000000" alt="" /></li>
        <li className='navbarNot-item'><img src="https://img.icons8.com/?size=100&id=roUdNSN10VmV&format=png&color=000000" alt="" /></li>
        <li className='navbarNot-item'><img src="https://img.icons8.com/?size=100&id=8287&format=png&color=000000" alt="" /> </li>
        <li className='navbarNot-item'><img src="https://img.icons8.com/?size=100&id=yHmk9ruAuVj3&format=png&color=000000" alt="" /></li>
        <li className='navbarNot-item'><img src="https://img.icons8.com/?size=100&id=2878&format=png&color=000000" alt="" /></li>
    </ul>
     
    
   </nav>
   </>
  )
}
