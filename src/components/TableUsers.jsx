import React from 'react'

export const TableUsers = ({users}) => {
  return (
    <>
   <div className='child-pdf'>
                    <div className='child-pdf-row'>
                        <div>{users.name}</div>
                        <div>{users.cellphone}</div>
                        <div>{users.gender}</div>
                        
                        </div> 
                        </div>
    </>
  )
}
