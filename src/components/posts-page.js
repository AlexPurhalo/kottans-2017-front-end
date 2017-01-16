// Node modules import
import React, { Component } from 'react';
import { connect } from 'react-redux'

// Actions import
import { fetchPosts } from '../actions/posts';

// Main page, show posts list
class PostsPage extends Component {
	componentWillMount() {
		this.props.fetchPosts();
	}

	render() {
		return (
			<div className="posts-page">
				<h1 className="title">Posts Page</h1>

			</div>
		);
	}
}

export default connect(null, { fetchPosts })(PostsPage);
