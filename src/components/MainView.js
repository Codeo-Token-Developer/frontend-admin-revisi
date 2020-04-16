import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import Header from './headerComponent/Header';
import NavLeft from './navbarComponent/NavLeft';
import Dashboard from './Dashboard';
import UserManagement from './UserManagement';

function MainView () {

    let { path } = useRouteMatch();

    return (
        <>
        <Header />
                    <div className="page-wrapper">
                    <NavLeft />
                        <div className="page-content">
                            <div className="container-fluid">  
                                <Switch>
                                    <Route exact path={`${path}`}>
                                        <Dashboard />
                                    </Route>
                                    <Route path={`${path}/userManagement`}>
                                        <UserManagement />
                                    </Route>
                                </Switch>
                            </div>
                        </div>
                    </div>
                </>
    )

};


export default MainView;