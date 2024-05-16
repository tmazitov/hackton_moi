import React from 'react';
import "./ServiceCard.scss"
import { useNavigate } from 'react-router-dom';

// props: name, image;
const ServiceCard = (props) => {
	const navigate = useNavigate()
	const handleClick = () => {
		if(props.name === "Traffic Fines Payment")
			navigate("/traffic-fines");
	}
	return (
		<div onClick={handleClick} className='service-card'>
			<div className="service-card_icon"><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 48 48"><defs><mask id="ipTSquare0"><path fill="#555" stroke="#fff" strokeWidth="4" d="M39 6H9a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3Z"/></mask></defs><path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTSquare0)"/></svg></div>
			<div className="service-card_name">{props.name}</div>
		</div>
	);
};

export default ServiceCard;