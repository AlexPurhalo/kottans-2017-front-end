// Node modules import
import React, { Component } from 'react';
import { connect } from 'react-redux'

// Actions import
import { fetchUserAnswers } from '../actions/users';

// Shows a page that represents the user's questions and answers
class UserQuestionsPage extends Component {
	componentWillMount() {
		this.props.fetchUserAnswers(this.props.params.username);
	}

	render() {
		console.log(this.props.answers);
		return <div className="greeting">Hello World</div>;
	}
}

// Maps the states to properties
function mapStateToProps(state) {
	return {
		answers: state.users.user.answers
	}
}

// Exports component and connects to redux's stuff
export default connect(mapStateToProps, {
	fetchUserAnswers
})(UserQuestionsPage);
