// Node modules import
import React, { Component } from 'react';
import { connect } from 'react-redux'

// Images import
import CompleteMarkIcon from '../../../images/complete-mark.png';
import CloseIcon from '../../../images/close-icon-black.png';

// Shows form to add a new post
export default class NewPostForm extends Component {
	constructor() {
		super();
		this.state = {
			title: '',
			description: '',
			categories: [],
			category: '',
			errors: [],
			posted: false,
			onAddPost: false
		};
	}


	handleCategoryName = (e) => { this.setState({ category: e.target.value }) };

	addCategoryToList = () => {
		let arrWithNewCategory = this.state.categories;
		arrWithNewCategory.push(this.state.category);
		this.setState({ categories:  arrWithNewCategory, category: '' });
	};

	handleTitle = (e) => { this.setState({ title: e.target.value }) };

	handleDescription =(e) => { this.setState({ description: e.target.value }) };

	sendForm = (e) => {
		e.preventDefault();

		let formErrors = [];
		this.state.title.length < 1 && formErrors.push('Title is required');
		this.state.description.length < 1 && formErrors.push('Description is required');
		this.state.categories.length < 1 && formErrors.push('Add at last one category');

		formErrors.length < 1
			? (this.props.postPost(this.state.title, this.state.description, this.state.categories)
			&& this.setState({ description: '', title: '', category: '', posted: true, categories: [] }))
			: (this.setState({errors: formErrors}));
	};

	newPostForm() {
		return (
			<div className="new-post-form">
				<div className="row">
					<div className="col-md-11">
						<div className="section-title">Create your own post</div>
					</div>
					<div className="col-md-1 right-side">
						<img
							onClick={this.changeOnAddPostState}
							className="close-icon"
							src={CloseIcon} alt="close-icon"/>
					</div>
				</div>
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
						placeholder="Post's body here :)"/>
					<div className="row">
						<div className="col-md-10">
							<ul className="inline-list categories">
								{this.state.categories.map(category =>
									<li className="inline-block" key={category}>
										<div className="added-category"># {category}</div>
									</li>
								)}
								<li className="inline-block category-input">
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
											<button onClick={this.addCategoryToList} className="non-styled-btn" type="reset">
												<img src={CompleteMarkIcon} alt="plus-icon" className="add-category-icon"/>
											</button>
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
				<ul className="errors-list">
					{this.state.errors.map(error =>
						<li key={error} className="error"><p>{error}</p></li>
					)}
				</ul>
			</div>
		);
	}

	changePostedState = () => { this.setState({ posted: false }) };

	postedMessage() {
		return (
			<div className="posted-message">
				<p className="message-text">Your post was added to other, thank for your contribution</p>
				<button onClick={this.changePostedState} className="non-styled-btn add-one-more-post-btn">
					Add one more
				</button>
			</div>
		);
	}

	changeOnAddPostState = () => { this.setState({ onAddPost: !this.state.onAddPost }) };

	onAddPostDiv() {
		return (
			<div className="on-add-post-div" onClick={this.changeOnAddPostState}>
				<p className="non-styled-btn">Add a new post</p>
			</div>
		)
	}

	render() {
		return (
			<div>
				{this.state.onAddPost
					? (this.state.posted ? this.postedMessage() : this.newPostForm())
					: (this.onAddPostDiv())}
			</div>
		);
	}
}
