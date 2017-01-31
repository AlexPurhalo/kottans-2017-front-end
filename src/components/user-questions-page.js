// Node modules import
import React, { Component } from 'react';
import { connect } from 'react-redux'

// Images import
import CompleteMarkIcon from '../../images/complete-mark.png';
import EditIcon from '../../images/edit-icon.png';
import RemoveIcon from '../../images/close-icon-black.png';

// Actions import
import { fetchUserAnswers } from '../actions/users';
import { fetchQuestions } from '../actions/questions';

// Shows a page that represents the user's questions and answers
class UserQuestionsPage extends Component {
	constructor() {
		super();

		this.state = { onEditAnswer: false, chosenItem: null, chosenAnswer: null, answer: '' }
	}

	componentWillMount() {
		this.props.fetchUserAnswers(this.props.params.username);
		this.props.fetchQuestions();
	}

	questionsList(answers, questions) {
		let resultArr = [], currentAnswer = null, answerId, i, j;

		for (i = 0; i < questions.length; i++) {
			for (j = 0; j < answers.length; j++) {
				if (questions[i].id == answers[j].questionId) {
					currentAnswer = answers[j].body;
					answerId = answers[j].id;
				}
			}

			resultArr.push({ id: questions[i].id, question: questions[i].body, answer: currentAnswer, answerId:  answerId });
			currentAnswer = null;
			answerId = null;
		}

		return resultArr;
	}

	accountOwner() {
		if (this.props.params.username == localStorage.getItem('username')) return true;
	}

	addQuestion(e) {
		e.preventDefault();

	}

	renderAnswerForm() {
		return (
			<form className="answer-form" onSubmit={this.addQuestion}>
				<input
					type="text"
					className="underline-input answer-input" />
				<button type='submit' className="non-styled-btn">
					<img
						src={CompleteMarkIcon}
						alt="complete-icon"
						className="apply-icon"/>
				</button>
			</form>
		);
	}

	editAnswer = (question)  => {
		this.setState({ onEditAnswer: !this.state.onEditAnswer, chosenItem: question.id, chosenAnswer: question.answerId })
	};

	removeAnswer(question) {
		console.log(`answer to remove: ${question.answerId}`);
	}

	renderEditButtons(question) {
		return [
			<li className="inline-block" key="2">
				<img src={EditIcon} alt="edit-icon" className="edit-icon" onClick={e => this.editAnswer(question)}/>
			</li>,
			<li className="inline-block" key="3">
				<img src={RemoveIcon} alt="remove-icon" className="remove-icon" onClick={e => this.removeAnswer(question)}/>
			</li>
		];
	}

	updateAnswer = (e) => {
		e.preventDefault();
		console.log('to postAnswer action');
		console.log({ answer_id: this.state.chosenAnswer, answer: this.state.answer });
		this.setState({ chosenItem: null, onEditAnswer: false, answer: '' });
	};

	handleAnswer = (e) => { this.setState({ answer: e.target.value })};

	showAnswerForm() {
		return (
			<form className="answer-opened-form" onSubmit={this.updateAnswer}>
				<input
					type="text"
					className="answer-input non-styled-btn"
					onChange={this.handleAnswer}
					value={this.state.answer}/>
				<button className="non-styled-btn" type="submit">
					<img src={CompleteMarkIcon} alt="" className="apply-icon"/>
				</button>
			</form>
		);
	}

	render() {
		return (
			<div className="container">
				<div className="user-questions-section">
					<div className="title">User Questions</div>
					<ul className="user-questions-list">
						{this.props.answers && this.props.questions && (
							this.questionsList(this.props.answers, this.props.questions).map(question =>
								<li className='question-section' key={question.id}>
									<div className='question'>{question.question}</div>
									{question.answer ? (
											<ul className="inline-list">
												<li className="inline-block">
													{this.state.onEditAnswer && question.id == this.state.chosenItem
														? this.showAnswerForm() : <div className="answer">{question.answer}</div>}

												</li>
												{this.accountOwner() && this.renderEditButtons(question)}
											</ul>
										) : (
											this.accountOwner() ? this.renderAnswerForm() : <div className="empty">still nothing</div>
										)}
								</li>
							)
						)}
					</ul>
				</div>
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
