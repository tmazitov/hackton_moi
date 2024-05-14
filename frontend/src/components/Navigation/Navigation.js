import React from 'react';
import "./Navigation.scss"
import NavButton from './NavButton/NavButton';

const Navigation = () => {
	return (
		<div className='navigation'>
			<NavButton linkTo={'/'} name={'home'}/>
			<NavButton linkTo={'/media'} name={'media'}/>
			<NavButton linkTo={'/services'} name={'services'}/>
			<NavButton linkTo={'/help'} name={'help'}/>
			<NavButton linkTo={'/profile'} name={'profile'}/>
		</div>
	);
};

export default Navigation;