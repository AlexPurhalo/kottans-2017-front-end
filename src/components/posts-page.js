// Node modules import
import React, { Component } from 'react';
import { connect } from 'react-redux'

// Actions import
import { fetchPosts } from '../actions/posts';

// Components import
import TitleSection from './post-page-components/title-section';
import MainSection from './post-page-components/main-section';
import AdditionalSection from './post-page-components/additional-section';

// Main page, show posts list
class PostsPage extends Component {
	componentWillMount() {
		this.props.fetchPosts();
	}

	renderComponents(posts) {
		return (
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
					</li>);
				})}
			</ul>
		);
	}

	render() {
		return (
			<div className="posts-page">
				{this.props.posts ? this.renderComponents(this.props.posts) : (<div>Loading...</div>)}
			</div>
		);
	}
}

// Maps the states from reducers to properties
function mapStateToProps(state) { return { posts: state.posts.postsList } }

// Exports component and provides connection with redux stuff
export default connect(mapStateToProps, { fetchPosts })(PostsPage);
