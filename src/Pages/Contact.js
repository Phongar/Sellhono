import React from "react";

import "./../styles/main.css";
import "./../styles/reset.css";

import Footer from "../Components/Footer/Footer";

import MailIco from "./../img/icons/Mail.svg";
import PhoneIco from "./../img/icons/PhoneIco.svg";
import SocialIco from "./../img/icons/Social Icon.svg";


import CirclePlanet from "./../img/icons/CirclePlanet.svg";
import Planet from "./../img/icons/PlanetIco.svg";

import Map from "./../img/ContactImg/Map.png";

import whiteline from "./../img/icons/whiteline.svg";

const Contact = () => {
  return(
      <div>
				
			{/* Contact Img */}
			<main>
					<div className="contactImg ">
						<div className="blog__details-container">
						</div>
					</div>
			</main>

			{/* Info */}
			<main>
				<div className="contact-info__about">
					<div className="contact-info__about-container">
							<div className="author__contacts">
								<ul className="author__sub-contacts">
									<li>
										<img src={MailIco} alt="" />
										<span>info@selhono.com</span>
									</li>

									<li>
										<img src={PhoneIco} alt="" />
										<span>+1 (378) 400-1234</span>
									</li>

									<li>
										<img className="planet1" src={CirclePlanet} alt="" />
										<img className="planet2"  src={Planet} alt="" />
										<span>www.selhono.com</span>
									</li>
								</ul>
								<div className="social__icons">
									<img src={SocialIco} alt="" />
								</div>
								</div>
						</div>
				</div>
			</main>

			{/* Leave Reply Contact */}
			<main>
					<div className="leave__reply">
							<div className="leave__reply-title leave__reply-title-contact">
								<h1>We love meeting new people and helping them.</h1>
							</div>
							<div className="leave__reply-container leave__reply-container-contact">

							<div className="form__reply">
								<div className="form__reply-container">
									<div className="sub__reply">
										<div className="sub__reply-container">
											<input type="text" placeholder="Name" />
											<input type="text" placeholder="Email" />
										</div>
									</div>
									<div className="sub__reply">
										<div className="sub__reply-container">
											<input type="text" placeholder="Subject" />
											<input type="text" placeholder="Phone" />
										</div>
									</div>
									<div className="sub__reply-three">
										<div className="sub__reply-three-container">
											<div className="sub__reply-three-title">
												<h1>Hello Iam Interested in..</h1>
												<input type="text" />
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="reply__comments reply__comments-contact">
							<div className="reply__comments-contact-container">
								<div className="talk__btn content__btn sub__talk-reply ">
									<button>
										<a href="#!" className="sub__talk-btn">
												Send Now
											<img className="img" src={whiteline} alt="sub__btn-img" />
										</a>
									</button>
								</div>
								</div>
							</div>
						</div>
					</div>
			</main>

			{/* Map */}
			<main>
				<div className="map">
					<div className="map__container">
						<div className="map__img">
							<img src={Map} alt="" />
						</div>
					</div>
				</div>
			</main>


				<Footer />
      </div>
  )
}

export default Contact