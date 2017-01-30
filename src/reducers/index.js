// Node modules import
import { combineReducers } from 'redux';

// Reducers import
import postsReducer from './posts';
import postsCategoriesReducer from './categories';
import flashMessagesReducer from './flash-messages';
import sessionReducer from './session';
import usersReducer from './users';
import questionsReducer from './questions';

// Stage holding in combine reducers
const rootReducer = combineReducers({
	posts: postsReducer,
	categories: postsCategoriesReducer,
	flashMessages: flashMessagesReducer,
	session: sessionReducer,
	users: usersReducer,
	questions: questionsReducer
});

export default rootReducer;
