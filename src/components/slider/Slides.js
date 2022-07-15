import React from 'react';
import "./Slider.css";

const slidesInfo = [
  {
    src: "https://www.productosherba.es/images/stories/virtuemart/product/2-batidos-te-aloe-avena-herbalife-accesorios-phes.jpg", //TODO 500 500 
    alt: "Pack",
    desc:"Pack"
  },

  {
    src: "https://assets.herbalifenutrition.com/content/dam/regional/nam/es_us/sites/herbalife_nutrition/web_graphic/products/2021/11-Nov/2.0_CoreNutrition_600x600.jpg", //TODO 600 600 
    alt: "Cocoa",
    desc:"Cocoa"
  },
  
  {
    src: "https://assets.herbalifenutrition.com/content/dam/regional/nam/es_us/sites/herbalife_nutrition/web_graphic/products/2021/11-Nov/2.0_SpecializedNutrition_600x600.jpg", //TODO 600 600
    alt: "Aloe",
    desc:"Aloe"
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
