import React from 'react';
import styles from './styles.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const GoogleMaps = () => {
    return (
        <section className='section-two-columns'>
            <div className="left-column">
                <iframe className='mapsIframe' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1496.9767776220708!2d-59.13179754293687!3d-37.345987323503856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95911fb4104a81cf%3A0xc9014199e6024f5c!2sClub%20Nautico%2C%20Av.%20Alvear%2C%20Tandil%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1695764915646!5m2!1ses-419!2sar" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="right-column">
                <div className='divLogoImg'>
                    
                </div>
                {/* <button className='destiny-button'>Como llegar</button>
                
                <i class="bi bi-whatsapp"/> */}
                
            </div>
        </section>
    )
}

export default GoogleMaps;