import React from 'react';
import "./Point.scss"

const Point = (props) => {
	return (
		<div className='point'>
			<div className="point_score">{props.score}</div>
			<div className="point_name">{props.name}</div>
		</div>
	);
};

export default Point;