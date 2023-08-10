import './App.css';
import React from 'react';
import { Element } from 'react-scroll';
import NavBar from './components/NavBar/NavBar';
import LandingImg from './components/LandingImg/LandingImg';
import CardsDetail from './components/CardsDetail/CardsDetail';
import AboutUs from './components/AboutUs/AboutUs';
import ContactForm from './components/ContactForm/ContactForm';
import CardsActivities from './components/CardsActivities/CardsActivities';
import BigImg from './components/BigImg/BigImg';

const App = () => {
  return (
    <div className="App" id='App'>
      <NavBar/>
        <LandingImg/>
      <Element name='home'>
        <CardsActivities/>
      </Element>
      <BigImg/>
      <Element name='servicios'>
        <CardsDetail/>
      </Element>
      <Element name='nosotros'>
        <AboutUs/>
      </Element>
      <Element name='contacto'>
        <ContactForm/>
      </Element>
    </div>
  );
}

export default App;
