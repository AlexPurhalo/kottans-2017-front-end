// Node modules import
import React from 'react';
import { Route, IndexRoute } from 'react-router';

// Components import
import App from './components/app';
import PostsPage from './components/posts-page';
import About from './components/about';
import UserQuestionsPage from './components/user-questions-page';
// Routes definition
export default (
	<Route path="/" component={App}>
		<IndexRoute component={PostsPage} />
		<Route path="/about" component={About} />
		<Route path="/users/:username/questions" component={UserQuestionsPage} />
	</Route>
);
