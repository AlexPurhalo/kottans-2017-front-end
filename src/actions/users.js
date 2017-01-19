// Node modules import
import axios from 'axios';
import bcrypt from 'bcrypt-nodejs';

// Import of API url
import { API } from '../constants/index';

// Creates a new user
export function postUser(username, password) {
	const data = { username: username, bcrypted_password: bcrypt.hashSync(password)};

	return function(dispatch) {
		return axios.post(`${API}/users`, data)
			.then(res => dispatch(postUserSuccess(res.data)))
			.catch(req => dispatch(postUserFailure(req.response.data.errors)));
	}
}

function postUserSuccess(data) {
	console.log(data);
}

function postUserFailure(errors) {
	console.log(errors)
}
