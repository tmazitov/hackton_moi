import React from 'react';
import "./Profile.scss"

const Profile = () => {
	return (
		<div>
			<div className="profile-container">
				<div className="profile-photo"></div>
				<div className="profile__data">
					<div className="data-name">IBROKHIM GANIEV</div>
					<div className="data-nationality">RUSSIAN</div>
				</div>
			</div>
		</div>
	);
};

export default Profile;