import React from "react";

import {urlContext} from "../../../../Context";

import {
    Alert 
} from "reactstrap";

import axios from "axios";

//https://www.npmjs.com/package/react-to-pdf
//https://www.npmjs.com/package/react-html-table-to-excel

export default function Wallet(params) {

    let baseUrl=React.useContext(urlContext);
    let [data, setData] = React.useState(undefined);
    let [msgs,setMsgs]=React.useState("");
    let [color,setColor]=React.useState("danger");
    let [dalert,setAlert]=React.useState(false);

    const alertToggle=()=>{
        setAlert(!dalert);
    }

    //balance state
    const [dataBalance,setDataBalance]=React.useState(undefined);

    React.useEffect(()=>{
        function getUsers() {
            setAlert(true);
            setColor("info");
            setMsgs(" Please wait, a few minutes, the request is being processed. ");
            axios({
              url: `${baseUrl}/users`,
              method: "GET",
              headers: {
                adminToken: localStorage.getItem("admincodeotoken"),
              },
            })
              .then(({ data }) => {
                // setData(data.users.reverse());
                setColor("success");
                setAlert(true);
              })
              .catch((err) => {
                setColor("danger");
                let msg = "";
                if(err.response.data.message===undefined){
                    msg=err.message;
                }else{
                    msg=err.response.data.message;
                }
                setMsgs(msg);
              });
        }
        getUsers();
    },[]);

    //function add balance button
    const fAddBalance=React.useCallback(()=>{
        setAlert(true);
        setColor("info");
        setMsgs(" Please wait, a few minutes, the request is being processed. ");
        axios({
          url: `${baseUrl}/users`,
          method: "GET",
          headers: {
            adminToken: localStorage.getItem("admincodeotoken"),
          },
        })
          .then(({ data }) => {
            // setDataBalance(data.users.reverse());
            setColor("success");
            setAlert(true);
          })
          .catch((err) => {
            setColor("danger");
            let msg = "";
            if(err.response.data.message===undefined){
                msg=err.message;
            }else{
                msg=err.response.data.message;
            }
            setMsgs(msg);
          });
    },[]);
    //function add balance button

    //function add PubKey button
    const fPubKey=React.useCallback(()=>{
        setAlert(true);
        setColor("info");
        setMsgs(" Please wait, a few minutes, the request is being processed. ");
        axios({
          url: `${baseUrl}/users`,
          method: "GET",
          headers: {
            adminToken: localStorage.getItem("admincodeotoken"),
          },
        })
          .then(({ data }) => {
            // setDataBalance(data.users.reverse());
            setColor("success");
            setAlert(true);
          })
          .catch((err) => {
            setColor("danger");
            let msg = "";
            if(err.response.data.message===undefined){
                msg=err.message;
            }else{
                msg=err.response.data.message;
            }
            setMsgs(msg);
          });
    },[]);
    //function add PubKey button

    //function add Lock button
    const fLock=React.useCallback(()=>{
        setAlert(true);
        setColor("info");
        setMsgs(" Please wait, a few minutes, the request is being processed. ");
        axios({
          url: `${baseUrl}/users`,
          method: "GET",
          headers: {
            adminToken: localStorage.getItem("admincodeotoken"),
          },
        })
          .then(({ data }) => {
            // setDataBalance(data.users.reverse());
            setColor("success");
            setAlert(true);
          })
          .catch((err) => {
            setColor("danger");
            let msg = "";
            if(err.response.data.message===undefined){
                msg=err.message;
            }else{
                msg=err.response.data.message;
            }
            setMsgs(msg);
          });
    },[]);
    //function add Lock button

    //function add Terminate button
    const fTerminate=React.useCallback(()=>{
        setAlert(true);
        setColor("info");
        setMsgs(" Please wait, a few minutes, the request is being processed. ");
        axios({
          url: `${baseUrl}/users`,
          method: "GET",
          headers: {
            adminToken: localStorage.getItem("admincodeotoken"),
          },
        })
          .then(({ data }) => {
            // setDataBalance(data.users.reverse());
            setColor("success");
            setAlert(true);
          })
          .catch((err) => {
            setColor("danger");
            let msg = "";
            if(err.response.data.message===undefined){
                msg=err.message;
            }else{
                msg=err.response.data.message;
            }
            setMsgs(msg);
          });
    },[]);
    //function add Terminate button

    if(color==="danger"){
        return (
            <Alert
            style={{ height: "auto" }}
            color={color}
            isOpen={dalert}
            toggle={alertToggle}
          >
            {color === "danger" ? (
              <i class="mdi mdi-alert-outline alert-icon"></i>
            ) : color === "info" ? (
              <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
              </div>
            ) : null}
            {msgs}
          </Alert>
        );
    }else{
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
                                <td>{data===undefined?"BTC":data.walletType}</td>
                                <td>{data===undefined?"BTC User Address":data.walletAddress}</td>
                                <td>{data===undefined?"$0.00":data.balance}</td>
                                <td>
                                    <button style={{"cursor":"pointer"}} onClick={fAddBalance} className="btn btn-default text-success m-2">Add Balance</button>
                                    <button style={{"cursor":"pointer"}} onClick={fPubKey} className="btn btn-default text-primary m-2">Pub Key</button>
                                    <button style={{"cursor":"pointer"}} onClick={fLock} className="btn btn-default text-warning m-2">Lock</button>
                                    <button style={{"cursor":"pointer"}} onClick={fTerminate} className="btn btn-default text-danger m-2">Terminate</button>
                                </td>
                            </tr>

                            <tr>
                                <th scope="row">2</th>
                                <td>{data===undefined?"ETH":data.walletType}</td>
                                <td>{data===undefined?"ETH User Address":data.walletAddress}</td>
                                <td>{data===undefined?"$0.00":data.balance}</td>
                                <td>
                                    <button style={{"cursor":"pointer"}} onClick={fAddBalance} className="btn btn-default text-success m-2">Add Balance</button>
                                    <button style={{"cursor":"pointer"}} onClick={fPubKey} className="btn btn-default text-primary m-2">Pub Key</button>
                                    <button style={{"cursor":"pointer"}} onClick={fLock} className="btn btn-default text-warning m-2">Lock</button>
                                    <button style={{"cursor":"pointer"}} onClick={fTerminate} className="btn btn-default text-danger m-2">Terminate</button>
                                </td>
                            </tr>

                            <tr>
                                <th scope="row">3</th>
                                <td>{data===undefined?"LTC":data.walletType}</td>
                                <td>{data===undefined?"LTC User Address":data.walletAddress}</td>
                                <td>{data===undefined?"$0.00":data.balance}</td>
                                <td>
                                    <button style={{"cursor":"pointer"}} onClick={fAddBalance} className="btn btn-default text-success m-2">Add Balance</button>
                                    <button style={{"cursor":"pointer"}} onClick={fPubKey} className="btn btn-default text-primary m-2">Pub Key</button>
                                    <button style={{"cursor":"pointer"}} onClick={fLock} className="btn btn-default text-warning m-2">Lock</button>
                                    <button style={{"cursor":"pointer"}} onClick={fTerminate} className="btn btn-default text-danger m-2">Terminate</button>
                                </td>
                            </tr>

                            <tr>
                                <th scope="row">4</th>
                                <td>{data===undefined?"TRX":data.walletType}</td>
                                <td>{data===undefined?"TRX User Address":data.walletAddress}</td>
                                <td>{data===undefined?"$0.00":data.balance}</td>
                                <td>
                                    <button style={{"cursor":"pointer"}} onClick={fAddBalance} className="btn btn-default text-success m-2">Add Balance</button>
                                    <button style={{"cursor":"pointer"}} onClick={fPubKey} className="btn btn-default text-primary m-2">Pub Key</button>
                                    <button style={{"cursor":"pointer"}} onClick={fLock} className="btn btn-default text-warning m-2">Lock</button>
                                    <button style={{"cursor":"pointer"}} onClick={fTerminate} className="btn btn-default text-danger m-2">Terminate</button>
                                </td>
                            </tr>

                            <tr>
                                <th scope="row">5</th>
                                <td>{data===undefined?"Codeo":data.walletType}</td>
                                <td>{data===undefined?"Codeo User Address":data.walletAddress}</td>
                                <td>{data===undefined?"$0.00":data.balance}</td>
                                <td>
                                    <button style={{"cursor":"pointer"}} onClick={fAddBalance} className="btn btn-default text-success m-2">Add Balance</button>
                                    <button style={{"cursor":"pointer"}} onClick={fPubKey} className="btn btn-default text-primary m-2">Pub Key</button>
                                    <button style={{"cursor":"pointer"}} onClick={fLock} className="btn btn-default text-warning m-2">Lock</button>
                                    <button style={{"cursor":"pointer"}} onClick={fTerminate} className="btn btn-default text-danger m-2">Terminate</button>
                                </td>
                            </tr>

                            <tr>
                                <th scope="row">6</th>
                                <td>{data===undefined?"BNB":data.walletType}</td>
                                <td>{data===undefined?"BNB User Address":data.walletAddress}</td>
                                <td>{data===undefined?"$0.00":data.balance}</td>
                                <td>
                                    <button style={{"cursor":"pointer"}} onClick={fAddBalance} className="btn btn-default text-success m-2">Add Balance</button>
                                    <button style={{"cursor":"pointer"}} onClick={fPubKey} className="btn btn-default text-primary m-2">Pub Key</button>
                                    <button style={{"cursor":"pointer"}} onClick={fLock} className="btn btn-default text-warning m-2">Lock</button>
                                    <button style={{"cursor":"pointer"}} onClick={fTerminate} className="btn btn-default text-danger m-2">Terminate</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
    );
    }
}