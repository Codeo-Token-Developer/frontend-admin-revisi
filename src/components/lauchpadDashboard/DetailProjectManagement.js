import React, { useContext } from "react";
import { urlContext } from "../../Context";

import CardDetailProjectManagement from "./componentDetailProjectManagement/CardDetailProjectManagement";

function DetailProjectManagement() {
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
                <li className="breadcrumb-item active">
                  <a href="#admin">Project Management</a>
                </li>
                <li className="breadcrumb-item active">
                  Detail Project Management
                </li>
              </ol>
            </div>
            <h4 className="page-title">Detail Project Management</h4>
          </div>
        </div>
      </div>
      <CardDetailProjectManagement baseURL={baseURL} />
    </>
  );
}

export default DetailProjectManagement;
