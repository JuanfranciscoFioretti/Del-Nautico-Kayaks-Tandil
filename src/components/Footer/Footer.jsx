import React from 'react';

const Footer = () => {
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
              <li>
                También encontranos en Instagram <a className="instagram-link" target='_blank' rel="noreferrer" href="https://www.instagram.com/delnauticokayak/">@delnauticokayak</a>
              </li>
              <li>
                Y en Facebook <a className="facebook-link" target='_blank' rel="noreferrer" href="https://www.facebook.com/delnauticokayak">@delnauticokayak</a>
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
                <a href="#Home">
                  Home
                </a>
                {/* <a className='aFooterInfo' href="http://scanfcode.com/category/front-end-development/">(2494) - 582076</a> */}
              </li>
              <li>
                <a href="#Servicios">
                  Servicios
                </a>
                {/* <a className='aFooterInfo' href="http://scanfcode.com/category/front-end-development/">(2494) - 582076</a> */}
              </li>
              <li>
                <a href="#Nosotros">
                  Nosotros
                </a>
                {/* <a className='aFooterInfo' href="http://scanfcode.com/category/front-end-development/">(2494) - 582076</a> */}
              </li>
              <li>
                <a href="#Contacto">
                  Contacto
                </a>
                {/* <a className='aFooterInfo' href="http://scanfcode.com/category/front-end-development/">(2494) - 582076</a> */}
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <ul className="social-icons-footer">
              <li><a className="facebook-social" target='_blank' rel="noreferrer" href="https://www.facebook.com/delnauticokayak"><i className="fa fa-facebook"></i></a></li>
              <li><a className="instagram-social" target='_blank' rel="noreferrer" href="https://www.instagram.com/delnauticokayak/"><i className="fa fa-instagram"></i></a></li>
            </ul>
          </div>
        </div>
        <hr/>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">Desarrollo: Sostentia &copy; 2026 Derechos reservados por <a href="https://sostentia.com/" target='_blank' rel="noreferrer">Sostentia</a>.
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              {/* <li><a className="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
              <li><a className="twitter" href="#"><i class="fa fa-twitter"></i></a></li> */}
              <li><a className="instagram" target='_blank' rel="noreferrer" href="https://www.instagram.com/sostentia/"><i className="fa fa-instagram"></i></a></li>
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