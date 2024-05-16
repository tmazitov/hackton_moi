import React from 'react';
import "./TrafficFines.scss"
import { useNavigate } from 'react-router-dom';

const ButtonTraffic = () => {
	const navigate = useNavigate()
	return (
		<div onClick={()=>{navigate("/traffic-fines/completion")}} className="traffic-button">
			VIEW DETAILS
		</div>
	)
}

const InputNumber = (props) => {
	return (
		<div className="input-number">
			<div className="input-number_text">{props.name}</div>
			<input type="text" className="input-number_input" />
		</div>
	)
}
const TcNumber = () => {
	return (
		<div className="tc-number">
			<InputNumber name="TC NUMBER"/>
			<ButtonTraffic/>
		</div>
	)
}

const LicenseNumber = () => {
	return (
		<div className="license-number">
			<InputNumber name="LICENSE SOURCE"/>
			<InputNumber name="LICENSE NUMBER"/>
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