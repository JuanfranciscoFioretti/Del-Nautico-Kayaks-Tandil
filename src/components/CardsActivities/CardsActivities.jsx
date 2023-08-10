import React from 'react';
import Button from 'react-bootstrap/Button';
import styles from './styles.css';

const CardsActivities = () => {
    return (
        <section>
            <div className='section-title'>
                    <h1>Del Náutico Kayaks</h1>
                    <h3>Conocé las actividades que podés realizar con nosotros</h3>
                </div>
            <div className="cards-container">
                
                <div className="card card-1">
                    <div className="image-overlay">
                        <h2 className='cardsTitles'>Kayaks</h2>
                    </div>
                    <Button className='card-button' variant="outline-light">Conocer más</Button>
                </div>
                <div className="card card-2">
                    <div className="image-overlay">
                        <h2 className='cardsTitles'>Stand up paddle</h2>
                    </div>
                    <Button className='card-button' variant="outline-light">Conocer más</Button>
                </div>
                <div className="card card-3">
                    <div className="image-overlay">
                        <h2 className='cardsTitles'>Botes a pedal</h2>
                    </div>
                    <Button className='card-button' variant="outline-light">Conocer más</Button>
                </div>
            </div>
        </section>
    );
};

export default CardsActivities;
