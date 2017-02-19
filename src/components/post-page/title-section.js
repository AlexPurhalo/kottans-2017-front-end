// Node modules import
import React, { Component } from 'react';

// Images Import
import EditIcon from '../../../images/edit-icon.png';
import CompleteMarkIcon from '../../../images/complete-mark.png'

// Shows title section for the posts list
export default class TitleSection extends Component {
	constructor() {
		super();

		this.state = { onEditTitle: false, title: '' };
	}

	likePost = () => { this.props.postVote(this.props.postId, true) };

	dislikePost = () => { this.props.postVote(this.props.postId, false) };

	postOwner() {
		return this.props.authorName == localStorage.getItem('username');
	}

	changeEditTitleState = () => {
		this.setState({ onEditTitle: !this.state.onEditTitle })
	};

	sendForm = (e) => {
		e.preventDefault();
		this.state.title.length > 0 && this.props.updatePostData(this.props.postId, { title: this.state.title });
		this.setState({ onEditTitle: false, title: '' });
	};

	render() {
		return (
			<div className="title-section">
				<div className="row">
					<div className="col-md-8">
						<ul className="inline-list">
							<li className="inline-block">
								{!this.state.onEditTitle ? (
										<h1 className="title">{this.props.title}</h1>
									) : (
										<form className="edit-title-form" onSubmit={this.sendForm}>
											<input
												autoFocus
												type="text"
												className="underline-input grey-background edit-title-input"
												placeholder={this.props.title}
												defaultValue={this.props.title}
												onChange={e => this.setState({ title: e.target.value })}/>
											{this.state.title.length > 1 && (
												<button type="submit" className="non-styled-btn">
													<img src={CompleteMarkIcon} alt="complete-mark" className="complete-mark-icon"/>
												</button>
											)}
										</form>
									)
								}

							</li>
							{this.postOwner() && (
								<li className="inline-block">
									<img
										src={EditIcon}
										alt="edit-icon"
										className={
											`edit-title-icon ${this.state.onEditTitle ? 'edit-title-icon-after' : 'edit-title-icon-before'}`
										}
										onClick={this.changeEditTitleState}/>
								</li>
							)}
						</ul>
					</div>
					<div className="col-md-4">
						<div className="votes right-side">
							<ul className="inline-list">
								<li className="inline-block like-post">
									{this.props.authenticated
										? (<span className="plus" onClick={this.likePost}>+{this.props.likes}</span>)
										: (<span className="plus">{this.props.likes}</span>)
									}
								</li>
								<li className="inline-block">
									<span className="separator">
									</span>
								</li>
								<li className="inline-block dislike-post">
									{this.props.authenticated
										? (<span className="minus" onClick={this.dislikePost}>-{this.props.dislikes}</span>)
										: (<span className="minus">{this.props.dislikes}</span>)
									}
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
