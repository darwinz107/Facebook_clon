import { allPosts } from "../../connectionApi/Api";


export const chargePosts = async(setfakePosts)=>{
    
    const postss = await allPosts();
    //console.log(postss);
    setfakePosts([]);
    postss.map((e)=>{
 console.log(e);
      setfakePosts((prev) =>[...prev,{
      id: e.id,
      author: e.user.name,
      avatar: "https://img.icons8.com/?size=100&id=7819&format=png&color=000000",
      content: e.description,
      image: e.content,
      likes: 0,
      comments: 0,
      time: e.datePublish.split("T")[0]}]);
    });
 
  };