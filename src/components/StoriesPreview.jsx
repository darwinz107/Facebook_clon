import React, { useEffect, useState } from 'react'
import { redtubeAPI } from '../connectionApi/Api'

export const StoriesPreview = ({ indice }) => {
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
  );
};

