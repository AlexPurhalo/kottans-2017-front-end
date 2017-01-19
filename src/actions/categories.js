// Node modules import
import axios from 'axios';

// Functions import
import { normalizeCategories } from '../functions/categories';

// Import of API url
import { API } from '../constants/index';

// Action types import
import { FETCH_CATEGORIES_SUCCESS } from '../constants/categories';

// Receives the categories list
export function fetchCategories() {
	return function(dispatch) {
		return axios.get(`${API}/categories`)
			.then(res => dispatch(fetchCategoriesSuccess(res.data)))
	}
}
function fetchCategoriesSuccess(data) {
	return {
		type: FETCH_CATEGORIES_SUCCESS,
		payload: normalizeCategories(data)
	}
}
