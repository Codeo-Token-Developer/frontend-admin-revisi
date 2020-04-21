import React,{useState,useEffect} from "react";
import axios from "axios";

import {Alert,Button,Modal,ModalHeader,ModalBody,ModalFooter} from "reactstrap";

export default function CardInfoKYC(props){

let [msgs,setMsgs]=useState("");
let [data,setData]=useState(undefined);
const [loading,setLoading]=useState(false);


  useEffect(()=>{

    function getKyc(){
      axios({
        url:`${props.baseUrl}/kyc`,
        method:"GET",
        headers:{
          adminToken:localStorage.getItem("admincodeotoken")
        }
      }).then(({data})=>{
          setData(data.kycs);
          setLoading(true);
      }).catch(err=>{
        setLoading(null);
        let msg="";
        if (err.response === undefined) {
          msg=err.message;
        } else {
          msg=err.response.data.message;
        }
        setMsgs(msg);
      });
    };
    getKyc();


  });

    return (
        <div className="row">
            <div className="col-12">
            <div className="card">
                <div className="card-body order-list">
                <h4 className="header-title mt-0 mb-3">KYC Approval</h4>
                <div className="table-responsive">
                    {(loading===true) ? (
                      <DataList baseUrl={props.baseUrl} data={data} />
                    ) : (loading===false)?
                    <div class="spinner-border text-primary" role="status">
                      <span class="sr-only">Loading...</span>
                    </div>:<div>{msgs}</div>
                    }

                </div>{/*end /div*/}
                </div>{/*end card-body*/}
            </div>{/*end card*/}
            </div>{/*end col*/}
        </div>
    );
}

function DataList(props) {

  return (
  <table className="table table-hover mb-0">
    <thead className="thead-light">
    {/*
      <tr>
      <th className="border-top-0">Date</th>
      <th className="border-top-0">Name</th>
      <th className="border-top-0">Email</th>
      <th className="border-top-0">Country</th>
      <th className="border-top-0">Document</th>
      <th className="border-top-0">Status</th>
      </tr>
    */}

    <tr>
      <th className="border-top-0">User Id</th>
      <th className="border-top-0">View KYC Document</th>
      <th className="border-top-0">Approval Status</th>
      <th className="border-top-0">Locked Status</th>
    </tr>
        {/*end tr*/}
    </thead>
    <tbody>
    {
      (typeof props.data==="object")?props.data.reverse().map((item,i)=>{
          return (
            <tr>
              <td>{item.user}</td>
              <td><ViewKYC baseUrl={props.baseUrl} data={item} /></td>
              <td>{(item.approved_status===true)?<span className="badge badge-success">Approved</span>:(item.approved_status===false)?<span className="badge badge-danger">Not Approved</span>:null}</td>
              <td>{(item.lock_status===true)?<span className="badge badge-success">Locked</span>:(item.lock_status===false)?<span className="badge badge-danger">Not Locked</span>:null}</td>
            </tr>
          );
      }):[]
    }

        {/*end tr*/}
        {/*
          <tr>
          <td>17-02-2020 11:23 AM</td>
          <td>Master Thomas</td>
          <td>masterthomas@gmail.com</td>
          <td>Indonesia</td>
          <td>
              <button className="btn btn-xs btn-danger">Picture</button>
              <button className="btn btn-xs btn-warning">Document</button>
          </td>
          <td><span className="badge badge-boxed badge-danger">Unverified</span></td>
          </tr>
          */}
    </tbody>
    {/*end table*/}
    </table>
  );
}


