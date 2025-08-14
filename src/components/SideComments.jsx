import React from 'react'

export const SideComments = ({person}) => {
  return (
    <>
    <div className='profile-sideComments'>
        <img src={person.avatar} alt="" />
        <strong>{person.name}</strong>
    </div>
    <div>
        <div>{person.comment}</div>
    </div>
    </>
  )
}
