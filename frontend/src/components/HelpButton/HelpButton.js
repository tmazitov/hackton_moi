import React from 'react';
import "./HelpButton.scss"

const HelpButton = (props) => {
	return (
		<div className='help__button'>
			<div className="button_text">
				Do you need some help?
			</div> 
			<div className="button_choose">
				<div 
				onClick={(e)=>{document.querySelector(".help__button").style.display = "none"}} 
				id='button_search' className="choose_yes">YES</div>
				<div onClick={()=>{props.func(false)}} className="choose_no">NO</div>
			</div>
		</div>
	);
};

export default HelpButton;