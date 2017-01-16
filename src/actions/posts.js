// Node modules import
import axios from 'axios';

// Receives a random question
export function fetchPosts() {
	return function() {
		return axios.get('https://kottans-2017-back-end.herokuapp.com/posts')
			.then(response => { console.log(response)} );
	}
}
