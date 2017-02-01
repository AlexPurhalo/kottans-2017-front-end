// Node modules import
import React, { Component } from 'react';
import { connect } from 'react-redux'

// Actions import
import { fetchUsers } from '../actions/users';

// Components import
import UsersList from '../components/users-list-page/users-list';

// Shows the users list
class UsersListPage extends Component {
	componentWillMount() { this.props.fetchUsers() }

	render() {
		return this.props.users && <UsersList users={this.props.users} />;
	}
}

// Maps the states to properties
function mapStateToProps(state) {
	return { users: state.users.usersList }
}

// Exports container
export default connect(mapStateToProps, { fetchUsers })(UsersListPage);
