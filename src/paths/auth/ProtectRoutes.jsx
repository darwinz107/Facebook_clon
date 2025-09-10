import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { existToken } from '../../methods/validateRol';

export const ProtectRoutes =  ({route}) => {
let navigate = useNavigate();
const [validate, setvalidate] = useState(false)
    useEffect(() => {
      const functProtRt = async () =>{

  
    const bool = await existToken();
  console.log(bool);
    if(bool.access){
      return route;
    }else{
      navigate("/");
      <Navigate to={"/"}></Navigate>
    }
  
  console.error(error);
  navigate("/");
  <Navigate to={"/"}></Navigate>
  
      }
      functProtRt();
    }, [route])
    

}
