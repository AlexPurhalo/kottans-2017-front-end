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
	console.log('works, action');
	return { type: DESTROY_SESSION_SUCCESS }
}

