import React from "react"

import "./../styles/main.css";
import "./../styles/reset.css";

import Footer from "../Components/Footer/Footer";

import Accordion from "../Components/Accordion/Accordion";

import FaqQuestionImg from "./../img/FAQSImg/FaqImg.png";

import FaqImg2 from "./../img/FAQSImg/FaqImg2.png";


const faqList = [
	{
		q: "What is the Hipcouch Interior Design Service?",
		a: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary popular belief. There are many variations of passages of Lorem Ipsum available, but the majority randomised."
	},
	{
		q: "So, how exactly does this work?",
		a: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary popular belief. There are many variations of passages of Lorem Ipsum available, but the majority randomised."
	},
	{
		q: "What cities do you currently operate in?",
		a: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary popular belief. There are many variations of passages of Lorem Ipsum available, but the majority randomised."
	},
	{
		q: "Hipcouch Interior Design Service?",
		a: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary popular belief. There are many variations of passages of Lorem Ipsum available, but the majority randomised."
	},
	{
		q: "What kind of interior designers do you have?",
		a: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary popular belief. There are many variations of passages of Lorem Ipsum available, but the majority randomised."
	}
]


const faqList2 = [
	{
		q: "How long does it take?",
		a: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary popular belief. There are many variations of passages of Lorem Ipsum available, but the majority randomised."
	},
	{
		q: "Can I use my existing furnishings?",
		a: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary popular belief. There are many variations of passages of Lorem Ipsum available, but the majority randomised."
	},
	{
		q: "I put into redesigning my interior?",
		a: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary popular belief. There are many variations of passages of Lorem Ipsum available, but the majority randomised."
	},
	{
		q: "What do your services cost?",
		a: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary popular belief. There are many variations of passages of Lorem Ipsum available, but the majority randomised."
	},
	{
		q: "Do you offer free consultations?",
		a: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary popular belief. There are many variations of passages of Lorem Ipsum available, but the majority randomised."
	}
]


const FAQS = () => {

  return(
     <div>
			
			{/* Faqs Img */}
			<main>
				<div className="faqsImg ">
					<div className="blog__details-container">
						<div className="faqs-title">
							<h1>FAQ`s</h1>
						</div>
					</div>
				</div>
			</main>

			{/* Faq Card One */}
			<main>
				<div className="faq">
					<div className="faq__container">
						<div className="faq__card-one">
						<div className="faq__title">
							<h1 className="faq__title-title">Every Questions Answered</h1>
						</div>
						<div className="faq__info">
							<div className="faq__info-sub__container">
								<div className="faq__cards">	
								<Accordion faqList={faqList} /> 
								</div>
								<div className="faq__img">
									<img className="faq__img-img" src={FaqQuestionImg} alt="" />
								</div>
							</div>
						</div>
						</div>
					</div>
				</div>
			</main>

			{/* Faq Card Two */}
			<main className="faq2">
				<div className="faq">
					<div className="faq__container">
						<div className="faq__card-one">
						<div className="faq__title">
							<h1 className="faq__title-title">Project related questions</h1>
						</div>
						<div className="faq__info">
							<div className="faq__info-sub__container">
							<div className="faq__img">
									<img className="faq__img-img" src={FaqImg2} alt="" />
								</div>
								<div className="faq__cards">	
								<Accordion faqList={faqList2} /> 
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
export default FAQS






