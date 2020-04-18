import React from 'react';
import { Switch,  Route, withRouter } from 'react-router-dom';
//pages
import Login from './pages/Login';
import MainPage from './pages/MainPage';

class App extends React.Component {

  componentDidMount() {
    if (localStorage.getItem('admincodeotoken')) {
      this.props.history.push(this.props.location.pathname)
    }else {
      this.props.history.push('/operation')
    }
  }

  render() {
    return (
      <Switch>
        <Route exact path="/operation">
          <Login />
        </Route>
        <Route path="/operationMain">
          <MainPage />
        </Route>
      </Switch>
    )
  }

}

// function App() {

//   let history = useHistory();
//   let location = useLocation();
  
//   useEffect(() => {
    
//     if (localStorage.getItem('admincodeotoken')) {
//       history.push(location.pathname)
//     }else {
//       history.push('/operation')
//     }
//   },[])

//   return (
//     <Switch>
//       <Route path="/operation">
//         <Login />
//       </Route>
//       <Route path="/operationMain">
//         {localStorage.getItem('admincodeotoken') ? <MainPage /> : <Redirect to="/operation" />}
//       </Route>
//     </Switch>
//   );
// }

export default withRouter(App);
