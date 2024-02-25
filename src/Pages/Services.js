import React from "react";
import "./../styles/main.css";
import "./../styles/reset.css";

import more from "./../img/icons/read-more.svg";
import Brown2 from "./../img/icons/Brown2.svg" ;                       

import ConceptImg from "./../img/Concept-img/Concept.png";
import Idea from "./../img/Concept-img/Idea.png";
import Design from "./../img/Concept-img/Design.png";
import Perfection from "./../img/Concept-img/Perfection.png";

import btn from "./../img/icons/btn.svg";

import "./../styles/footer2.css";

import Logo from "./../img/projects/Logo.png";
import Icons from "./../img/icons/Icons.svg";



const Services = () => {
	return (

		<div>

			{/* Services */}
			<main>
				<div className="services">
					<div className="services__container">
						<div className="services__title">
							<h1>Services</h1>
						</div>
					</div>
				</div>
			</main>

				{/* Interior Work */}
			<main className="project">
				<div className="project__block">
				<div className="project__container">

					{/* Project plan */}
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


					{/* Art Work */}
					<div className="art__work">
						<div className="block">
							<h1 className="project__title">2d/3d Art Work</h1>
							<div className="project__text">
								<p>There are many variations of the passages of lorem Ipsum from 
										available, majority.
								</p>
							</div>

							<div className="project__btn">
								<a href="#!" className="read">Read More</a>
								<img className="read__img" src={more} alt="" />
							</div>
						</div>


						{/* Interior Work */}
						<div className="block block-second">
							<h1 className="project__title project__title-second">Interior Work</h1>
							<div className="project__text project__text-second">
								<p>There are many variations of the passages of Lorem Ipsum available, majority</p>
							</div>

							<div className="project__btn">
								<a href="#!" className="read read__more-second">Read More</a>
								<img className="read__img" src={Brown2} alt="" />
							</div>
						</div>


						{/* Decoration Work */}
						<div className="block">
							<h1 className="project__title">Decoration Work</h1>
							<div className="project__text">
								<p>There are many variations of the passages of lorem Ipsum from available, majority.</p>
							</div>

							<div className="project__btn">
								<a href="#!" className="read">Read More</a>
								<img className="read__img" src={more} alt="" />
							</div>
						</div>
					</div>

					</div>
				</div>
			</main>

			{/* How we work */}
			<main>
				<div className="work">
					<div className="work__container">
						<div className="work__title">
							<h1> How We Work </h1>
						</div>
						<div className="work__text">
							<p>It is a long established fact  will be distracted.
							Lorem Ipsum is simply dummy text of 
							the printing and typesetting industry.
							</p>
						</div>
					</div>
				</div>
			</main>

			{/* Concept Work */}
			<main>
				<div className="concept">
					<div className="concept__container">
						<div className="concept__number">
							<span>01</span>
						</div>
							<div className="concept__img">
								<img src={ConceptImg} alt="concept__img" />
							</div>

							<div className="details-work">
								<div className="details__container">
									<div className="details__title-work">
										<h1>Concept & Details</h1>
									</div>
									<div className="details__text">
										<p>It is a long established fact  will be distracted.
											Lorem Ipsum is simply dummy from text of the
											and typesetting indufstry. 
										</p>
									</div>
								</div>
							</div>
					</div>
				</div>
			</main>

			{/* Idea */}
			<main>
				<div className="conept2">
					<div className="concept__container">
						<div className="concept__number2">
							<span>02</span>	
						</div>

						<div className="idea">
							<div className="idea__container">
								<div className="idea__title">
									<h1>Idea for Work</h1>
								</div>
								<div className="idea__text">
									<p>It is a long established fact  will be distracted.
											Lorem Ipsum is simply dummy from text of the
											and typesetting indufstry. 
									</p>
								</div>
							</div>
						</div>

						<div className="idea__img">
							<img src={Idea} alt="idea" />
						</div>
					</div>	
				</div>
			</main>

			{/* Design */}
			<main>
				<div className="concept">
					<div className="concept__container">
						<div className="concept__number">
							<span>03</span>
						</div>
							<div className="concept__img">
								<img src={Design} alt="concept__img" />
							</div>

							<div className="details-work">
								<div className="details__container">
									<div className="details__title-work details__title-work-two">
										<h1>Design</h1>
									</div>
									<div className="details__text">
										<p>It is a long established fact  will be distracted.
											Lorem Ipsum is simply dummy from text of the
											and typesetting indufstry. 
										</p>
									</div>
								</div>
							</div>
					</div>
				</div>
			</main>


			{/* Perfection */}
			<main>
				<div className="conept2">
					<div className="concept__container">
						<div className="concept__number2">
							<span>04</span>	
						</div>

						<div className="idea">
							<div className="idea__container">
								<div className="idea__title">
									<h1>Perfection</h1>
								</div>
								<div className="idea__text">
									<p>It is a long established fact  will be distracted.
											Lorem Ipsum is simply dummy from text of the
											and typesetting indufstry. 
									</p>
								</div>
							</div>
						</div>

						<div className="idea__img">
							<img src={Perfection} alt="idea" />
						</div>
					</div>	
				</div>
			</main>

			{/* Interno */}
			<main className="main__interno">
				<div className="sub__interno-container">
              <div className="interno page1">
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
        	</div>
       		</main>
			
			{/* Footer2 */}
			<footer className="footer2">
				 <div className="footer__container2">
					<div className="footer__info2">
						<div className="footer__logo2">
							<img className="logo__footer2" src={Logo} alt="logo" />
							<div className="footer__title2">
								<h1>SELHONO</h1>
							</div>
						</div>
						<div className="footer__desc2">
							<p>It is a long established fact that a reader will be distracted lookings.</p>
						</div>
							<div className="footer__social2">
								<img src={Icons} alt="Icons" />
							</div>
						</div>

						{/* Footer pages */}
						<div className="footer__pages2">
							<div className="pages__logo2">
								<h1>Pages</h1>
								</div>

								<ul className="pages__list2">
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
						<div className="footer__pages2">
							<div className="pages__logo2">
								<h1>Services</h1>
								</div>

								<ul className="pages__list2">
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
						
						<div className="contact2">
							<div className="contact__logo2">
								<h1>Contact</h1>
							</div>

							<ul className="contact__list2">  
								<li>55 East Birchwood Ave. Brooklyn, New York 11201</li>
								<li>
									<a href="#!">contact@selhono.com</a> 
								</li>
								<li>(123) 456 - 7890</li>
							</ul>
						</div>
					</div>

					<div className="copyright2">
						<h1>Copyright © SELHONO </h1>
					</div>
			</footer>
		
		</div>
	);
}

export default Services

