import React, { useEffect, useState } from 'react'
import { apiTestVideos } from '../connectionApi/Api'
import { useRef } from 'react'

export const SetVideos = ({indice,sethandlevd}) => {
 
  //console.log(`SETVIDEOS: ${indice}`)

  /*

  */
  return (
    <> 
     <div className='video-stories'> 
  
      <video ref={sethandlevd} id='vd' src={indice} controls={true}
        
        ></video>  
     </div>
    
   
        
    </>
  )
}
