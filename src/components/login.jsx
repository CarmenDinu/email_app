import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
const Login = (props) => {
	const [user, setUser] = useState();
	const [password, setPassword] = useState();
	let history = useHistory();
	const [error, setError] = useState('');
	let signinUserAndPassword = async () => {
		const response = await fetch('http://localhost:6789/login', {
			method: 'POST',
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ mail: user, password: password }),
		});
		if (response.status !== 200) {
			setError('wrong password or email');
			setTimeout(() => {
				setError('');
			}, 1000);
		} else {
			history.push('./dashboard');
		}
	};

	return (
		<div>
			<h5>LogIn</h5>
			<input type="text" placeholder="Email" onChange={(e) => setUser(e.target.value)}></input>
			<input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}></input>
			<button onClick={signinUserAndPassword}>Login</button>
			<div>{error}</div>
		</div>
	);
};
export default Login;
