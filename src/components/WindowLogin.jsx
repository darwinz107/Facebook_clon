import React, { useState } from 'react'


export const WindowLogin = ({showLogin,close}) => {
  return (
    <>
    <div className="container-alert-login">
        <button className='alert-login-close' onClick={()=>close(false)}>x</button>
        <div className='alert-login-child'>
            <h2>You must login to continue</h2>
            <button>Login</button>
        </div>
    </div>
    </>
  )
}
