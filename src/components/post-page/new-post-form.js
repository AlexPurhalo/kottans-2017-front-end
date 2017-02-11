// Node modules import
import React, { Component } from 'react';
import { connect } from 'react-redux'

// Images import
import CloseIcon from '../../../images/close-icon-black.png';
import CompleteMarkIcon from '../../../images/complete-mark.png';

// Shows form to add a new post
export default class NewPostForm extends Component {
	constructor() {
		super();
		this.state = {
			title: '',
			description: '',
			errors: [],
			posted: false,
			onAddPost: true,
			withParty: false,
			withVoting: false,
			votingVariants: ['Ruby Patterns', 'JavascriptPatterns', 'JWT', 'Social Authentication'],
			category: ''
		};
	}


	handleTitle = (e) => { this.setState({ title: e.target.value }) };

	handleDescription =(e) => { this.setState({ description: e.target.value }) };

	sendForm = (e) => {
		e.preventDefault();

		let formErrors = [];
		this.state.title.length < 1 && formErrors.push('Title is required');
		this.state.description.length < 1 && formErrors.push('Description is required');
		this.state.category.length < 1 && formErrors.push('Choice any category');

		formErrors.length < 1
			? (this.props.postPost(this.state.title, this.state.description, this.state.withParty, this.state.category)
			&& this.setState({ description: '', title: '', posted: true, withParty: false, category: false }))
			: (this.setState({errors: formErrors}));
	};

	changeWithPartyState = () => { this.setState({ withParty: !this.state.withParty }) };

	changeWithVotingState = () => { this.setState({ withVoting: !this.state.withVoting })};

	selectCategory = (e) => { this.setState({ category: e.target.value }) };

	checkBoxSection(title, action, value, inputName) {
		return [
			<li className="inline-block" key="1">{title}</li>,
			<li className="inline-block" key="2">
				<div className="checkbox">
					<input
						onChange={action}
						type="checkbox"
						value={value}
						id={inputName} />
					<label htmlFor={inputName}>
					</label>
				</div>
			</li>
		];
	}

	votingForm() {
		return (
			<form className="voting-form">
				<input type="text" className="underline-input post-inputs-group" placeholder="Variant of answer" />
				<button className="non-styled-btn" type="submit">
					<img src={CompleteMarkIcon} className="completeMarkIcon" alt="complete-mark-icon"/>
				</button>
			</form>
		);
	}

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
					<div className="form-bottom-elements">
						<div className="row">
							<div className="col-md-2">
								<select value={this.state.value} className="category-select" onChange={this.selectCategory}>
									<option defaultChecked>
										choice
									</option>
									{this.props.categories.map(category =>
										<option
											value={category.name} key={category.id}>{category.name}</option>
									)}
								</select>
							</div>
							<div className="col-md-4">
								<ul className="inline-list checkbox-list">
									{this.checkBoxSection('Party', this.changeWithPartyState, this.state.withParty, 'party-input')}
									{this.checkBoxSection('Voting', this.changeWithVotingState, this.state.withVoting, 'voting-input')}
								</ul>
							</div>
							<div className="col-md-6 right-side">
								<button type="submit" className="btn post-send-button">Submit</button>
							</div>
						</div>
					</div>
				</form>
				{this.votingForm()}
				<ol className="voting-variants">
					{this.state.votingVariants.map(variant =>
						<li className="variant" key={variant}>
							<ul className="inline-list">
								<li className="inline-block">
									<h5 className="variant-title">{variant}</h5>
								</li>
								<li className="inline-block">
									<img src={CloseIcon} alt="close-icon" className="remove-icon" />
								</li>
							</ul>
						</li>
					)}
				</ol>
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
