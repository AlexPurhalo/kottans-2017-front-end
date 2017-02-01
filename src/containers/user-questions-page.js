// Node modules import
import React, { Component } from 'react';
import { connect } from 'react-redux'

// Actions import
import { fetchUserAnswers, postUserAnswer, putUserAnswer, deleteUserAnswer } from '../actions/users';
import { fetchQuestions } from '../actions/questions';

// Components import
import UserQuestionsList from '../components/user-questions-page/user-questions-list';

// Shows the users questions page
class UserQuestionsPage extends Component {
	componentWillMount() {
		this.props.fetchUserAnswers(this.props.params.username);
		this.props.fetchQuestions();
	}

	render() {
		return <UserQuestionsList
			answers={this.props.answers}
			questions={this.props.questions}
			username={this.props.params.username}
			postUserAnswer={this.props.postUserAnswer}
			putUserAnswer={this.props.putUserAnswer}
			deleteUserAnswer={this.props.deleteUserAnswer} />
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
	fetchUserAnswers, fetchQuestions, postUserAnswer, putUserAnswer, deleteUserAnswer
})(UserQuestionsPage);
