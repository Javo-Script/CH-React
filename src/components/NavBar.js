import "./css/navBar.css"
import CartWidget from "./CartWidget"

function NavBar (){
  return(
    <header className="header">
      <img className="logo" src="" alt="Logo de la App"/>
      <div className="navMenu">
        <button className="navBtn navMenuItem" onClick={"aboutPage"}>Nosotros</button>
        <button className="navBtn navMenuItem" onClick={"howPage"}>Como funciona</button>
        <button className="navBtn navMenuItem" onClick={"recipesPage"}>Recetas</button>
        <button className="navBtn navMenuItem" onClick={"suscribePage"}>Suscripción</button>
      </div>
      <div className="navMenu">
        <button className="navBtn navMenuLogIn" onClick={"logInPage"}>Login/Register</button>
        <CartWidget />
      </div>
    </header>
  )
}

export default NavBar