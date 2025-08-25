import React, { useState } from 'react'
import { useEffect } from 'react';
import { geminiNest } from '../connectionApi/Api';
import { SideComments } from './sideComments';
import { WindowLogin } from './WindowLogin';


export const PostCards = ({post}) => {

const peopleC = [
/*  {
   id:1,
   name:'Ana Lopez',
    avatar: "https://img.icons8.com/?size=100&id=7819&format=png&color=000000",
   comment: 'This is amazing!'
  },
  {
id:2,
   name:'Alejandro Zapato',
    avatar: "https://img.icons8.com/?size=100&id=7819&format=png&color=000000",
   comment: 'I love your post'
  }*/];

const postDiv = `postDiv${post.id}`;
const [comment, setcomment] = useState("")
const [peopleComment, setpeopleComment] = useState(peopleC)
const [post1, setpost] = useState(post.likes)
  

  const addComment = () =>{
  setpeopleComment(prev => [...prev,{id:peopleComment.length +1,
    name: "Anonymous",
     avatar:"https://img.icons8.com/?size=100&id=7819&format=png&color=000000",
     comment: comment
  }])

  
  }

  const moreLikes = () =>{
    setpost(post1+1);
  }
 
  
/*
   useEffect(  () => {
     
    const generateImageIA = async () =>{
      
     
      const json = await geminiNest("Generate any image from smite the videogame");
    
       const img = document.createElement('img');
       img.src =`data:image/jpeg;base64,${json.binary}`;
       
       
       document.getElementById(postDiv).appendChild(img);
      console.log(json);
      };

       generateImageIA();
       
     
   }, []);*/
   
  const [comments, setcomments] = useState(false);
  
  const showComments = () => setcomments(!comments);
    
  const [inputComment, setinputComment] = useState(false);

  const showInputComment = () => setinputComment(!inputComment);

  const [showWindowToLogin, setshowWindowToLogin] = useState(false)
  const sshowWindowToLogin = () => setshowWindowToLogin(true);
  const [timer, settimer] = useState(null)

 const handleMouseOver = (e) =>{
   e.preventDefault();
   const id = setTimeout(() => {
      e.target.play();
   }, 3000);
   settimer(id);
 }
 
 const handleMouseOut = (e) =>{
 
   clearTimeout(timer);
   e.target.pause();
   e.target.currentTime = 0;
 }

  return (
    <>
    <div
    className='postcard-div'
    >
    <div className='profile-div'>
        <img src={post.avatar} alt={post.author} />

        <div>
            <strong>{post.author}</strong>
            <div>{post.time}</div>
        </div>
    </div>
    <div className='post-div' id={postDiv}>
   
    <div>{post.content}</div>
    
     {post && (post.image.type.startsWith("image/")?(<img src={URL.createObjectURL(post.image)}></img>):(<video controls={true} src={URL.createObjectURL(post.image)} onMouseOver={(e)=>handleMouseOver(e)} onMouseOut={(e)=>handleMouseOut(e)}></video>))}
</div>
   <div className='countLikes'>
    
    <div>{post1} likes</div>
    <div className='side-comment'><button onClick={
        showComments}>{peopleComment.length} comments</button>
        {comments &&(
         <div className='side-comment-child'>
      {peopleComment.map((person) =>(
       <SideComments key={person.id} person={person}></SideComments>
      )
      )}
      </div>
    )}
         </div>
   </div>
   <div className='navInteraction'>
    <div>
      <button onClick={moreLikes}>👍 Like</button>    
       <button onClick={showInputComment}>🗨 comment</button>             
    </div>
     {inputComment &&(
      <div>
        <input type="text"
        onChange={(e)=> setcomment(e.target.value)}
        />
        <button onClick={addComment}>send</button>
      </div>
     )}
   </div>


    
    </div>
       {showWindowToLogin &&(
<WindowLogin showLogin={showWindowToLogin}  close={setshowWindowToLogin}></WindowLogin>
    )}
    </>
  )
}
