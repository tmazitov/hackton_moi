import React from 'react';
import "./FeatureWidget.scss"

const FeatureWidget = () => {
	//const handleClick = () => {
	//	const element = document.getElementById("widget")
	//	if(element.classList.contains("feature-popup_true"))
	//		element.classList.remove("feature-popup_true")
	//	else
	//		element.classList.add("feature-popup_true")
	//}
	return (
		<div 
		//onClick={handleClick} 
		className='feature-widget'>
			<div id="button" className="feature-widget_container">
				HELP!
			</div>
		</div>
	);
};

export default FeatureWidget;