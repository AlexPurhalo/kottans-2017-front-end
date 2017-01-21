// Node modules import
import { combineReducers } from 'redux';

// Reducers import
import postsReducer from './posts';
import postsCategoriesReducer from './categories';
import flashMessagesReducer from './flash-messages';

// Stage holding in combine reducers
const rootReducer = combineReducers({
	posts: postsReducer,
	categories: postsCategoriesReducer,
	flashMessages: flashMessagesReducer
});

export default rootReducer;
