import React from "react";

function Deposit() {
    
    return (
        <div className="row card text-center">

                <div className="card-body table-responsive" style={{backgroundColor: "#151933"}}>

                <table className="table table-borderless m-3">
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
                                <input type="text" className="form-control" placeholder="Keyword" />
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
                                <input type="date" className="form-control" placeholder="Date Picker" />
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
                                <input type="date" className="form-control" placeholder="Date Picker" />
                            </td>
                        </tr>
                       
                    </div>
                </td>

                <td>
                <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" style={{"background":"#1C233F","boxShadow":"none","border":"none"}} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown button
                    </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <option class="dropdown-item" href="#">Action</option>
                            <option class="dropdown-item" href="#">Another action</option>
                            <option class="dropdown-item" href="#">Something else here</option>
                        </div>
                    </div>
                    {/* <select style={{"background":"#151933","color":"whit"}} className="m-2">
                        <option>Transfer</option>
                    </select> */}
                </td>

                <td>
                   {/* <select className="m-2">
                       <option>Asset</option>
                   </select> */}
                </td>
                
                <td>
                   <button className="btn btn-primary">Filter</button>
                </td>

                <td></td>
                <td></td>
            </tr>
            </tbody>
        </table>

                    <div className="float-left m-2"><h5>BANK DEPOSIT WITHDRAW</h5></div>
                    <table className="table table-borderless border border-light">
                           
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


                    <div className="float-left m-2"><h5>CREDIT CARD AND PAYPAL DEPOSIT / WITHDRAW</h5></div>
                    <table className="table table-borderless border border-light">
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
    )
}


export default Deposit;