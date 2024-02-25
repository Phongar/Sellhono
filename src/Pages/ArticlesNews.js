import React from "react";

import "./../styles/main.css";
import "./../styles/reset.css";

import Footer from "../Components/Footer/Footer";

import SearchBar from "./../img/icons/SearchBar.svg";
import Ideas from "./../img/IdeasImg/Ideas.png";

import InventedBtn from "./../img/icons/EnventedBtn.svg";
import InventedRight from "./../img/icons/InventedRight.svg";

import Article from "./../img/NewsImg/Article.png";
import Article2 from "./../img/NewsImg/Article2.png";
import Article3 from "./../img/NewsImg/Article3.png";


const News = () => {
    return(
    <div>
				
			{/*News Img */}
			<main>
				<div className="news">
					<div className="news__container">
						<div className="news__title">
							<h1> Articles& News </h1>
						</div>
					</div>
				</div>
			</main>

			{/* Search Bar */}
			<main>
				<div className="search__bar">
					<div className="sub__search">
							<div className="sub__search-container">
							<input type="text" placeholder="Search"></input>
							<a href="#!">
							<img className="bar" src={SearchBar} alt="search" />
							</a>
							</div>
					</div>
				</div>
				<div className="post__title">
					<h1>Latest Post</h1>
				</div>
			</main>
			
			{/* Latest Post */}
			<main>
				<div className="ideas">
					<div className="ideas__container">
						<div className="idea__img">
							<img src={Ideas} alt="" />
						</div>

						<div className="cost__ideas">
							<div className="cost__container">
								<div className="invented__interior">
									<div className="invented__title">
										<h1>Low Cost Latest Invented Interior Designing Ideas</h1>
									</div>
									<div className="interior__text">
										<p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.
											posuere in.Contrary to popular belief.
											Lorem Ipsum is not simply random text. 
											It has roots in a piece of classica.
										</p>
									</div>
									<div className="invented__date">
										<div className="invented__year">
											<p>26 December,2022</p>
										</div>
										<div className="card__product-btn invented__btn">
											<img className="invented__sub-btn" src={InventedBtn} alt="" />
											<img className="inventedRight" src={InventedRight} alt="" />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="articles__news">
					<div className="articles__news-title">
						<h1>Articles & News</h1>
					</div>
				</div>
			</main>
			
			{/* Articles & News Cards */}
			<main>
					<div className="articles__news-cards">
						<div className="articles__news-cards-container">
							<div className="articles__news-card">
										<div className="news-card">
											<div className="new-card__img">
												<img src={Article} alt="article" />
											</div>
											<div className="news-card__desc">
												<div className="news-card__desc-container">
													<div className="news-card-title">
														<h1>Let’s Get Solution For Building Construction Work</h1>
													</div>
													<div className="news__card-date">
														<div className="news__card-year">
															<p>26 December,2022</p>
														</div>
															<div className="news__card-btn">
																<img className="new__card-btn"  src={InventedBtn} alt="" />
																<img className="new__line-right"  src={InventedRight} alt="" />
															</div>
													</div>
												</div>
											</div>
										</div>
							</div>

							<div className="articles__news-card">
										<div className="news-card">
											<div className="new-card__img">
												<img src={Article2} alt="article" />
											</div>
											<div className="news-card__desc">
												<div className="news-card__desc-container">
													<div className="news-card-title">
														<h1>Let’s Get Solution For Building Construction Work</h1>
													</div>
													<div className="news__card-date">
														<div className="news__card-year">
															<p>26 December,2022</p>
														</div>
															<div className="news__card-btn">
																<img className="new__card-btn"  src={InventedBtn} alt="" />
																<img className="new__line-right"  src={InventedRight} alt="" />
															</div>
													</div>
												</div>
											</div>
										</div>
							</div>

							<div className="articles__news-card">
										<div className="news-card">
											<div className="new-card__img">
												<img src={Article3} alt="article" />
											</div>
											<div className="news-card__desc">
												<div className="news-card__desc-container">
													<div className="news-card-title">
														<h1>Let’s Get Solution For Building Construction Work</h1>
													</div>
													<div className="news__card-date">
														<div className="news__card-year">
															<p>26 December,2022</p>
														</div>
															<div className="news__card-btn">
																<img className="new__card-btn"  src={InventedBtn} alt="" />
																<img className="new__line-right"  src={InventedRight} alt="" />
															</div>
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

export default News