import React from 'react';
import "./ServiceKind.scss"
import ServiceCard from './ServiceCard/ServiceCard';

// data: kind-name, data
const ServiceKind = (props) => {
	return (
		<div className='service-kind'>
			<div className="kind-name">{props.name}</div>
			<div className="kind-container">
				{
					props.data.map((service)=>
						<ServiceCard image={service.image} name={service.name}/>
					)
				}
			</div>
		</div>
	);
};

export default ServiceKind;