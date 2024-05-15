import React from 'react';
import "./FeaturePopUp.scss"

const FeaturePopUp = (props) => {
	React.useEffect(()=>{
		const element = document.getElementById(props.el_id)
		const button = document.getElementById("button")
		const button_search = document.getElementById("button_search");
		const windowListen = (event)=>{
			console.log(event.target);

			if((event.target !== element) && (element.classList.contains("feature-popup_true")))
				{
					console.log("lol")

					element.classList.remove("feature-popup_true")
					element.parentElement.classList.remove("shadow_active")
				}
			else if ((event.target === button) | (event.target === button_search)) {
				element.classList.add("feature-popup_true")
				element.parentElement.classList.add("shadow_active")
			}
		}
		document.addEventListener("click", windowListen)
		return () => {
			document.removeEventListener("click", windowListen);
		}
	})
	return (
		<div className="shadow">

		<div id={props.el_id} className='feature-popup_false'>
			
		</div>
		</div>
	);
};

export default FeaturePopUp;