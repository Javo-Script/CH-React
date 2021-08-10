//import React, {useState} from "react"
import ItemCount from "./itemCount"
import "./css/itemListContainer.css"

export default function ItemListContainer (){

  return(
    <section>
      <ItemCount initial="1" itemsLeft="10" onAdd/>
    </section>
  )
}