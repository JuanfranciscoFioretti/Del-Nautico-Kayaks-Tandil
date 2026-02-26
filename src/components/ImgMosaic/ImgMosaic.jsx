import React from 'react';
import './styles.css';
import boatsCutted from '../../assets/CardsImg/BOATS-CUTTED-3jpg.jpg';
import turistas from '../../assets/CardsImg/_DSC0127.jpg';
import familias from '../../assets/CardsImg/_DSC0125.jpg';

const ImgMosaic = () => {
    return (
        <section className='image-section'>
            <div className="left-images">
                <img className='leftImage' src={boatsCutted} alt="Botes a pedal" />
                <img className='leftImage' src={turistas} alt="Turistas en kayak" />
            </div>
            <img className='mainImage' src={familias} alt="Familias disfrutando en el agua" />
        </section>
    )
}

export default ImgMosaic;