// Node modules import
import React, { Component } from 'react';

// Shows main section for the posts list
export default class MainSection extends Component {
	render() {
		return (
			<div className="main-section">
				<p className="description">{this.props.description}</p>
			</div>
		);
	}
}
