import { useEffect, useState } from "react"
import { convertToBase64 } from "../methods/ConvertToBase64"
import { createPost } from "../connectionApi/Api"
import { chargePosts } from "../methods/post/SavePost"


export const NewPost = ({setPosts,tokeId}) => {

    const [text, settext] = useState("")
    const [file, setfile] = useState("")
    const [textPlane, settextPlane] = useState("");

  // const savePost = await create


    const generateObjet = async () =>{
  

   const fileInBase64 = await convertToBase64(file);
  // settextPlane(fileInBase64);
   // console.log(fileInBase64);

      const postCreated = await createPost(tokeId,text,fileInBase64); 
   console.log(postCreated);

   chargePosts(setPosts);
    }


  return (
    <>
   <div className="container-new-post">
    <input type="text"
    className="inpText" 
    placeholder="Write anything!"
    onChange={(e)=>settext(e.target.value)}
    />
 
    <button onClick={()=> generateObjet()}>Post</button>
       <input type="file" className="file" id=""
       accept="image/*,video/*" 
    onChange={(e)=>setfile(e.target.files[0])}
    />
    
   </div>
   
    </>
  )
}
