import React from 'react'

function KYCApproval() {
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

            <CardKYCApproval />
        </>
    )
}

const CardKYCApproval = () => {
    return(
        <div className="row">
            <div className="col-12">
            <div className="card">
                <div className="card-body order-list">
                <h4 className="header-title mt-0 mb-3">KYC Approval</h4>
                <div className="table-responsive">
                    <table className="table table-hover mb-0">
                    <thead className="thead-light">
                        <tr>
                        <th className="border-top-0">Date</th>
                        <th className="border-top-0">Name</th>
                        <th className="border-top-0">Email</th>
                        <th className="border-top-0">Country</th>
                        <th className="border-top-0">Document</th>
                        <th className="border-top-0">Status</th>
                        </tr>{/*end tr*/}
                    </thead>
                    <tbody>
                        <tr>
                        <td>17-02-2020 05:45 AM</td>
                        <td>Dr. Chris</td>
                        <td>drchris@gmail.com</td>
                        <td>Indonesia</td>
                        <td>
                            <button className="btn btn-xs btn-danger">Picture</button>
                            <button className="btn btn-xs btn-warning">Document</button>
                        </td>
                        <td><span className="badge badge-boxed badge-success">Verified</span></td>
                        </tr>{/*end tr*/}
                        <tr>
                        <td>17-02-2020 11:23 AM</td>
                        <td>Master Thomas</td>
                        <td>masterthomas@gmail.com</td>
                        <td>Indonesia</td>
                        <td>
                            <button className="btn btn-xs btn-danger">Picture</button>
                            <button className="btn btn-xs btn-warning">Document</button>
                        </td>
                        <td><span className="badge badge-boxed badge-danger">Unverified</span></td>
                        </tr>{/*end tr*/}
                        <tr>
                        <td>17-02-2020 07:22 AM</td>
                        <td>Senior Shella</td>
                        <td>seniorshella@gmail.com</td>
                        <td>Indonesia</td>
                        <td>
                            <button className="btn btn-xs btn-danger">Picture</button>
                            <button className="btn btn-xs btn-warning">Document</button>
                        </td>
                        <td><span className="badge badge-boxed badge-success">Verified</span></td>
                        </tr>{/*end tr*/}
                        <tr>
                        <td>17-02-2020 03:44 AM</td>
                        <td>CEO Agatha</td>
                        <td>ceoagtha@gmail.com</td>
                        <td>Indonesia</td>
                        <td>
                            <button className="btn btn-xs btn-danger">Picture</button>
                            <button className="btn btn-xs btn-warning">Document</button>
                        </td>
                        <td><span className="badge badge-boxed badge-danger">Unverified</span></td>
                        </tr>{/*end tr*/}
                    </tbody>
                    </table> {/*end table*/}
                </div>{/*end /div*/}
                </div>{/*end card-body*/}
            </div>{/*end card*/}
            </div>{/*end col*/}
        </div>
    )
}

export default KYCApproval;
