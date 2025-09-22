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
     console.log("Estoy en ProtectRoutes y este es bool:");
  console.log(bool);
  setvalidate(bool.log);
   /* if(bool.log){
      return route;
    }else{
      navigate("/");
      <Navigate to={"/"}></Navigate>
    }*/
  } catch (error) {
     console.error(error);
  
  }

      }
      functProtRt();
    }, [route])
    
if(validate==null) return <div>loading...</div>  
//if(validate == false) return  <Navigate to={"/"}></Navigate> 
return route
}
