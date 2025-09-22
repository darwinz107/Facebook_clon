import { useEffect, useState } from "react"
import { DeepseekNest } from "../connectionApi/Api"


export const SortMessages = ({i,emisor,id}) => {
  
    console.log(emisor);
   
   if(id){return (
        <>
    <div
    key={i}
    className={emisor.emisorId.id ==id? "chefsito": "userIA"}
    >{emisor.text ?emisor.text:emisor.message}</div>
        </>
  )
  
}else{return (
        <>
    <div
    key={i}
    className={emisor.user === "Person"? "chefsito": "userIA"}
    >{emisor.text ?emisor.text:emisor.message}</div>
        </>
  )}
} 
