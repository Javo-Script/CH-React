import React, {useState} from "react"

export default function ItemCount (props){
    const [count, setCount] = useState(props.initial);
    const [stock, setStock] = useState(props.itemsLeft);
    
    const onAdd = () => {
      setStock(stock -count)
      console.log(stock)
    }
  
    return(
      <>
      <div className="container">
        <div className="row">
          <button className="incrementals btn" onClick={()=>{
            if(count > 0) {
              setCount(count -1)
            } else {
              console.log('El valor no puede ser menor a 0')
            }}}>-</button>
          <p className="count">{count}</p>
          <button className="incrementals btn" onClick={()=>{
            if(count < stock) {
              setCount(count +1)
            } else {
              console.log('El valor no puede ser mayor al stock')
            }}}>+</button>
        </div>
        <div className="row">
          <button className="add btn" onClick={()=> onAdd()}>Add to cart</button>
        </div>
      </div>
      </>
  )
}