import "./../styles/main.css";
import "./../styles/reset.css";
import Footer from "../Components/Footer/Footer";
import btn from "./../img/icons/btn.svg";

const Price = () => {
    return (
      <div>
				{/* Pricing & Plan Img */}
				<main>
				<div className="pricing__plan">
					<div className="pricing__plan__container">
						<div className="pricing__plan__title">
							<h1> Pricing& Plan </h1>
						</div>
					</div>
				</div>
				</main>

					{/* Price Cards */}
				<main>
					<div className="price">
						<div className="price__container">
							<div className="design__advices">
								<div className="sub__advices">
									<div className="advices__title">
										<h1>Design advices</h1>
									</div>
									<div className="advices__price">
										<div className="advices__desc">
											<h1>
												<span>$</span>
												29
											</h1>
											<p>/month</p>
										</div>
									</div>
								</div>
								<div className="advices__content">
									<div className="advices__text">
									<p>
									General living space advices
									Rennovation advices<br />
									Interior design advices
									Furniture reorganization<br />
									Up to 5 hours meetings
									</p>
									</div>
									<div className="content__btn content__btn2 content__btn-second">
										<button>
											<a href="#!" className="sub__btn">
												Get Started
												<img className="img" src={btn} alt="sub__btn-img" />
											</a>
										</button>
									</div>
								</div>
							</div>

							<div className="design__advices">
								<div className="sub__advices sub__advices-second">
									<div className="advices__title advices__title-interior">
										<h1>Complete interior</h1>
									</div>
									<div className="advices__price">
										<div className="advices__desc advices__desc-interior">
											<h1>
												<span>$</span>
												39
											</h1>
											<p>/month</p>
										</div>
									</div>
									<div className="most-btn">
											<a href="#!" className="btn-content">Most Popular Plans</a>
									</div>
								</div>
								<div className="advices__content advices__content-second">
									<div className="advices__text advices__text-second">
									<p>
									Complete home redesign
									Interior and exterior works
									Modular interior planning
									Kitchen design<br />
									Garages organization
									</p>
									</div>
									<div className="content__btn content__btn2 content__btn3">
										<button>
											<a href="#!" className="sub__btn">
												Get Started
												<img className="img" src={btn} alt="sub__btn-img" />
											</a>
										</button>
									</div>
								</div>
							</div>
						
							<div className="design__advices">
								<div className="sub__advices">
									<div className="advices__title advices__title-interior">
										<h1>Furniture design</h1>
									</div>
									<div className="advices__price">
										<div className="advices__desc">
											<h1>
												<span>$</span>
												59
											</h1>
											<p>/month</p>
										</div>
									</div>
								</div>
								<div className="advices__content">
									<div className="advices__text">
									<p>
									Furniture for living room
									Furniture refurbishment
									Sofas and amchairs<br />
									Tables and chairs<br />
									Kitchens
									</p>
									</div>
									<div className="content__btn content__btn2">
										<button>
											<a href="#!" className="sub__btn">
												Get Started
												<img className="img" src={btn} alt="sub__btn-img" />
											</a>
										</button>
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

export default Price