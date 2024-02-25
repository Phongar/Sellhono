import React, { useState } from "react";
import Footer from "../Components/Footer/Footer";

import "./../styles/main.css";
import "./../styles/reset.css";

import MailIco from "./../img/icons/Mail.svg";
import PhoneIco from "./../img/icons/PhoneIco.svg";
import CirclePlanet from "./../img/icons/CirclePlanet.svg";
import Planet from "./../img/icons/PlanetIco.svg";

import SocialIco from "./../img/icons/Social Icon.svg";

import TeamSingleImg from "./../img/TeamImg/TeamSingleImg.png";

import Range from "./../img/icons/range1.svg";
import Range2 from "./../img/icons/range2.svg";
import Range3 from "./../img/icons/range3.svg";


import TeamImg5 from "./../img/TeamImg/CardPhoto5.png";
import TeamImg6 from "./../img/TeamImg/CardPhoto6.png";
import TeamImg7 from "./../img/TeamImg/CardPhoto7.png";
import TeamImg8 from "./../img/TeamImg/CardPhoto8.png";


import Facebook from "./../img/icons/Facebook.svg";
import Twitter from "./../img/icons/Twitter.svg";


const TeamSingle = () => {
	
	const [isTextVisible, setIsTextVisible] = useState(false);
	const [isPlusActive, setIsPlusActive] = useState(false);
	
		const toggleTextVisibility = () => {
			setIsTextVisible(!isTextVisible);
			setIsPlusActive(!isPlusActive);
		};

		const [isTextVisible2, setIsTextVisible2] = useState(false);
		const [isPlusActive2, setIsPlusActive2] = useState(false);

		const toggleTextVisibility2 = () => {
			setIsTextVisible2(!isTextVisible2);
			setIsPlusActive2(!isPlusActive2);
		};

		const [isTextVisible3, setIsTextVisible3] = useState(false);
		const [isPlusActive3, setIsPlusActive3] = useState(false);

		const toggleTextVisibility3 = () => {
			setIsTextVisible3(!isTextVisible3);
			setIsPlusActive3(!isPlusActive3);
		};



    return(
    <div>
			
			{/* Team Single Img */}
			<main>
					<div className="team__details">
						<div className="blog__details-container">
							<div className="team__details-title">
								<h1> Team Single </h1>
							</div>
						</div>
					</div>
			</main>
			
			{/* Author */}
			<main className="author__team-alex">
				<div className="athour__team">
					<div className="author-team__container">
						<div className="author__team-info">
							<div className="author-team-title">
								<h1>Alex Johnson</h1>
							</div>
							<div className="author-text__team">
								<p>Designer</p>
							</div>
							<div className="author__team-text">
								<p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.
									Contrpobelie frandomised words 
									which don't look even slightly 
									believable.
								</p>
							</div>
						</div>

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

						<div className="sub__author-team-img">
							<img src={TeamSingleImg} alt="" />
						</div>
					</div>
				</div>
			</main>

			{/* Question Cards Content */}
			<main>
				<div className="biography">
					<div className="bioghraphy__container">
						<div className="short__biography">
							<div className="short__title">
								<h1>Short Biography</h1>
							</div>
							<div className="short__text">
								<p>Lorem ipsum dolor sit amet, adipiscing 
									Aliquam eu sem vitae turpmaximus.posuere in.
									Contrary to popular belief.
									There are many variations of passages of Lorem 
									Ipsum available, but the majority have suffered 
									alteration in some form, njecthumour
									randomised words which don't look even slightly believable.
								</p>

								<p>Embarrassing hidden in the middle of text. 
									All the Lorem Ipsum generators on the Internet tend to 
									repeat predefined but the majority have suffered 
									alteration in some form chunks as necessary.
								</p>
							</div>
						</div>
						
						<div className="skills">
							<div className="skills-container">
								<div className="skills-first">
									<div className="sub__skills-info">
										<div className="sub__skills-title">
											<h1>Simplicity and Functionality</h1>
										</div>
										<div className="skills-text">
											<p>Lorem ipsum dolor sit amet, adipiscing 
											Aliquam eu sem vitae turpmaximus
											.posuere in belief.
											</p>

                      <p>There are many variations of passages of Lorem Ipsum from available, 
												but the majority have suffered alteration
												in some form, njecthumour
											</p>
										</div>
									</div>

									 <div className="range">
										<div className="range__sub-container">

										<div className="sub__range">
											<div className="range__title">
												<h1>Project Design</h1>
												<div className="range__num">65%</div>
											</div>
											<div className="range__img">
												<img src={Range} alt="range" />
											</div>
										</div>

										<div className="sub__range">
											<div className="range__title">
												<h1>Team Managment</h1>
												<div className="range__num2">95%</div>
											</div>
											<div className="range__img">
												<img src={Range2} alt="range" />
											</div>
										</div>

										<div className="sub__range">
											<div className="range__title">
												<h1>Client Satisfaction</h1>
												<div className="range__num3">75%</div>
											</div>
											<div className="range__img">
												<img src={Range3} alt="range" />
											</div>
										</div>
									 </div>
									 </div>
								</div>

								<div className="question">
									<div className="question__container">
										<div className="question__and-answer">
											<div className="question__title">
												<h1>Question And Answer</h1>
											</div>
											<div className="question__text">
												<p>Lorem ipsum dolor sit amet, adipiscing 
													Aliquam eu sem vitae turpmaximus.
													posuere in.
												</p>
											</div>
										</div>
										<div className="question__content">
											<div className="question__sub-container">

												<div className="question__card" 
												style={{ borderRadius: isPlusActive ? "18px" : "0", 
												background: isPlusActive ? "rgb(244, 240, 236)" : " "}}
												>
													<div className="question__sub-card">
														<div className="question__info" style={{backgroundColor: isPlusActive ? "rgb(244, 240, 236)" : "", border: isPlusActive ? "none": ''}}>
															<div className="question__sub-title">
																<h1>Website & Mobile App Design?</h1>
															</div>
															<div className="question__img" style={{backgroundColor: isPlusActive ? "white" : ''}} onClick={toggleTextVisibility}>
																 <span>{isPlusActive ? "-": "+"}</span> 
															</div>
														</div>
														<div className={`question__sub-text ${isTextVisible ? 'textActive' : 'isTextNotVisible'}`}>
															<p>Lorem ipsum dolor sit amet, adipiscing fromAliquam eu sem turpmaximus.</p>
														</div>
													</div>
												</div>

												<div className="question__card question__card-second" 
												style={{ borderRadius: isPlusActive2 ? "18px" : "0",
												background: isPlusActive2 ? "rgb(244, 240, 236)" : " "}}
												>
													<div className="question__sub-card">
														<div className="question__info" style={{backgroundColor: isPlusActive2 ? "rgb(244, 240, 236)" : "", border: isPlusActive2 ? "none": ''}}>
															<div className="question__sub-title">
																<h1>How to Easy Successful Projects?</h1>
															</div>
															<div className="question__img" style={{backgroundColor: isPlusActive2 ? "white" : ''}} onClick={toggleTextVisibility2}>
																 <span>{isPlusActive2 ? "-": "+"}</span> 
															</div>
														</div>
														<div className={`question__sub-text ${isTextVisible2 ? 'textActive' : 'isTextNotVisible'}`}>
															<p>Lorem ipsum dolor sit amet, adipiscing fromAliquam eu sem turpmaximus.</p>
														</div>
													</div>
												</div>

												<div className="question__card question__card-third" 
												style={{ borderRadius: isPlusActive3 ? "18px" : "0", 
												background: isPlusActive3 ? "rgb(244, 240, 236)" : " "}}
												>
													<div className="question__sub-card">
														<div className="question__info" style={{backgroundColor: isPlusActive3 ? "rgb(244, 240, 236)" : "", border: isPlusActive3 ? "none": ''}}>
															<div className="question__sub-title">
																<h1>International Trade Experience?</h1>
															</div>
															<div className="question__img" style={{backgroundColor: isPlusActive3 ? "white" : ''}} onClick={toggleTextVisibility3}>
																 <span>{isPlusActive3 ? "-": "+"}</span> 
															</div>
														</div>
														<div className={`question__sub-text ${isTextVisible3 ? 'textActive' : 'isTextNotVisible'}`}>
															<p>Lorem ipsum dolor sit amet, adipiscing fromAliquam eu sem turpmaximus.</p>
														</div>
													</div>
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

			{/* Team Cards */}
			<main>
				<div className="team__cards">
					<div className="team__card-container">

						{/* Card 5 */}
						<div className="sub__card">
									<div className="sub__card-img">
										<img  src={TeamImg5} alt="team" />
									</div>
									<div className="sub__card-team__info">
										<div className="sub__card-team__info-container">
											<div className="sub__card-team-text">
												<h1>Parker Carter</h1>
												<p>Design, Australia</p>
											</div>
											<div className="sub__card-team-img">
												<img src={Facebook} alt="facebook" />
												<img src={Twitter} alt="Twitter" />
											</div>
										</div>
									</div>
								</div>

								{/* Card 6 */}
								<div className="sub__card">
									<div className="sub__card-img">
										<img  src={TeamImg6} alt="team" />
									</div>
									<div className="sub__card-team__info">
										<div className="sub__card-team__info-container">
											<div className="sub__card-team-text">
												<h1>Avery Jackson</h1>
												<p>Design, Australia</p>
											</div>
											<div className="sub__card-team-img">
												<img src={Facebook} alt="facebook" />
												<img src={Twitter} alt="Twitter" />
											</div>
										</div>
									</div>
								</div>

								{/* Card 7 */}
								<div className="sub__card">
									<div className="sub__card-img">
										<img  src={TeamImg7} alt="team" />
									</div>
									<div className="sub__card-team__info">
										<div className="sub__card-team__info-container">
											<div className="sub__card-team-text">
												<h1>Luna James</h1>
												<p>Design, Australia</p>
											</div>
											<div className="sub__card-team-img">
												<img src={Facebook} alt="facebook" />
												<img src={Twitter} alt="Twitter" />
											</div>
										</div>
									</div>
								</div>

								{/* Card 8 */}
								<div className="sub__card">
									<div className="sub__card-img">
										<img  src={TeamImg8} alt="team" />
									</div>
									<div className="sub__card-team__info">
										<div className="sub__card-team__info-container">
											<div className="sub__card-team-text">
												<h1>Gianna Mateo</h1>
												<p>Design, Australia</p>
											</div>
											<div className="sub__card-team-img">
												<img src={Facebook} alt="facebook" />
												<img src={Twitter} alt="Twitter" />
											</div>
										</div>
									</div>
								</div>
					</div>
				</div>
			</main>


		<Footer />
    </div>
    )
}

export default TeamSingle

