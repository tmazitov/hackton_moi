import React from 'react';
import "./TrafficFines.scss"
import { useNavigate } from 'react-router-dom';
import { Store } from '../../App';

const ButtonTraffic = () => {
	const context = React.useContext(Store)
	const navigate = useNavigate()
	const handleClick = () => {
		navigate("/traffic-fines/completion")
		if(context.data.launched && (context.data.currentStep === 3))
			context.setData({...context.data, currentStep : context.data.currentStep + 1})
	}
	React.useEffect(()=>{
		if(context.data.launched && (context.data.currentStep === 3)){
			document.getElementById("button-4").classList.add("guide-step")
			
			
		} else {
			document.getElementById("button-4").classList.remove("guide-step")
			
		}
	})
	return (
		<div id='button-4' onClick={handleClick} className="traffic-button">
			VIEW DETAILS
		</div>
	)
}

//const InputNumber = (props) => {
//	return (
//		<div className="input-number">
//			<div className="input-number_text">{props.name}</div>
//			<input type="text" className="input-number_input" />
//		</div>
//	)
//}
const TcNumber = () => {
	const context = React.useContext(Store)
	const handlePress = (event) => {
		if(event.key === "Enter" && (context.data.launched && (context.data.currentStep === 2)))
		{
			context.setData({...context.data, currentStep : context.data.currentStep + 1})
		}
	}
	React.useEffect(()=>{
		if(context.data.launched && (context.data.currentStep === 2)){
			document.getElementById("button-3").classList.add("guide-step")
		} else {
			document.getElementById("button-3").classList.remove("guide-step")
		}
	})
	return (
		<div className="tc-number">
			<div id='button-3' className="">
			<div className="input-number">
				<div className="input-number_text">TC Number</div>
				<input onKeyDown={handlePress} type="text" className="input-number_input" />
			</div>
			</div>
				<ButtonTraffic/>
		</div>
	)
}

const LicenseNumber = () => {
	return (
		<div className="license-number">
					<div className="input-number">
			<div className="input-number_text">LICENSE SOURCE</div>
			<input type="text" className="input-number_input" />
		</div>
					<div className="input-number">
			<div className="input-number_text">LICENSE NUMBER</div>
			<input type="text" className="input-number_input" />
		</div>
			<ButtonTraffic/>
		</div>
	)
}


const TrafficFines = () => {
	const [visibility, setVisibility] = React.useState(true);
	const handleChange = (value) => {
		setVisibility(value)
	}
	return (
		<div className='traffic-fines'>
			<div className="traffic-fines_header">
				<div className="header_block"></div>
				<div className="header_block"></div>
				<div className="header_block"></div>
				<div className="header_block"></div>
			</div>
			<div className="traffic-fines__navigation">
				<div onClick={()=>{handleChange(true)}} className="navigation_button">TC NUMBER</div>
				<div onClick={()=>{handleChange(false)}} className="navigation_button">LICENSE NUMBER</div>
				<div className="navigation_button">PLATE NUMBER</div>
				<div className="navigation_button">EMIRATES ID</div>
			</div>
			{visibility ? <TcNumber/> : <LicenseNumber/>}
		</div>
	);
};

export default TrafficFines;