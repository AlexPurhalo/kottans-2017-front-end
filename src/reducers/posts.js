// Initial states definition
export const INITIAL_STATE = { postsList: null, allowToAddPost: false, allowToAddComment: false };

// Action types import
import { FETCH_POSTS_SUCCESS, POST_POST_SUCCESS, POST_COMMENT_SUCCESS } from '../constants/posts';
import { POST_USER_SUCCESS } from '../constants/users';
import { POST_SESSION_SUCCESS, DESTROY_SESSION_SUCCESS, AUTO_SIGN_IN } from '../constants/sessions';

// States returning after actions reducing
export default (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case AUTO_SIGN_IN:
			return { ...state, allowToAddPost: true, allowToAddComment: true };
		case POST_USER_SUCCESS:
			return { ...state, allowToAddPost: true, allowToAddComment: true };
		case POST_SESSION_SUCCESS:
			return { ...state, allowToAddPost: true, allowToAddComment: true };
		case DESTROY_SESSION_SUCCESS:
			return { ...state, allowToAddPost: false, allowToAddComment: false };
		case FETCH_POSTS_SUCCESS:
			return { ...state, postsList: action.payload };
		case POST_POST_SUCCESS:
			return { ...state, postsList: action.payload };
		case POST_COMMENT_SUCCESS:
			return { ...state, postsList: action.payload };
		default:
			return state;
	}
}
