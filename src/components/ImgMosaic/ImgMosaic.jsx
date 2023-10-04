import React from 'react';
import styles from './styles.css';


const ImgMosaic = () => {
    return (
        <section className='image-section'>
            <div className="left-images">
                <img className='leftImage' src={require('../../assets/CardsImg/_DSC0030.jpg')} alt="First left image" />
                <img className='leftImage' src={require('../../assets/CardsImg/_DSC0127.jpg')} alt="Second left image" />
            </div>
            <img className='mainImage' src={require('../../assets/CardsImg/_DSC0122.jpg')} alt="Main Image" />
        </section>
    )
}

export default ImgMosaic;