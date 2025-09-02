import React, { useEffect, useState } from 'react'
import { apiTestVideos, redtubeAPI } from '../connectionApi/Api'

export const StoriesPreview = ({ url,setshowwindowstorie}) => {

  console.log(`URL IN STORIESPREVIEW :${url}`)
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

 

  return (
    <>
     <div className="statu-child">
      
         
      <video 
      muted={true}
      src={url}
      //poster={video.thumbnailUrl}
      onMouseOver={(e)=>{ 
        console.log("That should plays")
        e.target.play();
        
        }
      }
      onMouseOut={(e)=> {
        console.log("That should pauses")
       e.target.pause();
       e.target.currentTime = 0;
       //setshowImg(true);
      }}
      onClick={()=>setshowwindowstorie(true)} ></video>
      
       
      
     
    </div>
    </>
  );
};

