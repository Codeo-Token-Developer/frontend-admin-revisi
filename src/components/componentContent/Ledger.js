import React from 'react'
import { CardLedgerComponent } from './cardLedger/CardLedgerComponent'

function Ledger() {
    return (
        <>
            <div className="row">
                <div className="col-sm-12">
                    <div className="page-title-box">
                        <div className="float-right">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="#admin">Admin</a></li>
                                <li className="breadcrumb-item active">Ledger</li>
                            </ol>
                        </div>
                        <h4 className="page-title">Ledger</h4>
                    </div>
                </div>
            </div>
            <CardLedger />

            <CardTableLedger />
        </>
    )
}

const CardLedger = (props) => {
    return(
        <div className="row">
           <div className="col-lg-3">
               <CardLedgerComponent/>
            </div>
        </div>
    )
}

const CardTableLedger = (props) => {
    return(
        <div className="row">
            <div className="col-12">
                <div className="card">
                    <div className="card-body order-list">
                        <h4 className="header-title mt-0 mb-3">Ledger</h4>
                        <div className="table-responsive">
                            <table className="table table-hover mb-0">
                                <thead className="thead-light">
                                    <tr>
                                        <th className="border-top-0">Date Create Wallet</th>
                                        <th className="border-top-0">User Wallet</th>
                                        <th className="border-top-0">Wallet Address</th>
                                        <th className="border-top-0">Actual Balance</th>
                                        <th className="border-top-0">ETH Actual Balance</th>
                                        <th className="border-top-0">Private Key</th>
                                        <th className="border-top-0">Action</th>
                                    </tr>{/*end tr*/}
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>17-02-2020 11:23 AM</td>
                                        <td>Master Thomas</td>
                                        <td>0x3025234435236421</td>
                                        <td>3.214 CODEO</td>
                                        <td>476 ETH</td>
                                        <td>a873s2341swf83612638swegjhygbs</td>
                                        <td>
                                            <button className="btn btn-xs btn-danger">Terminate</button>
                                            <button className="btn btn-xs btn-warning">Lock</button>
                                        </td>
                                    </tr>{/*end tr*/}
                                    <tr>
                                        <td>17-02-2020 03:44 AM</td>
                                        <td>CEO Agatha</td>
                                        <td>0x3025234435236421</td>
                                        <td>5.224 CODEO</td>
                                        <td>875 ETH</td>
                                        <td>a214s63471349aa3718kutknywaqe2</td>
                                        <td>
                                            <button className="btn btn-xs btn-danger">Terminate</button>
                                            <button className="btn btn-xs btn-warning">Lock</button>
                                        </td>
                                    </tr>{/*end tr*/}
                                    <tr>
                                        <td>17-02-2020 05:45 AM</td>
                                        <td>Dr. Chris</td>
                                        <td>0x3025234435236421</td>
                                        <td>5.567 CODEO</td>
                                        <td>767 ETH</td>
                                        <td>a75649jbvdhwojbj76qfnozjjq72ls</td>
                                        <td>
                                            <button className="btn btn-xs btn-danger">Terminate</button>
                                            <button className="btn btn-xs btn-warning">Lock</button>
                                        </td>
                                    </tr>{/*end tr*/}
                                    <tr>
                                        <td>17-02-2020 07:22 AM</td>
                                        <td>Senior Shella</td>
                                        <td>0x3025234435236421</td>
                                        <td>9.982 CODEO</td>
                                        <td>352 ETH</td>
                                        <td>a1ad124513987sjbyiqbhzqbuvsdjbo</td>
                                        <td>
                                            <button className="btn btn-xs btn-danger">Terminate</button>
                                            <button className="btn btn-xs btn-warning">Lock</button>
                                        </td>
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

export default Ledger;