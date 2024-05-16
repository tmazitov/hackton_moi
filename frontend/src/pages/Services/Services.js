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
				<div className="switch"><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 48 48"><defs><mask id="ipTSquare0"><path fill="#555" stroke="#fff" strokeWidth="4" d="M39 6H9a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3Z"/></mask></defs><path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTSquare0)"/></svg></div>
			</header>
			<EmptyHead/>
			{
				services.categories.map((kind, id)=><ServiceKind key={id} name={kind.name} data={kind.childrens}/>)
			}
			<EmptyHead/>
		</div>
	);
};

export default Services;