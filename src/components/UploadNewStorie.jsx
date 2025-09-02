import React, { useRef, useState } from 'react'
import { useEffect } from 'react';

export const UploadNewStorie = ({setvideoStorie, reffnewStorie, adjustContainerFlex}) => {
  
  const refNewStorie = useRef(null);
  const [videoUrl, setvideoUrl] = useState("")
  
  useEffect(() => {
   
function uploadnewStorie(){
   if(videoUrl){
const url = URL.createObjectURL(videoUrl);

    setvideoStorie((prev)=>[...prev,url])
    adjustContainerFlex();
  }
    
  }
  uploadnewStorie();
  }, [videoUrl]);
  

  
  
  reffnewStorie(refNewStorie);
  return (
    <>
    <input type="file" 
    className='uploadStorie'
    accept='image/*,video/*'
    ref={refNewStorie}
    onChange={(e)=>setvideoUrl(e.target.files[0])}
  
    />
    </>
  )
}
