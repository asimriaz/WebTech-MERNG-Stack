import React, { Component } from 'react';
import ProtectedRoute from './ProtectedRoute';
import Secret from './Secret';
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom';
import { Login } from './Login';

export class MyRoutes extends Component {
	state = {
		isAuthenticated: false,
	};

	login = () => {
		this.setState({ isAuthenticated: true });
	};

	logout = () => {
		this.setState({ isAuthenticated: false });
	};

	render() {
		return (
			<div>
				<Router>
					<Switch>
						<Route path='/' exact>
							{this.state.isAuthenticated ? (
								<Redirect to='/secret' />
							) : (
								<div>
									<h1>Homepage</h1>

									<Link to='/secret'>Go to secret</Link>
									<br></br>
									<button onClick={this.login}>Log in</button>
								</div>
							)}
						</Route>
						<Route path='/login' component={Login} />
						<ProtectedRoute
							isAuthenticated={this.state.isAuthenticated}
							path='/secret'
							logout={this.logout}
							component={Secret}
						/>
						<Route path='*'>
							<div>404 Not found </div>
						</Route>
					</Switch>
				</Router>
				<pre>{JSON.stringify(this.state, null, 2)}</pre>
			</div>
		);
	}
}

export default MyRoutes;
