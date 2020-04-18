import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

// Component Navigate
import Header from './headerComponent/Header';
import NavLeft from './navbarComponent/NavLeft';

// Component Pages
import Dashboard from './Dashboard';
import UserManagement from './componentContent/UserManagement';
import CMSUpdate from './componentContent/CMSUpdate';
import Ledger from './componentContent/Ledger';
import KYCApproval from './componentContent/KYCApproval';
import General from './componentContent/General';
import BankAccount from './componentContent/BankAccount';

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
                                    <Route path={`${path}/cmsUpdate`}>
                                        <CMSUpdate />
                                    </Route>
                                    <Route path={`${path}/ledger`}>
                                        <Ledger />
                                    </Route>
                                    <Route path={`${path}/kycApproval`}>
                                        <KYCApproval />
                                    </Route>
                                    <Route path={`${path}/general`}>
                                        <General />
                                    </Route>
                                    <Route path={`${path}/bankAccount`}>
                                        <BankAccount />
                                    </Route>
                                </Switch>
                            </div>
                        </div>
                    </div>
                </>
    )

};


export default MainView;