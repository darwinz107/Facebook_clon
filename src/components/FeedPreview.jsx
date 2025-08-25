import React, { useEffect, useState } from 'react'
import { PostCards } from './PostCards';
import { StoriesPreview } from './StoriesPreview';
import { apiTestVideos, DeepseekNest, redtubeAPI } from '../connectionApi/Api';
import { SortMessages } from './SortMessages';
import { NewPost } from './NewPost';

export const FeedPreview = () => {
  
  const [links, setlinks] = useState([]) 
  const [limitMove, setlimitMove] = useState(0)
  const [showChat, setshowChat] = useState(false)
  const [chatOpen, setchatOpen] = useState(false)
  const [message, setmessage] = useState("")
  const [resIA, setresIA] = useState("")
  const [msjArray, setmsjArray] = useState([])
 

   useEffect(  () => {
   /* const idk = async ()=>{
       const datas = await redtubeAPI();
      
       const randoms = new Set();

          for (let index = 0; index < 3; index++) {
      
      randoms.add(Math.floor(Math.random() * (datas.videos.length-0))+0);
     };
       setlinks(randoms);
     console.log(links.toString());
    }
     idk();*/

     const idk2 = async() =>{
      const videos = await apiTestVideos();
     
      
     const randoms = new Set();
     const array = [];

     for (let index = 1; index < 7; index++) {
      const id = Math.floor(Math.random()* (videos.length - 1)+1);
      randoms.add(id);   
     };
     randoms.forEach((e)=>{
     array.push(e);
     })
     setlinks(array)
     
     }

     idk2();
   }, [])
   
   const moveStories = () =>{
     //document.querySelector('.container-flex').style.transform = "translateX(-500px)"
     setlimitMove((prev)=>Math.max(prev - 300,-(links.length - 2)*300));
    
   }

  const constBackStories = () =>{
    //document.querySelector('.container-flex').style.transform = "translateX(300px)"
    setlimitMove((prev)=>Math.min(prev+300,0));
   }


   const functionShowChat = () =>{
    setshowChat(!showChat);
   }

   const functionChatOpen = () =>{
    setchatOpen(!chatOpen);
   }

   const sendChefsito = async () =>{
    const response = await DeepseekNest(message);
    const msj = response.message.split("</think>");
    setresIA(msj[1].trim());
    setmsjArray(prev=>([...prev,{user:"Person",text:message},{user:"IA",text:msj[1].trim()}]));
   }
     const posts = [
    {
      id: 1,
      author: "Juan Pérez",
      avatar: "https://img.icons8.com/?size=100&id=7819&format=png&color=000000",
      content: "Hoy aprendí a hacer un feed con React 🚀",
      image: {type:"image/",name:"https://via.placeholder.com/500x300"},
      likes: 12,
      comments: 3,
      time: "Hace 2 horas"
    },
    {
      id: 2,
      author: "María López",
      avatar: "https://img.icons8.com/?size=100&id=7819&format=png&color=000000",
      content: "Mi nuevo dibujo 🎨",
      image: {type:"image/",name:"https://via.placeholder.com/500x300"},
      likes: 30,
      comments: 5,
      time: "Hace 4 horas"
    }
  ];

  const [fakePosts, setfakePosts] = useState([])
  
  return (
    <>
    <div className='container-stories'>
      <div className='container-flex'
      style={{
       transform: `translateX(${limitMove}px)`
      }}
      >
     {links.map((link)=>(
<StoriesPreview key={link} indice={link}/>
     ))}
   
    </div>
     <button className='btnNext'
 onClick={moveStories}>➡</button>  
 <button className='btnBack'
 onClick={constBackStories}
 >⬅</button> 
    </div>

    <NewPost setPosts={setfakePosts}></NewPost>
    <div className='postcardInstancia'>
    {fakePosts.map((post)=>(
     <PostCards key={post.id} post={post} />   
    )      
    )}</div>
    {!showChat&&(<div className='barChat' onClick={functionShowChat}>chats</div>)}
    {showChat&&( <div className='barChatShow'>
      <div className='x' onClick={functionShowChat}>x</div>
      <div className='chats'>julio69 ❌</div>
      <div className='chats'>baxter69 ❌</div>
      <div className='chats' onClick={functionChatOpen}>chefsitogpt ✅</div>
    </div>)}

    {chatOpen &&<div className='chatOpen'>
        <div className='chatUp'>
      <div>chefsitogpt</div>
      <div className='x' onClick={functionChatOpen}>x</div></div>
      {msjArray.map(
        (msj,i) => (
        
        <SortMessages i={i} emisor={msj}></SortMessages>)
      )}
      <div className='chatdown'>
        <input type="text"
        onChange={(e)=>setmessage(e.target.value)}
        />
           <button onClick={sendChefsito}>send</button>
      </div>
    </div>
}
    </>
  )
}
