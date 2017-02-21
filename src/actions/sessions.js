// Node modules import
import axios from 'axios';
// Import of API url
import { API } from '../constants/index';

// Action types import
import { POST_SESSION_SUCCESS, POST_SESSION_FAILURE, DESTROY_SESSION_SUCCESS } from '../constants/sessions';

// Authenticates a user
export function postSession(username, password) {
	const data = { username: username, password: password };

	return function(dispatch) {
		return axios.post(`${API}/sessions`, data)
			.then(res => dispatch(postSessionSuccess(res.data)))
			.catch(req => dispatch(postSessionFailure(req.response.data.errors)));
	}
}

function postSessionSuccess(data) {
	localStorage.setItem('jwt', data.access_token);
	localStorage.setItem('userId', data.user_id);
	localStorage.setItem('username', data.username);

	return { type: POST_SESSION_SUCCESS }
}

function postSessionFailure(errors) {
	console.log(errors);

	return {
		type: POST_SESSION_FAILURE,
		payload: errors[0]
	}
}

// Allows to sign out
export function destroySession() {
	localStorage.removeItem('jwt');
	localStorage.removeItem('userId');
	localStorage.removeItem('username');

	return { type: DESTROY_SESSION_SUCCESS }
}


// Authentication via Github
export function authWithGithub(sessionCode) {
	console.log(sessionCode);

	return function(dispatch) {
		return axios.get(`${API}/auth/github/callback?code=${sessionCode}`)
			.then(res => dispatch(authWithGithubSuccess(res.data)))
			.catch(req => dispatch(authWithGithubFailure(req.response.data.errors)))
	}
}
function authWithGithubSuccess(data) {
	localStorage.setItem('jwt', data.access_token);
	localStorage.setItem('userId', data.user_id);
	localStorage.setItem('username', data.username);

	return {
		type: POST_SESSION_SUCCESS
	};


}

function authWithGithubFailure(errors) {
	console.log(errors)
}
