import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, browserHistory} from 'react-router';
import {createStore, applyMiddleware} from 'redux';
import allReducers from './reducers/index';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import App from './components/App';

const store = createStore(allReducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store = {store}>
    <Router history={browserHistory}>
  		<Route path="/" component={App}>
        {/* <Route path="categories(/:id)" name = "categories" component={Categories}></Route>
        <Route path="topics(/:id)" name = "topics" component={Topics}></Route> */}
  		</Route>
  	</Router>
  </Provider>,

  document.getElementById('container')
);
