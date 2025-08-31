import React, { useEffect, useState } from 'react'
import { apiTestVideos } from '../connectionApi/Api'
import { useRef } from 'react'

export const SetVideos = ({indice,sethandlevd}) => {
 
  
  
    const [video1, setvideo] = useState("")
    
    useEffect(() => {
      const getLinks = async() =>{
        const data = await apiTestVideos();
        const url = data[indice];
        setvideo(url);
        console.log(data);
    };
    getLinks();
      
    }, [indice]);
    
   
  return (
    <>  <div className='video-stories'></div>
        <video ref={sethandlevd} id='vd' src={video1.videoUrl} controls={true}
        
        ></video>   
    </>
  )
}
