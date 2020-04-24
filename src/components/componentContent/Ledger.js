import React from 'react'
import CardLedger from './componentLedger/CardLedger'
import CardTableLedger from './componentLedger/CardTableLedger'

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

export default Ledger;