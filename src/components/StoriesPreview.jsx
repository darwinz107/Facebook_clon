import React, { useEffect, useState } from 'react'
import { apiTestVideos, redtubeAPI } from '../connectionApi/Api'

export const StoriesPreview = ({ indice,setshowwindowstorie}) => {
  /*
  const [embedUrl, setEmbedUrl] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const data = await redtubeAPI();
      setEmbedUrl(data.videos[indice].video.embed_url);
    };
    fetchData();
  }, [indice]);

  return (
    <div className="statu-child" id={`statu-child${indice}`}>
      {embedUrl && (
        <iframe
          src={embedUrl}
          allow="fullscreen; autoplay"
          allowFullScreen={true}
          width="300"
          height="200"
          title={`video-${indice}`}
          onMouseEnter={() => console.log("Mouse over video")}
          onMouseLeave={() => console.log("Mouse out video")}
        ></iframe>
      )}
    </div>
  );*/


  const [showImg, setshowImg] = useState(true)
  const [video, setvideo] = useState("")

 useEffect(() => {
   const executeFunction = async()=>{
    const data = await apiTestVideos();

    const url = data[indice];
    setvideo(url);
   };

   executeFunction();
   
 }, [indice])
 

  return (
    <>
     <div className="statu-child" id={`statu-child${indice}`}>
      
         {!showImg && (
      <video 
      muted={true}
      src={video.videoUrl}
      //poster={video.thumbnailUrl}
      onMouseOver={(e)=>{ 
        
        e.target.play();
        
        }
      }
      onMouseOut={(e)=> {e.target.pause();
       e.target.currentTime = 0;
       setshowImg(true);
      }}
      onClick={()=>setshowwindowstorie(true)} ></video>
      )}
       {showImg &&(
        <img src={video.thumbnailUrl} 
        onMouseOver={(e)=> setshowImg(false)}
        alt="" />
        
      )}
      
     
    </div>
    </>
  );
};

