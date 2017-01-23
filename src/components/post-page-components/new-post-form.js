// Node modules import
import React, { Component } from 'react';
import { connect } from 'react-redux'

// Images import
import CompleteMarkIcon from '../../../images/complete-mark.png';

// Shows form to add a new post
export default class NewPostForm extends Component {
	constructor() {
		super();
		this.state = { categories: [], category: '' };

		this.addCategoryToList = this.addCategoryToList.bind(this);
		this.handleCategoryName = this.handleCategoryName.bind(this);
	}

	addCategoryToList() {
		let arrWithNewCategory = this.state.categories;
		arrWithNewCategory.push(this.state.category);

		this.setState({ categories:  arrWithNewCategory });
	}

	handleCategoryName(e) { this.setState({ category: e.target.value }) }

	render() {
		return (
			<div className="new-post-form">
				<div className="section-title">Create your own post</div>
				<input
					type="text"
					className="title-input underline-input post-inputs-group"
					placeholder="Some title"/>
				<form className="post-form">
					<textarea
						type="text"
						className="form-control post-input"
						placeholder="Post Body"/>
					<div className="row">
						<div className="col-md-10">
							<ul className="inline-list categories">
								{this.state.categories.map(category =>
									<li className="inline-block" key={category}>
										<div className="added-category">
											# {category}
										</div>
									</li>
								)}
								<li className="inline-block category-input">
									<ul className="inline-block ">
										<li className="inline-block category">
											<input

												placeholder="Category"
												type="text"
												className="underline-input post-inputs-group add-category-input"/>
										</li>
										<li className="inline-block category">
											<img
												onClick={this.addCategoryToList}
												src={CompleteMarkIcon}
												alt="plus-icon"
												className="add-category-icon"/>
										</li>
									</ul>
								</li>
							</ul>
						</div>
						<div className="col-md-2 right-side">
							<button type="submit" className="btn post-send-button">Submit</button>
						</div>
					</div>
				</form>
			</div>
		);
	}
}
