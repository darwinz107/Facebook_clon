import React, { useMemo, useState } from 'react'

export const ControlVideo = ({ file, showfullPost }) => {

    const [gg, setgg] = useState("");
console.log(file)
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
    console.log(blobUrl)

  
     return (
        <>
            {file.type.startsWith("image/") ? <img src={blobUrl} onClick={()=>showfullPost()}></img> : <video src={blobUrl} controls={true} onMouseOver={(e) => { handleMouseOver(e) }} onMouseOut={(e) => { handleMouseOut(e) }}></video>}
        </>
    )
  
}
