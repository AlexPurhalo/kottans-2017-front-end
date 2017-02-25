// Initial states definition
export const INITIAL_STATE = {
	postsList: null, allowActions: false
};

// Action types import
import {
	FETCH_POSTS_SUCCESS,
	POST_POST_SUCCESS,
	POST_COMMENT_SUCCESS,
	POST_VOTE_SUCCESS,
	ADD_USER_TO_PARTY_OR_REMOVE,
	ADD_USER_ANSWER_SUCCESS,
	UPDATE_POST_SUCCESS
} from '../constants/posts';

// States returning after actions reducing
export default (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case FETCH_POSTS_SUCCESS:
			return { ...state, postsList: action.payload };

		case POST_POST_SUCCESS:
			return { ...state, postsList: action.payload };

		case POST_COMMENT_SUCCESS:
			let postsArr = [];
			state.postsList.map(post => {
				post.id == action.payload.postId
					? (post.comments = action.payload.comments) && postsArr.push(post)
					: postsArr.push(post)
			});
			return { ...state, postsList: postsArr };

		case POST_VOTE_SUCCESS:
			let voting = [];
			state.postsList.map(post => {
				post.id == action.payload.postId
					? (post.votes = action.payload.votes) && voting.push(post)
					: voting.push(post)
			});
			return { ...state, postsList: voting };

		case ADD_USER_TO_PARTY_OR_REMOVE:
			return { ...state, postsList: action.payload };

		case ADD_USER_ANSWER_SUCCESS:
			let postsAfterAnswer = [];

			state.postsList.map(post => {
				post.id == action.payload.postId
					? (post.votingAnswers = action.payload.votingAnswers) && postsAfterAnswer.push(post)
					: postsAfterAnswer.push(post)
			});

			return { ...state, postsList: postsAfterAnswer };

		case UPDATE_POST_SUCCESS:
			let tempArr = [];
			state.postsList.map(post => {
				post.id == action.payload.id ? tempArr.push(action.payload) : tempArr.push(post);
			});
			return { ...state, postsList: tempArr};

		default:
			return state;
	}
}

