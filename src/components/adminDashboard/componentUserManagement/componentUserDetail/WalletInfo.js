import React from "react";

import {urlContext} from "../../../../Context";

import {
    Alert,Modal,ModalBody,ModalHeader,InputGroup,Input,InputGroupAddon
} from "reactstrap";

import axios from "axios";

import {useParams} from "react-router-dom";

//https://www.npmjs.com/package/react-to-pdf
//https://www.npmjs.com/package/react-html-table-to-excel

export default function Wallet(params) {

    let baseUrl=React.useContext(urlContext);
    // let [data, setData] = React.useState(undefined);
    let [data] = React.useState(undefined);
    let [amountBalance,setAmountBalance]=React.useState("");
    let [coinType,setCoinType]=React.useState("");

    let [msgs,setMsgs]=React.useState("");
    let [color,setColor]=React.useState("danger");
    let [dalert,setAlert]=React.useState(false);

    let [mdModal,setmdModal]=React.useState(false);

    const numberAmount=(e)=>{
      setAmountBalance(e.target.validity.valid?e.target.value:amountBalance);
    };

    const alertToggle=()=>{
        setAlert(!dalert);
    }

    let {id}=useParams();

    const togglemdModal=(e)=>{
      setmdModal(!mdModal);
      setCoinType(e);
    }

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
                //setData(data.users.reverse());
                setColor("success");
                setAlert(true);
              })
              .catch((err) => {
                setColor("danger");
                let msg = "";
                if(err.response===undefined){
                    msg=err.message;
                }else{
                    msg=err.response.data.message;
                }
                setMsgs(msg);
              });
        }
        getUsers();
    },[baseUrl]);

    //function add balance button
    const fAddBalance=React.useCallback((e)=>{
        e.preventDefault();
        setAlert(true);
        setColor("info");
        setMsgs(" Please wait, a few minutes, the request is being processed. ");
        axios({
          url: `${baseUrl}/userManagement/walletBalance/${id}`,
          method: "PATCH",
          headers: {
            adminToken: localStorage.getItem("admincodeotoken"),
          },
          data:{
            coin:coinType,
            amountBalance:amountBalance,
          },
        })
          .then(({ data }) => {
            alert(data.message);
            // setDataBalance(data.users.reverse());
            setColor("success");
            setAlert(true);
          })
          .catch((err) => {
            setColor("danger");
            let msg = "";
            if(err.response===undefined){
                msg=err.message;
            }else{
                msg=err.response.data.message;
            }
            setMsgs(msg);
          });
    },[baseUrl,coinType,amountBalance,id]);
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
            if(err.response===undefined){
                msg=err.message;
            }else{
                msg=err.response.data.message;
            }
            setMsgs(msg);
          });
    },[baseUrl]);
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
            if(err.response===undefined){
                msg=err.message;
            }else{
                msg=err.response.data.message;
            }
            setMsgs(msg);
          });
    },[baseUrl]);
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
            if(err.response===undefined){
                msg=err.message;
            }else{
                msg=err.response.data.message;
            }
            setMsgs(msg);
          });
    },[baseUrl]);
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
      <>
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
                                <td>{data===undefined?"BTC Address is null":data.walletAddress}</td>
                                <td>{data===undefined?"0.00 BTC":data.balance}</td>
                                <td>
                                    <button style={{"cursor":"pointer"}} value="BTC" onClick={()=>togglemdModal("BTC")} className="btn btn-default text-success m-2">Add Balance</button>
                                    <button style={{"cursor":"pointer"}} onClick={fPubKey} className="btn btn-default text-primary m-2">Pub Key</button>
                                    <button style={{"cursor":"pointer"}} onClick={fLock} className="btn btn-default text-warning m-2">Lock</button>
                                    <button style={{"cursor":"pointer"}} onClick={fTerminate} className="btn btn-default text-danger m-2">Terminate</button>
                                </td>
                            </tr>

                            <tr>
                                <th scope="row">2</th>
                                <td>{data===undefined?"ETH":data.walletType}</td>
                                <td>{data===undefined?"ETH Address is null":data.walletAddress}</td>
                                <td>{data===undefined?"0.00 ETH":data.balance}</td>
                                <td>
                                    <button style={{"cursor":"pointer"}} onClick={()=>togglemdModal("ETH")} className="btn btn-default text-success m-2">Add Balance</button>
                                    <button style={{"cursor":"pointer"}} onClick={fPubKey} className="btn btn-default text-primary m-2">Pub Key</button>
                                    <button style={{"cursor":"pointer"}} onClick={fLock} className="btn btn-default text-warning m-2">Lock</button>
                                    <button style={{"cursor":"pointer"}} onClick={fTerminate} className="btn btn-default text-danger m-2">Terminate</button>
                                </td>
                            </tr>

                            <tr>
                                <th scope="row">3</th>
                                <td>{data===undefined?"LTC":data.walletType}</td>
                                <td>{data===undefined?"LTC Address is null":data.walletAddress}</td>
                                <td>{data===undefined?"0.00 LTC":data.balance}</td>
                                <td>
                                    <button style={{"cursor":"pointer"}} onClick={()=>togglemdModal("LTC")} className="btn btn-default text-success m-2">Add Balance</button>
                                    <button style={{"cursor":"pointer"}} onClick={fPubKey} className="btn btn-default text-primary m-2">Pub Key</button>
                                    <button style={{"cursor":"pointer"}} onClick={fLock} className="btn btn-default text-warning m-2">Lock</button>
                                    <button style={{"cursor":"pointer"}} onClick={fTerminate} className="btn btn-default text-danger m-2">Terminate</button>
                                </td>
                            </tr>

                            <tr>
                                <th scope="row">4</th>
                                <td>{data===undefined?"TRX":data.walletType}</td>
                                <td>{data===undefined?"TRX Address is null":data.walletAddress}</td>
                                <td>{data===undefined?"0.00 TRX":data.balance}</td>
                                <td>
                                    <button style={{"cursor":"pointer"}} onClick={()=>togglemdModal("TRX")} className="btn btn-default text-success m-2">Add Balance</button>
                                    <button style={{"cursor":"pointer"}} onClick={fPubKey} className="btn btn-default text-primary m-2">Pub Key</button>
                                    <button style={{"cursor":"pointer"}} onClick={fLock} className="btn btn-default text-warning m-2">Lock</button>
                                    <button style={{"cursor":"pointer"}} onClick={fTerminate} className="btn btn-default text-danger m-2">Terminate</button>
                                </td>
                            </tr>

                            <tr>
                                <th scope="row">5</th>
                                <td>{data===undefined?"CODEO":data.walletType}</td>
                                <td>{data===undefined?"CODEO Address is null":data.walletAddress}</td>
                                <td>{data===undefined?"0.00 CODEO":data.balance}</td>
                                <td>
                                    <button style={{"cursor":"pointer"}} onClick={()=>togglemdModal("CODEO")} className="btn btn-default text-success m-2">Add Balance</button>
                                    <button style={{"cursor":"pointer"}} onClick={fPubKey} className="btn btn-default text-primary m-2">Pub Key</button>
                                    <button style={{"cursor":"pointer"}} onClick={fLock} className="btn btn-default text-warning m-2">Lock</button>
                                    <button style={{"cursor":"pointer"}} onClick={fTerminate} className="btn btn-default text-danger m-2">Terminate</button>
                                </td>
                            </tr>

                            <tr>
                                <th scope="row">6</th>
                                <td>{data===undefined?"BNB":data.walletType}</td>
                                <td>{data===undefined?"BNB Address is null":data.walletAddress}</td>
                                <td>{data===undefined?"0.00 BNB":data.balance}</td>
                                <td>
                                    <button style={{"cursor":"pointer"}} onClick={()=>togglemdModal("BNB")} className="btn btn-default text-success m-2">Add Balance</button>
                                    <button style={{"cursor":"pointer"}} onClick={fPubKey} className="btn btn-default text-primary m-2">Pub Key</button>
                                    <button style={{"cursor":"pointer"}} onClick={fLock} className="btn btn-default text-warning m-2">Lock</button>
                                    <button style={{"cursor":"pointer"}} onClick={fTerminate} className="btn btn-default text-danger m-2">Terminate</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <ModalBalance fAddBalance={fAddBalance} coinType={coinType} numberAmount={numberAmount} amountBalance={amountBalance} mdModal={mdModal} togglemdModal={togglemdModal} />
            </>
    );
    }
}

function ModalBalance(props){

  return (
    <>
    <Modal isOpen={props.mdModal} toggle={()=>props.togglemdModal(props.coinType)}>
      <ModalHeader className="fa fa-money" toggle={()=>props.togglemdModal(props.coinType)}>
          Add Balance
      </ModalHeader>
      <ModalBody>
        <form onSubmit={props.fAddBalance}>
          <InputGroup>
              <InputGroupAddon addonType="append">
                <i className="fa fa-dollar-sign form-control text-center" />
              </InputGroupAddon>
              <input type="text" className="form-control" value={props.amountBalance} placeholder="Amount" pattern="([0-9]|\.)*" onInput={props.numberAmount} />
          </InputGroup>

          <Input type="submit" value="Add" />
        </form>
      </ModalBody>
      
    </Modal>
    </>
  );
}
