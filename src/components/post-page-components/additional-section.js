// Node modules import
import React, { Component } from 'react';

export default class AdditionalSection extends Component {
	renderCategories(categories) {
		let categoriesHtml = [];

		for (let i = 0; i < categories.length; i++) {
			if (i === 0) {
				categoriesHtml.push(
					<li className="inline-block" key={i}>
						<h2 className="category first"># {categories[i]}</h2>
					</li>
				)
			} else if (i === categories.length-1) {
				categoriesHtml.push(
					<li className="inline-block" key={i}>
						<h2 className="category last"># {categories[i]}</h2>
					</li>
				)
			} else {
				categoriesHtml.push(
					<li className="inline-block" key={i}>
						<h2 className="category center"># {categories[i]}</h2>
					</li>
				)
			}
		}

		return categoriesHtml
	}

	render() {
		return (
			<div className="additional-section">
				<div className="row">
					<div className="col-md-6">
						<ul className="categories inline-list">
							{this.renderCategories(this.props.categories)}
						</ul>
					</div>
					<div className="col-md-6 right-side">
						<ul className="inline-list">
							<li className="inline-block">
								<h4 className="author">{this.props.author}</h4>
							</li>
							<li className="inline-block">
								<span className="symbol">,</span>
							</li>
							<li className="inline-block">
								<span className="create-date">
									{this.props.date}
								</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}
