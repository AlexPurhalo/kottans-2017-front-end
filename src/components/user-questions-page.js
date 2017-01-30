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

	questionsList(answers, questions) {
		questions = [
			{ id: 1, body: 'Bad game 2016?' },
			{ id: 2, body: 'Cartoon about yellow man?' },
			{ id: 3, body: 'Center of Ukraine...' },
			{ id: 4, body: 'Fashion is my...' },
			{ id: 5, body: 'The most important thing in world?' }
		];

		answers = [
			{ id: 1, body: 'profession', questionId: 4 },
			{ id: 3, body: 'Mafia 3', questionId: 1 },
			{ id: 7, body: 'Spanch Bob', questionId: 2 }
		];

		let resultArr = [], currentAnswer = null, i, j;

		for (i = 0; i < questions.length; i++) {
			for (j = 0; j < answers.length; j++) {
				if (questions[i].id == answers[j].questionId) { currentAnswer = answers[j].body }
			}

			resultArr.push({ id: questions[i].id, question: questions[i].body, answer: currentAnswer });
			currentAnswer = null
		}

		return resultArr;
	}

	render() {
		// this.props.answers && console.log(this.props.answers);
		// this.props.questions && console.log(this.props.questions);
		console.log(this.questionsList());
		return (
			<div className="container">
				<ul>
					{this.questionsList().map(question =>
						<li key={question.id}>
							<div className='question'>{question.question}</div>
							<div className="answer">{question.answer ? question.answer : 'still empty'}</div>
						</li>
					)}
				</ul>
			</div>
		);
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
