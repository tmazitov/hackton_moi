import React from 'react';
import "./Navigation.scss"
import NavButton from './NavButton/NavButton';
import { Store } from '../../App';

const Navigation = () => {
	const context = React.useContext(Store)
	const handleClick = () => {
		if(context.data.currentStep < 1)
			context.setData({...context.data, currentStep : (context.data.currentStep + 1)})
	}
	React.useEffect(()=>{
		if(context.data.launched && (context.data.currentStep === 0)){
			document.getElementById("button-1").classList.add("guide-step")
		} else {
			document.getElementById("button-1").classList.remove("guide-step")
		}
	})
	return (
		<div className='navigation'>
			<NavButton linkTo={'/'} name={'home'}/>
			<NavButton linkTo={'/media'} name={'media'}/>
			<div onClick={handleClick} id='button-1' >
				<NavButton linkTo={'/services'} name={'services'}/>
			</div>
			<NavButton linkTo={'/help'} name={'help'}/>
			<NavButton linkTo={'/profile'} name={'profile'}/>
		</div>
	);
};

export default Navigation;