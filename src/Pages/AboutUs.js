import React from "react";
import "./../styles/reset.css";
import "./../styles/main.css";
import AboutImg from "./../img/icons/About-img.svg";
import AboutImg2 from "./../img/icons/About-img2.svg";
import AboutImg3 from "./../img/icons/About-img3.svg";

import AboutImg4 from "./../img/icons/About-img4.svg";
import AboutImg5 from "./../img/icons/About-img5.svg";
import AboutImg6 from "./../img/icons/About-img6.svg";

import Swiper from "./../Components/Swiper/Swiper";

import LineLeft from "./../img/icons/Line-left.svg";
import LineRight from "./../img/icons/Line-right.svg";

import btn from "./../img/icons/btn.svg";

import ContentImg from "./../img/What we do img/Content-img.png";

import Result from "./../img/What we do img/Result-img.png";

import Photo from "./../img/About-Us-img/Card-photo.jpg";
import Photo2 from "./../img/About-Us-img/Card-photo2.jpg";
import Photo3 from "./../img/About-Us-img/Card-photo3.jpg";

import UnderLine from "./../img/icons/Uderline.svg";

import BigLine from "./../img/icons/BigLine .svg";
import Ico from "./../img/icons/brow-ico.svg";

import Footer from "../Components/Footer/Footer";

const AboutUs =  () => {
    return (
		<div>
			{/* Block :Swiper and img main */}
			<div className="page__about__us">
				<div className="page__about__us-container">
        	<main>
            <div className="about__us">
							<div className="about__container">
								<div className="about__img">
									<img src={AboutImg} alt="about1" />
									<img src={AboutImg2} alt="about2" />
									<img src={AboutImg3} alt="about3" />
								</div>
							</div>
						</div>
        	</main>

				<Swiper />

				<main>
					<div className="about__us2">
						<div className="about__us__container">
							<div className="about__img2">
									<img src={AboutImg4} alt="about2" />
									<img src={AboutImg5} alt="about3" />
									<img src={AboutImg6} alt="about1" />
							</div>
						</div>
					</div>
				</main>
				</div>
			</div>

			{/* About Us Info */}
			<main>
				<div className="Info__container">
				<div className="About__info">
					<div className="line__left">
						<img src={LineLeft} alt="" />
						<img className="line-right" src={LineRight} alt="" />

					</div>

					<div className="Info__desc">
						<div className="Info__sub-container">
							<div className="sub__info">
								<p>
								I like an interior that defies labeling. 
								I don't really want someone to walk into a 
								room and know that I did it
								</p>
								</div>

								<div className="athour">
									<h1> BUNNY WILLIAMS </h1>
								</div>
						</div>
					</div>
				</div>
				</div>
			</main>
			
			{/* What We Do */}
			<main>
				<div className="about__content">
					<div className="about__content-container">
						<div className="content__title">
							<h1> What We Do </h1>
						</div>
						<div className="sub__content">
							<p>It is a long established fact that a reader will be 
								distracted by the of readable content of a page 
								when lookings at its layouts the points of using 
								that it has a more-or-less normal.
							</p>
						</div>
						<div className="content__btn">
							<button>
								<a href="#!" className="sub__btn">
									Our Concept
									<img className="img" src={btn} alt="sub__btn-img" />
								</a>
							</button>
						</div>
					</div>

					<div className="content__img">
							<div className="content__img-container">
							<img src={ContentImg} alt="" />
							</div>
						</div>
				</div>
			</main>

			{/* The End Result */}
			<main>
					<div className="result">
						<div className="result__container">
							<div className="result__img">
								<img src={Result} alt="" />
							</div>
						</div>

						<div className="result__content">
							<div className="result__content-container">
								<div className="result__title">
									<h1>The End Result</h1>
								</div>
								<div className="result__desc">
									<p>
									It is a long established fact that a reader will be 
									distracted by the of readable content of a page 
									when lookings at its layouts the points of using 
									that it has a more-or-less normal.
									</p>
								</div>
								<div className="content__btn">
									<button>
										<a href="#!" className="sub__btn">
											Our Portfolio
											<img className="img" src={btn} alt="sub__btn-img" />
										</a>
									</button>
								</div>
							</div>
						</div>
					</div>
			</main>


			{/* About Us 2 */}
			<main className="about us">
				<div className="about__us-sub__container">
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
		</div>
      </main>
			

			{/* Project Talk */}
			<main>
					<div className="project__talk">
						<div className="talk__container">
							<div className="talk__title">
								<h1>Creative project? Let's have a productive talk.</h1>
							</div>

							<div className="sub__talk">
								<div className="sub__talk-container">
								
								 {/* Name placeholder */}
								<div className="sub__title">
									<input type="text" placeholder="Name" />
									<div className="sub__talk-img">
										<img src={UnderLine} alt="" />
									</div>
									</div>

										{/* Email placeholder */}
									<div className="sub__title">
									<input type="text" placeholder="Email" />
									<div className="sub__talk-img">
										<img src={UnderLine} alt="UnderLine" />
									</div>
									</div>
								</div>

									{/* Message placeholder */}
								<div className="sub__title">
									<div className="message-container">
									<input type="text" placeholder="Message" />
									<div className="sub__talk-img">
										<img src={BigLine} alt="bigLine" />
									</div>
									</div>
								</div>
							</div>
						</div>

						{/* SEND NOW BTN */}
						<div className="talk__btn content__btn">
									<button>
										<a href="#!" className="sub__talk-btn">
												Send Now
											<img className="img" src={Ico} alt="sub__btn-img" />
										</a>
									</button>
						</div>
					</div>
			</main>
			
			<Footer />
			
		</div>
    )
}

export default AboutUs