import React from 'react';
import "./SearchPopUp.scss"
import FeaturePopUp from '../FeaturePopUp/FeaturePopUp';
import HelpButton from '../HelpButton/HelpButton';

const SearchPopUp = () => {
	const [help, setHelp] = React.useState(false)
	const [searchValue, setSearchValue] = React.useState('');
	const handleHelp = () => {
		setHelp(true);
	}
	React.useEffect(()=>{
		document.getElementById("search").focus();
		setTimeout(()=>{
			handleHelp();
		}, 1000)
	}, [])
	return (
		<div className='search-popup'>
			<div className="popup__search">
				<div className="search_icon">
				<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path fill="black" d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396l1.414-1.414l-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8s3.589 8 8 8m0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6s-6-2.691-6-6s2.691-6 6-6"/></svg>
				</div>
				<input value={searchValue} onChange={(e)=>{setSearchValue(e.target.value)}} type="text" id="search" className="search_input" />
			</div>
			{help ? <HelpButton func={setHelp}/> : ''}
			<div className="popup__results"></div>
			<FeaturePopUp searchValue={searchValue} el_id={"widget_search"}/>
		</div>
	);
};

export default SearchPopUp;