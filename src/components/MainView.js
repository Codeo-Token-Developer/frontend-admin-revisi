import React, { useEffect, useState, useContext } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

// Component Navigate
import Header from "./headerComponent/Header";
import NavLeft from "./navbarComponent/NavLeft";

// Component Pages
// ADMIN PAGES
import Dashboard from "./Dashboard";
import UserManagement from "./adminDashboard/UserManagement";
import KYCApproval from "./adminDashboard/KYCApproval";

import CMSUpdate from "./adminDashboard/CMSUpdate";
import Ledger from "./adminDashboard/Ledger";
import General from "./adminDashboard/General";
import BankAccount from "./adminDashboard/BankAccount";
// Launchpad PAGES
// import DashboardLaunchpad from "./DashboardLaunchpad";
// import ListingApproval from "./launcpadDashboard/ListingApproval";
// import UserInvestment from "./launcpadDashboard/UserInvestment";
// import PlacementAgencies from "./launcpadDashboard/PlacementAgencies";
// import ProjectManagement from "./launcpadDashboard/ProjectManagement";
// import BannerLaunchpad from "./launcpadDashboard/BannerLaunchpad";
// import DetailProjectManagement from "./launcpadDashboard/DetailProjectManagement";

import { urlContext, adminContext } from "../Context";

import axios from "axios";
import Swal from "sweetalert2";
import ListingApproval from "./lauchpadDashboard/ListingApproval";
import UserInvestment from "./lauchpadDashboard/UserInvestment";
import PlacementAgencies from "./lauchpadDashboard/PlacementAgencies";
import ProjectManagement from "./lauchpadDashboard/ProjectManagement";
import BannerLaunchpad from "./lauchpadDashboard/BannerLaunchpad";
import DetailProjectManagement from "./lauchpadDashboard/DetailProjectManagement";
import DashboardLaunchpad from "./DashboardLaunchpad";

function MainView() {
  let { path } = useRouteMatch();

  let baseUrl = useContext(urlContext);
  let [data, setData] = useState(undefined);

  useEffect(() => {
    Swal.showLoading();
    axios({
      url: `${baseUrl}/admins/me`,
      method: "GET",
      headers: {
        adminToken: localStorage.getItem("admincodeotoken"),
      },
    })
      .then(({ data }) => {
        setData(data.admin);
        Swal.close();
      })
      .catch((err) => {
        console.log(err);
        Swal.close();
      });
  }, [baseUrl]);
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
              <Route path={`${path}/projectManagement/:ID`}>
                <DetailProjectManagement />
              </Route>
              <Route path={`${path}/projectManagement`}>
                <ProjectManagement />
              </Route>
              <Route path={`${path}/bannerLaunchpad`}>
                <BannerLaunchpad />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </adminContext.Provider>
  );
}

export default MainView;
