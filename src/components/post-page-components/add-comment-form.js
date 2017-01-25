// Node modules import
import React, { Component } from 'react';

// Shows Form that allows to add a new comment
export default class AddCommentForm extends Component {
	constructor() {
		super();

		this.state = { body: '', error: '' };

		this.handleCommentBody = this.handleCommentBody.bind(this);
		this.submitCommentForm = this.submitCommentForm.bind(this);
	}

	handleCommentBody(e) {
		this.setState({ body: e.target.value })
	}

	submitCommentForm(e) {
		e.preventDefault();

		this.state.body.length > 1
			? (this.setState({ body: '', error: '' }))
			: (this.setState({ error: 'Body is required' }))
	}

	render() {
		return (
			<div className="add-comment-form">
				<hr/>
				<div className="title">Comment</div>
				<form className="comment-form" onSubmit={this.submitCommentForm}>
					<textarea
						onChange={this.handleCommentBody}
						value={this.state.body}
						placeholder="What are you thinking about this?"
						type="text"
						className="form-control comment-input"/>
					<div className="row">
						<div className="col-md-10">
							<div className="error">{this.state.error}</div>
						</div>
						<div className="col-md-2 right-side">
							<button className="btn comment-button" type="submit">
								Submit
							</button>
						</div>
					</div>
				</form>
			</div>
		);
	}
}
