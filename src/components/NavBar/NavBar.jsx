import React, { useState } from 'react';
import { Link } from 'react-scroll';
import styles from './styles.css';
import Logo from '../../assets/LogoImg/logo-definitivo-no-background.png'


const NavBar = () => {
    // const [ showMenu, setShowMenu ] = useState(false);
    
    // const handleMenuToggle = () => {
    //     setShowMenu(!showMenu);
    //     console.log(showMenu);
    // };
    // TODO: Add links to navbar items and scroll them into view when clicked
    return (





    <nav id="navbar-example2" class="navbar px-5">
        <div className="logoContainer">
            <a href="">
                <img className='navBarLogo' src={Logo} alt="" />
            </a>
        </div>
        <a class="navbar-brand" href="#"></a>
        <ul class="nav nav-pills navBarUl">
        <li class="nav-item navBarLi">
            <a class="nav-link" href="#Servicios"><p>Servicios</p></a>
        </li>
        <li class="nav-item navBarLi">
            <a class="nav-link" href="#Nosotros"><p>Nosotros</p></a>
        </li>
        <li class="nav-item navBarLi">
            <a class="nav-link" href="#Contacto"><p>Contacto</p></a>
        </li>
        </ul>
    </nav>








        // <nav className='navBar'>
        //     <div className="logoContainer">
        //         <img className='navBarLogo' src={Logo} alt="" />
        //     </div>
        //     <div className={`menu ${showMenu ? 'show' : ''}`}>
        //         <ul className='navBarUl'> 
        //             <li className='navBarLi'>
        //                 <Link
        //                     to='home'
        //                     smooth={true}
        //                     duration={500}
        //                     onClick={handleMenuToggle}
        //                 >
        //                     Home
        //                 </Link>
        //             </li>
        //             <li className='navBarLi'>
        //                 <Link
        //                     to='servicios'
        //                     smooth={true}
        //                     duration={500}
        //                     onClick={handleMenuToggle}
        //                 >
        //                     Servicios
        //                 </Link>
        //             </li>
        //             <li className='navBarLi'>
        //                 <Link
        //                     to='nosotros'
        //                     smooth={true}
        //                     duration={500}
        //                     onClick={handleMenuToggle}
        //                 >
        //                     Nosotros
        //                 </Link>
        //             </li>
        //             <li className='navBarLi'>
        //                 <Link
        //                     to='contacto'
        //                     smooth={true}
        //                     duration={500}
        //                     onClick={handleMenuToggle}
        //                 >
        //                     Contacto
        //                 </Link>
        //             </li>
        //         </ul>
        //     </div>

        //     <div className={`hamburguer ${showMenu ? 'open' : ''}`} onClick={handleMenuToggle}>
        //         <div className="line"></div>
        //         <div className="line"></div>
        //         <div className="line"></div>
        //     </div>
        // </nav>
    );
};

export default NavBar;