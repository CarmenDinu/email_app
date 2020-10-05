import React, { useState } from 'react';

const Logout = (props) => {
	let signoutUserAndPassword = async () => {
		await fetch('http://localhost:6789/logout', {
			credentials: 'include',
		});
	};
	return (
		<div>
			<h5>LogOut</h5>
			<button onClick={signoutUserAndPassword}>Logout</button>
		</div>
	);
};
export default Logout;
