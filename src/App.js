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
import { useState} from 'react';

export default function App() {
  const [cartItems, setCartItems] = useState([]);

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
            <Products/>
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
