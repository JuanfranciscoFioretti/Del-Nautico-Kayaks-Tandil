import React, { useState } from 'react';
import styles from './styles.css';
import { Link } from 'react-scroll';

const Footer = () => {
  const [ showMenu, setShowMenu ] = useState(false);
    
    const handleMenuToggle = () => {
        setShowMenu(!showMenu);
        console.log(showMenu);
    };
    return (
        <div>
              {/* <!-- Site footer --> */}
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>Del Náutico Kayaks</h6>
            <p className="text-justify"></p>
            <ul className="footer-links">
              <li>
                2494 - 582076
              </li>
              <li>
                Delnauticokayaks@gmail.com
              </li>
              <li>
                Club Náutico Tandil - Acceso por DAM Beach
              </li>
            </ul>
          </div>

          {/* <div className="col-xs-6 col-md-3">
            <h6>Categories</h6>
            <ul className="footer-links">
              <li><a href="http://scanfcode.com/category/c-language/">C</a></li>
              <li><a href="http://scanfcode.com/category/front-end-development/">UI Design</a></li>
              <li><a href="http://scanfcode.com/category/back-end-development/">PHP</a></li>
              <li><a href="http://scanfcode.com/category/java-programming-language/">Java</a></li>
              <li><a href="http://scanfcode.com/category/android/">Android</a></li>
              <li><a href="http://scanfcode.com/category/templates/">Templates</a></li>
            </ul>
          </div> */}

          <div className="col-xs-6 col-md-6">
            <h6>Links</h6>
            <ul className="footer-links">
              <li>
                  <Link
                    to='home'
                    smooth={true}
                    duration={500}
                    onClick={handleMenuToggle}>
                      Home
                  </Link>
                {/* <a className='aFooterInfo' href="http://scanfcode.com/category/front-end-development/">(2494) - 582076</a> */}
              </li>
              <li>
                  <Link
                    to='home'
                    smooth={true}
                    duration={500}
                    onClick={handleMenuToggle}>
                      Servicios
                  </Link>
                {/* <a className='aFooterInfo' href="http://scanfcode.com/category/front-end-development/">(2494) - 582076</a> */}
              </li>
              <li>
                  <Link
                    to='home'
                    smooth={true}
                    duration={500}
                    onClick={handleMenuToggle}>
                      Nosotros
                  </Link>
                {/* <a className='aFooterInfo' href="http://scanfcode.com/category/front-end-development/">(2494) - 582076</a> */}
              </li>
              <li>
                  <Link
                    to='home'
                    smooth={true}
                    duration={500}
                    onClick={handleMenuToggle}>
                      Contacto
                  </Link>
                {/* <a className='aFooterInfo' href="http://scanfcode.com/category/front-end-development/">(2494) - 582076</a> */}
              </li>
            </ul>
          </div>
        </div>
        <hr/>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">Desarrollo: Greencoding &copy; 2023 Derechos reservados por <a href="https://www.instagram.com/greencoding_/" target='_BLANK'>Greencoding</a>.
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              {/* <li><a className="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
              <li><a className="twitter" href="#"><i class="fa fa-twitter"></i></a></li> */}
              <li><a className="dribbble" href="#"><i class="fa fa-dribbble"></i></a></li>
              {/* <li><a className="linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>    */}
            </ul>
          </div>
        </div>
      </div>
</footer>
        </div>
    )
}

export default Footer