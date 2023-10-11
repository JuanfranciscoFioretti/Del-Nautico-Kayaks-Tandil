import React from 'react';
import Button from 'react-bootstrap/Button';
import styles from './styles.css';

const CardsActivities = () => {
    return (
        <section id='Servicios'>
            <div className='section-title'>
                    <h1>Del Náutico Kayaks</h1>
                    <p id='aboutActivities'>Conocé las actividades que podés realizar con nosotros</p>
                </div>
            <div className="cards-container">
                
                <div className="card card-1">
                    <div className="image-overlay">
                        <h2 className='cardsTitles'>Kayaks</h2>
                    </div>
                    <a href="#Kayaks"><Button className='card-button' variant="outline-light"><p>Conocer más</p></Button></a>
                </div>
                <div className="card card-2">
                    <div className="image-overlay">
                        <h2 className='cardsTitles'>Stand up paddle</h2>
                    </div>
                    <a href="#Standup"><Button className='card-button' variant="outline-light"><p>Conocer más</p></Button></a>
                </div>
                <div className="card card-3">
                    <div className="image-overlay">
                        <h2 className='cardsTitles'>Botes a pedal</h2>
                    </div>
                    <a href="#Botes"><Button className='card-button' variant="outline-light"><p>Conocer más</p></Button></a>
                </div>
            </div>
        </section>
    );
};

export default CardsActivities;
