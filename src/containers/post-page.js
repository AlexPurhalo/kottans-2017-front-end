// Node modules import
import React, { Component } from 'react';
import { connect } from 'react-redux'

// Actions import
import { fetchPosts, postPost, postComment, postVote, addUserToPartyOrRemove } from '../actions/posts';
import { fetchCategories } from '../actions/categories';

// Components import
import Categories from '../components/post-page/categories';
import NewPostForm from '../components/post-page/new-post-form';
import TitleSection from '../components/post-page/title-section';
import MainSection from '../components/post-page/main-section';
import AdditionalSection from '../components/post-page/additional-section';
import Comments from '../components/post-page/comments';
import AddCommentForm from '../components/post-page/add-comment-form';
import EventGroup from '../components/post-page/event-group';

// Main page, show posts list
class PostsPage extends Component {
	componentWillMount() {
		this.props.fetchPosts();
		this.props.fetchCategories();
	}

	renderComponents(posts) {
		let allowActions = this.props.allowActions;

		return (
			<div>
				<Categories
					categories={this.props.categories}
					fetchPosts={this.props.fetchPosts} />
				{allowActions && (<NewPostForm postPost={this.props.postPost} /> )}
				<ul className="posts-list">
					{posts.map(post =>
						<li className="post-item" key={post.id}>
							<TitleSection
								postId={post.id}
								title={post.title}
								likes={post.votes.likes}
								dislikes={post.votes.dislikes}
								postVote={this.props.postVote}
								allowToLike={allowActions} />
							<MainSection description={post.description} />
							<AdditionalSection
								categories={post.categories}
								author={post.author}
								date={post.date} />
							{post.withParty && (
								<EventGroup
									eventGroup={post.eventGroup ? post.eventGroup : { users: [] }}
									addUserToPartyOrRemove={this.props.addUserToPartyOrRemove}
									postId={post.id}
									allowParticipation={allowActions} />
							)}
							{post.comments.length > 0 && (<Comments comments={post.comments} />)}
							{allowActions && (
								<AddCommentForm
									postId={post.id}
									postComment={this.props.postComment} />
							)}
						</li>
					)}
				</ul>
			</div>
		);
	}

	render() {
		return (
			<div className="posts-page">
				{this.props.posts && this.props.categories
					? this.renderComponents(this.props.posts)
					: (<div>Loading...</div>)}
			</div>
		);
	}
}

// Maps the states from reducers to properties
function mapStateToProps(state) {
	return {
		posts: state.posts.postsList,
		categories: state.categories.categoriesList,
		allowActions: state.posts.allowActions
	}
}

// Exports component and provides connection with redux stuff
export default connect(mapStateToProps, {
	fetchPosts, fetchCategories, postPost, postComment, postVote, addUserToPartyOrRemove
})(PostsPage);
