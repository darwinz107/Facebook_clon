import React, { useState } from 'react'
import { useEffect } from 'react';
import { geminiNest, updatePosts } from '../connectionApi/Api';
import { SideComments } from './SideComments';
import { WindowLogin } from './WindowLogin';
import { ControlVideo } from './ControlVideo';
import { WindowPost } from './WindowPost';
import { chargePosts } from '../methods/post/SavePost';


export const PostCards = ({post,deletepost,setfakePosts}) => {




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
const [showPostFull, setshowPostFull] = useState(false)

const showfullPost = ()=> setshowPostFull(!showPostFull);

const [showOptions, setshowOptions] = useState(false);
const [inputUpdate, setinputUpdate] = useState(false);
const [textPost, settextPost] = useState("");

const changeStateOption = () => setshowOptions(!showOptions);


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
 
  const deleteComment = (id) =>{
    setpeopleComment(prev => prev.filter((post)=> post.id !==id));
  }

  const updateDescriptionPost = async () =>{

    const msjUpdated = await updatePosts(post.id,textPost);
    console.log(msjUpdated);
    chargePosts(setfakePosts);
    alert(msjUpdated.msj);
    setinputUpdate(false);
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
  
  const [continuePost, setcontinuePost] = useState(false);
  const [showWarning, setshowWarning] = useState(false);


  useEffect(() => {
   const validate = () =>{
    if(post.image){
      setcontinuePost(true);
      setshowWarning(false);
    }
    else{
      setcontinuePost(false);
      setshowWarning(true);
    }
   }
   validate();
  }, [post.image])
  
   const pressOk = () =>{
    setshowWarning(false)
   }

  return (
    <>
   {continuePost && ( <div
    className='postcard-div'
    >

    <div className='profile-div'>
        <img src={post.avatar} alt={post.author} />

        <div>
            <strong>{post.author}</strong>
            <div>{post.time}</div>
        </div>
        
        <div className='options'><button onClick={changeStateOption}>...</button>
        {showOptions&& <div className='child-options'>
          <button onClick={()=>{
            settextPost(post.content);
            setinputUpdate(true);}}>update</button>
          <button onClick={()=> deletepost(post.id)}>delete</button>
        </div>}
        </div>
    </div>
  <div className='post-div' id={postDiv}>
   
   {!inputUpdate ?<div>{post.content}</div> : <div><input type="text" value={textPost} onChange={(e)=>settextPost(e.target.value)}/> <button onClick={updateDescriptionPost}>Ok</button> <button onClick={()=>setinputUpdate(false)}>Cancel</button></div>} 
    
     <ControlVideo file={post.image} showfullPost={showfullPost}></ControlVideo>
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


    
    </div>)}

    {showWarning &&(
  <div className='container-msjWarning'>
            <div>
                <h2>Must add an image or video</h2>
                <button onClick={pressOk}>Ok</button>
            </div>
        </div>
)
  } 
       {showWindowToLogin &&(
<WindowLogin showLogin={showWindowToLogin}  close={setshowWindowToLogin}></WindowLogin>
    )}

    {showPostFull &&(
      <WindowPost post={post} peopleComment={peopleComment} setpeopleComment={setpeopleComment} showfullPost={showfullPost} moreLikes={moreLikes} likes={post1} deleteComment={deleteComment}></WindowPost>
    )

    }
    </>
  )
}
