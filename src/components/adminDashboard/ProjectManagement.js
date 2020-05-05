import React, { useContext } from "react";
import { urlContext } from "../../Context";

import CardProjectManagement from "./componentProjectManagement/CardProjectManagement";

function ProjectManagement() {
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
                <li className="breadcrumb-item active">Project Management</li>
              </ol>
            </div>
            <h4 className="page-title">Project Management</h4>
          </div>
        </div>
      </div>
      <CardProjectManagement baseURL={baseURL} />
    </>
  );
}

export default ProjectManagement;
