
import React from 'react';
import "./PointsBar.scss"
import Point from './Point/Point';

const PointsBar = () => {
	return (
		<div className='points-bar'>
			<Point score='0' name='BLACK POINTS'/>
			<Point score='0' name='LICENSES'/>
			<Point score='0' name='ACCIDENTS'/>
		</div>
	);
};

export default PointsBar;