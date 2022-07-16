import React from 'react';
import "./Slider.css";

const slidesInfo = [
  {
    src: "https://assets.herbalifenutrition.com/content/dam/regional/mexico/es_mx/sites/herbalife_nutrition/web_graphic/billboards/2021/11-Nov/nuestros_productos_home_es_mx.png", //TODO 500 500 
    alt: "Nutrición",
    desc:"Nutrición"
  },

  {
    src: "https://assets.herbalifenutrition.com/content/dam/regional/mexico/es_mx/sites/herbalife_nutrition/web_graphic/billboards/2021/11-Nov/por_que_HN_home_es_mx.png", //TODO 500 500 
    alt: "Disribuidor Independiente",
    desc:"Disribuidor Independiente"
  },
  
  {
    src: "https://images.pexels.com/photos/5038843/pexels-photo-5038843.jpeg?auto=compress&cs=tinysrgb&w=600", //TODO 500 500
    alt: "Vida Saludable",
    desc:"Vida Saludable"
  },
]

const slides = slidesInfo.map(slide => (
  <div className="slide-container">
    <img src={slide.src} alt={slide.alt} />
    <div className="slide-desc">
      <span>{slide.desc}</span>
    </div>
  </div>
))

export default slides;
