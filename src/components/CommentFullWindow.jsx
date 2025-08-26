import React from 'react'

export const CommentFullWindow = ({peopleComment}) => {
    console.log(peopleComment)
  return (
   <>
   <div className='container-full-comment'>
    <div className='child-comments-full-w'>
            
        <img className='avatar' src={peopleComment.avatar} alt="" />
         <strong>{peopleComment.name}</strong>
    </div>
       {peopleComment.comment}
   </div>
   </>
  )
}
