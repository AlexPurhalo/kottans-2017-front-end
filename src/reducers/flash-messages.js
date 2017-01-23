// Initial states for reducers
export const INITIAL_STATE = {
	message: null
};

// Action types import
import { ADD_FLASH_MESSAGE, DELETE_FLASH_MESSAGE } from '../constants/flash-messages';
import { POST_USER_FAILURE, POST_USER_SUCCESS } from '../constants/users';
import { POST_SESSION_SUCCESS, POST_SESSION_FAILURE, DESTROY_SESSION_SUCCESS } from '../constants/sessions';

export default (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case POST_USER_FAILURE:
			return { ...state, message: { text: action.payload, type: 'failure-message' } };
		case POST_USER_SUCCESS:
			return { ...state, message: { text: `User has been successfully created`, type: 'success-message' } };
		case ADD_FLASH_MESSAGE:
			return { ...state, message: action.payload };
		case DELETE_FLASH_MESSAGE:
			return { ...state, message: null };
		case POST_SESSION_SUCCESS:
			return { ...state, message: { text: 'Hello my friend, you has ben signed in :)', type: 'success-message' } };
		case POST_SESSION_FAILURE:
			return { ...state, message: { text: action.payload, type: 'failure-message' } };
		case DESTROY_SESSION_SUCCESS:
			return { ...state, message: { text: 'Sorry to see you go :(', type: 'info-message'} };
		default:
			return state;
	}
}
