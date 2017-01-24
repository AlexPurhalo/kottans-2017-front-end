// Node modules import
import React, { Component } from 'react';
import { connect } from 'react-redux'

// Images import
import CompleteMarkIcon from '../../../images/complete-mark.png';

// Shows form to add a new post
export default class NewPostForm extends Component {
	constructor() {
		super();
		this.state = {
			title: '',
			description: '',
			categories: [],
			category: ''
		};

		this.addCategoryToList = this.addCategoryToList.bind(this);
		this.handleCategoryName = this.handleCategoryName.bind(this);

		this.handleTitle = this.handleTitle.bind(this);
		this.handleDescription = this.handleDescription.bind(this);
		this.sendForm = this.sendForm.bind(this);
	}

	handleCategoryName(e) {
		this.setState({ category: e.target.value });
	}

	addCategoryToList() {
		console.log('lol');
		let arrWithNewCategory = this.state.categories;
		arrWithNewCategory.push(this.state.category);
		this.setState({ categories:  arrWithNewCategory, category: '' });
	}

	handleTitle(e) {
		this.setState({ title: e.target.value });
	}

	handleDescription(e) {
		this.setState({ description: e.target.value });
	}


	sendForm(e) {
		e.preventDefault();

		this.props.postPost(this.state.title, this.state.description, this.state.categories);

		this.setState({ description: '', title: '', category: '' });
	}

	render() {
		return (
			<div className="new-post-form">
				<div className="section-title">Create your own post</div>
				<input
					onChange={this.handleTitle}
					value={this.state.title}
					type="text"
					className="title-input underline-input post-inputs-group"
					placeholder="Some title"/>
				<form className="post-form" onSubmit={this.sendForm}>
					<textarea
						onChange={this.handleDescription}
						value={this.state.description}
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
									<form onSubmit={this.addCategoryToList}>
										<ul className="inline-block ">
											<li className="inline-block category">
												<input
													onChange={this.handleCategoryName}
													value={this.state.category}
													placeholder="Category"
													type="text"
													className="underline-input post-inputs-group add-category-input"/>
											</li>
											<li className="inline-block category">
												<button type="submit" className="non-styled-btn">
													<img
														onClick={this.addCategoryToList}
														src={CompleteMarkIcon}
														alt="plus-icon"
														className="add-category-icon"/>
												</button>
											</li>
										</ul>
									</form>
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
