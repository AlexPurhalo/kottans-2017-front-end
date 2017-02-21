// Node modules import
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

// Images import
import GithubIcon from '../../../../images/github-icon.png';

// Actions import
import { postUser } from '../../../actions/users'
import { postSession, destroySession, authWithGithub } from '../../../actions/sessions';
import { addFlashMessage, destroyFlashMessage } from '../../../actions/flash-messages';

// Shows Registration form for user
class Authentication extends Component {
	constructor() {
		super();

		this.state = { signUp: true, signIn: false, username: '', password: '', errors: [] };
	}

	componentWillMount() {
		let sessionCode = this.props.githubSessionCode;

		sessionCode && this.props.authWithGithub(sessionCode);
	}

	// Sends form to back-end
	sendForm = (e) => {
		e.preventDefault();

		if (this.state.username.length === 0 || this.state.password.length === 0) {
			this.props.addFlashMessage('failure-message', 'Fields can not be empty');
		} else {
			if (this.state.signUp) {
				this.props.postUser(this.state.username, this.state.password);
			} else {
				this.props.postSession(this.state.username, this.state.password);
			}
		}
	};

	renderAuthForm() {
		return (
			<div>
				<ul className="inline-list">
					<li className="inline-block">
						<form className="registration-form" onSubmit={this.sendForm}>
							<ul className="inline-list">
								<li className="inline-block">
									<div
										className={`registration-title sign-up-title ${this.state.signUp ? 'active-type' : 'disabled-type'}`}
										onClick={e => this.setState({ signUp: true, signIn: false })}>
										SignUp
									</div>
								</li>
								<li className="inline-block">
									<div className="registration-title separator">|</div>
								</li>
								<li className="inline-block">
									<div
										className={`registration-title sign-in-title ${this.state.signIn ? 'active-type' : 'disabled-type'}`}
										onClick={e => this.setState({ signIn: true, signUp: false })}>
										Sign In
									</div>
								</li>
								<li className="inline-block">
									<input
										onChange={e => this.setState({ username: e.target.value })}
										type="text"
										className={`form-field username ${this.state.signIn && 'active-sign-in'}`}
										placeholder="Username"/>
								</li>
								<li className="inline-block">
									<input
										onChange={e => this.setState({ password: e.target.value })}
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
					</li>
					<li className="inline-block">
						<a href='https://github.com/login/oauth/authorize?scope=user:email&client_id=4bc852f1f3bfb0234ccf' className="sign-in-with-github">
							Login with <img src={GithubIcon} alt="github-icon" className="github-icon" />
						</a>
					</li>
				</ul>
			</div>
		);
	}

	userNavBar() {
		return (
			<div className="user-nav-bar">
				<ul className="inline-list">
					<li className="inline-block">
						<Link
							to={`/users/${localStorage.getItem('username')}/questions`}
							className="sign-out-btn">
							Account
						</Link>
					</li>
					<li className="inline-block">
						<span
							className="sign-out-btn"
							onClick={e => this.props.destroySession()}>
							SignOut
						</span>
					</li>
				</ul>
			</div>
		);
	}

	render() {
		return <div>{this.props.authenticated ? this.userNavBar() : this.renderAuthForm()}</div>;
	}
}

export function mapStateToProps(state) {
	return { authenticated: state.session.authenticated }
}

export default connect(mapStateToProps, {
	postUser, addFlashMessage, destroyFlashMessage, postSession, destroySession, authWithGithub
})(Authentication);
