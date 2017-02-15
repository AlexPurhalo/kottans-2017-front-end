// Node modules import
import React, { Component } from 'react';

// Shows title section for the posts list
export default class TitleSection extends Component {
	constructor() {
		super();

		this.likePost = this.likePost.bind(this);
		this.dislikePost = this.dislikePost.bind(this);
	}

	likePost() {
		this.props.postVote(this.props.postId, true)
	}

	dislikePost() {
		this.props.postVote(this.props.postId, false)
	}
	render() {
		return (
			<div className="title-section">
				<div className="row">
					<div className="col-md-8">
						<h1 className="title">{this.props.title}</h1>
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
