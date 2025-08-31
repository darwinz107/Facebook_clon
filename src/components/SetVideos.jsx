import React, { useEffect, useState } from 'react'
import { apiTestVideos } from '../connectionApi/Api'

export const SetVideos = ({indice}) => {

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
        <video id='vd' src={video1.videoUrl} controls={true}></video>   
    </>
  )
}
