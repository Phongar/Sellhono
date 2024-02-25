import React from "react";
import "./../styles/main.css";
import "./../styles/reset.css";
import Footer from "../Components/Footer/Footer";

import partnersImg  from "./../img/icons/Partners.svg";

import Video from "./../img/SingleServices-img/Video.png";
import PlayBtn from "./../img/icons/Play Button.svg";

import ArtLine from "./../img/icons/ArtLine.svg";

import btn from "./../img/icons/btn.svg";
import SingleImg from "./../img/SingleServices-img/Services-img2.png";

import Years from "./../img/icons/Years.svg";

const SingleServices = () => {
	



    return (
        <div>

				{/* Single Services Img */}
				<main>
				<div className="single__services">
					<div className="single__services__container">
						<div className="single__services__title">
							<h1> Single Services </h1>
						</div>
					</div>
				</div>
				</main>

				{/* Trends */}
				<main>
					<div className="trends">
						<div className="trends__container">
							<div className="trends__title">
								<h1>We set the trends of modern living services.</h1>	
							</div>
							<div className="trends__text">
								<p>It is a long established fact that a reader 
									will be distracted by the of readable content of a page
								</p>	
							</div>

							<div className="sub__text">
								<div className="sub__text-container">
									<div className="text1">
										<p>
										when lookings at its layouts the points spriof using that it has a more less normal.
										A wonderful serenity has taken pgossession of my entire soul, 
										like thesce sweet morndsings of sphring which I enjoy with my forwhole heart. 
										I am alone, and feel the charm of excgistence in this spot, 
										which was created for the bliss of souls like mine.
										</p>	
									</div>
									<div className="text2">
										<p>when lookings at its layouts the points spriof using that it has a more less normal.
											A wonderful serenity has taken pgossession of my entire soul, 
											like thesce sweet morndsings of sphring which I enjoy with my forwhole heart. 
											I am alone, and feel the charm of excgistence in this spot, 
											which was created for the bliss of souls like mine.
										</p>	
									</div>
								</div>	
							</div>
						</div>

						<div className="partners__img2">
              <img src={partnersImg} alt="" />
            </div>		
					</div>	
				</main>	

				{/* Video */}
				<main>
					<div className="video">
						<div className="video__container">
							<div className="video__img">
								<img src={Video} alt="video" />
								<div className="video__btn">
									<img  src={PlayBtn} alt="play-btn" />
								</div>
							</div>
						</div>
					</div>	
				</main>	

				{/* Art */}
				<main>
					<div className="art">
						<div className="art__container">
							<div className="art__interior">
								<div className="art__title">
									<h1>Use of Interior</h1>
								</div>
								<ul className="art__list">
									<li>
										<span>1</span>
										We provide high quality design services.
									</li>
									<li>
										<span>2</span>
										Project on time and Latest Design.
									</li>
									<li>
										<span>3</span>
										Scientific Skills For getting a better result.
									</li>
									<li>
										<span>4</span>
										Renovations Benefit of Service
									</li>
									<li>
										<span>5</span>
										We are confident about our projects.
									</li>
								</ul>
							</div>

							<div className="artline">
								<img src={ArtLine} alt="artline" />
							</div>

							<div className="art__interior">
								<div className="art__title">
									<h1>Make An Art</h1>
								</div>
								<ul className="art__list">
									<li>
										<span>1</span>
										We provide high quality design services.
									</li>
									<li>
										<span>2</span>
										Project on time and Latest Design.
									</li>
									<li>
										<span>3</span>
										Scientific Skills For getting a better result.
									</li>
									<li>
										<span>4</span>
										Renovations Benefit of Service
									</li>
									<li>
										<span>5</span>
										We are confident about our projects.
									</li>
								</ul>
							</div>
						</div>	
					</div>	
				</main>			

				{/* Design */}
				<main>
					<div className="design">
						<div className="design__container">
							<div className="design__img">
								<img src={SingleImg} alt="single-img" />
							</div>
							<div className="design__content">
								<div className="design__title">
									<h1>We love design.That's how we got here.</h1>
								</div>
								<div className="design__text">
									<p>It is a long established fact that a reader 
										will be distracted by the 
										of readable content .
									</p>
								</div>
								<div className="content__btn content__btn2">
										<button>
											<a href="#!" className="sub__btn">
												Our Concept
												<img className="img" src={btn} alt="sub__btn-img" />
											</a>
										</button>
								</div>
							</div>
						</div>
						<div className="partners__img-years2">
                <img src={Years} alt="" />
            </div>
					</div>
				</main>

			<Footer />
      </div>
    )
}

export default SingleServices