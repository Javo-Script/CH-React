import './App.css';
import {getFirestore, collection, getDocs} from 'firebase/firestore';
import {getData} from './firebase'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/home';
import About from './components/about';
import HowItWorks from './components/howItWorks';
import Products from './components/products';
import ItemDetails from './components/itemDetails';
import Login from './components/login';
import Cart from './components/cart';
import { CartContext } from './context/cartContext';
import { useState, useEffect } from 'react';

export default function App() {
  const [cartItems, setCartItems] = useState([]);

  //TRATO DE BUSCAR LA DATA Y GUARDARLA EN EL STATE
  const [recipesData, setRecipesData] = useState([]);

  useEffect(()=>{
    const getRecipesData = async () => {
      const recipesCollection = collection(getData(), 'recetas');
      const recipesSnapshot = await  getDocs(recipesCollection);
      const recipesList = recipesSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      console.log(recipesList)
      setRecipesData(recipesList);
    };

    getRecipesData();
},[])

  return (
    <BrowserRouter>
      <CartContext.Provider value={{cartItems, setCartItems}}>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/how-it-works">
            <HowItWorks />
          </Route>
          <Route exact path="/recipes">
            <Products />
          </Route>
          <Route exact path="/details/:id">
            <ItemDetails />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
        </Switch>
      </CartContext.Provider>
    </BrowserRouter>
  );
}
