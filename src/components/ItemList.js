import { useEffect, useContext } from "react";
import Item from "./Item";
import { RecipesContext } from "../context/recipesContext";

export default function ItemList () {
  const {recipesData, setRecipesData} = useContext(RecipesContext);

  useEffect(() => {
    setRecipesData(recipesData);
  },[]);

  return(
    <>
      {recipesData.map((item) =>(
        <Item id={item.id} img={item.img} title={item.title} category={item.category} description={item.description} price={item.price} stock={item.stock}/>
      ))}
    </>
  );
}