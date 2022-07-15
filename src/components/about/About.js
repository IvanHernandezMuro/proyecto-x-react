import React from 'react';
import "./About.css";
import about from '../../media/about.jpg';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-desc">
        <h3>Déjame decirte algo sobre nosotros</h3>
        <p>Mejoramos los hábitos nutricionales de las personas en más de 90 países. Proporcionamos productos innovadores y con respaldo científico. Nos enfocamos en las necesidades nutricionales de nuestros clientes. Ayudamos a la comunidad y al medioambiente. Te ofrecemos una oportunidad de negocio para ayudarte a alcanzar tus metas.</p>
        </div>
        <div className='about-img'>
          <img src={about} alt='about'/>
        </div>
      </div>
    )
}

export default About
