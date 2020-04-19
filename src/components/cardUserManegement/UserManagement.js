import React, { useContext } from "react";
import axios from "axios";
import { urlContext } from "../Context";


import CardUserManagement from "./CardUserManagement";
import DropdownUserManagement from "./DropdownUserManagement";

export function UserManagement() {
  let baseUrl = useContext(urlContext);

  return (
    <>
      <div className="row">
        <div className="col-sm-12">
          <div className="page-title-box">
            <div className="float-right">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="#a">Admin</a>
                </li>
                <li className="breadcrumb-item active">User Management</li>
              </ol>
            </div>
            <h4 className="page-title">User Management</h4>
          </div>
        </div>
      </div>
      <CardUserManagement baseUrl={baseUrl} />
      <DropdownUserManagement baseUrl={baseUrl} />
    </>
  );
}
