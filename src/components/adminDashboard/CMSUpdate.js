import React, { useContext } from "react";
import { urlContext } from "../../Context";

// COMPONENT CMS UPDATE
import CardCMSUpdate from "./componentCMSUpdate/CardCMSUpdate";
import DropdownCMSUpdate from "./componentCMSUpdate/DropdownCMSUpdate";

function CMSUpdate() {
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
                <li className="breadcrumb-item active">CMS Update</li>
              </ol>
            </div>
            <h4 className="page-title">CMS Update</h4>
          </div>
        </div>
      </div>
      <CardCMSUpdate baseURL={baseURL} />
      <DropdownCMSUpdate baseURL={baseURL} />
    </>
  );
}

export default CMSUpdate;
