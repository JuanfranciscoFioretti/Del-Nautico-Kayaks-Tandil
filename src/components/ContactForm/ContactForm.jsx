import React from 'react';
import styles from './styles.css';

const ContactForm = () => {
    return (
        // <div className='formContainer'>
            <div className="login-box">
                <h2>CONTACTO</h2>
                <form>
                    <div className=''>
                        <div className="user-box">
                        <input type="text" name="" required=""/>
                        <label>Nombre</label>
                        </div>
                        <div className="user-box">
                        <input type="text" name="" required=""/>
                        <label>Teléfono</label>
                        </div>
                    </div>
                    <div className="user-box">
                    <input type="mail" name="" required=""/>
                    <label>Email</label>
                    </div>
                    <div className="user-box">
                    <input type="text" name="" required=""/>
                    <label>Deje su consulta</label>
                    </div>
                    <a href="#">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Enviar
                    </a>
                </form>
            </div>
        // </div>
    )
}

export default ContactForm;





// <!-- Site footer -->
// <footer class="site-footer">
//   <div class="container">
//     <div class="row">
//       <div class="col-sm-12 col-md-6">
//         <h6>About</h6>
//         <p class="text-justify">Scanfcode.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative  to help the upcoming programmers with the code. Scanfcode focuses on providing the most efficient code or snippets as the code wants to be simple. We will help programmers build up concepts in different programming languages that include C, C++, Java, HTML, CSS, Bootstrap, JavaScript, PHP, Android, SQL and Algorithm.</p>
//       </div>

//       <div class="col-xs-6 col-md-3">
//         <h6>Categories</h6>
//         <ul class="footer-links">
//           <li><a href="http://scanfcode.com/category/c-language/">C</a></li>
//           <li><a href="http://scanfcode.com/category/front-end-development/">UI Design</a></li>
//           <li><a href="http://scanfcode.com/category/back-end-development/">PHP</a></li>
//           <li><a href="http://scanfcode.com/category/java-programming-language/">Java</a></li>
//           <li><a href="http://scanfcode.com/category/android/">Android</a></li>
//           <li><a href="http://scanfcode.com/category/templates/">Templates</a></li>
//         </ul>
//       </div>

//       <div class="col-xs-6 col-md-3">
//         <h6>Quick Links</h6>
//         <ul class="footer-links">
//           <li><a href="http://scanfcode.com/about/">About Us</a></li>
//           <li><a href="http://scanfcode.com/contact/">Contact Us</a></li>
//           <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Contribute</a></li>
//           <li><a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a></li>
//           <li><a href="http://scanfcode.com/sitemap/">Sitemap</a></li>
//         </ul>
//       </div>
//     </div>
//     <hr>
//   </div>
//   <div class="container">
//     <div class="row">
//       <div class="col-md-8 col-sm-6 col-xs-12">
//         <p class="copyright-text">Copyright &copy; 2017 All Rights Reserved by 
//      <a href="#">Scanfcode</a>.
//         </p>
//       </div>

//       <div class="col-md-4 col-sm-6 col-xs-12">
//         <ul class="social-icons">
//           <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
//           <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
//           <li><a class="dribbble" href="#"><i class="fa fa-dribbble"></i></a></li>
//           <li><a class="linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>   
//         </ul>
//       </div>
//     </div>
//   </div>
// </footer>