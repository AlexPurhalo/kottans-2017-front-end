// Node modules import
import React, { Component } from 'react';

// Shows Registration form for user
export default class RegistrationForm extends Component {
	constructor() {
		super();

		this.state = { signUp: true, signIn: false };

		this.activeSignInClick = this.activeSignInClick.bind(this);
		this.activeSignUpClick = this.activeSignUpClick.bind(this);
	}

	activeSignInClick() {
		this.setState({ signIn: true, signUp: false })
	}

	activeSignUpClick() {
		this.setState({ signUp: true, signIn: false })
	}

	render() {
		return (
			<form className="registration-form">
				<ul className="inline-list">
					<li className="inline-block">
						<div
							className={`registration-title sign-up-title ${this.state.signUp ? 'active-type' : 'disabled-type'}`}
							onClick={this.activeSignUpClick}>
							SignUp
						</div>
					</li>
					<li className="inline-block">
						<div className="registration-title separator">|</div>
					</li>
					<li className="inline-block">
						<div
							className={`registration-title sign-in-title ${this.state.signIn ? 'active-type' : 'disabled-type'}`}
							onClick={this.activeSignInClick}>
							Sign In
						</div>
					</li>
					<li className="inline-block">
						<input
							type="text"
							className={`form-field username ${this.state.signIn && 'active-sign-in'}`}
							placeholder="Username"/>
					</li>
					<li className="inline-block">
						<input
							type="password"
							className={`form-field password ${this.state.signIn && 'active-sign-in'}`}
							placeholder="Password"/>
					</li>
					<li className="inline-block">
						<button
							type="submit"
							className={`submit-btn ${this.state.signIn && 'active-sign-in'}`}>
							Submit
						</button>
					</li>
				</ul>
			</form>
		);
	}
}
