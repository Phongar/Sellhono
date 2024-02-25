import "./../styles/main.css";
import "./../styles/reset.css";

import Footer from "../Components/Footer/Footer";

import DetailsVideo from "./../img/DetailsImg/VideoDetails.png";
import DeatilBtn from "./../img/icons/DetailBtn.svg";


const ProjectDetails = () => {

  return (
     <div>

			{/*Details Img */}
			<main>
				<div className="details-project">
					<div className="details__container-project">
						<div className="details__title-project">
							<h1> Project Details </h1>
						</div>
					</div>
				</div>
			</main>

			{/* Minimal Look Bedrooms */}
			<main>
				<div className="minimal">
					<div className="minimal__container">
						<div className="detail__content">
							<div className="details__base">
								<div className="details__base-container">
								<div className="client__category">
									<ul>
										<li >Client</li>
										<li>Category</li>
										<li>Tags</li>
										<li>Date</li>
										<li>Link</li>
									</ul>
								</div>
								<div className="client__name">
									<ul>
										<li>Your client name</li>
										<li>VIP</li>
										<li>VIP, Home</li>
										<li>Date 23,02,2022</li>
										<li>Link example.com</li>
									</ul>
								</div>
								</div>
							</div>
						</div>
						<div className="look__bedrooms">
							<div className="look__container">
								<div className="look__title">
									<h1>Minimal Look Bedrooms</h1>
								</div>
								<div className="look__text">
									<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
									Aliquamsem vitae turpis dignissim maximus. 
									Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. 
									Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. 
									Aenean in the ipsum vel lectus bibendum commodo. 
									</p>

									<p>
									In nec sem suscipit, convallis leo vitae, lacinia nibh. 
									Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. 
									Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis.
									Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>


			{/* Video Details */}
			<main>
					<div className="details__video">
						<div className="details__video-container">
							<div className="details__img">
								<img src={DetailsVideo}  alt="video" />
								<div className="details__btn">
									<img src={DeatilBtn} alt="play-btn" />
								</div>
							</div>
						</div>
					</div>	
			</main>	


		<Footer />
		 </div> 
  )

}

export default ProjectDetails