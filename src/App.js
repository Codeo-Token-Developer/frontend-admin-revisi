import React, { useEffect } from 'react';
import { Switch, Redirect, useHistory, useLocation, Route } from 'react-router-dom';
//pages
import Login from './pages/Login';
import MainPage from './pages/MainPage';

function App() {

  let history = useHistory();
  let location = useLocation();
  
  useEffect(() => {
    
    if (localStorage.getItem('admincodeotoken')) {
      history.push(location.pathname)
    }else {
      history.push('/operation')
    }
  },[])

  return (
    <Switch>
      <Route path="/operation">
        <Login />
      </Route>
      <Route path="/operationMain">
        {localStorage.getItem('admincodeotoken') ? <MainPage /> : <Redirect to="/operation" />}
      </Route>
    </Switch>
  );
}

export default App;
