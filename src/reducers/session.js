// Initial states definition
export const INITIAL_STATE = { authenticated: false };

// Action types import
import { POST_USER_SUCCESS } from '../constants/users';
import { POST_SESSION_SUCCESS, DESTROY_SESSION_SUCCESS } from '../constants/sessions';

// States returning after actions reducing
export default (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case POST_USER_SUCCESS:
			return { ...state, authenticated: true };
		case POST_SESSION_SUCCESS:
			return { ...state, authenticated: true };
		case DESTROY_SESSION_SUCCESS:
			return { ...state, authenticated: false };
		default:
			return state;
	}
}
