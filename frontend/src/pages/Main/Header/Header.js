import React from 'react';
import "./Header.scss"
import Search from '../../../components/Search/Search';
import BlindSound from '../../../components/BlindSound/BlindSound';

const Header = () => {
	return (
		<header className="header">
			<div className="header__top">
				<div className="top__left-buttons">
					<div className="left-buttons_calendar">
					<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 48 48"><defs><mask id="ipTSquare0"><path fill="#555" stroke="#fff" strokeWidth="4" d="M39 6H9a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3Z"/></mask></defs><path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTSquare0)"/></svg>
						</div>
					<BlindSound/>
				</div>
				<div className="top__right-buttons">
					<div className="right-buttons_rate-app">
					<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 48 48"><defs><mask id="ipTSquare0"><path fill="#555" stroke="#fff" strokeWidth="4" d="M39 6H9a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3Z"/></mask></defs><path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTSquare0)"/></svg>
					</div>
					<div className="right-buttons_call-999">
					<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 48 48"><defs><mask id="ipTSquare0"><path fill="#555" stroke="#fff" strokeWidth="4" d="M39 6H9a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3Z"/></mask></defs><path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTSquare0)"/></svg>
					</div>
				</div>
			</div>
			<div className="header__bottom">
			<Search/>
			</div>
		</header>
	);
};

export default Header;