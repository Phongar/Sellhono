import "./style.css";
import Logo from "./../../img/projects/Logo.png";
import Icons from "./../../img/icons/Icons.svg";

const Footer = () => {
    return(
        <footer className="footer">
         
        
           <div className="footer__container">
            <div className="footer__info">
              <div className="footer__logo">
                <img className="logo__footer" src={Logo} alt="logo" />
                <div className="footer__title">
                  <h1>SELHONO</h1>
                </div>
              </div>
              <div className="footer__desc">
                <p>It is a long established fact that a reader will be distracted lookings.</p>
              </div>
                <div className="footer__social">
                  <img src={Icons} alt="Icons" />
                </div>
              </div>

              {/* Footer pages */}
              <div className="footer__pages">
                <div className="pages__logo">
                  <h1>Pages</h1>
                  </div>

                  <ul className="pages__list">
                    <li>
                      <a href="#!">About us</a> 
                    </li>

                    <li>
                      <a href="#!">Our Projects</a> 
                    </li>

                    <li>
                      <a href="#!">Our Team</a> 
                    </li>

                    <li>
                      <a href="#!">Contact Us</a> 
                    </li>

                    <li>
                      <a href="#!">Services</a> 
                    </li>
                  </ul>                 
              </div>

              {/* Services */}
              <div className="footer__pages">
                <div className="pages__logo">
                  <h1>Services</h1>
                  </div>

                  <ul className="pages__list">
                    <li>
                      <a href="#!">Kitchan</a> 
                    </li>

                    <li>
                      <a href="#!">Living Area</a> 
                    </li>

                    <li>
                      <a href="#!">Bathroom</a> 
                    </li>

                    <li>
                      <a href="#!">Dinning Hall</a> 
                    </li>

                    <li>
                      <a href="#!">Bedroom</a> 
                    </li>
                  </ul>                 
              </div>
              
              <div className="contact">
                <div className="contact__logo">
                  <h1>Contact</h1>
                </div>

                <ul className="contact__list">  
                  <li>55 East Birchwood Ave. Brooklyn, New York 11201</li>
                  <li>
                    <a href="#!">contact@selhono.com</a> 
                  </li>
                  <li>(123) 456 - 7890</li>
                </ul>
              </div>
            </div>
            
        

          
            <div className="copyright">
              <h1>Copyright © SELHONO </h1>
            </div>
          
        
        </footer>
    )
}

export default Footer