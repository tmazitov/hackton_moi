import React from 'react';
import {useNavigate} from 'react-router-dom'
import "./NavButton.scss"

const NavButton = (props) => {
	const navigate = useNavigate();
	return (
		<div onClick={()=>{navigate(props.linkTo)}} className='nav-button'>
			<div className="nav-button_icon">{props.image}</div>
			<div className="nav-button_name">{props.name}</div>
		</div>
	);
};

export default NavButton;