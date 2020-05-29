import React, { useContext } from "react";
import { urlContext } from "../../Context";

import CardListingApproval from "./componentListingApproval/CardListingApproval";

function ListingApproval() {
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
                <li className="breadcrumb-item active">Listing Approval</li>
              </ol>
            </div>
            <h4 className="page-title">Listing Approval</h4>
          </div>
        </div>
      </div>
      <CardListingApproval baseURL={baseURL} />
    </>
  );
}

export default ListingApproval;
