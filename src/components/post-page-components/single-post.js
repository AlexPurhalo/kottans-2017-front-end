// Node modules import
import React, { Component } from 'react';

// Components import
import TitleSection from './title-section';
import MainSection from './main-section';
import AdditionalSection from './additional-section';
import Comments from './comments';
import AddCommentForm from './add-comment-form';
import EventGroup from './event-group';

// Shows a single post
export default class SinglePost extends Component {
	render() {
		return (
			<li className="post-item" >
				<TitleSection
					title={this.props.title}
					likes={this.props.likes}
					dislikes={this.props.dislikes}
					postVote={this.props.postVote}
					postId={this.props.id}
					allowToLike={this.props.allowToLike}
				/>
				<MainSection
					description={this.props.description} />
				<AdditionalSection
					categories={this.props.categories}
					author={this.props.author}
					date={this.props.date} />
				{this.props.withParty && (
					<EventGroup
						allowParticipation={this.props.allowParticipation}
						eventGroup={this.props.eventGroup ? this.props.eventGroup : {users: []}}
						addUserToPartyOrRemove={this.props.addUserToPartyOrRemove}
						postId={this.props.id} />
				)}
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
