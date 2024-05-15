import React from 'react';
import Header from './Header/Header';
import Profile from './Profile/Profile';
import EmptyHead from './Header/EmptyHead';
import ActionCenter from './ActionCenter/ActionCenter.js';
import PointsBar from './PointsBar/PointsBar.js';
import "./Main.scss"
import FeatureWidget from '../../components/FeatureWidget/FeatureWidget.js';
import FeaturePopUp from '../../components/FeaturePopUp/FeaturePopUp.js';

const Main = () => {
	return (
		<div className='main'>
			<Header/>
			<EmptyHead/>
			<Profile/>
			<ActionCenter/>
			<PointsBar/>
			<FeatureWidget/>
			<FeaturePopUp el_id={"widget_main"}/>
			{/*{featureVisibility ? <FeaturePopUp/> : ''}*/}
		</div>
	);
};

export default Main;