function ViewKYC(props){

const [modal,setModal]=useState(false);
const [alert,setAlert]=useState(false);

const toggle=()=>setModal(!modal);
const alertToggle=()=>setAlert(!alert);

const [status,setStatus]=useState(false);
const [msgs,setMsgs]=useState("");



function ApprovalKYC(e){
  setMsgs("");
  axios({
    url:`${props.baseUrl}/kyc/approve/${e}`,
    method:"PATCH",
    headers:{
      adminToken:localStorage.getItem("admincodeotoken")
    }
  }).then(({data})=>{
    setStatus(true);
    setAlert(true);
    setMsgs(data.message);
  }).catch(err=>{
    let msg="";
    if (err.response === undefined) {
      msg=err.message;
    } else {
      msg=err.response.data.message;
    }
    setStatus(false);
    setAlert(true);
    setMsgs("Request Error  : "+msg);
  });
}

function RejectKYC(e){
  setMsgs("");
  axios({
    url:`${props.baseUrl}/kyc/reject/${e}`,
    method:"PATCH",
    headers:{
      adminToken:localStorage.getItem("admincodeotoken")
    }
  }).then(({data})=>{
    setStatus(true);
    setAlert(true);
    setMsgs(data.message);
  }).catch(err=>{
    let msg="";
    if (err.response === undefined) {
      msg=err.message;
    } else {
      msg=err.response.data.message;
    }
    setStatus(false);
    setAlert(true);
    setMsgs("Request Error  : "+msg);
  });
}

function LockedKYC(e){
  setMsgs("");
  axios({
    url:`${props.baseUrl}/kyc/lock/${e}`,
    method:"PATCH",
    headers:{
      adminToken:localStorage.getItem("admincodeotoken")
    }
  }).then(({data})=>{
    setStatus(true);
    setAlert(true);
    setMsgs(data.message);
  }).catch(err=>{
    let msg="";
    if (err.response === undefined) {
      msg=err.message;
    } else {
      msg=err.response.data.message;
    }
    setStatus(false);
    setAlert(true);
    setMsgs("Request Error  : "+msg);
  });
}

function UnlockKYC(e){
  setMsgs("");
  axios({
    url:`${props.baseUrl}/kyc/unlock/${e}`,
    method:"PATCH",
    headers:{
      adminToken:localStorage.getItem("admincodeotoken")
    }
  }).then(({data})=>{
    setStatus(true);
    setAlert(true);
    setMsgs(data.message);
  }).catch(err=>{
    let msg="";
    if (err.response === undefined) {
      msg=err.message;
    } else {
      msg=err.response.data.message;
    }
    setStatus(false);
    setAlert(true);
    setMsgs("Request Error  : "+msg);
  });
}

  return (
    <div>
    <Button color="success" onClick={toggle}>View KYC</Button>
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader>Information KYC Document</ModalHeader>
      <ModalBody>
      <table className="table table-responsive">
        {props.data._id}
      <tr>
        <td>File </td>
        <td>:</td>
        <td><Button onClick={()=>window.open(props.data.document_image)} color="success">Show File</Button></td>
      </tr>
      <tr>
        <td>Id Number </td>
        <td>:</td>
        <td>{props.data.id_number}</td>
      </tr>
      <tr>
        <td>Document Type </td>
        <td>:</td>
        <td>{props.data.document_type}</td>
      </tr>
      <tr>
        <td>Home Address </td>
        <td>:</td>
        <td>{props.data.home_address}</td>
      </tr>
      <tr>
        <td>Country Issued </td>
        <td>:</td>
        <td>{props.data.country_issued}</td>
      </tr>
      <tr>
        <td>ZIP Code </td>
        <td>:</td>
        <td>{props.data.zip_code}</td>
      </tr>
      <tr>
        <td>City </td>
        <td>:</td>
        <td>{props.data.city}</td>
      </tr>
      <tr>
        <td>Phone Number 1 </td>
        <td>:</td>
        <td>{props.data.phone_number1}</td>
      </tr>
      <tr>
        <td>Phone Number 2 </td>
        <td>:</td>
        <td>{props.data.phone_number2}</td>
      </tr>
      </table>
      <Alert color={(status===true)?"success":"danger"} isOpen={alert} toggle={alertToggle}>{msgs}</Alert>
      </ModalBody>
      <ModalFooter>
      {
        (props.data.approved_status===true)?<Button color="danger" onClick={()=>RejectKYC(props.data._id)}>Reject KYC</Button>:(props.data.approved_status===false)?<Button color="success" onClick={()=>ApprovalKYC(props.data._id)}>Approve KYC</Button>:null
      }
      {
        (props.data.lock_status===true)?<Button color="danger" onClick={()=>UnlockKYC(props.data._id)}>Unlock KYC</Button>:(props.data.lock_status===false)?<Button color="success" onClick={()=>LockedKYC(props.data._id)}>Lock KYC</Button>:null
      }
      </ModalFooter>
    </Modal>
    </div>
  );
}
