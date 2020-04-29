import React from "react";

function UpCommingProject() {
  return (
    <div className="col-lg-4">
      <CardLaunchpads
        upDownClass="" /*====== Set Icon Up or Down Total Data ======*/
        upDownText="" /*====== Set Color For Icon Up or Down (text-success = Green Color) / (text-danger = Red Color) ======*/
        percentData="&nbsp;" /*====== Total Percent Up or Down Today ======*/
        textPercent="&nbsp;" /*====== Text For Up or Down Total Percentage Today ======*/
      />
    </div>
  );
}

const CardLaunchpads = (props) => {
  return (
    <div className="card card-eco">
      <div className="card-body">
        <h4 className="title-text mt-0">UPCOMING PROJECT</h4>
        <div className="d-flex justify-content-between">
          <h3 className="text-purple">0</h3>
          <i className="dripicons-pulse card-eco-icon bg-purple shadow-purple align-self-center" />
        </div>
        <p className="mb-0 text-muted text-truncate">
          <span className={props.upDownText}>
            <i className={props.upDownClass}> </i>
            {props.percentData}
          </span>{" "}
          {props.textPercent}
        </p>
      </div>
    </div>
  );
};

export default UpCommingProject;
