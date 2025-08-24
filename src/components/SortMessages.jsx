import { useEffect, useState } from "react"
import { DeepseekNest } from "../connectionApi/Api"


export const SortMessages = ({i,emisor}) => {
  
    
    return (
        <>
    <div
    key={i}
    className={emisor.user === "Person" ? "chefsito": "userIA"}
    >{emisor.text}</div>
        </>
  )
}
