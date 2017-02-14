// Node modules import
import React, { Component } from 'react';
import { PieChart } from 'react-d3';

// Shows variants for voting
export default class AnswerVariants extends Component {
	constructor() {
		super();

		this.userId = localStorage.getItem('userId')
	}

	ifLastItem(arr, item) {
		if (arr.indexOf(item) === arr.indexOf(arr[arr.length-1])) return true;
	}

	pieCharData() {
		let userAnswers = [];

		this.props.variants.map(variant =>
			userAnswers.push({name: variant.name, count: variant.answersCount})
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
					label: answer.name,
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
			console.log(answer);
			answer.userId == userId && (result = true)
		});

		return result
	}

	variantsInputs(variantsCollection) {
		return (
			<div className="col-md-6">
				{variantsCollection.map(variant =>
					<div className="variant" key={variant.id}>
						<div className="row">
							<div className="col-md-9">
								<input type="radio" name="variant" value={variant.id}/> {variant.name}
							</div>
							<div className="col-md-3 right-side">
								{this.ifLastItem(variantsCollection, variant) && (
									<button className="btn btn-default">Vote</button>
								)}
							</div>
						</div>
					</div>
				)}
			</div>
		);
	}

	graphic() {
		return (
			<div className="col-md-6 right-side">
				<PieChart
					data={this.pieCharData()}
					width={250}
					height={200}
					radius={50}
					innerRadius={15}
					sectorBorderColor="white"
				/>
			</div>
		);
	}

	render() {
		return (
			<div className="answer-variants-section">
				<hr/>
				<div className="row">
					{this.props.authenticatedUser && !this.votedByUser(this.props.votingAnswers, this.userId)
						? this.variantsInputs(this.props.variants) : (<h1>Voted!</h1>)
					}
					{
						this.graphic()
					}
				</div>
				<hr/>
			</div>
		);
	}
}
