// Node modules import
import React, { Component } from 'react';

// Shows variants for voting
export default class AnswerVariants extends Component {
	ifLastItem(arr, item) {
		if (arr.indexOf(item) === arr.indexOf(arr[arr.length-1])) return true;
	}

	render() {
		let variantsCollection = this.props.variants;

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
					<div className="col-md-6">

					</div>
				</div>
				<hr/>
			</div>
		);
	}
}
