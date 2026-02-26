import React, { useState } from 'react';

const CardsDetail = () => {

    const [image1Clicked, setImage1Clicked] = useState(false);
    const [card1Hovering, setCard1Hovering] = useState(false);

    const handleImage1Click = () => {
        setImage1Clicked(!image1Clicked);
    };


    const [image2Clicked, setImage2Clicked] = useState(false);
    const [card2Hovering, setCard2Hovering] = useState(false);

    const handleImage2Click = () => {
        setImage2Clicked(!image2Clicked);
    };


    const [image3Clicked, setImage3Clicked] = useState(false);
    const [card3Hovering, setCard3Hovering] = useState(false);

    const handleImage3Click = () => {
        setImage3Clicked(!image3Clicked);
    };

    return (
        <div className='cards-detail-container'>
           <div className='card-detail card-detail-1-y-3' id='Kayaks' onMouseEnter={() => setCard1Hovering(true)} onMouseLeave={() => setCard1Hovering(false)}>
                <div className="div-img-container" onClick={handleImage1Click}>
                    <div className={`card-img card-img-1 ${card1Hovering ? 'hovering' : ''} ${image1Clicked ? 'expanded-1' : ''}`}></div>
                </div>
                <div className={`card-content ${card1Hovering ? 'hovering' : ''}`}>
                    <h3>Kayak</h3>
                    <p>
                        Forme parte de una aventura en nuestros kayaks en el lago Tandilense. 
                        Ofrecemos actividades guiadas o tambien la libertad de explorar el lago por su cuenta. 
                    </p>
                </div>
            </div>

            <div className='card-detail card-detail-2' id='Standup' onMouseEnter={() => setCard2Hovering(true)} onMouseLeave={() => setCard2Hovering(false)}>
                <div className="div-img-container" onClick={handleImage2Click}>
                    <div className={`card-img card-img-2 ${card2Hovering ? 'hovering' : ''} ${image2Clicked ? 'expanded-2' : ''}`}></div>
                </div>
                <div className={`card-content ${card2Hovering ? 'hovering' : ''}`}>
                    <h3>Stand Up Paddle</h3>
                    <p>
                        Disfrute de un nuevo reto sobre nuestros Stand Up Paddle. 
                        Podrás disfrutar el paisaje por tu cuenta o formar parte de nuestras actividades guiadas. 
                    </p>
                </div>
            </div>

            <div className='card-detail card-detail-1-y-3' id='Botes' onMouseEnter={() => setCard3Hovering(true)} onMouseLeave={() => setCard3Hovering(false)}>
                <div className="div-img-container" onClick={handleImage3Click}>
                    <div className={`card-img card-img-3 ${card3Hovering ? 'hovering' : ''} ${image3Clicked ? 'expanded-3' : ''}`}></div> 
                </div>
                <div className={`card-content ${card3Hovering ? 'hovering' : ''}`}>
                    <h3>Botes a pedal</h3>
                    <p>
                        Aprecie el paisaje tandilense en un tranquilo paseo en Bote a pedal.
                        Descrubra las bellezas que esconde nuestro famoso lago.
                        Hasta 4 personas por bote. 
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CardsDetail;