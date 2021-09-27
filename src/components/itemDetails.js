import { useParams, Link } from "react-router-dom"
import { useEffect, useState, useContext } from "react";
import {getFirestore, collection, getDocs} from 'firebase/firestore';
import {getData} from '../firebase'
import ItemCount from "./itemCount";
import { CartContext } from "../context/cartContext";

export default function ItemDetails () {
  const {cartItems, setCartItems} = useContext(CartContext);
  const {id} = useParams();
  const [hidden, setHidden] = useState(true);

  const [recipesData, setRecipesData] = useState([]);
  const [recipe, setRecipe] = useState([]);

  useEffect(()=>{
    const getRecipesData = async () => {
      const recipesCollection = collection(getData(), 'recetas');
      const recipesSnapshot = await  getDocs(recipesCollection);
      const recipesList = recipesSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setRecipesData(recipesList);
    };

    getRecipesData();
  },[])

  useEffect(()=>{
    for(var i=0 ; i<recipesData.length ; i++){
      if (recipesData[i].id===id){
        setRecipe(recipesData[i])
      }
    }
  },[recipesData])

  console.log(recipesData, recipe)
  

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

    setHidden(false);
  }


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