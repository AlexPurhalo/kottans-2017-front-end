// Node modules import
import React, { Component } from 'react';

// Components import
import Header from './layout/header';
import FlashMessage from './layout/flash-message'

// Layout component
export default class App extends Component {
	constructor() {
		super();

		this.githubSessionCode = null
	}
	componentWillMount() {
		this.props.location.query.code && (this.githubSessionCode = this.props.location.query.code)
	}

	render() {


		return (
			<div className="app">
				<FlashMessage />
				<Header githubSessionCode={this.githubSessionCode}/>
				{this.props.children}
			</div>
		);
	}
}
