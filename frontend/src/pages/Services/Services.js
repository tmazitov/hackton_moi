import React from 'react';
import "./Services.scss"
import Search from '../../components/Search/Search';
import BlindSound from '../../components/BlindSound/BlindSound';
import EmptyHead from '../Main/Header/EmptyHead';
import services from '../../helpers/services_data';
import ServiceKind from '../../components/ServiceKind/ServiceKind';

const Services = () => {
	return (
		<div className='services'>
			<header className="header">
				<div className="limit">
					<Search/>
				</div>
				<BlindSound/>
				<div className="switch">0</div>
			</header>
			<EmptyHead/>
			{
				services.categories.map((kind)=><ServiceKind name={kind.name} data={kind.childrens}/>)
			}
		</div>
	);
};

export default Services;