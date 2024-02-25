import "./../styles/main.css";
import "./../styles/reset.css";

import Footer from "./../Components/Footer/Footer";



import Vanna2 from "./../img/Tabs-img/vanna2.jpg";
import CardBtn from "./../img/icons/cardBtn.svg";
import Right from "./../img/icons/CardLineRight.svg";

import Bedroom from "./../img/Tabs-img/Bedroom.png";
import Bedroom2 from "./../img/Tabs-img/Bedroom 2.png";
import Bedroom3 from "./../img/Tabs-img/Bedroom 3.png";
import Bedroom4 from "./../img/Tabs-img/Bedroom 4.png";
import Bedroom5 from "./../img/Tabs-img/Bedroom 5.png";
import Bedroom6 from "./../img/Tabs-img/Bedroom 6.png";

import Kitchan from "./../img/Tabs-img/Kitchan.jpg";

import Area2 from "./../img/Tabs-img/Area2.jpg";
import { useState } from "react";


const OurProject = () => {


	const [activeButton,setActiveButton] = useState('Bathroom');

	const handleButtonClick = (tab) => {
		setActiveButton(tab);
	}


	return(
		<div>
			
			{/* Our Project Img */}
			<main>
				<div className="pricing__plan">
					<div className="pricing__plan__container">
						<div className="pricing__plan__title">
							<h1> Our Project </h1>
						</div>
					</div>
				</div>
			</main>
				
				{/* TABS */}
				<main>
					<div className="products">
						<div className="products__tabs">
							<div className="products__btn">
								<button className={`controll__btn ${activeButton === 'Bathroom' ? 'active-tabs' : ''}`}
								onClick={() => handleButtonClick('Bathroom')}
								>
									<a href="#!" className="btn__name-controll">Bathroom</a>
								</button>

								<button className={`controll__btn ${activeButton === 'Bedroom' ? 'active-tabs' : ''}`}
								onClick={() => handleButtonClick('Bedroom')}>
									<a href="#!" className="btn__name-controll">
										Bedroom
									</a>
								</button>
								<button className={`controll__btn ${activeButton === 'Kitchan' ? 'active-tabs': ''}` }
								onClick={() => handleButtonClick('Kitchan')}>
									<a href="#!" className="btn__name-controll">Kitchan</a>
								</button>
								<button className={`controll__btn ${activeButton === 'Living Area' ? 'active-tabs': ''}`}
								onClick={() => handleButtonClick('Living Area')}>
									<a href="#!" className="btn__name-controll">Living Area</a>
								</button>
							</div>
						</div>


						{/* Bathroom Block Img */}
						<div className={`cards__products ${activeButton !== 'Bathroom' ? 'hidden': ''}`}>
							<div className="cards__products-container">
								<div className="card__product-product">
								<div className="card__products-img">
									<img className="bathroom" width={580} height={700} src={Vanna2} alt="" />
								</div>
								<div className="card__product-description">
									<div className="card__product-description-container">
									<div className="card__product-info">
										<div className="card__product-title">
											<h1>Modern bathroom</h1>
										</div>
										<div className="card__product-text">
												<p>Decor / Artchitecture</p>
										</div>
										</div>
										<div className="card__product-btn">
											<img src={CardBtn} alt="" />
											<img className="LineRight" src={Right} alt="" />
										</div>
									</div>
								</div>
							</div>

							<div className="card__product-product">
								<div className="card__products-img">
									<img className="bathroom"  width={580} height={700} src={Vanna2} alt="" />
								</div>
								<div className="card__product-description">
									<div className="card__product-description-container">
									<div className="card__product-info">
										<div className="card__product-title">
											<h1>Modern bathroom</h1>
										</div>
										<div className="card__product-text">
												<p>Decor / Artchitecture</p>
										</div>
										</div>
										<div className="card__product-btn">
											<img src={CardBtn} alt="" />
											<img className="LineRight" src={Right} alt="" />
										</div>
									</div>
								</div>
							</div>

							<div className="card__product-product">
								<div className="card__products-img">
									<img className="bathroom" width={580} height={700} src={Vanna2} alt="" />
								</div>
								<div className="card__product-description">
									<div className="card__product-description-container">
									<div className="card__product-info">
										<div className="card__product-title">
											<h1>Modern bathroom</h1>
										</div>
										<div className="card__product-text">
												<p>Decor / Artchitecture</p>
										</div>
										</div>
										<div className="card__product-btn">
											<img src={CardBtn} alt="" />
											<img className="LineRight" src={Right} alt="" />
										</div>
									</div>
								</div>
							</div>

							<div className="card__product-product">
								<div className="card__products-img">
									<img className="bathroom" width={580} height={700} src={Vanna2} alt="" />
								</div>
								<div className="card__product-description">
									<div className="card__product-description-container">
									<div className="card__product-info">
										<div className="card__product-title">
											<h1>Modern bathroom</h1>
										</div>
										<div className="card__product-text">
												<p>Decor / Artchitecture</p>
										</div>
										</div>
										<div className="card__product-btn">
											<img src={CardBtn} alt="" />
											<img className="LineRight" src={Right} alt="" />
										</div>
									</div>
								</div>
							</div>

							<div className="card__product-product">
								<div className="card__products-img">
									<img className="bathroom" width={580} height={700} src={Vanna2} alt="" />
								</div>
								<div className="card__product-description">
									<div className="card__product-description-container">
									<div className="card__product-info">
										<div className="card__product-title">
											<h1>Modern bathroom</h1>
										</div>
										<div className="card__product-text">
												<p>Decor / Artchitecture</p>
										</div>
										</div>
										<div className="card__product-btn">
											<img src={CardBtn} alt="" />
											<img className="LineRight" src={Right} alt="" />
										</div>
									</div>
								</div>
							</div>

							<div className="card__product-product">
								<div className="card__products-img">
									<img className="bathroom" width={580} height={700} src={Vanna2} alt="" />
								</div>
								<div className="card__product-description">
									<div className="card__product-description-container">
									<div className="card__product-info">
										<div className="card__product-title">
											<h1>Modern bathroom</h1>
										</div>
										<div className="card__product-text">
												<p>Decor / Artchitecture</p>
										</div>
										</div>
										<div className="card__product-btn">
											<img src={CardBtn} alt="" />
											<img className="LineRight" src={Right} alt="" />
										</div>
									</div>
								</div>
							</div>
							</div>
						</div>
						{/* Bathroom Block Img */}
						

							{/* Bedroom Block Img */}
							<div className={`cards__products ${activeButton !== 'Bedroom' ? 'hidden': ''}`}>
							<div className="cards__products-container">
								<div className="card__product-product">
								<div className="card__products-img">
									<img width={580} height={700} src={Bedroom} alt="" />
								</div>
								<div className="card__product-description">
									<div className="card__product-description-container">
									<div className="card__product-info">
										<div className="card__product-title">
											<h1>Modern bedroom</h1>
										</div>
										<div className="card__product-text">
												<p>Decor / Artchitecture</p>
										</div>
										</div>
										<div className="card__product-btn">
											<img src={CardBtn} alt="" />
											<img className="LineRight" src={Right} alt="" />
										</div>
									</div>
								</div>
							</div>

							<div className="card__product-product">
								<div className="card__products-img">
									<img width={580} height={700} src={Bedroom2} alt="" />
								</div>
								<div className="card__product-description">
									<div className="card__product-description-container">
									<div className="card__product-info">
										<div className="card__product-title">
											<h1>Modern bedroom</h1>
										</div>
										<div className="card__product-text">
												<p>Decor / Artchitecture</p>
										</div>
										</div>
										<div className="card__product-btn">
											<img src={CardBtn} alt="" />
											<img className="LineRight" src={Right} alt="" />
										</div>
									</div>
								</div>
							</div>

							<div className="card__product-product">
								<div className="card__products-img">
									<img width={580} height={700} src={Bedroom3} alt="" />
								</div>
								<div className="card__product-description">
									<div className="card__product-description-container">
									<div className="card__product-info">
										<div className="card__product-title">
											<h1>Modern bedroom</h1>
										</div>
										<div className="card__product-text">
												<p>Decor / Artchitecture</p>
										</div>
										</div>
										<div className="card__product-btn">
											<img src={CardBtn} alt="" />
											<img className="LineRight" src={Right} alt="" />
										</div>
									</div>
								</div>
							</div>

							<div className="card__product-product">
								<div className="card__products-img">
									<img width={580} height={700} src={Bedroom4} alt="" />
								</div>
								<div className="card__product-description">
									<div className="card__product-description-container">
									<div className="card__product-info">
										<div className="card__product-title">
											<h1>Modern bedroom</h1>
										</div>
										<div className="card__product-text">
												<p>Decor / Artchitecture</p>
										</div>
										</div>
										<div className="card__product-btn">
											<img src={CardBtn} alt="" />
											<img className="LineRight" src={Right} alt="" />
										</div>
									</div>
								</div>
							</div>

							<div className="card__product-product">
								<div className="card__products-img">
									<img width={580} height={700} src={Bedroom5} alt="" />
								</div>
								<div className="card__product-description">
									<div className="card__product-description-container">
									<div className="card__product-info">
										<div className="card__product-title">
											<h1>Modern bedroom</h1>
										</div>
										<div className="card__product-text">
												<p>Decor / Artchitecture</p>
										</div>
										</div>
										<div className="card__product-btn">
											<img src={CardBtn} alt="" />
											<img className="LineRight" src={Right} alt="" />
										</div>
									</div>
								</div>
							</div>

							<div className="card__product-product">
								<div className="card__products-img">
									<img width={580} height={700} src={Bedroom6} alt="" />
								</div>
								<div className="card__product-description">
									<div className="card__product-description-container">
									<div className="card__product-info">
										<div className="card__product-title">
											<h1>Modern bedroom</h1>
										</div>
										<div className="card__product-text">
												<p>Decor / Artchitecture</p>
										</div>
										</div>
										<div className="card__product-btn">
											<img src={CardBtn} alt="" />
											<img className="LineRight" src={Right} alt="" />
										</div>
									</div>
								</div>
							</div>
							</div>
						</div>
						{/* Bedroom Block Img */}


							{/* Kitchan Block Img */}
						<div className={`cards__products ${activeButton !== 'Kitchan' ? 'hidden': ''}`}>
							<div className="cards__products-container">
								<div className="card__product-product">
								<div className="card__products-img">
									<img width={580} height={700} src={Kitchan} alt="" />
								</div>
								<div className="card__product-description">
									<div className="card__product-description-container">
									<div className="card__product-info">
										<div className="card__product-title">
											<h1>Modern kitchan</h1>
										</div>
										<div className="card__product-text">
												<p>Decor / Artchitecture</p>
										</div>
										</div>
										<div className="card__product-btn">
											<img src={CardBtn} alt="" />
											<img className="LineRight" src={Right} alt="" />
										</div>
									</div>
								</div>
							</div>

							<div className="card__product-product">
								<div className="card__products-img">
									<img width={580} height={700} src={Kitchan} alt="" />
								</div>
								<div className="card__product-description">
									<div className="card__product-description-container">
									<div className="card__product-info">
										<div className="card__product-title">
											<h1>Modern kitchan</h1>
										</div>
										<div className="card__product-text">
												<p>Decor / Artchitecture</p>
										</div>
										</div>
										<div className="card__product-btn">
											<img src={CardBtn} alt="" />
											<img className="LineRight" src={Right} alt="" />
										</div>
									</div>
								</div>
							</div>

							<div className="card__product-product">
								<div className="card__products-img">
									<img width={580} height={700} src={Kitchan} alt="" />
								</div>
								<div className="card__product-description">
									<div className="card__product-description-container">
									<div className="card__product-info">
										<div className="card__product-title">
											<h1>Modern kitchan</h1>
										</div>
										<div className="card__product-text">
												<p>Decor / Artchitecture</p>
										</div>
										</div>
										<div className="card__product-btn">
											<img src={CardBtn} alt="" />
											<img className="LineRight" src={Right} alt="" />
										</div>
									</div>
								</div>
							</div>

							<div className="card__product-product">
								<div className="card__products-img">
									<img width={580} height={700} src={Kitchan} alt="" />
								</div>
								<div className="card__product-description">
									<div className="card__product-description-container">
									<div className="card__product-info">
										<div className="card__product-title">
											<h1>Modern kitchan</h1>
										</div>
										<div className="card__product-text">
												<p>Decor / Artchitecture</p>
										</div>
										</div>
										<div className="card__product-btn">
											<img src={CardBtn} alt="" />
											<img className="LineRight" src={Right} alt="" />
										</div>
									</div>
								</div>
							</div>

							<div className="card__product-product">
								<div className="card__products-img">
									<img width={580} height={700} src={Kitchan} alt="" />
								</div>
								<div className="card__product-description">
									<div className="card__product-description-container">
									<div className="card__product-info">
										<div className="card__product-title">
											<h1>Modern kitchan</h1>
										</div>
										<div className="card__product-text">
												<p>Decor / Artchitecture</p>
										</div>
										</div>
										<div className="card__product-btn">
											<img src={CardBtn} alt="" />
											<img className="LineRight" src={Right} alt="" />
										</div>
									</div>
								</div>
							</div>

							<div className="card__product-product">
								<div className="card__products-img">
									<img width={580} height={700} src={Kitchan} alt="" />
								</div>
								<div className="card__product-description">
									<div className="card__product-description-container">
									<div className="card__product-info">
										<div className="card__product-title">
											<h1>Modern kitchan</h1>
										</div>
										<div className="card__product-text">
												<p>Decor / Artchitecture</p>
										</div>
										</div>
										<div className="card__product-btn">
											<img src={CardBtn} alt="" />
											<img className="LineRight" src={Right} alt="" />
										</div>
									</div>
								</div>
							</div>
							</div>
						</div>
							{/* Kitchan Block Img */}


						{/* Living Area Block Img */}
						<div className={`cards__products ${activeButton !== 'Living Area' ? 'hidden': ''}`}>
							<div className="cards__products-container">
								<div className="card__product-product">
								<div className="card__products-img">
									<img width={580} height={700} src={Area2} alt="" />
								</div>
								<div className="card__product-description">
									<div className="card__product-description-container">
									<div className="card__product-info">
										<div className="card__product-title">
											<h1>Modern Area</h1>
										</div>
										<div className="card__product-text">
												<p>Decor / Artchitecture</p>
										</div>
										</div>
										<div className="card__product-btn">
											<img src={CardBtn} alt="" />
											<img className="LineRight" src={Right} alt="" />
										</div>
									</div>
								</div>
							</div>

							<div className="card__product-product">
								<div className="card__products-img">
									<img width={580} height={700} src={Area2} alt="" />
								</div>
								<div className="card__product-description">
									<div className="card__product-description-container">
									<div className="card__product-info">
										<div className="card__product-title">
											<h1>Modern Area</h1>
										</div>
										<div className="card__product-text">
												<p>Decor / Artchitecture</p>
										</div>
										</div>
										<div className="card__product-btn">
											<img src={CardBtn} alt="" />
											<img className="LineRight" src={Right} alt="" />
										</div>
									</div>
								</div>
							</div>

							<div className="card__product-product">
								<div className="card__products-img">
									<img width={580} height={700} src={Area2} alt="" />
								</div>
								<div className="card__product-description">
									<div className="card__product-description-container">
									<div className="card__product-info">
										<div className="card__product-title">
											<h1>Modern Area</h1>
										</div>
										<div className="card__product-text">
												<p>Decor / Artchitecture</p>
										</div>
										</div>
										<div className="card__product-btn">
											<img src={CardBtn} alt="" />
											<img className="LineRight" src={Right} alt="" />
										</div>
									</div>
								</div>
							</div>

							<div className="card__product-product">
								<div className="card__products-img">
									<img width={580} height={700} src={Area2} alt="" />
								</div>
								<div className="card__product-description">
									<div className="card__product-description-container">
									<div className="card__product-info">
										<div className="card__product-title">
											<h1>Modern Area</h1>
										</div>
										<div className="card__product-text">
												<p>Decor / Artchitecture</p>
										</div>
										</div>
										<div className="card__product-btn">
											<img src={CardBtn} alt="" />
											<img className="LineRight" src={Right} alt="" />
										</div>
									</div>
								</div>
							</div>

							<div className="card__product-product">
								<div className="card__products-img">
									<img width={580} height={700} src={Area2} alt="" />
								</div>
								<div className="card__product-description">
									<div className="card__product-description-container">
									<div className="card__product-info">
										<div className="card__product-title">
											<h1>Modern Area</h1>
										</div>
										<div className="card__product-text">
												<p>Decor / Artchitecture</p>
										</div>
										</div>
										<div className="card__product-btn">
											<img src={CardBtn} alt="" />
											<img className="LineRight" src={Right} alt="" />
										</div>
									</div>
								</div>
							</div>

							<div className="card__product-product">
								<div className="card__products-img">
									<img width={580} height={700} src={Area2} alt="" />
								</div>
								<div className="card__product-description">
									<div className="card__product-description-container">
									<div className="card__product-info">
										<div className="card__product-title">
											<h1>Modern Area</h1>
										</div>
										<div className="card__product-text">
												<p>Decor / Artchitecture</p>
										</div>
										</div>
										<div className="card__product-btn">
											<img src={CardBtn} alt="" />
											<img className="LineRight" src={Right} alt="" />
										</div>
									</div>
								</div>
							</div>
							</div>
						</div>
							{/* Living Area Block Img */}


						{/* Pagination Nums */}
						<div className="product__pagination">
								<div className="product__pagination-container">
									<div className="pagination__btn">
										<button className="pagination__number-one">
											01
										</button>
										<button className="pagination__number-one">
											02
										</button>
										<button className="pagination__number-one">
											03
										</button>
										<button className="pagination__number-two">
											<img src={Right} alt="" />
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

export default OurProject