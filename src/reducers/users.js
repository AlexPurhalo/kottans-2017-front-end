// Initial states definition
export const INITIAL_STATE = { usersList: [], user: { answers: null } };

// Action types
import {
	FETCH_USER_ANSWERS_SUCCESS,
	POST_USER_ANSWER_SUCCESS,
	PUT_USER_ANSWER_SUCCESS,
	DELETE_USER_ANSWER_SUCCESS,
	FETCH_USERS_SUCESS
} from '../constants/users';

// States returning after actions reducing
export default (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case FETCH_USER_ANSWERS_SUCCESS:
			return { ...state, user: { answers: action.payload } };
		case POST_USER_ANSWER_SUCCESS:
			return { ...state, user: { answers: action.payload } };
		case PUT_USER_ANSWER_SUCCESS:
			return { ...state, user: { answers: action.payload } };
		case DELETE_USER_ANSWER_SUCCESS:
			return { ...state, user: { answers: action.payload } };
		case FETCH_USERS_SUCESS:
			return { ...state, usersList: action.payload };
		default:
			return state;
	}
}
