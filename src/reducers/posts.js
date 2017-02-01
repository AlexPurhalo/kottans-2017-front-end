// Initial states definition
export const INITIAL_STATE = {
	postsList: null, allowActions: false
};

// Action types import
import { POST_USER_SUCCESS } from '../constants/users';
import { POST_SESSION_SUCCESS, DESTROY_SESSION_SUCCESS, AUTO_SIGN_IN } from '../constants/sessions';

import {
	FETCH_POSTS_SUCCESS,
	POST_POST_SUCCESS,
	POST_COMMENT_SUCCESS,
	POST_VOTE_SUCCESS,
	ADD_USER_TO_PARTY_OR_REMOVE
} from '../constants/posts';

// States returning after actions reducing
export default (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case AUTO_SIGN_IN:
			return { ...state, allowActions: true };
		case POST_USER_SUCCESS:
			return { ...state, allowActions: true };
		case POST_SESSION_SUCCESS:
			return { ...state, allowActions: true };
		case DESTROY_SESSION_SUCCESS:
			return { ...state, allowActions: false };
		case FETCH_POSTS_SUCCESS:
			return { ...state, postsList: action.payload };
		case POST_POST_SUCCESS:
			return { ...state, postsList: action.payload };
		case POST_COMMENT_SUCCESS:
			return { ...state, postsList: action.payload };
		case POST_VOTE_SUCCESS:
			return { ...state, postsList: action.payload };
		case ADD_USER_TO_PARTY_OR_REMOVE:
			console.log(action.payload);
			return { ...state, postsList: action.payload };
		default:
			return state;
	}
}
