import React from "react";

//Card
import TotalActiveUser from "./cardDashBoard/TotalActiveUser";
import TotalUser from "./cardDashBoard/TotalUser";
import TotalVerifiedUser from "./cardDashBoard/TotalVerifiedUser";
import TotalGenerateWallet from "./cardDashBoard/TotalGenerateWallet";
import TotalRegisterToday from "./cardDashBoard/TotalRegisterToday";
import TotalTransaction from "./cardDashBoard/TotalTransaction";
import TotalActiveWallet from "./cardDashBoard/TotalActiveWallets";
import TotalCodeo from "./cardDashBoard/TotalCodeo";

//Tables
import Tables from "./tableDashboard/index";

function Dashboard() {
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
                <li className="breadcrumb-item active">Dashboard</li>
              </ol>
            </div>
            <h4 className="page-title">Dashboard</h4>
          </div>
        </div>
      </div>

      <Cards />
    </div>
  );
}

const Cards = () => {
  return (
    <>
      <div className="row">
        <TotalUser />
        <TotalActiveUser />
        <TotalVerifiedUser />
        <TotalTransaction />
      </div>

      <div className="row">
        <TotalGenerateWallet />
        <TotalRegisterToday />
        <TotalActiveWallet />
        <TotalCodeo />
      </div>
      {/* Tables */}
      <div className="row">
        <Tables />
      </div>
    </>
  );
};

export default Dashboard;
