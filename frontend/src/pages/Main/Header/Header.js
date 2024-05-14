import React from 'react';
import "./Header.scss"
import Search from '../../../components/Search/Search';
import BlindSound from '../../../components/BlindSound/BlindSound';

const Header = () => {
	return (
		<header className="header">
			<div className="header__top">
				<div className="top__left-buttons">
					<div className="left-buttons_calendar"></div>
					<BlindSound/>
				</div>
				<div className="top__right-buttons">
					<div className="right-buttons_rate-app"></div>
					<div className="right-buttons_call-999"></div>
				</div>
			</div>
			<div className="header__bottom">
			<Search/>
			</div>
		</header>
	);
};

export default Header;