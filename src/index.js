// Node modules import
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import reduxThunk from 'redux-thunk';

// Action types import
import { AUTO_SIGN_IN } from './constants/sessions';

// Routes import
import routes from './routers';

// Reducers import
import reducers from './reducers/index.js';

// Style import
import '../styles/index.scss';

// Store definition with Middleware applying and Rendering of React Document Object Model
const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore),
	reducer_store = createStoreWithMiddleware(reducers), token = localStorage.getItem('jwt');

// if token exist changes authenticated flag
token && reducer_store.dispatch({ type: AUTO_SIGN_IN  });

ReactDOM.render(
	<Provider store={reducer_store}>
		<Router history={browserHistory} routes={routes} />
	</Provider>, document.querySelector('#react-application')
);
