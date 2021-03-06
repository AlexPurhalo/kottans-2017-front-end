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
	ADD_USER_ANSWER_SUCCESS,
	UPDATE_POST_SUCCESS
} from '../constants/posts';

// Import of API url
import { API } from '../constants/index';

// Functions import
import {
	normalizePosts, normalizePost, normalizeComments, findVotes, normalizeVotingAnswers, normalizeEventParty,
	normalizeMeta
} from '../functions/posts';

// For headers
const headers = {
	headers: { 'X-User-Id': localStorage.getItem('userId'), 'X-Access-Token': localStorage.getItem('jwt') }
};

// Receives the posts list
export function fetchPosts(categoryName, pageNum) {
	let category = '&category=Events', size = 5, page = 1;

	categoryName && (category = ('&category=' + adapteLink(categoryName)));
	pageNum && (page = pageNum);

	return function(dispatch) {
		return axios.get(`${API}/posts?page=${page}&size=5${category}`)
			.then(res => dispatch(fetchPostsSuccess(res.data)));
	}
}
function fetchPostsSuccess(data) {
	return {
		type: FETCH_POSTS_SUCCESS,
		payload: { meta: normalizeMeta(data.meta), posts: normalizePosts(data.posts) },
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
	let meta = { 	totalObjects: data.meta.total_objects, pageNum: 1, pageSize: 5 };
	return {
		type: POST_POST_SUCCESS,
		payload: { meta, posts: normalizePosts(data.posts)},
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
			.then(res => dispatch(postCommentSuccess(res.data, postId)))
			.catch(req => dispatch(postCommentFailure(req.response.data.errors)))
	}
}
function postCommentSuccess(data, postId) {
	console.log(data);
	return {
		type: POST_COMMENT_SUCCESS,
		payload: { postId: postId, comments: normalizeComments(data) }
	}
}
function postCommentFailure(errors) {
	console.log(errors)
}

// Adds a vote to post
export function postVote(postId, like) {
	return function(dispatch) {
		return axios.put(`${API}/posts/${postId}/votes`, { like: like }, headers)
			.then(res => dispatch(postVoteSuccess(res.data, postId)))
			.catch(req => dispatch(postVoteFailure(req.response.data.errors)))
	}
}
function postVoteSuccess(data, postId) {
	console.log(findVotes(data));
	return {
		type: POST_VOTE_SUCCESS,
		payload: { postId: postId, votes: findVotes(data) }
	}
}
function postVoteFailure(errors) { console.log(errors) }

// Adds a user to event group
export function addUserToPartyOrRemove(postId) {
	return function(dispatch) {
		return axios.post(`${API}/posts/${postId}/party`, {}, headers)
			.then(res => dispatch(addUserToPartyOrRemoveSuccess(res.data, postId)))
			.catch(req => console.log(req.response.data.errors));
	}
}
function addUserToPartyOrRemoveSuccess(data, postId) {
	console.log(normalizeEventParty(data));
	return {
		type: ADD_USER_TO_PARTY_OR_REMOVE,
		payload: { postId: postId, party: normalizeEventParty(data)}
	}
}

// Adds user's answer for the post's voting
export function addUserAnswer(postId, variantId) {
	return function(dispatch) {
		return axios.post(`${API}/posts/${postId}/variants/${variantId}/voting_answers`, {}, headers)
			.then(res => dispatch(addUserAnswerSuccess(res.data, postId)))
			.catch(req => dispatch(addUserAnswerFailure(req.response.data.errors)))
	}
}
function addUserAnswerSuccess(data, postId) {
	return {
		type: ADD_USER_ANSWER_SUCCESS,
		payload: { postId: postId, votingAnswers: normalizeVotingAnswers(data) }
	}
}
function addUserAnswerFailure(errors) { console.log(errors) }

// Update post's data
export function updatePostData(postId, attributesObject) {
	let attributes = Object.keys(attributesObject), data;

	attributes.map(attribute => {
			attribute == 'title' && (data = { title: attributesObject['title']});
			attribute == 'description' && (data = { description: attributesObject['description']});
		}
	);

	return function(dispatch) {
		return axios.put(`${API}/posts/${postId}`, data, headers)
			.then(res => dispatch(updatePostSuccess(res.data)))
			.catch(req => console.log(req.response.data))
	}
}
function updatePostSuccess(data) {
	return {
		type: UPDATE_POST_SUCCESS,
		payload: normalizePost(data)
	}
}
