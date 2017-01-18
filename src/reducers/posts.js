// Initial states definition
export const INITIAL_STATE = { postsList: null };

// Action types import
import { FETCH_POSTS_SUCCESS } from '../constatnts/posts';

// States returning after actions reducing
export default (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case FETCH_POSTS_SUCCESS:
			return { ...state, postsList: action.payload };
		default:
			return state;
	}
}
