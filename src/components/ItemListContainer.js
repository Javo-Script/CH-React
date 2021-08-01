import React, {useState} from "react"
import "./css/itemListContainer.css"

export default function ItemCount (){
  const [count, setCount] = useState(0);

  return(
    <>
    <div className="container">
      <div className="row">
        <button className="incrementals btn" onClick={()=>{setCount(count -1)}}>-</button>
        <p className="count">{count}</p>
        <button className="incrementals btn" onClick={()=>{setCount(count + 1)}}>+</button>
      </div>
      <div className="row">
        <button className="add btn">Add to cart</button>
      </div>
    </div>
    </>
  )
}