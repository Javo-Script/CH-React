import { useState, useEffect } from "react";
import Item from "./Item";
import {recipesList} from "../dataBase";

export default function ItemList () {
  const [items, setItems] = useState([])

  useEffect(() => {
    new Promise((resolve, reject) =>{
      
      setTimeout(() => resolve(recipesList), 2000);
    })
    .then((dataResolve) => {
      setItems(dataResolve);
    })
    .catch((error) =>{
      console.log("err", error);
    })
  },[]);

  return(
    <>
      {items.map((item) =>(
        <Item id={item.id} img={item.img} title={item.title} category={item.category} description={item.description} price={item.price} stock={item.stock}/>
      ))}
    </>
  );
}