import React,{useEffect,useState,useContext} from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

// Component Navigate
import Header from './headerComponent/Header';
import NavLeft from './navbarComponent/NavLeft';

// Component Pages
// ADMIN PAGES
import Dashboard from './Dashboard';
import UserManagement from './UserManagement';
import KYCApproval from './KYCApproval';

import CMSUpdate from './componentContent/CMSUpdate';
import Ledger from './componentContent/Ledger';
import General from './componentContent/General';
import BankAccount from './componentContent/BankAccount';
// Launchpad PAGES
import DashboardLaunchpad from './DashboardLaunchpad';
import ListingApproval from './componentContent/ListingApproval';
import UserInvestment from './componentContent/UserInvestment';
import PlacementAgencies from './componentContent/PlacementAgencies';
import SettingsLaunchpad from './componentContent/SettingsLaunchpad';

import {urlContext,adminContext} from "../Context";

import axios from "axios";
import Swal from "sweetalert2";

function MainView () {

    let { path } = useRouteMatch();

    let baseUrl=useContext(urlContext);
    let [data,setData]=useState(undefined);

    useEffect(()=>{
      Swal.showLoading();
      axios({
        url:`${baseUrl}/admins/me`,
        method:"GET",
        headers:{
          adminToken:localStorage.getItem("admincodeotoken")
        }
      }).then(({data})=>{
        setData(data.admin);
        Swal.close();
      }).catch(err=>{
        console.log(err);
        Swal.close();
      });

    },[baseUrl]);

    return (
        <adminContext.Provider value={data}>
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
                </adminContext.Provider>
    )

};


export default MainView;
