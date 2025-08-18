import React, { useEffect, useState } from 'react'
import { PostCards } from './PostCards';
import { StoriesPreview } from './StoriesPreview';
import { redtubeAPI } from '../connectionApi/Api';

export const FeedPreview = () => {
  
  const [links, setlinks] = useState([])   
   useEffect(  () => {
    const idk = async ()=>{
       const datas = await redtubeAPI();
      
       const randoms = [];

          for (let index = 0; index < 3; index++) {
      
      randoms.push(Math.floor(Math.random() * (datas.videos.length-0))+0);
     };
       setlinks(randoms);
     console.log(links.toString());
    }
     idk();
   }, [])
   

     const fakePosts = [
    {
      id: 1,
      author: "Juan Pérez",
      avatar: "https://img.icons8.com/?size=100&id=7819&format=png&color=000000",
      content: "Hoy aprendí a hacer un feed con React 🚀",
      image: "https://via.placeholder.com/500x300",
      likes: 12,
      comments: 3,
      time: "Hace 2 horas"
    },
    {
      id: 2,
      author: "María López",
      avatar: "https://img.icons8.com/?size=100&id=7819&format=png&color=000000",
      content: "Mi nuevo dibujo 🎨",
      image: "https://via.placeholder.com/500x300",
      likes: 30,
      comments: 5,
      time: "Hace 4 horas"
    }
  ];


  return (
    <>
    <div className='container-stories'>
     {links.map((link)=>(
<StoriesPreview key={link} indice={link}/>
     ))}
 <button
 >➡</button>      
    </div>
    <div className='postcardInstancia'>
    {fakePosts.map((post)=>(
     <PostCards key={post.id} post={post} />   
    )      
    )}</div>
    </>
  )
}
