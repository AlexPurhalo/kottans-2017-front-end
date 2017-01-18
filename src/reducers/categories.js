// Initial states definition
export const INITIAL_STATE = { categoriesList: null };

// Action types import
import { FETCH_CATEGORIES_SUCCESS } from '../constatnts/categories';

// States returning after actions reducing
export default (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case FETCH_CATEGORIES_SUCCESS:
			return { ...state, categoriesList: action.payload };
		default:
			return state;
	}
}
