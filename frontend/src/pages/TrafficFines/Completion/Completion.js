import React from 'react';
import "./Completion.scss"
import { useNavigate } from 'react-router-dom';

const Completion = () => {
	const navigate = useNavigate()
	const handleBack = () => {
		navigate("/traffic-fines")
	}
	const handleHome = () => {
		navigate("/")
	}
	return (
		<div className='completion'>
			<div className="completion-header">
				<div onClick={handleBack} className="header-back"></div>
			</div>
			<div className="checkbox_select_all_items">
				<input type='checkbox'/>
			</div>
			<div className="completion__checkbox">
				<div className='checkbox__item'>
					<input type="checkbox"/>
				</div>
				<div className='checkbox__item'>
					<input type="checkbox"/>
				</div>
				<div className='checkbox__item'>
					<input type="checkbox"/>
				</div>

			</div>
			<div onClick={handleHome} className="completion_pay">PAY</div>
		</div>
	);
};

export default Completion;