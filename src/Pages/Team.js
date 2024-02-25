import React from "react";

import Footer from "../Components/Footer/Footer";

import "./../styles/main.css";
import "./../styles/reset.css";

import TeamImg from "./../img/TeamImg/CardPhoto1.png";
import TeamImg2 from "./../img/TeamImg/CardPhoto2.png";
import TeamImg3 from "./../img/TeamImg/CardPhoto3.png";
import TeamImg4 from "./../img/TeamImg/CardPhoto4.png";
import TeamImg5 from "./../img/TeamImg/CardPhoto5.png";
import TeamImg6 from "./../img/TeamImg/CardPhoto6.png";
import TeamImg7 from "./../img/TeamImg/CardPhoto7.png";
import TeamImg8 from "./../img/TeamImg/CardPhoto8.png";


import Facebook from "./../img/icons/Facebook.svg";
import Twitter from "./../img/icons/Twitter.svg";


const Team = () => {
    return(
      <div>

			{/* Team Img */}
			<main>
					<div className="team__details">
						<div className="blog__details-container">
							<div className="team__details-title">
								<h1> Team </h1>
							</div>
						</div>
					</div>
			</main>
			
			{/* Team Cards */}
			<main>
				<div className="team__cards">
					<div className="team__card-block">
						<div className="team__cards-container">
								{/* Card 1 */}
								<div className="sub__card">
									<div className="sub__card-img">
										<img  src={TeamImg} alt="team" />
									</div>
									<div className="sub__card-team__info">
										<div className="sub__card-team__info-container">
											<div className="sub__card-team-text">
												<h1>Alex Johnson</h1>
												<p>Design, Australia</p>
											</div>
											<div className="sub__card-team-img">
												<img src={Facebook} alt="facebook" />
												<img src={Twitter} alt="Twitter" />
											</div>
										</div>
									</div>
								</div>

								{/* Card 2 */}
								<div className="sub__card">
									<div className="sub__card-img">
										<img  src={TeamImg2} alt="team" />
									</div>
									<div className="sub__card-team__info">
										<div className="sub__card-team__info-container">
											<div className="sub__card-team-text">
												<h1>Nattasha Julie</h1>
												<p>Design, Australia</p>
											</div>
											<div className="sub__card-team-img">
												<img src={Facebook} alt="facebook" />
												<img src={Twitter} alt="Twitter" />
											</div>
										</div>
									</div>
								</div>

								{/* Card 3 */}
								<div className="sub__card">
									<div className="sub__card-img">
										<img  src={TeamImg3} alt="team" />
									</div>
									<div className="sub__card-team__info">
										<div className="sub__card-team__info-container">
											<div className="sub__card-team-text">
												<h1>John Smith</h1>
												<p>Design, Australia</p>
											</div>
											<div className="sub__card-team-img">
												<img src={Facebook} alt="facebook" />
												<img src={Twitter} alt="Twitter" />
											</div>
										</div>
									</div>
								</div>

									{/* Card 4 */}
								<div className="sub__card">
									<div className="sub__card-img">
										<img  src={TeamImg4} alt="team" />
									</div>
									<div className="sub__card-team__info">
										<div className="sub__card-team__info-container">
											<div className="sub__card-team-text">
												<h1>Nora Owen</h1>
												<p>Design, Australia</p>
											</div>
											<div className="sub__card-team-img">
												<img src={Facebook} alt="facebook" />
												<img src={Twitter} alt="Twitter" />
											</div>
										</div>
									</div>
								</div>

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
				</div>
			</main>

			<Footer />
      </div>
    )
}

export default Team