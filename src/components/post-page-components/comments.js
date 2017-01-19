// Node modules import
import React, {Component} from "react";

// Shows the post comments
export default class Comments extends Component {
	titleSection(commentsCount) {
		return (
			<div className="row">
				<div className="col-md-9">
					<h2 className="section-title">Discussions</h2>
				</div>
				<div className="col-md-3 right-side">
						<span className="comments-count">
							{commentsCount > 1 ? `${commentsCount} comment` : `${commentsCount} comments`}
						</span>
				</div>
			</div>
		);
	}

	mainSection(comments) {
		let commentsHtml = [], i;

		for (i = 0; i < comments.length; i++) {
			commentsHtml.push(
				<li className="comment-item" key={i}>
					<ul className="inline-list">
						<li className="inline-block">
							<h5 className="author">{comments[i].author}</h5>
						</li>
						<li className="inline-block">
							<span className="date">21:42 12.09</span>
						</li>
					</ul>
					<p className="body">{comments[i].body}</p>
					{i < comments.length-1 && (<hr/>)}
				</li>
			)
		}

		return commentsHtml
	}
	render() {
		const commentsCount = this.props.comments.length;

		return (
			<div className="comments-section">
				{this.titleSection(commentsCount)}
				<ul className="comments-list">
					{this.mainSection(this.props.comments)}
				</ul>
			</div>
		);
	}
}
