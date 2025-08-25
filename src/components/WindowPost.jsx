import { useMemo } from "react"


export const WindowPost = ({post,peopleComment,setpeopleComment,showfullPost}) => {

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
            xdxd
            <button className="like">👍</button>
            <div>
              
              <input type="text" />
              <button>send</button>
            </div>
        </div>
    </div>
    </>
  )
}
