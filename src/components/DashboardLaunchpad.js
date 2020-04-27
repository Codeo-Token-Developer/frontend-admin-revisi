import React from "react";

// CARD
import NewProjectRequest from "./cardDashBoardLaunchpad/NewProjectRequest";
import UpCommingProject from "./cardDashBoardLaunchpad/UpCommingProject";
import OnGoingProject from "./cardDashBoardLaunchpad/OnGoingProject";
import TotalProject from "./cardDashBoardLaunchpad/TotalProject";
import TotalInvestment from "./cardDashBoardLaunchpad/TotalInvestment";
import TotalPlacementCodeo from "./cardDashBoardLaunchpad/TotalPlacementCodeo";

function DashboardLaunchpad() {
  return (
    <div>
      <div className="row">
          <div className="col-sm-12">
            <div className="page-title-box">
              <div className="float-right">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="#admin">Admin</a>
                  </li>
                  <li className="breadcrumb-item active">Dashboard Launchpad</li>
                </ol>
              </div>
              <h4 className="page-title">Dashboard Launchpad</h4>
            </div>
          </div>
      </div>
      <CardLaunchpad />
    </div>
  )
}

const CardLaunchpad = () => {
  return(
    <>
      <div className="row">
        <NewProjectRequest />
        <UpCommingProject />
        <OnGoingProject />
      </div>
      <div className="row">
        <TotalProject />
        <TotalInvestment />
        <TotalPlacementCodeo />
      </div>
      <div className="row">

      </div>
    </>
  )
}

export default DashboardLaunchpad;