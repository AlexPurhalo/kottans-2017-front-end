// Node modules import
import React, { Component } from 'react';
import { PieChart } from 'react-d3';

// Shows variants for voting
export default class AnswerVariants extends Component {
	constructor() {
		super();

		this.state = {
			variantId: null,
			openedVoting: true
		};

		this.userId = localStorage.getItem('userId')
	}

	pieCharData(variantsCollection) {
		let userAnswers = [];

		variantsCollection.map(variant =>
			userAnswers.push({
				positionNum: variantsCollection.indexOf(variant) + 1,
				name: variant.name,
				count: variant.answersCount
			})
		);

		function findAnswersCount(userAnswers) {
			let count = 0, i;

			for (i = 0; i < userAnswers.length; i++) { count += userAnswers[i].count }

			return count
		}

		function variantProcents(count, answersCount) {
			return Math.round(parseFloat(count) / parseFloat(answersCount) * 100)
		}

		function variantsArr(answers) {
			let arr = [];
			answers.map(answer =>
				answer.count > 0 && arr.push({
					label: answer.positionNum,
					value: variantProcents(answer.count, findAnswersCount(answers))
				})
			);

			return arr;
		}

		return variantsArr(userAnswers);
	}

	votedByUser(answersCollection, userId) {
		let result = false;

		answersCollection.map(answer => {
			answer.userId == userId && (result = true)
		});

		return result
	}

	sendForm = (e) => {
		e.preventDefault();
		this.props.addUserAnswer(this.props.postId, this.state.variantId);
		this.setState({variant: null, openedVoting: false})

	};

	selectVariant = (e) => {
		this.setState({ variantId: e.target.value })
	};

	variantsInputs(variantsCollection) {
		return (
			<form onSubmit={this.sendForm}>
				<ol>
					{variantsCollection.map(variant =>
						<li className="variant" key={variant.id}>
							<input
								onChange={this.selectVariant}
								type="radio"
								name='firVar'
								value={variant.id}/>
							{variant.name}
						</li>
					)}
				</ol>
				<button type="submit" className="btn btn-default">Submit</button>
			</form>
		);
	}

	graphic() {
		return (
			<PieChart
				data={this.pieCharData(this.props.variants)}
				width={280}
				height={250}
				radius={80}
				innerRadius={30}
				sectorBorderColor="white"
			/>
		);
	}

	render() {
		let answersCollection = this.props.votingAnswers;

		return (
			<div className="answer-variants-section">
				<hr/>
				<div className="row">
					{
						this.state.openedVoting
						&& this.props.authenticatedUser
						&& !this.votedByUser(answersCollection, this.userId)
							? (
								<div className="row">
									<div className="col-md-6">
										{this.variantsInputs(this.props.variants)}
									</div>
									<div className="col-md-6 right-side">
										{answersCollection.length > 0 && this.graphic()}
									</div>
								</div>
							)
							: (
								<div className="row">
									<div className="col-md-6">
										<ol>
											{this.props.variants.map(variant =>
												<li className="variant" key={variant.id}>{variant.name}</li>
											)}
										</ol>
									</div>
									{answersCollection.length > 0 ? (
											<div className="col-md-6 right-side">
												Votes: {answersCollection.length}
												{this.graphic()}
											</div>
										) : 'Still no votes'}
								</div>
							)
					}
				</div>
				<hr/>
			</div>
		);
	}
}

// sdfsdf
