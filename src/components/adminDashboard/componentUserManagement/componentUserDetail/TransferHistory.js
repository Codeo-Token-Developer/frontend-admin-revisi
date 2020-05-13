import React from "react";

export default function TransferHistory() {
    
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
                        Transfer
                    </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <option class="dropdown-item" href="#">Action</option>
                            <option class="dropdown-item" href="#">Another action</option>
                            <option class="dropdown-item" href="#">Something else here</option>
                        </div>
                </div>
                </td>

                <td>
                    <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" style={{"background":"#1C233F","boxShadow":"none","border":"none"}} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Asset
                    </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <option class="dropdown-item" href="#">Action</option>
                            <option class="dropdown-item" href="#">Another action</option>
                            <option class="dropdown-item" href="#">Something else here</option>
                        </div>
                    </div>
                </td>
                
                <td>
                   <button className="btn btn-primary" style={{"background":"#1C233F","boxShadow":"none","border":"none"}}>Filter</button>
                </td>

                <td></td>
                <td></td>
            </tr>
            </tbody>
        </table>

                    <table className="table table-borderless border border-light">
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