// Initial states definition
export const INITIAL_STATE = { user: { answers: null } };

// Action types
import { FETCH_USER_ANSWERS_SUCCESS } from '../constants/users';

// States returning after actions reducing
export default (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case FETCH_USER_ANSWERS_SUCCESS:
			return { ...state, user: { answers: action.payload } };
		default:
			return state;
	}
}
