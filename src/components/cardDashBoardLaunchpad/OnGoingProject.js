import React from 'react'

function OnGoingProject() {
    return (
        <div className="col-lg-4">
            <CardLaunchpads 
                upDownClass="mdi mdi-trending-down" /*====== Set Icon Up or Down Total Data ======*/
                upDownText="text-danger" /*====== Set Color For Icon Up or Down (text-success = Green Color) / (text-danger = Red Color) ======*/
                percentData="18%" /*====== Total Percent Up or Down Today ======*/
                textPercent="Down From Last Month" /*====== Text For Up or Down Total Percentage Today ======*/
                setColor="primary" /*====== Set Color For Shadow or Background ======*/
                setIcon="dripicons-jewel" /*====== For Change Icon Can Change Here Using Dripicons ======*/
            />
        </div>
    )
}

const CardLaunchpads = (props) => {
    return(
        <div className="card card-eco">
            <div className="card-body">
                <h4 className="title-text mt-0">New Project Request</h4>
                <div className="d-flex justify-content-between">
                    <h3 className="text-primary">
                        0
                    </h3>
                    <i className="dripicons-jewel card-eco-icon bg-primary shadow-primary align-self-center" />
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
    )
}

export default OnGoingProject