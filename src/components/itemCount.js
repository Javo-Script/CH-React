import {useContext, useState} from "react"
import {CartContext} from '../context/cartContext';

export default function ItemCount ({stock, initial, id}){
    const [count, setCount] = useState(parseInt(initial));
    /*const [itemId, setItemId] = useContext(CartContext);
    const [itemQuantity, setItemQuantity] = useContext(CartContext);

    console.log(itemId, itemQuantity);*/

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

    const onAdd = () => {
    }
    const disabled = count<1 ? true : false;
  
    return(
        <div className="container">
          <div className="row">
            <button className="incrementals btn" onClick={decrease}>-</button>
            <p className="count">{count}</p>
            <button className="incrementals btn" onClick={increase}>+</button>
          </div>
          <div className="row">
            <button className="add btn" onClick={onAdd} disabled={disabled} >Add to cart</button>
          </div>
        </div>
  )
}