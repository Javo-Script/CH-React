import "./css/navBar.css"
import CartWidget from "./CartWidget"

function NavBar (){
  return(
    <header className="header">
      <img className="logo" src="" alt="Logo de la App"/>
      <div className="navMenu">
        <a href="http://localhost:3000/" className="navBtn navMenuItem">Nosotros</a>
        <a href="http://localhost:3000/" className="navBtn navMenuItem">Como funciona</a>
        <a href="http://localhost:3000/" className="navBtn navMenuItem">Recetas</a>
        <a href="http://localhost:3000/" className="navBtn navMenuItem">Suscripción</a>
      </div>
      <div className="navMenu">
        <a href="http://localhost:3000/" className="navBtn navMenuLogIn">Login/Register</a>
        <CartWidget />
      </div>
    </header>
  )
}

export default NavBar