
import React from 'react';
import "./SearchElement.scss"
import { Store } from '../../../App';

const SearchElement = (props) => {
	const context = React.useContext(Store)
	const handleClick = async () => {
		const response = await fetch(`http://localhost:5050/moi/v0/api/guide/${props.element.id}`, 
		{
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		});
		if(!response.ok)
			return;
		let data;
		try {
			data = await response.json()
		} catch {
			return
		}
		if(!data)
			return 
		context.setData({...context.data, guide : data})
		console.log("DAJ SUKA",context)
	}
	return (
		<div onClick={handleClick} className='search-element'>
			{props.element.name}
		</div>
	);
};

export default SearchElement;