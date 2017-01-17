// Node modules import
import axios from 'axios';

// Receives a random question
export function fetchPosts() {
	return function() {
		return axios.get('http://localhost:5000/posts')
			.then(response => { console.log(response)} );
	}
}
