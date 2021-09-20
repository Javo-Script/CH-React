import {useState} from "react"
import { Link } from "react-router-dom";

export default function ItemCount ({stock, initial, id, onAdd, hidden}){
    const [count, setCount] = useState(parseInt(initial));

    const increase = () => {
      if (count < stock) {
        setCount(count + 1)
      }
    };

    const decrease = () => {
      if (count > 0){
        setCount( count - 1)
      }
    };
    const disabled = count<1 ? true : false;
  
    return(
        <div className="container">
          <div className="row">
            <button className="incrementals btn" onClick={decrease}>-</button>
            <p className="count">{count}</p>
            <button className="incrementals btn" onClick={increase}>+</button>
          </div>
          <div className="row">
            <button className="add btn" onClick={()=>onAdd(id, count)} disabled={disabled} >Add to cart</button>
            <Link to="/cart"><button className="purchase btn" hidden={hidden} >Ir al carrito</button></Link>            
          </div>
        </div>
  )
}