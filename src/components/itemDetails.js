import { useParams, Link } from "react-router-dom"
import { useEffect, useState, useContext } from "react";
import {recipesList} from "../dataBase";
import ItemCount from "./itemCount";
import { CartContext } from "../context/cartContext";

export default function ItemDetails () {
  const [recipe, setRecipe] = useState([]);
  const [hidden, setHidden] = useState(true);
  const {id} = useParams();
  const {cartItems, setCartItems} = useContext(CartContext); 
  

  const onAdd = (id, count) => {
    let result = false;
    let items = cartItems;
    if(items.length > 0){
      for(let i= 0; i<items.length; i++){
        if(items[i].id=== id){
          result = {
            "match": true,
            "index": i
          }
        }
      }

      if(result.match===true){
        let i = result.index;
        items[i].quantity+=count;
      } else {
        let newItem = {
          "id": id,
          "quantity": count
        }
        items.push(newItem);
      }
    } else {
      let newItem = {
        "id": id,
        "quantity": count
      }
      items.push(newItem);
    }
    
    setCartItems(items);
    console.log(cartItems);

    setHidden(false);
  }

  useEffect(()=>{
    new Promise((resolve, reject) => {
      setTimeout(
        () => resolve(recipesList.filter((recipe) => recipe.id === id)),
        2000
      );
    }).then(
      (data) => setRecipe(data[0])
    )    
    .catch((error) =>{
      console.log("err", error);
    })
  },[]);

  return(
    <div className="main-container">
      <header>
        <img className="header-img" src={recipe.img} alt={"imagen de la receta"}></img>
        <h1>{recipe.title}</h1>
      </header>
      <div>
        <Link to={`/recipes`} className="go-back">Volver a las recetas</Link>
        <p className="detail-description">{recipe.description}</p>
        <p className="price">{recipe.price}</p>
        <p className="stock">{recipe.stock}</p>
          <ItemCount stock={recipe.stock} initial="0" id={recipe.id} onAdd={onAdd} hidden={hidden}/>
      </div>
    </div>
  )
}