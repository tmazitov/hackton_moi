
import React from 'react';
import "./SearchElement.scss"
import { Store } from '../../../App';

const SearchElement = (props) => {
	const context = React.useContext(Store)
	const handleClick = async () => {
		if(context.data.selectedId !== props.element.id)
		{
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
			//console.log("DAJ SUKA")
			try {
				data = await response.json()
				//console.log("DAJ SUKA_2")
			} catch {
				//console.log("DAJ SUKA_3")
				return
			}
			if(!data)
				return 
			//console.log("DAJ SUKA_4")
			context.setData({...context.data, guide : data, selectedId : props.element.id})
		} else {
			context.setData({...context.data, guide : [], selectedId : null})
		}

	}
	React.useEffect(()=>{
		console.log(context);
		if(context.data.selectedId === props.element.id)
			document.getElementById(`search-elem-${props.element.id}`).classList.add("search-element_selected")
		else
			document.getElementById(`search-elem-${props.element.id}`).classList.remove("search-element_selected")

	})
	return (
		<div id={`search-elem-${props.element.id}`} onClick={handleClick} className='search-element'>
			{props.element.name}
		</div>
	);
};

export default SearchElement;