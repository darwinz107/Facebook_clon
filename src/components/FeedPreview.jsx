import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { PostCards } from './PostCards';
import { StoriesPreview } from './StoriesPreview';
import { apiTestVideos, DeepseekNest, redtubeAPI } from '../connectionApi/Api';
import { SortMessages } from './SortMessages';
import { NewPost } from './NewPost';
import { SetVideos } from './SetVideos';
import { setVideoSrorie } from '../methods/setVideoSrorie';
import { UploadNewStorie } from './UploadNewStorie';
import { interactionUser } from '../methods/communication/interactionUser';

export const FeedPreview = () => {
  

  const [limitMove, setlimitMove] = useState(0);
  const [showChat, setshowChat] = useState(false);
  const [chatOpen, setchatOpen] = useState(false);
  const [message, setmessage] = useState("");
  const [resIA, setresIA] = useState("");
  const [msjArray, setmsjArray] = useState([]);
  const [showwindowStories, setshowwindowStories] = useState(false);
  const [widthVideo, setwidthVideo] = useState("");
  const [limitMove2, setlimitMove2] = useState(0);
  const [videosStories, setvideosStories] = useState([]);
  

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
    const  random = []
     for (let index = 1; index < 7; index++) {
      const id = Math.floor(Math.random()* (videos.length - 1)+1);
      console.log(`This happen in useefect #${index} :${videos[id].videoUrl}`);
      random.push(videos[id].videoUrl);
     };
     setvideosStories(random);   
     }

     idk2();

   }, []);

    
   const [positionBtnStorie, setpositionBtnStorie] = useState(0)

   useEffect(() => {
    console.log("exec usefect!!!");

   if(clickeo){
      setpositionBtnStorie((prev)=>prev + statuChild.current.clientWidth);
   }

   if(clickeo==false){
     setpositionBtnStorie((prev)=>prev - statuChild.current.clientWidth);
   }

   }, [limitMove])
   
   
   const moveStories = () =>{
    //alert(refContainerStories.current.clientWidth)
     //document.querySelector('.container-flex').style.transform = "translateX(-500px)"
     setlimitMove((prev)=>Math.max(prev - statuChild.current.clientWidth,-(videosStories.length)*statuChild.current.clientWidth));
    console.log(limitMove);
   }

  const constBackStories = () =>{
    //document.querySelector('.container-flex').style.transform = "translateX(300px)"
    setlimitMove((prev)=>Math.min(prev+statuChild.current.clientWidth,0));
   }

   const moveStatus = () =>{
    for (let index = 0; index < videosStories.length; index++) {
      reff.current[index].pause();
      reff.current[index].currentTime = 0;
    }
    setlimitMove2((prev)=>Math.max(prev - reff.current.clientWidth,-(videosStories.length -1)*reff.current.clientWidth));
    
   }

   const backStatus = () =>{
   for (let index = 0; index < videosStories.length; index++) {
    reff.current[index].pause();
    reff.current[index].currentTime = 0;
   }
    setlimitMove2((prev)=>Math.min(prev + reff.current.clientWidth,0));
    
   }


   const functionShowChat = () =>{
    setshowChat(!showChat);
   }

   const functionChatOpen = () =>{
    setchatOpen(!chatOpen);
   }


   const [chatOpenBaxter, setchatOpenBaxter] = useState(false);
    const functionChatOpenBaxter = () =>{
    setchatOpenBaxter(!chatOpenBaxter);
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
 const reff = useRef([]);
 const refContainerStories = useRef(null);
const [refUploadStorie, setrefUploadStorie] = useState(null);

const containerFlex = useRef(null);
const statuChild = useRef(null);

const [adjustContainerFlex, setadjustContainerFlex] = useState(0);

const handleContainerStoriesNew = () =>{
   const containerStorie = statuChild.current.clientWidth;
   setadjustContainerFlex((prev)=>prev+containerStorie)
}

const uploadStorie = () =>{
refUploadStorie.current.click();
 
}

const [clickeo, setclickeo] = useState(null);
const receptor = useRef(null);

const handleInteraction =  async () =>{
const res = await interactionUser(receptor.current.__reactFiber$utr1x2upszb.key,8,message)
alert(res);
}

  return (
    <>
    <div ref={refContainerStories} className='container-stories'>
     <UploadNewStorie setvideoStorie={setvideosStories} reffnewStorie={setrefUploadStorie} adjustContainerFlex={handleContainerStoriesNew}></UploadNewStorie>
      <div ref={containerFlex} className='container-flex'
      style={{
       transform: `translateX(${limitMove}px)`,
       width:`calc(175% + ${adjustContainerFlex}px)`
      }}
      >
      <div ref={statuChild} className="statu-child-img"><img onClick={uploadStorie} src="public\circle-arrow-up-solid-full.svg" alt="" srcset="" /></div> 
     {videosStories.map((link,index)=>(
<StoriesPreview key={index} url={link} setshowwindowstorie={setshowwindowStories}/>
     ))}
  
  
 <button className='btnBack'
 onClick={()=>{
  setclickeo(false);
  constBackStories(); }}
  style={{
    left:`calc(0% + ${positionBtnStorie}px)`
  }}
 >⬅</button> 

    </div>
  <button style={{
    left:"94.8%"
  }} className='btnNext'
 onClick={()=>{
  setclickeo(true);
  moveStories();
 }}>➡</button>   
    </div>

      <div className={`container-window-storie ${showwindowStories ? "active":""}`}>
      <button className='x' onClick={()=>{setshowwindowStories(false)
      console.log(reff)
     
      for (let index = 0; index < videosStories.length; index++) {
       reff.current[index].pause();
       reff.current[index].currentTime =0;
        
      }
      }}>X</button>
       <div className='storie-arrow' id='arrow-right' onClick={moveStatus}>➡</div>
       <div className='storie-arrow' id='arrow-left' onClick={backStatus}>⬅</div>
      
      <div className='container-child-storie'>
       
      
         <div ref={reff} className='child-window-storie' style={
          {
            transform:`translateX(${limitMove2}px)`
          }
         }>
          {videosStories.map((link,index)=>
            
            (
            
            <SetVideos key={index} indice={link} sethandlevd={(ref)=>{
              if(reff.current){
                reff.current[index]=ref
              }
              
            }
  }></SetVideos>
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
      <div className='x' onClick={()=>functionShowChat()}>x</div>
      <div className='chats'>julio69 ❌</div>
      <div className='chats' onClick={functionChatOpenBaxter}>baxter69 ✅</div>
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

 {chatOpenBaxter &&<div ref={receptor} key={7} className='chatOpen'>
        <div className='chatUp'>
      <div>baxter69</div>
      <div className='x' onClick={functionChatOpenBaxter}>x</div></div>
      {msjArray.map(
        (msj,i) => (
        
        <SortMessages i={i} emisor={msj}></SortMessages>)
      )}
      <div className='chatdown'>
        <input type="text"
        onChange={(e)=>setmessage(e.target.value)}
        />
           <button onClick={handleInteraction}>send</button>
      </div>
    </div>
}
    </>
  )
}
