import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { ProtectedRoute } from './ProtectedRoute';

import Login  from './pages/Login';
import MainPage from './pages/MainPage';
import Auth from './Auth';

class App extends React.Component {

  componentDidMount() {
    if (Auth.isAuthenticated()) {
      this.props.history.push(this.props.location.pathname)
    }else {
      this.props.history.push("/")
    }
  }
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Login} />
        <ProtectedRoute path="/operationMain" component={MainPage} />
      </Switch>
    )
  }
};

export default withRouter(App);