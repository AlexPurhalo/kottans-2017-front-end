// Node modules import
import React, { Component } from 'react';

// Images import
import PostsBanner from '../../../images/posts-background-banner.jpg';

// Shows the posts categories
export default class Categories extends Component {
	constructor() {
		super();
		this.state = { activeCategory: 'Events'};
		this.choiceCategoryClick = this.choiceCategoryClick.bind(this);
	}

	choiceCategoryClick(categoryName) {

		if (categoryName) {
			this.setState({ activeCategory: categoryName});
			this.props.fetchPosts(categoryName);
		} else {
			this.setState({ activeCategory: null });
			this.props.fetchPosts();
		}

	}

	renderCategories(categories) {
		return (
			categories.map(category =>
				<li className="inline-block category-item" key={category.id}>
					<h2
						className={`name ${this.state.activeCategory === category.name && 'active'}`}
						onClick={e => this.choiceCategoryClick(category.name)}>
						{category.name}
					</h2>
				</li>
			)
		);
	}

	render() {
		const bannerStyle = {
			background: `url(${PostsBanner})`,
			backgroundRepeat: 'no-repeat',
			backgroundSize: 'cover',
			backgroundPosition: 'top center',
			textAlign: 'center'
		};

		return (
			<div className="categories-section">
				<div style={bannerStyle}>
					<ul className="inline-list categories-list">
						{this.renderCategories(this.props.categories)}
					</ul>
				</div>
			</div>
		);
	}
}
