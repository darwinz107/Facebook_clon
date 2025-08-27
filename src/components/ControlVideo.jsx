import React, { useEffect, useMemo, useState } from 'react'

export const ControlVideo = ({ file, showfullPost }) => {

    const blobUrl = useMemo(() => {  
   
            return URL.createObjectURL(file);
  
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
            {file.type.startsWith("image/") ? <img src={blobUrl} onClick={()=>showfullPost()}></img> : <video src={blobUrl} controls={true} onMouseOver={(e) => { handleMouseOver(e) }} onMouseOut={(e) => { handleMouseOut(e) }}></video>}
        </>
    )
    
 }

