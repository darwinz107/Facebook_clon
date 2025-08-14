import React from 'react'
import { useEffect } from 'react';
import { geminiNest } from '../connectionApi/Api';

export const PostCards = ({post}) => {
const postDiv = `postDiv${post.id}`;

   useEffect(  () => {
     
    const generateImageIA = async () =>{
      
     
      const json = await geminiNest("Generate any image");
    
       const img = document.createElement('img');
       img.src =`data:image/jpeg;base64,${json.binary}`;
       
       
       document.getElementById(postDiv).appendChild(img);
      console.log(json);
      };

       generateImageIA();
       
     
   }, []);
   

    

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
</div>
    </div>
    </>
  )
}
