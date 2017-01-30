// Node modules import
import axios from 'axios';

// Actions import
import { FETCH_QUESTIONS_SUCCESS } from '../constants/questions';

// Import of API url
import { API } from '../constants/index';

// Fetches the questions list
export function fetchQuestions() {
	return function(dispatch) {
		return axios.get(`${API}/questions`)
			.then(res => dispatch(fetchQuestionsSuccess(res.data)))
	};
}
function fetchQuestionsSuccess(data) {
	return {
		type:FETCH_QUESTIONS_SUCCESS,
		payload: data
	}
}
