import React from 'react'
import { apiTestVideos } from '../connectionApi/Api'

export const setVideoSrorie = async (saveVideos,links) => {
      const data = await apiTestVideos();
      console.log(`links: ${links.length}`)
    links.map( (link)=>{
       
        saveVideos((prev)=>[...prev,data[link].videoUrl]);
       
    });
  
}
