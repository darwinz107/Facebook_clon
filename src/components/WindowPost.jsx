import { useMemo } from "react"
import { CommentFullWindow } from "./CommentFullWindow";


export const WindowPost = ({post,peopleComment,setpeopleComment,showfullPost,moreLikes,likes}) => {

    const bloburl = useMemo(() =>{
        if(post.image){
           return URL.createObjectURL(post.image);
        }
        return null;
    } , [post.image])
  return (
    <>
    <div className="container-view-post">
        <button className="exit" onClick={()=>showfullPost()}>X</button>
        <div className="child-img"><img src={bloburl} alt="" /></div> 
        <div className="child-comment-like">
            <div className="child-coment">
              {peopleComment.map((comment,i)=> <CommentFullWindow key={i} peopleComment={comment}></CommentFullWindow>)}
              
              </div>
            <div className="like">{likes} likes
              <button  onClick={moreLikes}>👍</button>
            </div>
            
            <div className="barinput">
              
              <input type="text" />
              <button>send</button>
            </div>
        </div>
    </div>
    </>
  )
}
