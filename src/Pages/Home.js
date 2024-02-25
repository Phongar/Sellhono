import Header from "../Components/Header/Header";
import more from "./../img/icons/read-more.svg";
import btn from "./../img/icons/btn.svg";
import Call from "./../img/icons/Call Icon.svg";
import Photo from "./../img/About-Us-img/Card-photo.jpg";
import Photo2 from "./../img/About-Us-img/Card-photo2.jpg";
import Photo3 from "./../img/About-Us-img/Card-photo3.jpg";
import partnersImg  from "./../img/icons/Partners.svg";
import Bedroom from "./../img/Projects-img/Bedroom1.png";
import Bedroom2 from "./../img/Projects-img/Bedroom2.png";
import Bedroom3 from "./../img/Projects-img/Bedroom3.png";
import Bedroom4 from "./../img/Projects-img/Bedroom4.png";
import descIcon from "./../img/icons/desc-icon.svg";
import Years from "./../img/icons/Years.svg";
import Kitchen from "./../img/Articles & News img/Kitchen.png";
import Kitchen2 from "./../img/Articles & News img/Kitchen2.png";
import Kitchen3 from "./../img/Articles & News img/Kitchen3.png";

import Footer from "../Components/Footer/Footer";


const Home = () => {
    return (
        <div>
            <Header />

            {/* Project */}
            <main className="project">
              <div className="project__container">
                <div className="block">
                  
                    <h1 className="project__title">Project Plan</h1>
                <div className="project__text">
                    <p>There are many variations of the passages of Lorem Ipsum available, majority</p>
                </div>

                  <div className="project__btn">
                      <a href="#!" className="read">Read More</a>
                      <img className="read__img" src={more} alt="" />
                  </div>
                </div>
              
                {/* Interior Work */}
                <div className="block">
                      <h1 className="project__title">Interior Work</h1>
                  <div className="project__text">
                      <p>There are many variations of the passages of Lorem Ipsum available, majority</p>
                  </div>


                  <div className="project__btn">
                      <a href="#!" className="read">Read More</a>
                      <img className="read__img" src={more} alt="" />
                  </div>
                </div>


                {/* Realization */}
                <div className="block">
                    <h1 className="project__title">Realization</h1>
                  <div className="project__text">
                    <p>There are many variations of the passages of Lorem Ipsum available, majority</p>
                </div>

                <div className="project__btn">
                    <a href="#!" className="read">Read More</a>
                    <img className="read__img" src={more} alt="" />
                </div>
                </div>
              </div>
            </main>


            {/* Hotel */}
            <main className="main">
          <div className="hotel__container">
            <div className="hotel__title">
              <h1>We create art for modern life</h1>
            </div>

            <div className="hotel__text">
              <p>There are many variations of the passages of lorem Ipsum from 
                available, majority.
              </p>
            </div>

            <div className="hotel__info">
              <div className="hotel__number">
              <img className="call-icon" src={Call} alt="call-ico" />
                <div className="call">
                  <div className="call__number">
                    <span>012345678</span>
                  </div>
                  <div className="call-us">
                      <p>Call Us Anytime</p>
                  </div>
                </div>
              </div>

              <div className="hotel__btn">
                <button>
                  <a href="#!" className="hotel__btn-link">
                  Get Free Estimate
                  </a>
                  <img className="img" src= {btn} alt="img" />
                </button>
              </div>
            </div>
          </div>

            </main>


            {/* About Us */}
            <main className="about us">
        <div className="about-us__block">
          <div className="about-us__container">
            <div className="about__block">
              <div className="adout__title">
                <h2>What the People Thinks About Us</h2>
              </div>
              
              {/* Natasha card */}
              <div className="testimonial">
                <div className="container">
                  <div className="card">
                    <div className="card__content">
                    <div className="card__img">
                      <img className="photo" src={Photo} alt="" />
                      <div className="card__title">
                          <h1>Natasha </h1>
                          <p>Moscow, Russia</p>
                      </div>
                    </div>

                    <div className="card__info">
                      <p>Lorem Ipsum is simply dummy 
                        text of the typesetting industry. 
                        Ipsum has been scrambled.
                      </p>
                    </div>
                  </div>
                </div>
                   {/* Raymond card */}
                <div className="card">
                    <div className="card__content">
                    <div className="card__img">
                      <img className="photo" src={Photo2} alt="" />
                      <div className="card__title">
                          <h1> Raymond Galario </h1>
                          <p>UK, London</p>
                      </div>
                    </div>

                    <div className="card__info">
                      <p>
                      Lorem Ipsum is simply dummy 
                      text of the typesetting industry. 
                      Ipsum has been scrambled it 
                      to make a type book.
                      </p>
                    </div>
                  </div>
                </div>

                   {/* Benny  card */}
                <div className="card">
                    <div className="card__content">
                    <div className="card__img">
                      <img className="photo" src={Photo3} alt="" />
                      <div className="card__title">
                          <h1> Benny Roll </h1>
                          <p>USA, New York</p>
                      </div>
                    </div>

                    <div className="card__info">
                      <p>Lorem Ipsum is simply dummy 
                        text of the typesetting industry. 
                        Ipsum has been scrambled.
                      </p>
                    </div>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
            </main>
            
            {/* Partners */}
            <main className="partners">
                <div className="partners__img">
                <img src={partnersImg} alt="" />
                </div>
            </main> 


            {/* Our Projects */}
            <main className="our projects">
                <div className="projects">
                    <div className="projects__container">
                        <div className="projects__title">
                            <h1>Follow Our Projects</h1>
                        </div>

                        <div className="projects__text">
                            <p>It is a long established fact that a 
                            reader will be distracted by the of 
                            readable content of page  lookings at 
                            its layouts  points.
                            </p>
                        </div>
                    </div>
                </div>
            </main>

            {/* Follow Our Projects */}
            <main className="follow projects">
              {/* Bedroom 1 */}
                <div className="projects__cards">
                  <div className="projects__content">
                    <div className="projects__container">
                      <div className="projects-img__card">
                        <img src={Bedroom} alt="card__img-projects" />
                      </div>
                    </div>

                    <div className="card__desc">
                      <div className="desc__container">
                        <div className="desc-info">
                          <div className="desc__title">
                            <h1>Modern bedroom</h1>
                          </div>
                          <div className="desc__text">
                            <p>Decor / Artchitecture</p>
                          </div>
                        </div>
                        <div className="desc__img">
                          <img src={descIcon} alt="descIcon" />
                        </div>
                      </div>
                    </div>
                  </div>


                    {/* Bedroom2 */}
                  <div className="projects__content">
                    <div className="projects__container">
                      <div className="projects-img__card">
                        <img src={Bedroom2} alt="card__img-projects" />
                      </div>
                    </div>

                    <div className="card__desc">
                      <div className="desc__container">
                        <div className="desc-info">
                          <div className="desc__title">
                            <h1>Modern bedroom</h1>
                          </div>
                          <div className="desc__text">
                            <p>Decor / Artchitecture</p>
                          </div>
                        </div>

                        <div className="desc__img">
                          <img src={descIcon} alt="descIcon" />
                        </div>
                      </div>
                    </div>
                  </div>

                    {/* Bedroom3 */}
                  <div className="projects__content">
                    <div className="projects__container">
                      <div className="projects-img__card">
                        <img src={Bedroom3} alt="card__img-projects" />
                      </div>
                    </div>

                    <div className="card__desc">
                      <div className="desc__container">
                        <div className="desc-info">
                          <div className="desc__title">
                            <h1>Modern bedroom</h1>
                          </div>
                          <div className="desc__text">
                            <p>Decor / Artchitecture</p>
                          </div>
                        </div>

                        <div className="desc__img">
                          <img src={descIcon} alt="descIcon" />
                        </div>
                      </div>
                    </div>
                  </div>

                      {/* Bedroom4 */}
                  <div className="projects__content">
                    <div className="projects__container">
                      <div className="projects-img__card">
                        <img src={Bedroom4} alt="card__img-projects" />
                      </div>
                    </div>

                    <div className="card__desc">
                      <div className="desc__container">
                        <div className="desc-info">
                          <div className="desc__title">
                            <h1>Modern bedroom</h1>
                          </div>
                          <div className="desc__text">
                            <p>Decor / Artchitecture</p>
                          </div>
                        </div>

                        <div className="desc__img">
                          <img src={descIcon} alt="descIcon" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* YearsImg */}
                  <div className="partners__img-years">
                    <img src={Years} alt="" />
                  </div>
                </div>
            </main>


            {/* Articles & News */}
            <main className="articles__news">
                <div className="articles">
                    <div className="articles__container">
                        <div className="articles__title">
                            <h1>Articles & News</h1>
                        </div>

                        <div className="articles__text">
                            <p>It is a long established fact that a reader will 
                              be distracted by the of readable 
                              content of a page when lookings at its 
                              layouts the points of using.
                            </p>
                        </div>
                    </div>
                </div>
            </main>

             {/* Articles & News Cards */}
            <main className="news__cards">
              {/* card 1 Articles & News */}
              <div className="articles__cards">
                <div className="articles__wrapper">
                <div className="cards__container">
                    <div className="articl__card">
                      <div className="articl__img">
                        <img className="kitchen__img" src={Kitchen} alt="kitchen" />
                        <div className="article__desc">
                          <div className="articl__text">
                            <h1> Kitchan Design </h1>
                          </div>
                        </div>
                      </div>

                      <div className="artilce__content">
                        <div className="article__sub-text">
                          <p>Let’s Get Solution For Building Construction Work</p>
                        </div>

                        <div className="date">
                          <div className="article__date">
                            <p> 26 December,2022 </p>

                            <div className="date__img">
                                <img src={descIcon} alt="descIcon" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* card 2 Articles & News */}
              <div className="articles__cards articles__cards-active">
                <div className="articles__wrapper">
                <div className="cards__container">
                    <div className="articl__card">
                      <div className="articl__img">
                        <img className="kitchen__img" src={Kitchen2} alt="kitchen" />
                        <div className="article__desc">
                          <div className="articl__text">
                            <h1> Living Design </h1>
                          </div>
                        </div>
                      </div>

                      <div className="artilce__content">
                        <div className="article__sub-text">
                          <p>Low Cost Latest Invented Interior Designing Ideas.</p>
                        </div>
                        <div className="date">
                          <div className="article__date">
                            <p> 22 November,2023  </p>

                            <div className="date__img">
                                <img src={descIcon} alt="descIcon" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* card 3 Articles & News */}
              <div className="articles__cards">
                <div className="articles__wrapper">
                <div className="cards__container">
                    <div className="articl__card">
                      <div className="articl__img">
                        <img className="kitchen__img" src={Kitchen3} alt="kitchen" />
                        <div className="article__desc">
                          <div className="articl__text">
                            <h1> Interior Design </h1>
                          </div>
                        </div>
                      </div>

                      <div className="artilce__content">
                        <div className="article__sub-text">
                          <p>Best For Any Office & Business Interior Solution</p>
                        </div>
                        <div className="date">
                          <div className="article__date">
                            <p> 4 December,2023  </p>

                            <div className="date__img">
                                <img src={descIcon} alt="descIcon" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
            
            {/* Interno */}
            <main className="main__interno">
              <div className="interno">
                <div className="interno__container">
                  <div className="interno__title">
                    <h1>Wanna join the interno?</h1>
                  </div>

                  <div className="interno__text">
                    <p>It is a long established fact  will be distracted.</p>
                  </div>

                  <div className="btn">
                    <button>
                      <a href="#!" className="interno__btn-link">Contact With Us</a>
                      <img className="img" src={btn} alt="interno__btn" />
                    </button>
                  </div>
                </div>
              </div>
            </main>

            <Footer />
        </div>
    )
}

export default Home