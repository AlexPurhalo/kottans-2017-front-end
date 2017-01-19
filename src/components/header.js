// Node modules import
import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

// Components import
import RegistrationForm from './header-components/registration';

// Shows navigation bar for user
export default class Header extends Component {
	render() {
		return (
			<div className="header">
				<nav className="navbar navbar-default">
					<div className="container">
						<div className="row">
							<div className="col-md-2">
								<Link to='/' className="brand">Kottans</Link>
							</div>
							<div className="col-md-10 right-side">
								<RegistrationForm />
							</div>
						</div>
					</div>
				</nav>
			</div>
		);
	}
}
