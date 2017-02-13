// Node modules import
import React, { Component } from 'react';
import { PieChart } from 'react-d3';

// Shows variants for voting
export default class AnswerVariants extends Component {
	ifLastItem(arr, item) {
		if (arr.indexOf(item) === arr.indexOf(arr[arr.length-1])) return true;
	}

	render() {
		let variantsCollection = this.props.variants;

		let userAnswers = [{name: 'Ruby', count: 2}, {name: 'Go', count: 1}, {name: 'JS', count: 8}];

		function answersCount(userAnswers) {
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
				arr.push({
					label: answer.name,
					value: variantProcents(answer.count, answersCount(answers))
				})
			);

			return arr;
		}

		let pieData = variantsArr(userAnswers);

		return (
			<div className="answer-variants-section">
				<hr/>
				<div className="row">
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
					<div className="col-md-6 right-side">
						<PieChart
							data={pieData}
							width={250}
							height={200}
							radius={50}
							innerRadius={15}
							sectorBorderColor="white"
						/>
					</div>
				</div>
				<hr/>
			</div>
		);
	}
}