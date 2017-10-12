import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import{Router,Route, browserHistory} from 'react-router';

import App from './components/app';
import reducers from './reducers';
import Resources from './components/resources';
import requireAuth from './components/require_authentication';

const createStoreWithMiddleware = applyMiddleware()(createStore);
/*
  <Route path="resources" component={requireAuth(Resources)}/>
  This line of code contains param component with value 'requireAuth(Resources)'
  What it means it we are wrapping a higher order component 'requireAuth' to another component 'Resources' so as a ComposedComponent is created.
  This is done because the 'Resources' component should only be visible to authenticated users (authentication done in 'requireAuth')
  So if authentication is successful then show the 'Resources' component
*/
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="resources" component={requireAuth(Resources)}/>
        </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));
