import React from "react";
import "./style.css";
import  logo from "../../img/projects/Logo.png";
import  search from "../../img/projects/Search-icon.png"
import { NavLink } from "react-router-dom";
import { useState } from "react";


const Navbar = () => {
  //Cостояние для dropdown
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsDropDownOpen(true);
  }

  //задержка dropdown при наведении
  const handleMouseLeave = () => {
    setTimeout(() => {
      setIsDropDownOpen(false);
    },15000);
  }

  //Состояние для активной ссылки по умолчанию
  const [activeLink, setActiveLink] = useState("/Home");
  
  //Состояние активной ссылки при клике
  const handleLinkClick = (link) => {
    setActiveLink(link);
  }

    return ( 
      <nav className="nav">
        <div className="container">
          <div className="nav-row">
            <div className="logo">
              <img src={logo}alt="logo" />
              </div>
              <div className="logo-title">
                <h1>SOLHONO</h1>
                </div>

                <div className="nav-list">
                  <ul className="nav-list-items">
                    
                    <li className="nav-list__item">
                        <NavLink to="/Home" className=
                        {activeLink === "/Home" ? 
                        "nav-list__link--active" : "nav-list__link"
                        }
                        onClick={() => handleLinkClick("/Home")}
                        >
                          Home
                        </NavLink>
                      </li>

                    
                    <li 
                    className="nav-list__item nav-list__link"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    >
                         <NavLink to="/Pages" className=
                         {activeLink === "/Pages" ? 
                         "nav-list__link--active" : "nav-list__link" 
                         } 
                         onClick={() => handleLinkClick("/Pages")}
                         > 
                            Pages
                         </NavLink> 

                        {isDropDownOpen && (
                          <ul className="dropdown__menu">
                            <li className="sub-nav">
                            <NavLink to="/AboutUs">About Us</NavLink>
                            </li>

                            <li className="sub-nav">
                            <NavLink to="/singleservices">Single Services</NavLink>
                            </li>

                            <li className="sub-nav">
                            <NavLink to="/pricingplan">Pricing & Plan</NavLink>
                            </li>

                            <li className="sub-nav">
                            <NavLink to="/ourproject">Our Project</NavLink>
                            </li>

                            <li className="sub-nav">
                            <NavLink to="/projectdetails">Project Details</NavLink>
                            </li>

                            <li className="sub-nav">
                            <NavLink to="/team">Team</NavLink>
                            </li>

                            <li className="sub-nav">
                            <NavLink to="/teamsingle">Team Single</NavLink>
                            </li>

                            <li className="sub-nav">
                            <NavLink to="/faqs">FAQ’s</NavLink>
                            </li>

                            <li className="sub-nav">
                              <NavLink to="/articles and news">Articles & News</NavLink>
                            </li>
                          </ul>
                        )}
                    </li>


                    <li className="nav-list__item">
                        <NavLink to="/Services" className=
                        {activeLink === "/Services" ? 
                        "nav-list__link--active" : "nav-list__link" 
                        } 
                        onClick={() => handleLinkClick("/Services")}>
                          Services
                        </NavLink>
                    </li>


                    <li className="nav-list__item">
                        <NavLink to="/Project" 
                        className= {activeLink === "/Project" ? 
                        "nav-list__link--active" : "nav-list__link" 
                        } 
                        onClick={() => handleLinkClick("/Project")}>
                          Project
                        </NavLink>
                    </li>


                    <li className="nav-list__item">
                        <NavLink to="/BlogDetails" 
                        className= {activeLink === "/Blog" ? 
                        "nav-list__link--active" : "nav-list__link" 
                        } 
                        onClick={() => handleLinkClick("/Blog")}>
                          Blog
                        </NavLink>
                    </li>

                    <li className="nav-list__item">
                        <NavLink to="/Contact" 
                        className= {activeLink === "/Contact" ? 
                        "nav-list__link--active" : "nav-list__link" 
                        } 
                        onClick={() => handleLinkClick("/Contact")}>
                          Contact
                        </NavLink>
                    </li>

                  </ul>
                </div>
            <div className="search-icon">
              <img src={search} alt="search" />
            </div>
          </div>
        </div>
      </nav>
    )
    
}

export default Navbar