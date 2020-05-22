import React, { useContext } from "react";
import { urlContext } from "../../Context";

import CardUserInvestment from "./componentUserInvestment/CardUserInvestment";

function UserInvestment() {
  const baseURL = useContext(urlContext);

  return (
    <>
      <div className="row">
        <div className="col-sm-12">
          <div className="page-title-box">
            <div className="float-right">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="#admin">Admin</a>
                </li>
                <li className="breadcrumb-item active">User Investment</li>
              </ol>
            </div>
            <h4 className="page-title">User Investment</h4>
          </div>
        </div>
      </div>
      <CardUserInvestment baseURL={baseURL} />
    </>
  );
}

export default UserInvestment;
