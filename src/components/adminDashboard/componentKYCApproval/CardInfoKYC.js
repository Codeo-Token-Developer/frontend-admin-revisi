import React,{useState,useEffect} from "react";
import axios from "axios";

function CardInfoKYC(props){

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


  },[props.baseUrl,msgs]);

  function ApprovalKYC(e){
    axios({
      url:`${props.baseUrl}/approve/${e}`,
      method:"PATCH",
      headers:{
        adminToken:localStorage.getItem("admincodeotoken")
      }
    }).then(({data})=>{
      alert(data.message);
      setLoading(true);
    }).catch(err=>{
      let msg="";
      if (err.response === undefined) {
        msg=err.message;
        alert(err.message);
      } else {
        msg=err.response.data.message;
        alert(err.response.data.message);
      }
      setMsgs(msg);
      setLoading(null);
    });
  }

  function RejectKYC(e){
    axios({
      url:`${props.baseUrl}/reject/${e}`,
      method:"PATCH",
      headers:{
        adminToken:localStorage.getItem("admincodeotoken")
      }
    }).then(({data})=>{
      alert(data.message);
      setLoading(true);
    }).catch(err=>{
      setLoading(null);
      let msg="";
      if (err.response === undefined) {
        msg=err.message;
        alert(err.message);
      } else {
        msg=err.response.data.message;
        alert(err.response.data.message);
      }
      setMsgs(msg);
    });
  }


    return (
        <div className="row">
            <div className="col-12">
            <div className="card">
                <div className="card-body order-list">
                <h4 className="header-title mt-0 mb-3">KYC Approval</h4>
                <div className="table-responsive">
                    {(loading===true) ? (
                      <DataList data={data} ApprovalKYC={ApprovalKYC} RejectKYC={RejectKYC} />
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

      <th className="border-top-0">Document</th>
      <th className="border-top-0">Approval Status</th>
      <th className="border-top-0">Locked Status</th>
    </tr>
        {/*end tr*/}
    </thead>
    <tbody>
    {
      (typeof props.data==="object")?props.data.map((item,i)=>{

          return (
            <tr>
              <td>{item.user}</td>
              <td>{item.document_type}</td>
              <td>{(item.approved_status===true)?<button className="btn btn-danger" onClick={()=>props.RejectKYC(item._id)}>Reject</button>:(item.approved_status===false)?<button className="btn btn-success" onClick={()=>props.ApprovalKYC(item._id)}>Approve</button>:<span className="badge badge-boxed badge-danger">false</span>}</td>
              <td>{(item.lock_status===true)?<button className="btn btn-danger" onClick={()=>props.RejectKYC(item._id)}>Unlock</button>:(item.lock_status===false)?<button className="btn btn-success" onClick={()=>props.ApprovalKYC(item._id)}>Locked</button>:<span className="badge badge-boxed badge-danger">false</span>}</td>
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

export default CardInfoKYC