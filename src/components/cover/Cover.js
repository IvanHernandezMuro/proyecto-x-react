import React from 'react';
import "./Cover.css";
import coverVideo from "../../media/coverVideo2.mp4";

const Cover = () => {
  return (
    <div className="cover-container">
      <video className="video" src={coverVideo} autoPlay loop muted /> 
      <h1>Blog de la Salud</h1>
      <p>VIDA ACTIVA | NUTRICIÓN BALANCEADA | CONSEJOS DE EXPERTOS | RECETAS</p>
    </div>
  )
}

export default Cover
