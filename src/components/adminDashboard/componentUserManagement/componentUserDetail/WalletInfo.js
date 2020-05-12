import React from "react";

export default function Wallet(params) {
    
    return (
        <div className="row card text-center">
               
                <div className="card-body table-responsive" style={{backgroundColor: "#151933"}}>
                    <table className="table table-borderless border border-light">
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
                                    <span className="text-primary m-2">Pub Key</span>
                                    <span className="text-warning m-2">Lock</span>
                                    <span className="text-danger m-2">Terminate</span>
                                </td>
                            </tr>

                            <tr>
                                <th scope="row">2</th>
                                <td>ETH</td>
                                <td>ETH User Address</td>
                                <td>0.0000</td>
                                <td>
                                    <span className="text-success m-2">Add Balance</span>
                                    <span className="text-primary m-2">Pub Key</span>
                                    <span className="text-warning m-2">Lock</span>
                                    <span className="text-danger m-2">Terminate</span>
                                </td>
                            </tr>

                            <tr>
                                <th scope="row">3</th>
                                <td>LTC</td>
                                <td>LTC User Address</td>
                                <td>0.0000</td>
                                <td>
                                    <span className="text-success m-2">Add Balance</span>
                                    <span className="text-primary m-2">Pub Key</span>
                                    <span className="text-warning m-2">Lock</span>
                                    <span className="text-danger m-2">Terminate</span>
                                </td>
                            </tr>

                            <tr>
                                <th scope="row">4</th>
                                <td>TRX</td>
                                <td>TRX User Address</td>
                                <td>0.0000</td>
                                <td>
                                    <span className="text-success m-2">Add Balance</span>
                                    <span className="text-primary m-2">Pub Key</span>
                                    <span className="text-warning m-2">Lock</span>
                                    <span className="text-danger m-2">Terminate</span>
                                </td>
                            </tr>

                            <tr>
                                <th scope="row">5</th>
                                <td>Codeo</td>
                                <td>BTC User Address</td>
                                <td>0.0000</td>
                                <td>
                                    <span className="text-success m-2">Add Balance</span>
                                    <span className="text-primary m-2">Pub Key</span>
                                    <span className="text-warning m-2">Lock</span>
                                    <span className="text-danger m-2">Terminate</span>
                                </td>
                            </tr>

                            <tr>
                                <th scope="row">6</th>
                                <td>BNB</td>
                                <td>BNB User Address</td>
                                <td>0.0000</td>
                                <td>
                                    <span className="text-success m-2">Add Balance</span>
                                    <span className="text-primary m-2">Pub Key</span>
                                    <span className="text-warning m-2">Lock</span>
                                    <span className="text-danger m-2">Terminate</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
    );
}