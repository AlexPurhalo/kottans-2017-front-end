// Node modules import
import axios from 'axios';

// Functions import
import { adapteLink } from '../functions/categories';

// Actions import
import { FETCH_POSTS_SUCCESS } from '../constatnts/posts';

// Import of API url
import { API } from '../constatnts/index';

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
