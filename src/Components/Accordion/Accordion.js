import React, {useState} from "react";

import "./accordion.css";


import "./../../styles/main.css";
import "./../../styles/reset.css";

import ArrowImg from "./../../img/icons/faqRight.svg";

export const Accordion = ({faqList}) => {

	const [openId,setId] = useState(null);
    const [isOpenFaq, setIsOpenFaq] = useState(new Array(faqList.length).fill(false));

	const clickFaq = (id) => {
		setId((prevId) => (prevId === id ? null : id));
		setIsOpenFaq((prevState)=>
		prevState.map((state,index) => (index === id ? !state : false))
		);
	};

	const [isRightActive, setIsRightActive] = useState(false);

	const toggleTextShow = () => {
	 	setIsRightActive(!isRightActive);
	}

    return(
    <ul className="accordion">
        {faqList.map((faqItem,id) => {
           return(
				<li className="accordion__item" key={id}>
					<button className="accordion-header" onClick={() => clickFaq(id)}>
						{faqItem.q}
						<span className={`arrow-img ${isOpenFaq[id] ? 'open' : ''}`} 
							onClick={toggleTextShow}>
							<img src={ArrowImg} alt="" />
						</span>
					</button>
					<div className={`accordion__collapse ${id === openId ? "open": ""}`}>
						<div className="accordion-body">{faqItem.a}</div>
					</div>
				</li>
				)
        })}
    </ul>
    )
}

export default Accordion

