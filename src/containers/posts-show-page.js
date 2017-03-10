// Node modules import
import React, { Component } from 'react'
import { connect } from 'react-redux'

// Actions import

// Components import

// Renders page that allow to see the information about certain post
class PostsShowPage extends Component {
	render() {
		return (
			<div className="posts-show-page">
				Hello World, it's posts show page
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
	}
}

export default connect(null)(PostsShowPage)
