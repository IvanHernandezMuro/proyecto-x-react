import React from 'react';
import "./Slider.css";

const slidesInfo = [
  {
    src: "https://assets.herbalifenutrition.com/content/dam/regional/mexico/es_mx/sites/herbalife_nutrition/web_graphic/billboards/2021/11-Nov/nuestros_productos_home_es_mx.png", //TODO 500 500 
    alt: "uno",
    desc:"uno"
  },

  {
    src: "https://assets.herbalifenutrition.com/content/dam/regional/mexico/es_mx/sites/herbalife_nutrition/web_graphic/billboards/2021/11-Nov/por_que_HN_home_es_mx.png", //TODO 500 500 
    alt: "dos",
    desc:"dos"
  },
  
  {
    src: "https://assets.herbalifenutrition.com/content/dam/regional/mexico/es_mx/sites/herbalife_nutrition/web_graphic/billboards/2021/11-Nov/nuestros_productos_home_es_mx.png", //TODO 500 500
    alt: "tres",
    desc:"tres"
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
