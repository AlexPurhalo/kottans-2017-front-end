// Node modules import
import axios from 'axios';
import bcrypt from 'bcrypt-nodejs';

// Import of API url
import { API } from '../constants/index';

// Action types import
import { POST_USER_SUCCESS, POST_USER_FAILURE, FETCH_USER_ANSWERS_SUCCESS } from '../constants/users';

// Creates a new user
export function postUser(username, password) {
	const data = { username: username, bcrypted_password: bcrypt.hashSync(password)};
	console.log(data);
	return function(dispatch) {
		return axios.post(`${API}/users`, data)
			.then(res => dispatch(postUserSuccess(res.data)))
			.catch(req => dispatch(postUserFailure(req.response.data.errors)));
	}
}

function postUserSuccess(data) {
	localStorage.setItem('jwt', data.access_token);
	localStorage.setItem('userId', data.user_id);

	return {
		type: POST_USER_SUCCESS
	}
}

function postUserFailure(errors) {
	return {
		type: POST_USER_FAILURE,
		payload: errors.username[0]
	}
}

// Fetches user answers
export function fetchUserAnswers(username) {
	return function(dispatch) {
		return axios.get(`${API}/users/${username}/answers`)
			.then(res => dispatch(fetchUserAnswersSuccess(res.data)));
	};
}

function fetchUserAnswersSuccess(data) {
	return {
		type: FETCH_USER_ANSWERS_SUCCESS,
		payload: data
	}
}
