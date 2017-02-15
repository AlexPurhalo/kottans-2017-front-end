// Node modules import
import axios from 'axios';

// Functions import
import { adapteLink } from '../functions/categories';

// Action types import
import {
	FETCH_POSTS_SUCCESS,
	POST_POST_SUCCESS,
	POST_POST_FAILURE,
	POST_COMMENT_SUCCESS,
	POST_VOTE_SUCCESS,
	ADD_USER_TO_PARTY_OR_REMOVE,
	ADD_USER_ANSWER_SUCCESS
} from '../constants/posts';

// Import of API url
import { API } from '../constants/index';

// Functions import
import { normalizePosts } from '../functions/posts';

// For headers
const headers = {
	headers: { 'X-User-Id': localStorage.getItem('userId'), 'X-Access-Token': localStorage.getItem('jwt') }
};

// Receives the posts list
export function fetchPosts(categoryName) {
	let category = '?category=Events';
	if (categoryName) { category = ('/?category=' + adapteLink(categoryName))}

	return function(dispatch) {
		return axios.get(`${API}/posts${category}`)
			.then(res => dispatch(fetchPostsSuccess(res.data)));
	}
}
function fetchPostsSuccess(data) {
	return {
		type: FETCH_POSTS_SUCCESS,
		payload: normalizePosts(data)
	}
}

// Creates a new post
export function postPost(title, description, withParty, category, withVoting, votingVariants) {

	const data = {
		title: title,
		description: description,
		with_party: withParty,
		categories: [category],
		with_voting: withVoting,
		variants: votingVariants
	};

	return function(dispatch) {
		return axios.post(`${API}/posts`, data, headers)
			.then(res => dispatch(postPostSuccess(res.data)))
			.catch(req => dispatch(postPostFailure(req.response.data.errors)));
	}
}
function postPostSuccess(data) {
	return {
		type: POST_POST_SUCCESS,
		payload: normalizePosts(data)
	}
}
function postPostFailure(errors) {
	return {
		type: POST_POST_FAILURE,
		payload: errors
	}
}

// Creates a new comment
export function postComment(postId, body) {
	const data = { body: body };

	return function(dispatch) {
		return axios.post(`${API}/posts/${postId}/comments`, data, headers)
			.then(res => dispatch(postCommentSuccess(res.data)))
	}
}
function postCommentSuccess(data) {
	return {
		type: POST_COMMENT_SUCCESS,
		payload: normalizePosts(data)
	}
}

// Adds a vote to post
export function postVote(postId, like) {
	return function(dispatch) {
		return axios.put(`${API}/posts/${postId}/votes`, { like: like }, headers)
			.then(res => dispatch(postVoteSuccess(res.data)))

	}
}
function postVoteSuccess(data) {
	return {
		type: POST_VOTE_SUCCESS,
		payload: normalizePosts(data)
	}
}

// Adds a user to event group
export function addUserToPartyOrRemove(postId) {
	return function(dispatch) {
		return axios.post(`${API}/posts/${postId}/party`, {}, headers)
			.then(res => dispatch(addUserToPartyOrRemoveSuccess(res.data)))
	}
}
function addUserToPartyOrRemoveSuccess(data) {
	return {
		type: ADD_USER_TO_PARTY_OR_REMOVE,
		payload: normalizePosts(data)
	}
}

// Adds user's answer for the post's voting
export function addUserAnswer(postId, variantId) {
	return function(dispatch) {
		return axios.post(`${API}/posts/${postId}/variants/${variantId}/voting_answers`, {}, headers)
			.then(res => dispatch(addUserAnswerSuccess(res.data)))
	}
}
function addUserAnswerSuccess(data) {
	return {
		type: ADD_USER_ANSWER_SUCCESS,
		payload: normalizePosts(data)
	}
}
