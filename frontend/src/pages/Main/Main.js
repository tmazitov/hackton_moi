import React from 'react';
import Header from './Header/Header';
import Profile from './Profile/Profile';
import EmptyHead from './Header/EmptyHead';
import ActionCenter from './ActionCenter/ActionCenter.js';
import PointsBar from './PointsBar/PointsBar.js';
import "./Main.scss"

const Main = () => {
	return (
		<div className='main'>
			<Header/>
			<EmptyHead/>
			<Profile/>
			<ActionCenter/>
			<PointsBar/>
		</div>
	);
};

export default Main;