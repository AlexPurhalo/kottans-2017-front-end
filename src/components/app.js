// Node modules import
import React, { Component } from 'react';

// Components import
import Header from './header';
import FlashMessage from './flash-message'

// Layout component
export default class App extends Component {
	render() {
		return (
			<div className="app">
				<FlashMessage />
				<Header />
				{this.props.children}
			</div>
		);

	}
}
