// Node modules import
import React, { Component } from 'react';
import { connect } from 'react-redux'

// Actions import
import { fetchUserAnswers } from '../actions/users';
import { fetchQuestions } from '../actions/questions';

// Shows a page that represents the user's questions and answers
class UserQuestionsPage extends Component {
	componentWillMount() {
		this.props.fetchUserAnswers(this.props.params.username);
		this.props.fetchQuestions();
	}

	render() {
		this.props.answers && console.log(this.props.answers);
		this.props.questions && console.log(this.props.questions);
		return <div className="greeting">Hello World</div>;
	}
}

// Maps the states to properties
function mapStateToProps(state) {
	return {
		answers: state.users.user.answers,
		questions: state.questions.questionsList
	}
}

// Exports component and connects to redux's stuff
export default connect(mapStateToProps, {
	fetchUserAnswers, fetchQuestions
})(UserQuestionsPage);
