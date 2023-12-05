import React from 'react';
import { Element } from 'react-scroll';
import 'animate.css';
// import 'swiper/css/swiper.css';
import NavBar from './components/NavBar/NavBar';
import LandingImg from './components/LandingImg/LandingImg';
import CardsDetail from './components/CardsDetail/CardsDetail';
import AboutUs from './components/AboutUs/AboutUs';
import ContactForm from './components/ContactForm/ContactForm';
import CardsActivities from './components/CardsActivities/CardsActivities';
import BigImg from './components/BigImg/BigImg';
import Carrousel from './components/Carrousel/Carrousel';
import ImgMosaic from './components/ImgMosaic/ImgMosaic';
import Footer from './components/Footer/Footer';
import GoogleMaps from './components/GoogleMaps/GoogleMaps';
import './App.css';

const App = () => {
  return (
    <div className="App" id='App' data-bs-spy="scroll" >
      <NavBar/>
        <LandingImg/>
      <Element name='home'>
        <CardsActivities/>
      </Element>
      <BigImg/>
      <Element name='servicios'>
        <CardsDetail/>
      </Element>
      <Carrousel/>
      <Element name='nosotros'>
        <AboutUs/>
      </Element>
      <ImgMosaic/>
      <GoogleMaps/>
      <Element name='contacto'>
        <ContactForm/>
      </Element>
      <Footer/>
    </div>
  );
}

export default App;
