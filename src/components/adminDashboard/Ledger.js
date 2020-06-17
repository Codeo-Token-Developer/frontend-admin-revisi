import React, {useContext, useState} from 'react'
import {urlContext} from '../../Context'

// import CardLedger from './componentLedger/CardLedger'
import CardTableLedger from './componentLedger/CardTableLedger'
import { Nav, NavItem, TabContent, TabPane } from 'reactstrap'
import { useParams } from 'react-router-dom'

export default function Ledger() {
    const baseUrl = useContext(urlContext)

    let {id}=useParams();
    
    const [activeTab, setActiveTab] = useState(id);

    const toggle = tab => {
        if(activeTab !== tab) setActiveTab(tab);
    }
    
    React.useEffect(()=>{
        setActiveTab("walletCodeo");
    },[setActiveTab]);

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

            <div className="billing-nav">
                <Nav className="nav nav-pills mb-3 row" id="pills-tab" role="tablist">
                    <div className="tab-content container-fluid" id="pills-tabContent">
                        <NavItem className="col-md-12 justify-content-center text-center" style={{display: "flex"}}>
                            <div className="col-md-3 card card-eco" style={{backgroundColor: "transparent"}}>
                                <div className={activeTab === 'walletCodeo'?'card-body active':'card-body'} style={{backgroundColor: "#1c233f", borderRadius: "5px", cursor: "pointer"}} onClick={()=>toggle('walletCodeo')} id="pills-paypal-tab" data-toggle="pill">
                                    <h4 className="title-text mt-0">Total Wallet Codeo</h4>
                                    <div className="d-flex justify-content-between">
                                        <h3 style={{display: "flex", alignItems: "center", color: "#828db1"}}>342.351</h3>
                                        <div style={{backgroundColor: "transparent"}} className="card-eco-icon align-self-center" >
                                            <img alt="Thumbnail" style={{width: "50px"}} src="/assets/images/icon_coin/codeo_kecil.png"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 card card-eco" style={{backgroundColor: "transparent"}}>
                                <div className={activeTab === 'walletEthereum'?'card-body active':'card-body'} style={{backgroundColor: "#1c233f", borderRadius: "5px", cursor: "pointer"}} onClick={()=>toggle('walletEthereum')} id="pills-credit-card-tab" data-toggle="pill">
                                    <h4 className="title-text mt-0">Total Wallet Ethereum</h4>
                                    <div className="d-flex justify-content-between">
                                        <h3 style={{display: "flex", alignItems: "center", color: "#828db1"}}>342.351</h3>
                                        <div style={{backgroundColor: "transparent"}} className="card-eco-icon align-self-center" >
                                            <img alt="Thumbnail" style={{width: "50px"}} src="/assets/images/icon_coin/eth_kecil.png"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 card card-eco" style={{backgroundColor: "transparent"}}>
                                <div className={activeTab === 'walletBitcoin'?'card-body active':'card-body'} style={{backgroundColor: "#1c233f", borderRadius: "5px", cursor: "pointer"}} onClick={()=>toggle('walletBitcoin')} id="pills-bitcoin-tab" data-toggle="pill">
                                    <h4 className="title-text mt-0">Total Wallet Bitcoin</h4>
                                    <div className="d-flex justify-content-between">
                                        <h3 style={{display: "flex", alignItems: "center", color: "#828db1"}}>342.351</h3>
                                        <div style={{backgroundColor: "transparent"}} className="card-eco-icon align-self-center" >
                                            <img alt="Thumbnail" style={{width: "50px"}} src="/assets/images/icon_coin/btc_kecil.png"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 card card-eco" style={{backgroundColor: "transparent"}}>
                                <div className={activeTab === 'walletBinanceCoin'?'card-body active':'card-body'} style={{backgroundColor: "#1c233f", borderRadius: "5px", cursor: "pointer"}} onClick={()=>toggle('walletBinanceCoin')} id="pills-bitcoin-tab" data-toggle="pill">
                                    <h4 className="title-text mt-0">Total Wallet Binance Coin</h4>
                                    <div className="d-flex justify-content-between">
                                        <h3 style={{display: "flex", alignItems: "center", color: "#828db1"}}>342.351</h3>
                                        <div style={{backgroundColor: "transparent"}} className="card-eco-icon align-self-center" >
                                            <img alt="Thumbnail" style={{width: "50px"}} src="/assets/images/icon_coin/bnb_kecil.png"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </NavItem>
                    </div>
                </Nav>

                <div className="tab-content container-fluid" id="pills-tabContent">
                    {/* <CardTableLedger baseUrl={baseUrl}/> */}
                    <TabContent activeTab={activeTab}>
                        <TabPane tabId="walletCodeo">
                            <CardTableLedger baseUrl={baseUrl}/>
                        </TabPane>
                        <TabPane tabId="walletEthereum">
                            <h1>TEST1</h1>
                        </TabPane>
                        <TabPane tabId="walletBitcoin">
                            <h1>TEST2</h1>
                        </TabPane>
                    </TabContent>
                </div>
            </div>

            {/* <CardLedger baseUrl={baseUrl}/> */}
            

            {/* <CardTableLedger baseUrl={baseUrl}/> */}
        </>
    )
}
