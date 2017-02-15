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
	ADD_USER_ANSWER_SUCCESS
} from '../constants/posts';

// States returning after actions reducing
export default (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case FETCH_POSTS_SUCCESS:
			return { ...state, postsList: action.payload };
		case POST_POST_SUCCESS:
			return { ...state, postsList: action.payload };
		case POST_COMMENT_SUCCESS:
			return { ...state, postsList: action.payload };
		case POST_VOTE_SUCCESS:
			return { ...state, postsList: action.payload };
		case ADD_USER_TO_PARTY_OR_REMOVE:
			return { ...state, postsList: action.payload };
		case ADD_USER_ANSWER_SUCCESS:
			return { ...state, postsList: action.payload };
		default:
			return state;
	}
}

