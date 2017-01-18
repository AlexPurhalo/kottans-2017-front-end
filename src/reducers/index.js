// Node modules import
import { combineReducers } from 'redux';

// Reducers import
import postsReducer from './posts';
import postsCategories from './categories';

// Stage holding in combine reducers
const rootReducer = combineReducers({
	posts: postsReducer,
	categories: postsCategories
});

export default rootReducer;
