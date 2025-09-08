import { useMemo, useState } from "react"
import { CommentFullWindow } from "./CommentFullWindow";


export const WindowPost = ({post,peopleComment,setpeopleComment,showfullPost,moreLikes,likes,deleteComment}) => {

   const [inputValue, setinputValue] = useState("")

   const addComment = () =>{
    setpeopleComment((prev)=>[...prev,{
      id:peopleComment.length +1,
    name: "Anonymous",
     avatar:"https://img.icons8.com/?size=100&id=7819&format=png&color=000000",
     comment: inputValue
    }])
   }

    const bloburl = useMemo(() =>{
        if(post.image){
           return URL.createObjectURL(post.image);
        }
        return null;
    } , [post.image])
   console.log("look at here!!!")
    console.log(post)
  return (
    <>
    <div className="container-view-post">
        <button className="exit" onClick={()=>showfullPost()}>X</button>
        <div className="child-img">{post.image.type == "image/jpg" || "image/webp" ?<img src={bloburl} alt="" />:<video controls={true} src={bloburl} style={{width:"100%", height:"100%"}}></video>}</div> 
        <div className="child-comment-like">
            <div className="child-coment">
              {peopleComment.map((comment)=> <CommentFullWindow key={peopleComment.id} peopleComment={comment} deleteComment={deleteComment}></CommentFullWindow>)}
              
              </div>
            <div className="like">{likes} likes
              <button  onClick={moreLikes}>👍</button>
            </div>
            
            <div className="barinput">
              
              <input type="text" 
              onChange={(e)=>setinputValue(e.target.value)
              }
              onKeyDown={(e)=>{
              if(e.key ===("Enter")){
                addComment();
              }
              }}
              />
              <button onClick={addComment}>send</button>
            </div>
        </div>
    </div>
    </>
  )
}
