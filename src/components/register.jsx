import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Register = (props) => {
	const [user, setUser] = useState();
	const [password, setPassword] = useState();
	let history = useHistory();

	let registerUserAndPassword = async () => {
		await fetch('http://localhost:6789/register', {
			method: 'POST',
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ mail: user, password: password }),
		});

		history.push('./dashboard');
	};

	return (
		<div>
			<h5>Register</h5>
			<input type="text" placeholder="Email" onChange={(e) => setUser(e.target.value)}></input>
			<input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}></input>
			<button
				className={(function () {
					if (!password || (password.length > 6 && user.includes('@'))) {
						return 'btn-primary';
					} else {
						return '';
					}
				})()}
				onClick={registerUserAndPassword}
			>
				Register
			</button>
		</div>
	);
};
export default Register;
