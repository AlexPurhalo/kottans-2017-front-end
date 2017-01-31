// Node modules import
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router';

// Actions import
import { fetchUsers } from '../actions/users';

// Shows the users list
class UsersListPage extends Component {
	componentWillMount() { this.props.fetchUsers() }

	render() {
		console.log(this.props.users);
		return (
			<div className="users-list-page">
				<div className="container">
					<div className="title-section">
						<div className="title">The Users List</div>
						<div className="people-count">(9 people)</div>
					</div>
					<ul className="users-list">
						{this.props.users && this.props.users.map(user =>
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

function mapStateToProps(state) {
	return {
		users: state.users.usersList
	}
}

export default connect(mapStateToProps, {
	fetchUsers
})(UsersListPage);
