import React from 'react';
import "./Completion.scss"
import { useNavigate } from 'react-router-dom';
import { initialData, Store } from '../../../App';

const Completion = () => {
	const context = React.useContext(Store)
	const navigate = useNavigate()
	const handleBack = () => {
		navigate("/traffic-fines")
	}
	const handleHome = () => {
		navigate("/")
	}
	const handleClick = () => {
		if(context.data.launched && (context.data.currentStep === 4))
			context.setData({...context.data, currentStep : context.data.currentStep + 1})
		if(context.data.launched && (context.data.currentStep === 5))
			{
				context.setData({...context ,data: initialData})
			}
	}
	React.useEffect(()=>{
		if(context.data.launched && (context.data.currentStep === 4)){
			document.getElementById("button-5").classList.add("guide-step")
			
		} else {
			document.getElementById("button-5").classList.remove("guide-step")
		}
		if(context.data.launched && (context.data.currentStep === 5)){
			document.getElementById("button-6").classList.add("guide-step")
			
			
		} else {
			document.getElementById("button-6").classList.remove("guide-step")
			
		}
	})
	return (
		<div className='completion'>
			<div className="completion-header">
				<div onClick={handleBack} className="header-back">BACK</div>
			</div>
			<div className="checkbox_select_all_items">
				<div onClick={handleClick} id="button-5" >Select All</div>
			</div>
			<div className="completion__checkbox">
				<div className='checkbox__item'>
					<input type="checkbox"/>
					<div className="item_text">Traffic Fine 1</div>
				</div>
				<div className='checkbox__item'>
					<input type="checkbox"/>
					<div className="item_text">Traffic Fine 2</div>
				</div>
				<div className='checkbox__item'>
					<input type="checkbox"/>
					<div className="item_text">Traffic Fine 3</div>
				</div>

			</div>
			<div id='button-6' onClick={handleHome} className="completion_pay guide-step">PAY</div>
		</div>
	);
};

export default Completion;