import React from 'react';
import "./Yalla.scss"
import { Store } from '../../../App';

const Yalla = (props) => {
	const button = React.useRef();
	const context = React.useContext(Store);
	const checkSearch = context.data.search.length > 0
	const checkSelected = context.data.search.find((elem)=>elem.id === context.data.selectedId)

	const handleClick = () => {
		if(checkSearch)
		{
			const widget = document.getElementById(props.el_id);
			widget.classList.remove("feature-popup_true");
			widget.parentElement.classList.remove("shadow_active");
		}
	}
	React.useEffect(()=>{
		if(!(checkSearch && checkSelected))
			button.current.classList.add("yalla_disabled")
		else
			button.current.classList.remove("yalla_disabled")
	})
	return (
		<div id="yalla" ref={button} onClick={handleClick} className='yalla'>
			Yalla!
		</div>
	);
};

export default Yalla;