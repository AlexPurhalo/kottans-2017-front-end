// Node modules import
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router';

// Shows the users list
class UsersListPage extends Component {
	render() {
		return (
			<div className="users-list-page">
				<div className="container">
					<div className="title-section">
						<div className="title">The Users List</div>
						<div className="people-count">(9 people)</div>
					</div>
					<ul className="users-list">
						<li className="user">
							<Link to={`/users/alex/questions`} className="username">Alex</Link>
						</li>
						<li className="user">
							<div className="username">Brandon</div>
						</li>
						<li className="user">
							<div className="username">Dan</div>
						</li>
						<li className="user">
							<div className="username">Robin</div>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}

export default connect(null)(UsersListPage);
