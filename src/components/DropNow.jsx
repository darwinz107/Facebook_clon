import React from 'react'

export const DropNow = ({gender,setgender}) => {

const handlerSelect = (e) =>{
setgender(e.target.value);
}

  return (
    <>
    <select className="dropDown" id="dropDown" value={gender} onChange={(e)=>handlerSelect(e)}>
      <option value="">---Select a gender---</option>
      <option value="Male">Male</option>
      <option value="Female">Female</option>
      <option value="Other">Other</option>

    </select>
    </>
  )
}
