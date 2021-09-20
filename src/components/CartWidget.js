import { Link } from "react-router-dom";
import cartIcon from '../img/cart-icon.svg';


function CartWidget (){

  return(
      <Link to={'/cart'}><img src={cartIcon} className="cart-icon" alt="cart icon" /></Link>      
    )
}

export default CartWidget