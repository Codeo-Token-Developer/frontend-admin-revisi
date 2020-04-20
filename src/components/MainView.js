import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

// Component Navigate
import Header from './headerComponent/Header';
import NavLeft from './navbarComponent/NavLeft';

// Component Pages
// ADMIN PAGES
import Dashboard from './Dashboard';
import UserManagement from './adminDashboard/UserManagement';
import KYCApproval from './adminDashboard/KYCApproval';

import CMSUpdate from './adminDashboard/CMSUpdate';
import Ledger from './adminDashboard/Ledger';
import General from './adminDashboard/General';
import BankAccount from './adminDashboard/BankAccount';
// Launchpad PAGES
import DashboardLaunchpad from './DashboardLaunchpad';
import ListingApproval from './adminDashboard/ListingApproval';
import UserInvestment from './adminDashboard/UserInvestment';
import PlacementAgencies from './adminDashboard/PlacementAgencies';
import SettingsLaunchpad from './adminDashboard/SettingsLaunchpad';

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
                                    <Route path={`${path}/dashboardLaunchpad`}>
                                        <DashboardLaunchpad />
                                    </Route>
                                    <Route path={`${path}/listingApproval`}>
                                        <ListingApproval />
                                    </Route>
                                    <Route path={`${path}/userInvestment`}>
                                        <UserInvestment />
                                    </Route>
                                    <Route path={`${path}/placementAgencies`}>
                                        <PlacementAgencies />
                                    </Route>
                                    <Route path={`${path}/settingsLaunchpad`}>
                                        <SettingsLaunchpad />
                                    </Route>
                                </Switch>
                            </div>
                        </div>
                    </div>
                </>
    )

};


export default MainView;
