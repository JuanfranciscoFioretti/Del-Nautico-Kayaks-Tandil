import React, { useState, useEffect } from 'react';
import Logo from '../../assets/LogoImg/logo-definitivo-no-background.png'
import WaterIcon from './WaterIcon';


const NavBar = () => {
    const [ showMenu, setShowMenu ] = useState(false);
    
    const handleMenuToggle = () => {
        setShowMenu(!showMenu);
    };

    const handleLogoClick = (e) => {
        e.preventDefault();
    };

    const handleLinkClick = () => {
        setShowMenu(false);
    };

    useEffect(() => {
        if (showMenu) {
            // Deshabilitar scroll fijando el body
            document.body.style.position = 'fixed';
            document.body.style.top = `-${window.scrollY}px`;
            document.body.style.width = '100%';
        } else {
            // Restaurar scroll
            const scrollYPos = parseInt(document.body.style.top || '0') * -1;
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.width = '';
            
            if (scrollYPos) {
                window.scrollTo(0, scrollYPos);
            }
        }

        return () => {
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.width = '';
        };
    }, [showMenu]);

    return (
        <>
            <nav id="navbar-example2" className={`navbar px-5 ${showMenu ? 'hidden' : ''}`}>
                <div className="logoContainer">
                    <button type="button" onClick={handleLogoClick} className="logo-button">
                        <img className='navBarLogo' src={Logo} alt="Logo Del Náutico Kayaks" />
                    </button>
                </div>
                <ul className="nav nav-pills navBarUl">
                    <li className="nav-item navBarLi">
                        <a className="nav-link" href="#Servicios"><p>Servicios</p></a>
                    </li>
                    <li className="nav-item navBarLi">
                        <a className="nav-link" href="#Nosotros"><p>Nosotros</p></a>
                    </li>
                    <li className="nav-item navBarLi">
                        <a className="nav-link" href="#Contacto"><p>Contacto</p></a>
                    </li>
                </ul>

                <div className="hamburguer" onClick={handleMenuToggle}>
                    <WaterIcon 
                        size="24" 
                        color="#FFFFFF"
                        rotation={showMenu ? 180 : 0}
                    />
                </div>
            </nav>

            {/* Mobile Menu */}
            <div className={`mobileMenu ${showMenu ? 'active' : ''}`}>
                <button className="mobileMenuClose" onClick={handleMenuToggle}>
                    ✕
                </button>
                <div className="mobileMenuContent">
                    <ul className='mobileMenuUl'>
                        <li className='mobileMenuLi'>
                            <a href="#Servicios" onClick={handleLinkClick}>Servicios</a>
                        </li>
                        <li className='mobileMenuLi'>
                            <a href="#Nosotros" onClick={handleLinkClick}>Nosotros</a>
                        </li>
                        <li className='mobileMenuLi'>
                            <a href="#Contacto" onClick={handleLinkClick}>Contacto</a>
                        </li>
                    </ul>
                    <div className="mobileMenuLogo">
                        <img src={Logo} alt="Logo" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default NavBar;
