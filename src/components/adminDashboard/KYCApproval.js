import React,{useContext} from 'react';
import {urlContext} from "../../Context";
import {CardInfoKYC} from './componentKYCApproval/CardInfoKYC';

function KYCApproval() {
  let baseUrl=useContext(urlContext);

    return (
        <>
            <div className="row">
                <div className="col-sm-12">
                    <div className="page-title-box">
                        <div className="float-right">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="#admin">Admin</a></li>
                                <li className="breadcrumb-item active">KYC Approval</li>
                            </ol>
                        </div>
                        <h4 className="page-title">KYC Approval</h4>
                    </div>
                </div>
            </div>

            <CardInfoKYC baseUrl={baseUrl} />
        </>
    )
}

export default KYCApproval;
