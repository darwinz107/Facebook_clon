import { useEffect, useState } from "react"
import { DeepseekNest } from "../connectionApi/Api"


export const SortMessages = ({i,emisor,id}) => {
  
    console.log(emisor);
    return (
        <>
    <div
    key={i}
    className={emisor.user === "Person" || emisor.emisorId ==id? "chefsito": "userIA"}
    >{emisor.text}</div>
        </>
  )
}
