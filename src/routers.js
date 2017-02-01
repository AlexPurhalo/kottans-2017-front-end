// Node modules import
import React from 'react';
import { Route, IndexRoute } from 'react-router';

// Components import
import App from './components/app';
import PostsPage from './containers/post-page';
import UserQuestionsPage from './containers/user-questions-page';
import UsersListPage from './containers/users-list-page';

// Routes definition
export default (
	<Route path="/" component={App}>
		<IndexRoute component={PostsPage} />
		<Route path="/users" component={UsersListPage} />
		<Route path="/users/:username/questions" component={UserQuestionsPage} />
	</Route>
);
