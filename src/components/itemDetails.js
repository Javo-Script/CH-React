import { useParams, Link } from "react-router-dom"
import { useEffect, useState } from "react";
import { CartContext } from "../context/cartContext";
import {recipesList} from "../dataBase";
import ItemCount from "./itemCount";

export default function ItemDetails () {
  const [recipe, setRecipe] = useState([]);
  const {id} = useParams();

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
  }, []);

  console.log(recipe)

  return(
    <div className="main-container">
      <header>
        <img className="header-img" src={recipe.img}></img>
        <h1>{recipe.title}</h1>
      </header>
      <div>
        <Link to={`/recipes`} className="go-back">Volver a las recetas</Link>
        <p className="detail-description">{recipe.description}</p>
        <p className="price">{recipe.price}</p>
        <p className="stock">{recipe.stock}</p>
          <ItemCount stock={recipe.stock} initial="0" id={recipe.id}/>        
      </div>
    </div>
  )
}