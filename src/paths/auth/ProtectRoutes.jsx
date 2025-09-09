import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { existToken } from '../../methods/validateRol';

export const ProtectRoutes =  ({route}) => {
let navigate = useNavigate();
const [validate, setvalidate] = useState(false)
    useEffect(() => {
      const functProtRt = async () =>{

  try {
    const bool = await existToken();
  
    if(bool.log){
       setvalidate(true);
    }
   
  } catch (error) {
  console.error(error);
  
  }
      }
      functProtRt();
    }, [route])
    

    if(validate){
        return route;
    }else{
      //  navigate("/");
  <Navigate to={"/"}></Navigate>
    }
    
}
