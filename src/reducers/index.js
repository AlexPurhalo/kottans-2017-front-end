// Node modules import
import { combineReducers } from 'redux';

// Reducers import
import postsReducer from './posts';

// Stage holding in combine reducers
const rootReducer = combineReducers({
	posts: postsReducer
});

export default rootReducer;
