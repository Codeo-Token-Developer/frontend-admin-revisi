import React from "react";

export default function BuyTradeHistory() {
    
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
                                <input type="text" className="form-control" placeholder="Date Picker" />
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
                                <input type="text" className="form-control" placeholder="Date Picker" />
                            </td>
                        </tr>
                       
                    </div>
                </td>

                <td>
                    <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" style={{"background":"#1C233F","boxShadow":"none","border":"none"}} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                       Market Pair
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
                       Status
                    </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <option class="dropdown-item" href="#">Action</option>
                            <option class="dropdown-item" href="#">Another action</option>
                            <option class="dropdown-item" href="#">Something else here</option>
                        </div>
                    </div>
                </td>
                
                <td>
                   <button className="btn btn-primary">Filter</button>
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