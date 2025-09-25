import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { PostCards } from './PostCards';
import { StoriesPreview } from './StoriesPreview';
import { apiTestVideos, createdRolNest, DeepseekNest, getIdToken, getInteraction, getMsjReceptors, getRoless, msjNotSeen, msjsNotSeenByUser, redtubeAPI, resgisterUserNest, updateLikeSeen, users } from '../connectionApi/Api';
import { SortMessages } from './SortMessages';
import { NewPost } from './NewPost';
import { SetVideos } from './SetVideos';
import { setVideoSrorie } from '../methods/setVideoSrorie';
import { UploadNewStorie } from './UploadNewStorie';
import { interactionUser } from '../methods/communication/interactionUser';
import { Footer } from './Footer';

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
  const [tokeId, settokeId] = useState()
  const [chatIds, setchatIds] = useState(0)
  const [accounts, setaccountss] = useState([])
  const [chatOpenBaxter, setchatOpenBaxter] = useState([]);
  const [roles, setroles] = useState(["admin","user"])
  const [isRol, setisRol] = useState(0);
  const [exists, setexists] = useState(true);
  const [messages, setmessages] = useState([]);
  const [msjNews, setmsjNews] = useState([]);
  const [firstPerfomance, setfirstPerfomance] = useState(false);
  const [lgtMsjNews, setlgtMsjNews] = useState(0);
  const [totalNotSeen, settotalNotSeen] = useState(0)
  const [lgtByUsers, setlgtByUsers] = useState([]);

  
    useEffect(  () => {

       const createUseDefault =async() =>{
        const countUsers = await users();
        if(countUsers.length ==0 && exists){
          console.log("Entro a countUser y tiene",countUsers.length);
          console.log(exists);
          await resgisterUserNest("anonymous",1111111111,"facebook@gmail.com",null,null);
         setexists(false); 
        } 
          
       }
       createUseDefault();
      
     
        const generateId = async()=>{
          try {
              const res = await getIdToken();
      console.log(res.request.id);
      if(res.request.id){
        settokeId(res.request.id);
      }
          } catch (error) {
            settokeId(1);
          }   
     }
      generateId();
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

   useEffect(() => {
    const account = async ()=>{
           const acc = await users();
           
           const arry = []
           acc.map((a)=>arry.push(false));
           setchatOpenBaxter(arry);}
           account();
   }, [])
   

useEffect(() => {
    const account = async ()=>{
          const acc = await users();
          setaccountss(acc);
         const arrNotSeen = await Promise.all(
          
          acc.map(async (a)=>{
            console.log(tokeId);
            const arrayNotSeen = await msjsNotSeenByUser(tokeId,a.id);
            
           return {id:a.id,lenghtMsj:arrayNotSeen.length};
          })
         );
         setlgtByUsers(arrNotSeen);
         console.log("I'd like you to meet janie, she's gonna be my new roommate!");
         console.log(arrNotSeen);
       };

       if(tokeId){ account();};
     
}, [tokeId,showChat,chatOpenBaxter]);



  const audioKz = useRef([]);

   useEffect(() => {
   const execMessages = async () =>{
   const msjRps = await getMsjReceptors(tokeId);
  console.log(msjRps);
 // console.log(audioKz);
  setmsjNews(msjRps);

  
  
    if(msjRps.length != lgtMsjNews && firstPerfomance){
      //console.log(msjRps.length);
      //console.log("msjLenght",lgtMsjNews);
      console.log("Reproduciendo audio");
      console.log(audioKz);
      audioKz.current.play();
      setlgtMsjNews(msjRps.length);
      
    }
    if(firstPerfomance == false){
      
      setfirstPerfomance(true);
      setlgtMsjNews(msjRps.length);
     
    }
   
   if(tokeId && chatIds){   
       const msjs= await getInteraction(tokeId,chatIds);
        setmessages(msjs);
    }else{
      console.log(tokeId,chatIds);
   }
    };
const interval = setInterval(execMessages, 3000); 
return ()=> clearInterval(interval);
  }, [tokeId,chatIds,lgtMsjNews]);

 useEffect(() => {

  const f_msjNotSeen =async()=>{
    const total = await msjNotSeen(tokeId);  
    settotalNotSeen(total.length);
  }
  f_msjNotSeen();
  console.log("f_msjNotSeen");
     
 }, [tokeId,totalNotSeen,chatOpenBaxter])
 
  
useEffect(() => {
 try {
  const existRol = async() =>{
    const cantRol = await getRoless();
    
    setisRol(cantRol.length);
  }
  existRol();
  if(isRol !=2){ const createRoles = async(rol)=>{
        console.log("Join in createRoles")
       const msj = await createdRolNest(rol);
       console.log("msj rol: ",msj);
       }
    roles.map((r)=>{
      console.log(r);
createRoles(r);
    });
   setisRol(false); 
  }
 } catch (error) {
  console.log("Rol alreay exist!")
 }
  
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
    console.log(accounts[0].name);
   }

   const functionChatOpen = () =>{
    setchatOpen(!chatOpen);
   }


const receptor2 = useRef(null);
   
    const functionChatOpenBaxter = async (id,boolId) =>{
    console.log("I just joined to functionChatOpenBaxter")
    console.log(id);
    setchatIds(id);
    const copy = [...chatOpenBaxter]
    
    copy[boolId] = !copy[boolId];
    console.log(boolId);
    console.log(copy[boolId]);
    setchatOpenBaxter(copy);
    console.log(chatOpenBaxter);
   
    if(id){
    console.log("I just joined to functionChatOpenBaxter in the if")
    console.log(id);
    const data = await getInteraction(tokeId,id);
    if(data)
     setmessages(data);
     updateLikeSeen(tokeId,id);
    }
     
    }

    useEffect(() => {
      console.log("xdxdxcxcds")
      console.log(chatOpenBaxter)
    }, [chatOpenBaxter])
    

     const [chatOpenAnonymous, setchatOpenAnonymous] = useState(false);
    const functionChatOpenAnonymous = async (id) =>{
    setchatIds(id);
    setchatOpenAnonymous(!chatOpenAnonymous);
    
    /*if(receptor2){
    const data = await getInteraction(tokeId,receptor2.current.dataset.id);
     setmessages(data);
     console.log(data);
    }*/
     
    }

    useEffect( () => {

    

      const exefunction=async ()=>{if(chatOpenAnonymous){
      console.log(tokeId);
         const data = await getInteraction(tokeId,chatIds);
     setmessages(data);
     console.log(data);
      }}
      exefunction();
    }, [chatOpenAnonymous])
    

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


const receptor = useRef([]);
const handleInteraction =  async (id) =>{
//console.log(receptor.current.__reactFiber$9sappbzwypi.key);
const registerInter =  await interactionUser(tokeId,id,message?message:"empty");
console.log(tokeId,chatIds);
const msjs= await getInteraction(tokeId,chatIds);
setmessages(msjs);
console.log(registerInter);
console.log(msjs);
}

/*useEffect(() => {
 console.log(messages)
}, [messages]);
*/

  return (
    <>
    <audio src="src\assets\audio\smite-nene-kappa-heeeeeeey_Xwqt5nG.mp3" ref={audioKz} className='audioKz' controls={true}>kz</audio>
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
    {!showChat&&(<div className='barChat' onClick={functionShowChat}>chats {totalNotSeen}</div>)}
    {showChat&&(
    
    <div className='barChatShow'>
      <div className='x' onClick={()=>functionShowChat()}>x</div>
      <div className='chats' onClick={functionChatOpen}>chefsitoGpt</div>
      {accounts.map((acct,boolId)=>{
            
        return(
        <div className='chats' onClick={()=>functionChatOpenBaxter(acct.id,boolId)}>{acct.name ?acct.name:"xdxd"} <span>{lgtByUsers[boolId].lenghtMsj}</span></div>
      )})}
     
    </div>)}

    {chatOpen &&<div className='chatOpen'>
        <div className='chatUp'>
      <div>chefsitogpt</div>
      <div className='x' onClick={functionChatOpen}>x</div></div>
      {msjArray.map(
        (msj,i) => (
        
        <SortMessages i={i} emisor={msj} id={0}></SortMessages>)
      )}
      <div className='chatdown'>
        <input type="text"
        onChange={(e)=>setmessage(e.target.value)}
        />
           <button onClick={sendChefsito}>send</button>
      </div>
    </div>
}

{accounts.map((acc,i)=> (chatOpenBaxter[i] &&<div key={i} className='chatOpen'>
        <div className='chatUp'>
      <div>{acc.name}</div>
      <div className='x' onClick={()=>functionChatOpenBaxter(null,i)}>x</div></div>
      {messages.map(
        (msj,i) => (
        
        <SortMessages i={i} emisor={msj} id={tokeId}></SortMessages>)
      )}
      <div className='chatdown'>
        <input type="text"
        onChange={(e)=>setmessage(e.target.value)}
        />
           <button onClick={()=>handleInteraction(acc.id)}>send</button>
      </div>
    </div>
))}


    </>
  )
}
