import React, { useContext } from "react";
import { urlContext } from "../../Context";

import CardPlacementAgencies from "./componentPlacementAgencies/CardPlacementAgencies";

function PlacementAgencies() {
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
                <li className="breadcrumb-item active">Placement Agencies</li>
              </ol>
            </div>
            <h4 className="page-title">Placement Agencies</h4>
          </div>
        </div>
      </div>
      <CardPlacementAgencies baseURL={baseURL} />
    </>
  );
}

export default PlacementAgencies;
