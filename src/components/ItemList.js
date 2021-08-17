import { reject } from "async";
import { useState, useEffect } from "react";
import Item from "./Item";

export default function ItemList () {
  const [items, setItems] = useState([])

  useEffect(() => {
    new Promise((resolve, reject) =>{
      const data = [
        {
          "id":"01",
          "title":"Pollo al verdeo con papas españolas",
          "description":"Breve descripción del plato.",
          "category":"Carne de pollo",
          "price": 450,
          "img":"https://www.fillmurray.com/g/1200/675"
        },{
          "id":"02",
          "title":"Ribs a la barbacoa con papas rellenas",
          "description":"Breve descripción del plato.",
          "category":"Carne de cerdo",
          "price": 530,
          "img":"https://www.fillmurray.com/g/1200/675"
        },{
          "id":"03",
          "title":"Wok de verduras con maní",
          "description":"Breve descripción del plato.",
          "category":"Verduras",
          "price": 420,
          "img":"https://www.fillmurray.com/g/1200/675"
        },{
          "id":"04",
          "title":"Ñoquis de papa con salsa bolognesa",
          "description":"Breve descripción del plato.",
          "category":"Pastas",
          "price": 420,
          "img":"https://www.fillmurray.com/g/1200/675"
        },{
          "id":"05",
          "title":"Flan casero",
          "description":"Breve descripción del plato.",
          "category":"Postres",
          "price": 320,
          "img":"https://www.fillmurray.com/g/1200/675"
        },{
          "id":"06",
          "title":"Panqueque de avena y banana con frutos rojos",
          "description":"Breve descripción del plato.",
          "category":"Postre, desayuno",
          "price": 240,
          "img":"https://www.fillmurray.com/g/1200/675"
        }
      ];
      setTimeout(() => resolve(data), 3000);
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
        <Item img={item.img} title={item.title} category={item.category} description={item.description} price={item.price}/>
      ))}
    </>
  );
}