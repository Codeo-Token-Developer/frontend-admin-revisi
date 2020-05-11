import React from "react";

import {
    Nav,NavItem,NavLink,
    TabContent,TabPane
} from "reactstrap";

function UserDetail() {
    
    const [activeTabs,setActiveTabs]=React.useState('2');
    const toggle=()=>{
        setActiveTabs(!activeTabs);
    };

    return (
        <>
    <Nav>
        <NavItem>
            <NavLink onClick={toggle}>UserDetail</NavLink>
            <NavLink>Wallet</NavLink>
        </NavItem>
    </Nav>

    <TabContent>
        <TabPane tabId="1">

        </TabPane>
        <TabPane tabId="2">
            <Wallet />
        </TabPane>
        <TabPane tabId="3">
            <BuyTradeHistory />
        </TabPane>
        <TabPane tabId="4">
            <TransferHistory />
        </TabPane>
        <TabPane tabId="5">
            <DepositWithdraw />
        </TabPane>
    </TabContent>
        </>
    );
}

function Wallet() {
    
    return (
        <div className="row card text-center">
               
                <div className="card-body table-responsive" style={{backgroundColor: "#151933"}}>
                    <table className="table table-borderless">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Wallet Type</th>
                                <th>Wallet Address</th>
                                <th>Balance</th>
                                <th>Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>BTC</td>
                                <td>BTC User Address</td>
                                <td>0.0000</td>
                                <td>
                                    <span className="text-success m-2">Add Balance</span>
                                    <span className="text-success m-2">Pub Key</span>
                                    <span className="text-success m-2">Lock</span>
                                    <span className="text-success m-2">Terminate</span>
                                </td>
                            </tr>

                            <tr>
                                <th scope="row">2</th>
                                <td>ETH</td>
                                <td>ETH User Address</td>
                                <td>0.0000</td>
                                <td>
                                    <span className="text-success m-2">Add Balance</span>
                                    <span className="text-success m-2">Pub Key</span>
                                    <span className="text-success m-2">Lock</span>
                                    <span className="text-success m-2">Terminate</span>
                                </td>
                            </tr>

                            <tr>
                                <th scope="row">3</th>
                                <td>LTC</td>
                                <td>LTC User Address</td>
                                <td>0.0000</td>
                                <td>
                                    <span className="text-success m-2">Add Balance</span>
                                    <span className="text-success m-2">Pub Key</span>
                                    <span className="text-success m-2">Lock</span>
                                    <span className="text-success m-2">Terminate</span>
                                </td>
                            </tr>

                            <tr>
                                <th scope="row">4</th>
                                <td>TRX</td>
                                <td>TRX User Address</td>
                                <td>0.0000</td>
                                <td>
                                    <span className="text-success m-2">Add Balance</span>
                                    <span className="text-success m-2">Pub Key</span>
                                    <span className="text-success m-2">Lock</span>
                                    <span className="text-success m-2">Terminate</span>
                                </td>
                            </tr>

                            <tr>
                                <th scope="row">5</th>
                                <td>Codeo</td>
                                <td>BTC User Address</td>
                                <td>0.0000</td>
                                <td>
                                    <span className="text-success m-2">Add Balance</span>
                                    <span className="text-success m-2">Pub Key</span>
                                    <span className="text-success m-2">Lock</span>
                                    <span className="text-success m-2">Terminate</span>
                                </td>
                            </tr>

                            <tr>
                                <th scope="row">6</th>
                                <td>BNB</td>
                                <td>BNB User Address</td>
                                <td>0.0000</td>
                                <td>
                                    <span className="text-success m-2">Add Balance</span>
                                    <span className="text-success m-2">Pub Key</span>
                                    <span className="text-success m-2">Lock</span>
                                    <span className="text-success m-2">Terminate</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
    );
}

