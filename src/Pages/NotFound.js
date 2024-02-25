import React from "react";

import Footer from "../Components/Footer/Footer";

import "./../styles/main.css";
import "./../styles/reset.css";

import NotFoundImg from "./../img/NotFoundImg/NotFound.png";

import Ico from "./../img/icons/brow-ico.svg";

const NotFound = () => {
    return(
      <div>

				{/* Not Found Img */}
        <main>
					<div className="not__found">
						<div className="not__found-container">
							<div className="not__found-img">
								<img src={NotFoundImg} alt="" />
							</div>
						</div>
					</div>
				</main>

				{/* Error */}
				<main>
					<div className="error">
						<div className="error__container">
							<div className="error__info">
								<div className="error__info-sub_container">
									<div className="error__info-sub">
									<div className="error__title">
										<h1>404</h1>
									</div>
									<div className="error__text">
										<p>We are sorry, but the pageyou requested was not found</p>
									</div>
								</div>
								</div>
							</div>
						<div className="error__btn">
							<button>
								<a href="/Home" className="error__link">
									<h1>Back To Home</h1>
									<img className="img" src={Ico} alt="" />
								</a>
							</button>
						</div>
						</div>
					</div>
				</main>


				<Footer />
      </div>
    )
}

export default NotFound