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
				<ul className="posts-list">
					<li className="post-item">
						<div className="title-section">
							<div className="row">
								<div className="col-md-8">
									<h1 className="title">Kottans 2017 Web Course</h1>
								</div>
								<div className="col-md-4">
									<div className="votes right-side">
										<ul className="inline-list">
											<li className="inline-block">
												<span className="plus">
													+
												</span>
											</li>
											<li className="inline-block">
												<span className="plus-number">
													5
												</span>
											</li>
											<li className="inline-block">
												<span className="separator">
												</span>
											</li>
											<li className="inline-block">
												<span className="minus-number">
													2
												</span>
											</li>
											<li className="inline-block">
												<span className="minus">
													-
												</span>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div className="main-section">
							<p className="description">
								Hi guys, my name is Alex and I have a good idea.
								I want to create site that gonna be info holder for kottans 2017 Web Course.
								If yo still don't know about this course, you suck!
							</p>
						</div>
						<div className="additional-section">
							<div className="row">
								<div className="col-md-6">
									<ul className="categories inline-list">
										<li className="inline-block">
											<h2 className="category">Project Ideas</h2>
										</li>
										<li className="inline-block">
											<span className="symbol">,</span>
										</li>
										<li className="inline-block">
											<h2 className="category">Course Improving</h2>
										</li>
									</ul>
								</div>
								<div className="col-md-6 right-side">
									<ul className="inline-list">
										<li className="inline-block">
											<h4 className="author">
												AlexPurhalo
											</h4>
										</li>
										<li className="inline-block">
											<span className="symbol">,</span>
										</li>
										<li className="inline-block">
										<span className="create-date">
											12.02.2018
										</span>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</li>
				</ul>
			</div>
		);
	}
}

export default connect(null, { fetchPosts })(PostsPage);
