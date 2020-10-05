import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import Login from './components/login';
import Register from './components/register';
import Logout from './components/logout';
import 'bootstrap/dist/css/bootstrap.css';
import Dashboard from './components/dashboard.jsx';
function App() {
	return (
		<Router>
			<div>
				<nav className="navbar navbar-light">
					<ul className="nav navbar-nav">
						<li>
							<Link to="./login">Login</Link>
						</li>
						<li>
							<Link to="/logout">Logout</Link>
						</li>
						<li>
							<Link to="/register">Register</Link>
						</li>
						<li>
							<Link to="/dashboard">DashBoard</Link>
						</li>
					</ul>
				</nav>

				{/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
				<Switch>
					<Route path="/login" component={Login}></Route>
					<Route path="/logout" component={Logout}></Route>
					<Route path="/register" component={Register}></Route>
					<Route path="/dashboard" component={Dashboard}></Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
