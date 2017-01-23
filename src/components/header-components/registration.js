// Node modules import
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Actions import
import { postUser } from '../../actions/users'
import { addFlashMessage, destroyFlashMessage } from '../../actions/flash-messages';

// Shows Registration form for user
class RegistrationForm extends Component {
	constructor() {
		super();

		this.state = {
			signUp: true, signIn: false,
			username: '', password: '',
			errors: []
		};

		this.activeSignInClick = this.activeSignInClick.bind(this);
		this.activeSignUpClick = this.activeSignUpClick.bind(this);

		this.handleChangeUsername = this.handleChangeUsername.bind(this);
		this.handleChangePassword = this.handleChangePassword.bind(this);
		this.sendForm = this.sendForm.bind(this);
	}

	// Changes Registration booleans
	activeSignInClick() { this.setState({ signIn: true, signUp: false }) }
	activeSignUpClick() { this.setState({ signUp: true, signIn: false }) }

	// handleChanges data from inputs
	handleChangeUsername(e) { this.setState({ username: e.target.value }) }
	handleChangePassword(e) { this.setState({ password: e.target.value }) }

	// Sends form to back-end
	sendForm(e) {
		e.preventDefault();

		if (this.state.username.length === 0 || this.state.password.length === 0) {
			this.props.addFlashMessage('failure-message', 'Fields can not be empty');
		} else {
			if (this.state.signUp) {
				this.props.postUser(this.state.username, this.state.password);
			} else {

			}
		}


	}

	render() {
		console.log(this.props.authenticated);
		return (
			<form className="registration-form" onSubmit={this.sendForm}>
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
							onChange={this.handleChangeUsername}
							type="text"
							className={`form-field username ${this.state.signIn && 'active-sign-in'}`}
							placeholder="Username"/>
					</li>
					<li className="inline-block">
						<input
							onChange={this.handleChangePassword}
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

export function mapStateToProps(state) {
	return { authenticated: state.session.authenticated }
}

export default connect(mapStateToProps, { postUser, addFlashMessage, destroyFlashMessage })(RegistrationForm);
