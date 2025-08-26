import React, { useState } from 'react'

export const CommentFullWindow = ({peopleComment,deleteComment}) => {
    console.log(peopleComment)
    const [showOption, setshowOption] = useState(false);
    const validateBarOption = () => setshowOption(!showOption);
  return (
   <>
   <div className='container-full-comment'>
    <div className='child-comments-full-w'>
            
        <img className='avatar' src={peopleComment.avatar} alt="" />
         <strong>{peopleComment.name}</strong>
         <div className='child-bar-option'>
         <button className='btnOption'  onClick={validateBarOption}>...</button>
         {showOption &&(
          <div className='child-options'>
            <button>update</button>
            <button onClick={()=>deleteComment(peopleComment.id)}>delete</button>
          </div>
         )}
         </div>
    </div>
       {peopleComment.comment}
   </div>
   </>
  )
}
