import React from 'react';
import "./ButtonOne.scss"

const ButtonOne = (props) => {
	return (
		<div className='button-one'>
			{props.name}
		</div>
	);
};

export default ButtonOne;