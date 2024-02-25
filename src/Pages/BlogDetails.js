import "./../styles/main.css";
import "./../styles/reset.css";

import Footer from "../Components/Footer/Footer";

import SearchBar from "./../img/icons/SearchBar.svg";
import UnderLine from "./../img/icons/UnderLineBlog.svg";

import SmallLine from "./../img/icons/SmallLine.svg";
import { useState } from "react";

import SolutionImg from "./../img/SolutionImg/SolutionImg.png";

import Sprints from "./../img/SolutionImg/Sprints.png";


import Ico from "./../img/icons/brow-ico.svg";


const BlogDeatils = () => {

	
		const [activeTag, setActiveTag] = useState('kitchen');

		const handleTagClick = (tag) => {
			setActiveTag(tag);
		}
	
		return(
			<div>
			
				{/* Single Services Img */}
				<main>
					<div className="blog__details">
						<div className="blog__details-container">
							<div className="blog__details-title">
								<h1> BlogDeatils </h1>
							</div>
						</div>
					</div>
				</main>

		
				{/* Block Latest */}
				<main>
					<div className="sidebar">
						<div className="sidebar__container">
							<div className="small__search">
								<div className="input__search">
									<input type="text" placeholder="Search" />
									<img className="search__img" src={SearchBar} alt="search" />
								</div>
							</div>
							<div className="latest__news">
								<div className="latest__news-container">
									<div className="latest__title">
										<h1>Latest News</h1>
									</div>
									<div className="latest">
										<div className="latest__content-container">
										<div className="latest__content">
											<div className="latest__sub-container">
												<div className="latest__title-content">
													<h1>We Focus On Comfort And Gorgeous</h1>
												</div>
												<div className="latest__desc">
													<span>06/02/2023</span>
													<img src={UnderLine} alt="" />
												</div>
											</div>
										</div>
										<div className="latest__content">
											<div className="latest__sub-container">
												<div className="latest__title-content">
													<h1>We Focus On Comfort And Gorgeous</h1>
												</div>
												<div className="latest__desc">
													<span>06/02/2023</span>
													<img src={UnderLine} alt="" />
												</div>
											</div>
										</div>
										<div className="latest__content">
											<div className="latest__sub-container">
												<div className="latest__title-content">
													<h1>We Focus On Comfort And Gorgeous</h1>
												</div>
												<div className="latest__desc">
													<span>06/02/2023</span>
													<img src={UnderLine} alt="" />
												</div>
											</div>
										</div>
										</div>
									</div>
								</div>
							</div>
							{/* Categories */}
							<div className="categories">
								<div className="categories__container">
									<div className="categories__content">
										<div className="categories__title">
											<h1>Categories</h1>
										</div>
										<ul className="sub__categories">
												<li className="sub__categories-content">
													<h1>Decoration</h1>
													<img src={SmallLine} alt="" />
												</li>

												<li className="sub__categories-content">
													<h1>Door Windows</h1>
													<img src={SmallLine} alt="" />
												</li>

												<li className="sub__categories-content">
													<h1>Home Land</h1>
													<img src={SmallLine} alt="" />
												</li>
												<li className="sub__categories-content">
													<h1>Roof Installation</h1>
												</li>
										</ul>
										
										{/* Tags */}
										<div className="tags">
											<div className="tags__container">
												<div className="tags__title">
													<h1>Tags</h1>
												</div>
												<div className="tags__desc">
													<div className="tags__desc-container">
													<div className="tags__btn">
														<button className={`tag__kitchen ${activeTag === "kitchen" ? "active" : ""}`}
														onClick={() => handleTagClick("kitchen")}
														>
															<a href="#!">Kitchen</a>
														</button>
														<button className={`tag__bedroom ${activeTag === "bedroom" ? "active" : ""}`}
														onClick={() => handleTagClick("bedroom")}
														>
															<a href="#!">Bedroom</a>
														</button>
													</div>

													<div className="tags__btn">
														<button className={`tag__building ${activeTag === "building" ? "active" : ""}`}
														onClick={() => handleTagClick("building")}
														>
															<a href="#!">Building</a>
														</button>
														<button className={`tag__arch ${activeTag === "arch" ? "active" : ""}`}
														onClick={() => handleTagClick("arch")}
														>
															<a href="#!">Architecture</a>
														</button>
													</div>

													<div className="tags__btn">
														<button className={`tag__planning ${activeTag === "planning" ? "active" : ""}`}
														onClick={() => handleTagClick("planning")}
														>
															<a href="#!">Kitchen Planning</a>
														</button>
														<button className={`tag__bedroom ${activeTag === "bedroom2" ? "active" : ""}`}
														onClick={() => handleTagClick("bedroom2")}
														>
															<a href="#!">	Bedroom</a>
														</button>
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

				{/* Solution Work */}
				<main>
					<div className="solution">
						<div className="solution__container">
							<div className="solution__title">
								<h1>Let’s Get Solution for Building Construction Work</h1>
							</div>
							<div className="solution__img">
								<img src={SolutionImg} alt="" />
							</div>
							<div className="solution__text">
								<p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.
									posuere in.Contrary to popular belief.
									There are many variations of passages of Lorem Ipsum available, 
									but the majority have suffered alteration in some form, by injecthumour, 
									or randomised words which don't look 
									even slightly believable.
								</p>

								<p className="sub__solution__text">Embarrassing hidden in the middle of text. 
									All the Lorem Ipsum generators on the Internet 
									tend to repeat predefined chunks as necessary.
								</p>
							</div>
						</div>
					</div>
				</main>
				
				{/* Sprints */}
				<main>
					<div className="sprints">
						<div className="sprints__container">
							<div className="sub__sprints">
								<div className="sub__sprints-container">
									<div className="sub__sprints-title">
										<h1>Design sprints are great</h1>
									</div>
									<div className="sub__sprints-desc">
										<p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.
											posuere in.Contrary to popular belief.There are many variations of passages 
											of Lorem Ipsum available, 
											but the majority have suffered.
										</p>
									</div>

									<div className="sprints__info">
										<div className="sprint__info-container">
											<div className="sprints__info-text">
												<span>1</span>
												<p>Contrary to popular belief.There are many variations of passages 
													of Lorem Ipsum available, 
													but the majority have suffered.
												</p>
											</div>

											<div className="sprints__info-text">
												<span>2</span>
												<p>Contrary to popular belief.There are many variations of passages 
													of Lorem Ipsum available, 
													but the majority have suffered.
												</p>
											</div>

											<div className="sprints__info-text">
												<span>3</span>
												<p>Contrary to popular belief.There are many variations of passages 
													of Lorem Ipsum available, 
													but the majority have suffered.
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="sprints__img">
								<img src={Sprints} alt="" />
							</div>
						</div>
					</div>
				</main>

				{/* Leave Reply */}
				<main>
					<div className="leave__reply">
						<div className="leave__reply-container">
							<div className="leave__reply-title">
								<h1>Leave a Reply</h1>
							</div>

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
											<input type="text" placeholder="Website" />
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
							<div className="reply__comments">
								<div className="reply__comments-container">
									<label>
										<input type="checkbox" className="real-checkbox" />
										<span className="custom-checkbox" />
									</label>
									<p>Save my name, email, and website in 
										this browser for the 
										next time I comment.
									</p>
								</div>
								<div className="talk__btn content__btn sub__talk-reply">
									<button>
										<a href="#!" className="sub__talk-btn">
												Send Now
											<img className="img" src={Ico} alt="sub__btn-img" />
										</a>
									</button>
						</div>
							</div>
						</div>
					</div>
				</main>

				
				<Footer />
			</div>
		)
}

export default BlogDeatils