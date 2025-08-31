import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { PostCards } from './PostCards';
import { StoriesPreview } from './StoriesPreview';
import { apiTestVideos, DeepseekNest, redtubeAPI } from '../connectionApi/Api';
import { SortMessages } from './SortMessages';
import { NewPost } from './NewPost';
import { SetVideos } from './SetVideos';

export const FeedPreview = () => {
  
  const [links, setlinks] = useState([]) ;
  const [limitMove, setlimitMove] = useState(0);
  const [showChat, setshowChat] = useState(false);
  const [chatOpen, setchatOpen] = useState(false);
  const [message, setmessage] = useState("");
  const [resIA, setresIA] = useState("");
  const [msjArray, setmsjArray] = useState([]);
  const [showwindowStories, setshowwindowStories] = useState(false);
  const [widthVideo, setwidthVideo] = useState("");
  const [limitMove2, setlimitMove2] = useState(0);

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


   }, []);


   
   
   const moveStories = () =>{
     //document.querySelector('.container-flex').style.transform = "translateX(-500px)"
     setlimitMove((prev)=>Math.max(prev - 300,-(links.length - 2)*300));
    
   }

  const constBackStories = () =>{
    //document.querySelector('.container-flex').style.transform = "translateX(300px)"
    setlimitMove((prev)=>Math.min(prev+300,0));
   }

   const moveStatus = () =>{
    setlimitMove2((prev)=>Math.max(prev - reff.current.clientWidth,-(links.length -1)*reff.current.clientWidth));
    
    alert(reff.current.clientWidth);
   }

   const backStatus = () =>{
    setlimitMove2((prev)=>Math.min(prev + reff.current.clientWidth,0));
    console.log(limitMove2);
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
  
  const deletePost = (id) =>{
    
     setfakePosts(prev=> prev.filter((prev)=> prev.id !== id));
  }
 const reff = useRef(null);
useLayoutEffect(() => {
  if (!reff.current) return;
  const observer = new ResizeObserver(entries =>{
    for(let entry of entries){
      setwidthVideo(entry.current.width);
    }
  });

  observer.observe(reff.current);

  return () => observer.disconnect();
}, [])

 
  console.log(widthVideo);
 

  return (
    <>
    <div className='container-stories'>
      <div className='container-flex'
      style={{
       transform: `translateX(${limitMove}px)`
      }}
      >
     {links.map((link)=>(
<StoriesPreview key={link} indice={link} setshowwindowstorie={setshowwindowStories}/>
     ))}
   
    </div>
     <button className='btnNext'
 onClick={moveStories}>➡</button>  
 <button className='btnBack'
 onClick={constBackStories}
 >⬅</button> 
    </div>

      <div className={`container-window-storie ${showwindowStories ? "active":""}`}>
      <button className='x' onClick={()=>setshowwindowStories(false)}>X</button>
       <div className='storie-arrow' onClick={moveStatus}>➡</div>
        <div className='storie-arrow' onClick={backStatus}>⬅</div>
      
      <div className='container-child-storie'>
       
      
         <div ref={reff} className='child-window-storie' style={
          {
            transform:`translateX(${limitMove2}px)`
          }
         }>
          {links.map((link,index)=>(
            <SetVideos key={index} indice={link}></SetVideos>
          ))}
         </div>
        
      </div>
        
    </div>
    
    <NewPost setPosts={setfakePosts} ></NewPost>

     <div className='postcardInstancia'>
    { fakePosts.map((post)=>(
     <PostCards key={post.id} post={post} deletepost={deletePost} />   
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
