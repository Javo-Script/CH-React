import {getFirestore, collection, getDocs} from 'firebase/firestore';
import {getData} from '../firebase'
import { useState, useEffect } from 'react';
import {RecipesContext} from '../context/recipesContext'
import ItemList from "./ItemList"
import "./css/products.css"

export default function Products (){
  
  const [recipesData, setRecipesData] = useState([]);

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

  return(
    <RecipesContext.Provider value={{recipesData, setRecipesData}}>
      <section>
        {<ItemList data={recipesData}/>}
      </section>
    </RecipesContext.Provider>
  )
}