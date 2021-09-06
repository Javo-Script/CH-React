import "./css/navBar.css"
import CartWidget from "./CartWidget"
import { Link } from "react-router-dom"

function NavBar (){
  return(
    <header className="header">
    <Link to={`/`}><img className="logo" src="" alt="Logo de la App"/></Link>
      
      <div className="navMenu">
        <Link to={`/about`} className="navBtn navMenuItem">Nosotros</Link>
        <Link to={`/how-it-works`} className="navBtn navMenuItem">Cómo funciona</Link>
        <Link to={`/recipes`} className="navBtn navMenuItem">Recetas</Link>
        <Link to={`/suscription`} className="navBtn navMenuItem">Suscription</Link>
      </div>
      <div className="navMenu">
        <Link to={`/login`} className="navBtn navMenuLogIn">Login/Register</Link>
        <CartWidget />
      </div>
    </header>
  )
}

export default NavBar