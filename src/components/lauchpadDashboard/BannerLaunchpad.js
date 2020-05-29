import React, { useContext } from "react";
import { urlContext } from "../../Context";

import CardBannerLaunchpad from "./componentBannerLaunchpad/CardBannerLaunchpad";

function BannerLaunchpad() {
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
                <li className="breadcrumb-item active">Banner Slider</li>
              </ol>
            </div>
            <h4 className="page-title">Banner Slider</h4>
          </div>
        </div>
      </div>
      <CardBannerLaunchpad baseURL={baseURL} />
    </>
  );
}

export default BannerLaunchpad;
