import React from 'react'
import { PostCards } from './PostCards';
import { StoriesPreview } from './StoriesPreview';

export const FeedPreview = () => {
  
     const fakePosts = [
    {
      id: 1,
      author: "Juan Pérez",
      avatar: "https://img.icons8.com/?size=100&id=7819&format=png&color=000000",
      content: "Hoy aprendí a hacer un feed con React 🚀",
      image: "https://via.placeholder.com/500x300",
      likes: 12,
      comments: 3,
      time: "Hace 2 horas"
    },
    {
      id: 2,
      author: "María López",
      avatar: "https://img.icons8.com/?size=100&id=7819&format=png&color=000000",
      content: "Mi nuevo dibujo 🎨",
      image: "https://via.placeholder.com/500x300",
      likes: 30,
      comments: 5,
      time: "Hace 4 horas"
    }
  ];

  return (
    <>
    <StoriesPreview/>
    {fakePosts.map((post)=>(
     <PostCards key={post.id} post={post} />   
    )
        
    )}
    </>
  )
}
