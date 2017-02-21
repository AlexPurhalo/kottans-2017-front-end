// Node modules import
import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

// Components import
import Authentication from './header/authentication';

// Shows navigation bar for user
export default class Header extends Component {
	render() {
		let githubSessionCode = this.props.githubSessionCode;

		return (
			<div className="header">
				<nav className="navbar navbar-default">
					<div className="container">
						<div className="row">
							<div className="col-md-2">
								<ul className="inline-list nav-links">
									<li className="inline-block nav-item">
										<Link to='/' className="brand">Kottans</Link>
									</li>
									<li className="inline-block nav-item">
										<Link to='/users' className="nav-link">Users</Link>
									</li>
								</ul>
							</div>
							<div className="col-md-10 right-side">
								<Authentication githubSessionCode={githubSessionCode && githubSessionCode}/>
							</div>
						</div>
					</div>
				</nav>
			</div>
		);
	}
}
