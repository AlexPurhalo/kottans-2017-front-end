// Initial states definition
export const INITIAL_STATE = { questionsList: null };

// Actions import
import { FETCH_QUESTIONS_SUCCESS } from '../constants/questions';

// States returning after actions reducing
export default (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case FETCH_QUESTIONS_SUCCESS:
			return { ...state, questionsList: action.payload };
		default:
			return state;
	}
}
