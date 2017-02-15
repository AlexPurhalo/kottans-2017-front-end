// Node modules import
import React, { Component } from 'react';
import { connect } from 'react-redux'

// Actions import
import { fetchPosts, postPost, postComment, postVote, addUserToPartyOrRemove, addUserAnswer } from '../actions/posts';
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
import AnswerVariants from '../components/post-page/answer-variants';

// Main page, show posts list
class PostsPage extends Component {
	componentWillMount() {
		this.props.fetchPosts();
		this.props.fetchCategories();
	}

	renderComponents(posts) {
		let authenticated = this.props.authenticatedUser;

		return (
			<div>
				<Categories
					categories={this.props.categories}
					fetchPosts={this.props.fetchPosts} />
				{authenticated && (
					<NewPostForm
						postPost={this.props.postPost}
						categories={this.props.categories}/>
				)}
				<ul className="posts-list">
					{posts.map(post =>
						<li className="post-item" key={post.id}>
							<TitleSection
								postId={post.id}
								title={post.title}
								likes={post.votes.likes}
								dislikes={post.votes.dislikes}
								postVote={this.props.postVote}
								authenticated={authenticated} />
							<MainSection description={post.description} />
							{post.withVoting && (
								<AnswerVariants
									authenticated={authenticated}
									variants={post.answerVariants}
									votingAnswers={post.votingAnswers}
									addUserAnswer={this.props.addUserAnswer}
									postId={post.id}/>
							)}
							<AdditionalSection
								categories={post.categories}
								author={post.author}
								date={post.date} />
							{post.withParty && (
								<EventGroup
									eventGroup={post.eventGroup ? post.eventGroup : { users: [] }}
									addUserToPartyOrRemove={this.props.addUserToPartyOrRemove}
									postId={post.id}
									authenticated={authenticated} />
							)}
							{post.comments.length > 0 && (<Comments comments={post.comments} />)}
							{authenticated && (
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
		{this.props.posts && console.log(this.props.posts)}
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
		authenticatedUser: state.session.authenticated
	}
}

// Exports component and provides connection with redux stuff
export default connect(mapStateToProps, {
	fetchPosts, fetchCategories, postPost, postComment, postVote, addUserToPartyOrRemove, addUserAnswer
})(PostsPage);
