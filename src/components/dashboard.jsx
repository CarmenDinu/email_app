import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';

const Dashboard = (props) => {
	const [text, setText] = useState();
	const [subject, setSubject] = useState();
	const [recipient, setRecipient] = useState();
	let history = useHistory();

	function getCookie() {
		if (document.cookie === '') {
			history.push('/login');
		} else {
			const cookieValue = document.cookie
				.split('; ')
				.find((row) => row.startsWith('user'))
				.split('=')[1]
				.replace('%40', '@');
			return cookieValue;
		}
	}

	let getEmailValues = async () => {
		await fetch('http://localhost:6789/mails', {
			method: 'POST',
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ to: recipient, subject: subject, text: text }),
		});
	};

	return (
		<div>
			<h5>Dashboard</h5>
			<h5>{getCookie()}</h5>
			<input type="text" placeholder="Enter text" onChange={(e) => setText(e.target.value)}></input>
			<input type="text" placeholder="Enter subject" onChange={(e) => setSubject(e.target.value)}></input>
			<input type="text" placeholder="Enter recipient" onChange={(e) => setRecipient(e.target.value)}></input>
			<button onClick={getEmailValues}>Add</button>
		</div>
	);
};
export default Dashboard;
