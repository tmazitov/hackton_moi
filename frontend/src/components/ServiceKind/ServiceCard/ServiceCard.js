import React from 'react';
import "./ServiceCard.scss"

// props: name, image;
const ServiceCard = (props) => {
	return (
		<div className='service-card'>
			<div className="service-card_icon">{props.image}</div>
			<div className="service-card_name">{props.name}</div>
		</div>
	);
};

export default ServiceCard;