// Node modules import
import React, { Component } from 'react';
import { connect } from 'react-redux'

// Actions import
import { fetchPosts, postPost } from '../actions/posts';
import { fetchCategories } from '../actions/categories';

// Components import
import Categories from './post-page-components/categories';
import TitleSection from './post-page-components/title-section';
import MainSection from './post-page-components/main-section';
import AdditionalSection from './post-page-components/additional-section';
import Comments from './post-page-components/comments';
import NewPostForm from './post-page-components/new-post-form';
import AddCommentForm from './post-page-components/add-comment-form';

// Main page, show posts list
class PostsPage extends Component {
	componentWillMount() {
		this.props.fetchPosts();
		this.props.fetchCategories();
	}

	renderComponents(posts) {
		return (
			<div>
				<Categories
					categories={this.props.categories}
					fetchPosts={this.props.fetchPosts} />
				{this.props.allowToAddPost && (
					<NewPostForm
						postPost={this.props.postPost}
					/>
				)}

				<ul className="posts-list">
					{posts.map(post => {
						return (<li className="post-item" key={post.id}>
							<TitleSection
								title={post.title}
								likes={post.votes.likes}
								dislikes={post.votes.dislikes}
							/>
							<MainSection
								description={post.description} />
							<AdditionalSection
								categories={post.categories}
								author={post.author}
								date={post.date} />
							{post.comments.length >= 1 && (<Comments comments={post.comments}/>)}
							<AddCommentForm />
						</li>);
					})}
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
		allowToAddPost: state.posts.allowToAddPost
	}
}

// Exports component and provides connection with redux stuff
export default connect(mapStateToProps, { fetchPosts, fetchCategories, postPost })(PostsPage);
// fsdfdd
