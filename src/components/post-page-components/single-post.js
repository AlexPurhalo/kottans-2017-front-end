// Node modules import
import React, { Component } from 'react';

// Components import
import TitleSection from './title-section';
import MainSection from './main-section';
import AdditionalSection from './additional-section';
import Comments from './comments';
import AddCommentForm from './add-comment-form';

// Shows a single post
export default class SinglePost extends Component {
	render() {
		return (
			<li className="post-item" >
				<TitleSection
					title={this.props.title}
					likes={this.props.likes}
					dislikes={this.props.dislikes}
				/>
				<MainSection
					description={this.props.description} />
				<AdditionalSection
					categories={this.props.categories}
					author={this.props.author}
					date={this.props.date} />
				{this.props.comments.length >= 1 && (
					<Comments comments={this.props.comments} />
				)}
				{this.props.allowToAddComment && (
					<AddCommentForm
						postComment={this.props.postComment}
						postId={this.props.id} />
				)}
			</li>
		);
	}
}
