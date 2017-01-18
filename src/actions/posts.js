// Node modules import
import axios from 'axios';

// Actions import
import { FETCH_POSTS_SUCCESS } from '../constatnts/posts';

// Functions import
import { normalizePosts } from '../functions/posts';

// Receives a random question
export function fetchPosts() {

	return function(dispatch) {
		return axios.get('https://kottans-2017-back-end.herokuapp.com/posts')
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
