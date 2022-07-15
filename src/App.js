import React, {useState, useEffect} from 'react';
import './App.css';
import Cover from "./components/cover/Cover";
import Navbar from "./components/navbar/Navbar";
import About from './components/about/About';
import Slider from './components/slider/Slider';

//! controlamos la posición de Scroll:
function App() {
  const [scrollHeight, setScrollHeight] = useState(0); 

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollHeight(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [scrollHeight])
  //! Pasamos el segundo parametro para que tengamos la actualizacion del Scroll


  //! Se pasa scrollHeigt como PROPS a Navbar para tener acceso al componente Navbar
  //! a la posición del scroll
  return (
    <div className="App">
      <Navbar isScrolling={scrollHeight} />
      <Cover />
      <About />
      <Slider/>
    </div>
  );
}

export default App;