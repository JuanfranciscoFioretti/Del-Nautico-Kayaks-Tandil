import React, { useState } from 'react';
import styles from './styles.css';


const CardsDetail = () => {

    const [image1Clicked, setImage1Clicked] = useState(false);

    const handleImage1Click = () => {
        setImage1Clicked(!image1Clicked);
    };


    const [image2Clicked, setImage2Clicked] = useState(false);

    const handleImage2Click = () => {
        setImage2Clicked(!image2Clicked);
    };


    const [image3Clicked, setImage3Clicked] = useState(false);

    const handleImage3Click = () => {
        setImage3Clicked(!image3Clicked);
    };

    return (
        <div className='cards-detail-container'>
            <div className='card-detail card-detail-1-y-3'>
                <div className="div-img-container" onClick={handleImage1Click}>
                    <div className={`card-img card-img-1 ${image1Clicked ? 'expanded-1' : ''}`}></div>
                </div>
                <div className="card-content">
                    <h3>Kayak</h3>
                    <h6>
                        Forme parte de una aventura en nuestros kayaks en el lago Tandilense. 
                        Ofrecemos actividades guiadas o tambien la libertad de explorar el lago por su cuenta. 
                    </h6>
                </div>
            </div>

            <div className='card-detail card-detail-2'>
                <div className="div-img-container" onClick={handleImage2Click}>
                    <div className={`card-img card-img-2 ${image2Clicked ? 'expanded-2' : ''}`}></div>
                </div>
                <div className="card-content">
                    <h3>Stand Up Paddle</h3>
                    <h6>
                        Disfrute de un nuevo reto sobre nuestros Stand Up Paddle. 
                        Podrás disfrutar el paisaje por tu cuenta o formar parte de nuestras actividades guiadas. 
                    </h6>
                </div>
            </div>

            <div className='card-detail card-detail-1-y-3'>
                <div className="div-img-container" onClick={handleImage3Click}>
                    <div className={`card-img card-img-3 ${image3Clicked ? 'expanded-3' : ''}`}></div> 
                </div>
                <div className="card-content">
                    <h3>Botes a pedal</h3>
                    <h6>
                        Aprecie el paisaje tandilense en un tranquilo paseo en Bote a pedal.
                        Descrubra las bellezas que esconde nuestro famoso lago.
                        Hasta 4 personas por bote. 
                    </h6>
                </div>
            </div>
        </div>
    )
}

export default CardsDetail;