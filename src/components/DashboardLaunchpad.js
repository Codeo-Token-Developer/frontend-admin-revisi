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
                <li className="breadcrumb-item active">Dashboard</li>
              </ol>
            </div>
            <h4 className="page-title">Dashboard</h4>
          </div>
        </div>
      </div>
      <CardLaunchpad />
    </div>
  );
}

const CardLaunchpad = () => {
  return (
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
        <div className="col-12 mb-3">
          <table
            id="datatable"
            className="table table-bordered dt-responsive nowrap"
            style={{
              borderCollapse: "collapse",
              borderSpacing: 0,
              width: "100%",
            }}
          >
            <thead>
              <tr>
                <th>#</th>
                <th>ID Request</th>
                <th>Project Name</th>
                <th>Submiter Name</th>
                <th>Country</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>IE0001</td>
                <td>Project A</td>
                <td>John Doe</td>
                <td>Singapore</td>
                <td>Halo@halo.co</td>
                <td>+62 8384739383</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-success btn-xs waves-effect waves-light mr-2"
                  >
                    Process
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger btn-xs waves-effect waves-light"
                  >
                    Reject
                  </button>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>IE0002</td>
                <td>Project B</td>
                <td>Ivan Juliant</td>
                <td>Indonesia</td>
                <td>Halo2@halo.co</td>
                <td>+62 8384739383</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-success btn-xs waves-effect waves-light mr-2"
                  >
                    Process
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger btn-xs waves-effect waves-light"
                  >
                    Reject
                  </button>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>IE0003</td>
                <td>Project C</td>
                <td>Thomas</td>
                <td>Indonesia</td>
                <td>Halo3@halo.co</td>
                <td>+62 8384739383</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-success btn-xs waves-effect waves-light mr-2"
                  >
                    Process
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger btn-xs waves-effect waves-light"
                  >
                    Reject
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <hr className="col-12" />
        <div className="col-12 mb-3 mt-3">
          <table
            id="datatable2"
            className="table table-bordered dt-responsive nowrap"
            style={{
              borderCollapse: "collapse",
              borderSpacing: 0,
              width: "100%",
            }}
          >
            <thead>
              <tr>
                <th>#</th>
                <th>ID TRX</th>
                <th>Date/Time</th>
                <th>Project Name</th>
                <th>Investor</th>
                <th>Country</th>
                <th>Total Invest</th>
                <th>TXHASH</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>788923</td>
                <td>23/04/2020</td>
                <td>PROJECT A</td>
                <td>Handrawan Xyz</td>
                <td>Indonesia</td>
                <td>100 CODEO</td>
                <td>
                  0X232333 XXXXXX{" "}
                  <button
                    type="button"
                    className="btn btn-primary btn-xs waves-effect waves-light mr-2"
                  >
                    See Details
                  </button>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>788924</td>
                <td>23/04/2020</td>
                <td>PROJECT B</td>
                <td>Martinus Tico</td>
                <td>Indonesia</td>
                <td>250 CODEO</td>
                <td>
                  0X232333 XXXXXX{" "}
                  <button
                    type="button"
                    className="btn btn-primary btn-xs waves-effect waves-light mr-2"
                  >
                    See Details
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <hr className="col-12" />
        <div className="col-12 mt-3">
          <table
            id="datatable3"
            className="table table-bordered dt-responsive nowrap"
            style={{
              borderCollapse: "collapse",
              borderSpacing: 0,
              width: "100%",
            }}
          >
            <thead>
              <tr>
                <th>#</th>
                <th>ID TRX</th>
                <th>Date/Time</th>
                <th>Project Name</th>
                <th>Agencies</th>
                <th>Placement Sequence To</th>
                <th>Total Placement</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>788923</td>
                <td>23/04/2020</td>
                <td>PROJECT A</td>
                <td>Ascort Indonesia</td>
                <td>25</td>
                <td>250,000 CODEO</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-success btn-xs waves-effect waves-light mr-2"
                  >
                    Process
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default DashboardLaunchpad;
