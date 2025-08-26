import { useEffect, useState } from "react"


export const NewPost = ({setPosts}) => {

    const [text, settext] = useState("")
    const [file, setfile] = useState("")

    const generateObjet = () =>{
    
       setPosts(prev => [...prev, {
      id: Date.now().toString(),
      author: "Anonymous",
      avatar: "https://img.icons8.com/?size=100&id=7819&format=png&color=000000",
      content: text,
      image: file,
      likes: 0,
      comments: 0,
      time: "Hace 2 horas"
      
    }]);
    
    
       
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
