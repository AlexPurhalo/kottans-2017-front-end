// Node modules import
import React, { Component } from 'react';

// Components import
import Header from './header';

// Layout component
export default class App extends Component {
	render() {
		return (
			<div className="app">
				<Header />
				{this.props.children}
			</div>
		);

	}
}
