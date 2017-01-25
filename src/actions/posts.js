// Node modules import
import axios from 'axios';

// Functions import
import { adapteLink } from '../functions/categories';

// Actions import
import { FETCH_POSTS_SUCCESS, POST_POST_SUCCESS, POST_POST_FAILURE } from '../constants/posts';

// Import of API url
import { API } from '../constants/index';

// Functions import
import { normalizePosts } from '../functions/posts';

// Receives the posts list
export function fetchPosts(categoryName) {
	let category = '/';
	if (categoryName) { category += ('?category=' + adapteLink(categoryName))}

	return function(dispatch) {
		return axios.get(`${API}/posts${category}`)
			.then(res => dispatch(fetchPostsSuccess(res.data)));
	}
}
function fetchPostsSuccess(data) {
	data = normalizePosts(data);

	return {
		type: FETCH_POSTS_SUCCESS,
		payload: data
	}
}

// Creates a new post
export function postPost(title, description, categories) {

	const data = { title: title, description: description, categories: categories},
		headers = { headers: {
		'X-User-Id': localStorage.getItem('userId'), 'X-Access-Token': localStorage.getItem('jwt') } };
	console.log(data);
	return function(dispatch) {
		return axios.post(`${API}/posts`, data, headers)
			.then(res => dispatch(postPostSuccess(res.data)))
			.catch(req => dispatch(postPostFailure(req.response.data.errors)));
	}
}
function postPostSuccess(data) {
	return {
		type: POST_POST_SUCCESS,
		payload: data
	}
}
function postPostFailure(errors) {
	console.log(errors);

	return {
		type: POST_POST_FAILURE,
		payload: errors
	}
}