function BuyTradeHistory() {
    
    return (
        <>
        <div className="row card text-center">

                <div className="card-body table-responsive" style={{backgroundColor: "#151933"}}>
                    
                <table className="table table-borderless">
            <tbody>
            <tr>
                <td></td>
                <td></td>
                <td>
                    <div className="input-group">
                        <tr>
                            <td>
                                Search
                            </td>
                            <td>
                                <input type="text" className="w-100" placeholder="Keyword" />
                            </td>
                        </tr>
                       
                    </div>
                </td>

                <td>
                    <div className="input-group">
                        <tr>
                            <td>
                                From
                            </td>
                            <td>
                                <input type="text" className="w-100" placeholder="Date Picker" />
                            </td>
                        </tr>
                       
                    </div>
                </td>

                <td>
                    <div className="input-group">
                        <tr>
                            <td>
                                To 
                            </td>
                            <td>
                                <input type="text" className="w-100" placeholder="Date Picker" />
                            </td>
                        </tr>
                       
                    </div>
                </td>

                <td>
                   <select className="m-2">
                       <option>Market Pair</option>
                   </select>
                </td>

                <td>
                   <select className="m-2">
                       <option>Status</option>
                   </select>
                </td>
                
                <td>
                   <button className="btn btn-primary">Filter</button>
                </td>

                <td></td>
                <td></td>
            </tr>
            </tbody>
        </table>

                    <table className="table table-borderless">
                        <thead>
                            <tr>
                                <th></th>
                                <th>TX Id</th>
                                <th>Created At</th>
                                <th>Username</th>
                                <th>Pair</th>
                                <th>Price</th>
                                <th>Amount</th>
                                <th>Pending</th>
                                <th>Total</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>1</th>
                                <th>258900489</th>
                                <th>24/09/202021:12:30</th>
                                <th>DIANJAYA </th>
                                <th>BTC/USD</th>
                                <th>10000</th>
                                <th>0.225</th>
                                <th>0</th>
                                <th>2000</th>
                                <th>Success</th>
                            </tr>

                            <tr>
                                <th>2</th>
                                <th>258900489</th>
                                <th>24/09/202021:12:30</th>
                                <th>DIANJAYA </th>
                                <th>BTC/USD</th>
                                <th>10000</th>
                                <th>0.225</th>
                                <th>0</th>
                                <th>2000</th>
                                <th>Success</th>
                            </tr>
                        </tbody>

                        <tfoot>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>Total</td>
                                <td>0.0025</td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>

            </>
    );
}

function TransferHistory() {
    
    return (
        <>
        <div className="row card text-center">

                <div className="card-body table-responsive" style={{backgroundColor: "#151933"}}>
                    
                <table className="table table-borderless">
            <tbody>
            <tr>
                <td></td>
                <td></td>
                <td>
                    <div className="input-group">
                        <tr>
                            <td>
                                Search
                            </td>
                            <td>
                                <input type="text" className="w-100" placeholder="Keyword" />
                            </td>
                        </tr>
                       
                    </div>
                </td>

                <td>
                    <div className="input-group">
                        <tr>
                            <td>
                                From
                            </td>
                            <td>
                                <input type="text" className="w-100" placeholder="Date Picker" />
                            </td>
                        </tr>
                       
                    </div>
                </td>

                <td>
                    <div className="input-group">
                        <tr>
                            <td>
                                To 
                            </td>
                            <td>
                                <input type="text" className="w-100" placeholder="Date Picker" />
                            </td>
                        </tr>
                       
                    </div>
                </td>

                <td>
                   <select className="m-2">
                       <option>Transfer</option>
                   </select>
                </td>

                <td>
                   <select className="m-2">
                       <option>Asset</option>
                   </select>
                </td>
                
                <td>
                   <button className="btn btn-primary">Filter</button>
                </td>

                <td></td>
                <td></td>
            </tr>
            </tbody>
        </table>

                    <table className="table table-borderless">
                        <thead>
                            <tr>
                                <th></th>
                                <th>TX Id</th>
                                <th>Time</th>
                                <th>Type</th>
                                <th>Coin</th>
                                <th>Amount</th>
                                <th>Receiver /send</th>
                                <th>Status</th>
                                <th>TX Hash</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th></th>
                                <th>25890048</th>
                                <th>24/09/202021:12:30</th>
                                <th>TRANSFER COIN</th>
                                <th>BTC</th>
                                <th>1.07</th>
                                <th>35Fd4afdsXCh4787EDFJcrl4jg4m5srt66</th>
                                <th>Success</th>
                                <th>https://explorer.blockchain/4353459034u590345903490</th>
                            </tr>

                            <tr>
                                <th></th>
                                <th>25353057</th>
                                <th>24/09/202021:12:30</th>
                                <th>RECEIVE COIN</th>
                                <th>ETH</th>
                                <th>2</th>
                                <th>35Fd6hgfdf65h4787EDFJcrl4jg4m76562</th>
                                <th>Success</th>
                                <th>https://explorer.blockchain/4353459034u590345903490</th>
                            </tr>
                        </tbody>

                        
                    </table>
                </div>
            </div>

            </>
    );
}


