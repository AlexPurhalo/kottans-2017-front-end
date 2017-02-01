// Node modules import
import React, { Component } from 'react';
import { Link } from 'react-router';

// Shows the users list
export default class UsersList extends Component {
	showUsersCount(usersCount) {
		return usersCount > 1 && (<div className="people-count">{`(${usersCount} people)`}</div>);
	}

	render() {
		const usersList = this.props.users;

		return (
			<div className="users-list-page">
				<div className="container">
					<div className="title-section">
						<div className="title">The Users List</div>
						{this.showUsersCount(usersList.length)}
					</div>
					<ul className="users-list">
						{usersList.map(user =>
							<li className="user" key={user.id}>
								<Link to={`users/${user.username}/questions`} className="username">
									{user.username}
								</Link>
							</li>
						)}
					</ul>
				</div>
			</div>
		);
	}
}
