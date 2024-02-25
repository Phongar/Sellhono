import "./style.css";
import btn from "./../../img/icons/btn.svg"

const Header = () => {
    return (
       <header className="header">
          <div className="header__wrapper">
            <h1 className="header__title">Let's make your <br/> 
            home beautiful together
            </h1>
            <div className="header__text">
              <p>There are many variations of the passages of 
                lorem Ipsum fromavailable, majority.
              </p>
            </div>
            <div className="btn">
              <button>
                  <a href="#!" className="header__btn">
                    Get Started
                  </a>
                  <img className="img" src= {btn} alt="img" />
              </button>
            </div>
          </div>
       </header>
    )
}

export default Header