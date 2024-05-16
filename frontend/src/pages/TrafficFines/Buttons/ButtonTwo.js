import React from 'react';
import "./ButtonTwo.scss"

const ButtonTwo = (props) => {
	return (
		<div className='button-two'>
			{props.name}
		</div>
	);
};

export default ButtonTwo;