function DepositWithdraw() {
    
    return (
        <>
        <div className="row card text-center">

                <div className="card-body table-responsive" style={{backgroundColor: "#151933"}}>

                <table className="table table-borderless">
            <tbody>
            <tr>
                <td></td>
                <td></td>
                <td>
                    <div className="input-group">
                        <tr>
                            <td>
                                Search
                            </td>
                            <td>
                                <input type="text" className="w-100" placeholder="Keyword" />
                            </td>
                        </tr>
                       
                    </div>
                </td>

                <td>
                    <div className="input-group">
                        <tr>
                            <td>
                                From
                            </td>
                            <td>
                                <input type="text" className="w-100" placeholder="Date Picker" />
                            </td>
                        </tr>
                       
                    </div>
                </td>

                <td>
                    <div className="input-group">
                        <tr>
                            <td>
                                To 
                            </td>
                            <td>
                                <input type="text" className="w-100" placeholder="Date Picker" />
                            </td>
                        </tr>
                       
                    </div>
                </td>

                <td>
                   <select className="m-2">
                       <option>Transfer</option>
                   </select>
                </td>

                <td>
                   <select className="m-2">
                       <option>Asset</option>
                   </select>
                </td>
                
                <td>
                   <button className="btn btn-primary">Filter</button>
                </td>

                <td></td>
                <td></td>
            </tr>
            </tbody>
        </table>


                    <div><h5>BANK DEPOSIT WITHDRAW</h5></div>
                    <table className="table table-borderless">
                           
                        <thead>
                            
                            <tr>
                                <th></th>
                                <th>TX Id</th>
                                <th>Time</th>
                                <th>Type</th>
                                <th>BANK NAME</th>
                                <th>Amount</th>
                                <th>BANK Account</th>
                                <th>Transfer Process</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th></th>
                                <th>25890048</th>
                                <th>24/09/202021:12:30</th>
                                <th>DEPOSIT</th>
                                <th>BANK BCA</th>
                                <th>1.07</th>
                                <th>Bank BCA acc No.2481717266 acc name : andriwijaya</th>
                                <th>28/11/202004:24:11</th>
                                <th>Success</th>
                            </tr>

                            <tr>
                                <th></th>
                                <th>25890048</th>
                                <th>24/09/202021:12:30</th>
                                <th>WITHDRAW</th>
                                <th>BANK BCA</th>
                                <th>2.07</th>
                                <th>Bank BCA acc No.2481717266 acc name : andriwijaya</th>
                                <th>28/11/202004:24:11</th>
                                <th>Success</th>
                            </tr>
                        </tbody>

                        
                    </table>


                    <div><h5>CREDIT CARD AND PAYPAL DEPOSIT / WITHDRAW</h5></div>
                    <table className="table table-borderless">
                        <thead>
                            <tr>
                                <th></th>
                                <th>TX Id</th>
                                <th>Time</th>
                                <th>Type</th>
                                <th>Method</th>
                                <th>Amount $</th>
                                <th>CARD NUMBER/EMAIL </th>
                                <th>Transfer Process</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th></th>
                                <th>25890048</th>
                                <th>24/09/202021:12:30</th>
                                <th>TRANSFER COIN</th>
                                <th>BTC</th>
                                <th>1.07</th>
                                <th>35Fd4afdsXCh4787EDFJcrl4jg4m5srt66</th>
                                <th>Success</th>
                                <th>Success</th>
                            </tr>

                            <tr>
                                <th></th>
                                <th>25353057</th>
                                <th>24/09/202021:12:30</th>
                                <th>RECEIVE COIN</th>
                                <th>ETH</th>
                                <th>2</th>
                                <th>35Fd6hgfdf65h4787EDFJcrl4jg4m76562</th>
                                <th>Success</th>
                                <th>Success</th>
                            </tr>
                        </tbody>

                        
                    </table>
                </div>
            </div>

            </>
    );
}

export default UserDetail;