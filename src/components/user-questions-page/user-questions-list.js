// Node modules import
import React, { Component } from 'react';

// Images import
import CompleteMarkIcon from '../../../images/complete-mark.png';
import EditIcon from '../../../images/edit-icon.png';
import RemoveIcon from '../../../images/close-icon-black.png';

// Shows the user questions list
export default class UserQuestionsList extends Component {
	constructor() {
		super();
		this.state = { onEditAnswer: false, chosenItem: null, chosenAnswer: null, answer: '' }
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

	accountOwner() { if (this.props.username == localStorage.getItem('username')) return true }

	addQuestion(e, question) {
		e.preventDefault();
		if (this.state.answer.length > 0) {
			this.props.postUserAnswer(question.id, this.state.answer);
			this.setState({ answer: '' });
		}
	}

	renderAnswerForm(question) {
		return (
			<form className="answer-form" onSubmit={e => this.addQuestion(e, question)}>
				<input
					onChange={this.handleAnswer}
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

	removeAnswer(question) { this.props.deleteUserAnswer(question.answerId) }



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
		if (this.state.answer.length > 1) {
			this.props.putUserAnswer(this.state.chosenAnswer, this.state.answer);
			this.setState({ chosenItem: null, onEditAnswer: false, answer: '' });
		}
	};

	handleAnswer = (e) => { this.setState({ answer: e.target.value })};

	showAnswerForm() {
		return (
			<form className="answer-opened-form" onSubmit={this.updateAnswer}>
				<input
					autoFocus
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
		const questions = this.props.questions, answers = this.props.answers;

		return (
			<div className="container">
				<div className="user-questions-section">
					<div className="title">
						The Questions List
						({questions && answers  && `${answers.length}/${questions.length}`})
					</div>
					<ul className="user-questions-list">
						{answers && questions && (
							this.questionsList(answers, questions).map(question =>
								<li className='question-section' key={question.id}>
									<div className="row">
										<div className="col-md-10">
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
													this.accountOwner() ? this.renderAnswerForm(question) : <div className="empty">still nothing</div>
												)}
										</div>
										<div className="col-md-2 right-side">
											# {question.id}
										</div>
									</div>
									<hr/>
								</li>
							)
						)}
					</ul>
				</div>
			</div>
		);
	}
}
