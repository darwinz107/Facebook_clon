import React, { useEffect, useMemo, useState } from 'react'
import { base64ToBlob } from '../methods/Base64ToBlob';

export const ControlVideo = ({ file, showfullPost }) => {

    const [arcBlob, setarcBlob] = useState("");

    const blobUrl = useMemo(() => {  
   
           const blob = base64ToBlob(file);
           setarcBlob(blob);
           
            return URL.createObjectURL(blob);
  
    } , [file]);

    const handleMouseOver = (e) => {

        const id = setTimeout(() => {
            e.target.play();
        }, 3000);
        setgg(id);
    }

    const handleMouseOut = (e) => {

        clearTimeout(gg);
        e.target.pause();
        e.target.currentTime = 0;
    }
   

  return (
        <>
            {arcBlob.type !="video/mp4" ? <img src={blobUrl} onClick={()=>showfullPost()}></img> : <video onClick={()=>showfullPost()} src={blobUrl} controls={true} ></video>}
        </>
    )
    
 }

