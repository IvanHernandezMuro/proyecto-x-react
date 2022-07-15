import React from 'react';
import "./Navbar.css";

//! Funcion toTheTop para que al hacer click en la barra de menú
//! Nos lleve al inicio de la página:
const Navbar = ({ isScrolling }) => {
  const toTheTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }

  return (
    <nav className={`navbar ${isScrolling > 20 ? "scrolling": null}`}>
      <div className="navbar-logo" onClick={toTheTop}>Blog Herbalife</div>
    </nav>
  );
};
//!usamos operador ternario
//! si el contenedor esta > 20 se añade la clase "scrolling"
//! si es < 20 = null, volvera al estilo anterior
export default Navbar
