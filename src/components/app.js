import React, { Component } from 'react';
import Header from './header';

export default class App extends Component {
  /*{this.props.children} - this is used to display any children component present below the App in the Route if the path value matches. Check the code from main index.js file

  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="resources" component={Resources}/>
        </Route>
    </Router>
  </Provider>
  */
  render() {
    return (
      <div>
        <Header/>
        {this.props.children}
      </div>
    );
  }
}
