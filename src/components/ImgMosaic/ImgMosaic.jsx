import React from 'react';

const ImgMosaic = () => {
    return (
        <section className='image-section'>
            <div className="left-images">
                <img className='leftImage' src={require('../../assets/CardsImg/BOATS-CUTTED-3jpg.jpg')} alt="Botes a pedal" />
                <img className='leftImage' src={require('../../assets/CardsImg/_DSC0127.jpg')} alt="Turistas en kayak" />
            </div>
            <img className='mainImage' src={require('../../assets/CardsImg/_DSC0125.jpg')} alt="Familias disfrutando en el agua" />
        </section>
    )
}

export default ImgMosaic;