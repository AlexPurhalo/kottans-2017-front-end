// Node modules import
import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

// Shows navigation bar for user
export default class Header extends Component {
	render() {
		return (
			<div className="header">
				<nav className="navbar navbar-light">
					<Link to="/" className="navbar-brand">Kottans</Link>
					<ul className="nav navbar-nav">
						<li className="nav-item">
							<IndexLink
								to="/"
								className="nav-link"
								activeClassName="active">
								Posts
							</IndexLink>
						</li>
						<li className="nav-item">
							<Link
								to="/users/new"
								className="nav-link"
								activeClassName="active">Sign Up</Link>
						</li>
						<li className="nav-item">
							<Link
								to="/sessions/new"
								className="nav-link"
								activeClassName="active">Sign In</Link>
						</li>
					</ul>
				</nav>
			</div>
		);
	}
}
