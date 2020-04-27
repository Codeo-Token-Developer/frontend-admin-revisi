import React from 'react'
import { TotalWallet } from './cardLedger/TotalWallet'

export default function CardLedger(props) {
    return(
        <div className="row">
           <div className="col-lg-3">
               <TotalWallet/>
            </div>
        </div>
    )
}