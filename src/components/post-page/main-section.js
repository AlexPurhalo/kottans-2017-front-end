// Node modules import
import React, { Component } from 'react';

// Images import
import EditIcon from '../../../images/edit-icon.png';

// Shows main section for the posts list
export default class MainSection extends Component {
	constructor() {
		super();
		this.state = { onEditDescription: false, description: '', errors: [] };
	}

	changeOnEditState = () => {
		this.setState({ onEditDescription: !this.state.onEditDescription })
	};

	updateDescription = (e) => {
		let formErrors = [];

		e.preventDefault();

		if (this.state.description.length > 0) {
			this.props.updatePostData(this.props.postId, {description: this.state.description});
			this.setState({ description: '', onEditDescription: false, errors: [] })
		} else {
			formErrors.push('Provide changes for description');
			this.setState({ errors: formErrors })
		}
	};

	postOwner() {
		return this.props.authorName == localStorage.getItem('username');
	}

	renderEditForm() {
		return (
			<form className="edit-description-form" onSubmit={this.updateDescription}>
				<textarea
					autoFocus
					onChange={e => this.setState({ description: e.target.value })}
					type="text"
					className="form-control"
					defaultValue={this.props.description}
					placeholder="Enter some text" />
				<div className="buttons right-side">
					<button className="btn btn-default" type="submit">
						Update
					</button>
					<button type="reset" className="btn btn-primary cancel-btn" onClick={this.changeOnEditState}>
						Cancel
					</button>
				</div>
			</form>
		);
	}

	renderDescriptionText() {
		return (
			<ul className="inline-list">
				<li className="inline-block">
					<p className="description">{this.props.description}</p>
				</li>
				<li className="inline-block">
					{this.props.authenticated && this.postOwner() && (
						<button className="non-styled-btn" type="reset" onClick={this.changeOnEditState}>
							<img src={EditIcon} alt="edit-icon" className="edit-icon"/>
						</button>
					)}
				</li>
			</ul>
		);
	}

	renderErrors() {
		return (
			<ul className="errors-list">
				{this.state.errors.map(error =>
					<li className="error" key={error}>{error}</li>
				)}
			</ul>
		);
	}

	render() {
		return (
			<div className="main-section">
				{this.state.onEditDescription ? this.renderEditForm() : this.renderDescriptionText()}
				{this.state.onEditDescription && this.renderErrors()}
			</div>
		);
	}
}
