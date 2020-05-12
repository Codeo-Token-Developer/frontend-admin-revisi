import React, { useState, useEffect } from "react";
import axios from "axios";

import {
  Alert,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";

import FileView from "react-file-viewer";

const $ = require("jquery");
$.Datatable = require("datatables.net-bs");

export function CardInfoKYC(props) {
  let [msgs, setMsgs] = useState("");
  let [data, setData] = useState(undefined);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    function getKyc() {
      axios({
        url: `${props.baseUrl}/kyc`,
        method: "GET",
        headers: {
          adminToken: localStorage.getItem("admincodeotoken"),
        },
      })
        .then(({ data }) => {
          setData(data.kycs);
          setLoading(true);
        })
        .catch((err) => {
          setLoading(null);
          let msg = "";
          if (err.response === undefined) {
            msg = err.message;
          } else {
            msg = err.response.data.message;
          }
          setMsgs(msg);
        });

      if (!$.fn.dataTable.isDataTable("#datatable")) {
        $("#datatable").DataTable({
          fnDrawCallback: function () {
            $("#datatable_wrapper").removeClass("form-inline");
            $(".paginate_button a").addClass("page-link");
            $(".paginate_button").addClass("page-item");
          },
        });
      }
    }
    getKyc();
  });

  return (
    <div className="row">
      <div className="col-12">
        <div className="card">
          <div className="card-body order-list">
            <h4 className="header-title mt-0 mb-3">KYC Approval</h4>
            <div className="table-responsive">
              {loading === true ? (
                <DataList baseUrl={props.baseUrl} data={data} />
              ) : loading === false ? (
                <div class="spinner-border text-primary" role="status">
                  <span class="sr-only">Loading...</span>
                </div>
              ) : (
                <div>{msgs}</div>
              )}
            </div>
            {/*end /div*/}
          </div>
          {/*end card-body*/}
        </div>
        {/*end card*/}
      </div>
      {/*end col*/}
    </div>
  );
}

export function DataList(props) {
  return (
    <>
      <table id="datatable" className="table table-hover mb-0">
        <thead className="thead-light">
          <tr>
            <th className="border-top-0">User Id</th>
            <th className="border-top-0">Approval Status</th>
            <th className="border-top-0">Locked Status</th>
            <th className="border-top-0">KYC Document</th>
          </tr>
          {/*end tr*/}
        </thead>
        <tbody>
          {typeof props.data === "object"
            ? props.data.reverse().map((item, i) => {
                return (
                  <tr>
                    <td>{item.user}</td>
                    <td>
                      {item.approved_status === true ? (
                        <span className="badge badge-boxed badge-soft-success">Approved</span>
                      ) : item.approved_status === false ? (
                        <span className="badge badge-boxed badge-soft-danger">Not Approved</span>
                      ) : null}
                    </td>
                    <td>
                      {item.lock_status === true ? (
                        <span className="badge badge-boxed badge-soft-success">Locked</span>
                      ) : item.lock_status === false ? (
                        <span className="badge badge-boxed badge-soft-danger">Not Locked</span>
                      ) : null}
                    </td>
                    <td>
                      <ViewKYC baseUrl={props.baseUrl} data={item} />
                    </td>
                  </tr>
                );
              })
            : []}

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
    </>
  );
}


export function ViewKYC(props) {
  const [modal, setModal] = useState(false);
  const [dalert, setdalert] = useState(false);
  let fileSupport={
    "image/jpeg":"jpeg",
    "image/png":"png",
    "application/pdf":"pdf",
    "application/msword":"doc",
    "application/msword":"dot",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document":"docx",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.template":"dotx",
  };

  const toggle = () =>{
    cekType();
    setModal(!modal);
  };
  const dalertToggle = () => setdalert(!dalert);

  const [msgs, setMsgs] = useState("");
  const [color, setColor] = useState("danger");

  const [getDataFirebase,setDataFirebase]=useState("");

  const cekType=React.useCallback(()=>{
    //https://firebasestorage.googleapis.com/v0/b/codeo-72d1c.appspot.com/o/documents%2FDashboard_admin.PNG?
    //alt=media&token=7cc7cd2b-8372-4ba8-b6fc-1bd2953270d5
    let url=props.data.document_image;
    if(url.includes("https://")){
      let urlApi=url.split("?alt=media&token")[0];
      axios({
        url:urlApi,
        method:"GET"
      }).then(({data})=>{
        if(Object.keys(fileSupport).includes(data.contentType)){
          setDataFirebase({
            type:fileSupport[data.contentType],
            updateAt:data.update
          });
        }else{
          setDataFirebase({
            type:"Unknown MimeType Files",
            updateAt:data.update
          });
        }
      }).catch(err=>{
        let msg="";
        if (err.response === undefined) {
          msg = err.message;
        } else {
          msg = err.response.data.message;
        }
        setdalert(true);
        setColor("danger");
        setMsgs("File Error  : " + msg);
      });
    }

  },[props.data.document_image]);

  function ApprovalKYC(e) {
    setdalert(true);
    setColor("info");
    setMsgs(" Please wait, a few minutes, the request is being processed. ");
    axios({
      url: `${props.baseUrl}/kyc/approve/${e.idKyc}/${e.userId}`,
      method: "PATCH",
      headers: {
        adminToken: localStorage.getItem("admincodeotoken"),
      },
    })
      .then(({ data }) => {
        setdalert(true);
        setColor("success");
        setMsgs(data.message);
      })
      .catch((err) => {
        let msg = "";
        if (err.response.data.message === undefined) {
          msg = err.message;
        } else {
          msg = err.response.data.message;
        }
        setColor("danger");
        setdalert(true);
        setMsgs("Request Error  : " + msg);
      });
  }

  function RejectKYC(e) {
    setdalert(true);
    setColor("info");
    setMsgs(" Please wait, a few minutes, the request is being processed. ");
    axios({
      url: `${props.baseUrl}/kyc/reject/${e.idKyc}/${e.userId}`,
      method: "PATCH",
      headers: {
        adminToken: localStorage.getItem("admincodeotoken"),
      },
    })
      .then(({ data }) => {
        setdalert(true);
        setColor("success");
        setMsgs(data.message);
      })
      .catch((err) => {
        let msg = "";
        if (err.response.data.message === undefined) {
          msg = err.message;
        } else {
          msg = err.response.data.message;
        }
        setdalert(true);
        setColor("danger");
        setMsgs("Request Error  : " + msg);
      });
  }

  function LockedKYC(e) {
    setdalert(true);
    setColor("info");
    setMsgs(" Please wait, a few minutes, the request is being processed. ");
    axios({
      url: `${props.baseUrl}/kyc/lock/${e}`,
      method: "PATCH",
      headers: {
        adminToken: localStorage.getItem("admincodeotoken"),
      },
    })
      .then(({ data }) => {
        setdalert(true);
        setColor("success");
        setMsgs(data.message);
      })
      .catch((err) => {
        let msg = "";
        if (err.response === undefined) {
          msg = err.message;
        } else {
          msg = err.response.data.message;
        }
        setdalert(true);
        setColor("danger");
        setMsgs("Request Error  : " + msg);
      });
  }

  function UnlockKYC(e) {
    setdalert(true);
    setColor("info");
    setMsgs(" Please wait, a few minutes, the request is being processed. ");
    axios({
      url: `${props.baseUrl}/kyc/unlock/${e}`,
      method: "PATCH",
      headers: {
        adminToken: localStorage.getItem("admincodeotoken"),
      },
    })
      .then(({ data }) => {
        setdalert(true);
        setColor("success");
        setMsgs(data.message);
      })
      .catch((err) => {
        let msg = "";
        if (err.response === undefined) {
          msg = err.message;
        } else {
          msg = err.response.data.message;
        }
        setdalert(true);
        setColor("danger");
        setMsgs("Request Error  : " + msg);
      });
  }

  return (
    <div>
      <Button color="primary" size="lg" onClick={toggle}>
        <i className="fa fa-eye mr-1"></i> View Detail
      </Button>
      <Modal isOpen={modal}>
        <ModalHeader toggle={toggle}>
          Information KYC Document{" "}
          {props.data.review === undefined || props.data.review === null ? (
            <span className="badge badge-warning">Unknown Review</span>
          ) : props.data.review === true ? (
            <span className="badge badge-success">Review</span>
          ) : props.data.review === false ? (
            <span className="badge badge-danger">UnReview</span>
          ) : (
            <span className="badge badge-warning">Unknown Review</span>
          )}
        </ModalHeader>
        <ModalBody>
          <table className="table table-responsive">
            <tr>
            <td>
              {/*
                https://file-examples.com/wp-content/uploads/2017/02/file-sample_100kB.doc
                http://www.cplusplus.com/files/tutorial.pdf
                props.data.document_image
              */}
                {
                  ["jpg","png","pdf"].includes(getDataFirebase.type)?null:null
                }
              </td>
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
          <Alert
            style={{ height: "auto" }}
            color={color}
            isOpen={dalert}
            toggle={dalertToggle}
          >
            {color === "danger" ? (
              <i class="mdi mdi-dalert-outline dalert-icon"></i>
            ) : color === "info" ? (
              <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
              </div>
            ) : null}
            {msgs}
          </Alert>
        </ModalBody>
        <ModalFooter>
          {props.data.approved_status === true ? (
            <Button color="danger" onClick={() => RejectKYC({idKyc:props.data._id,userId:props.data.user})}>
              Reject KYC
            </Button>
          ) : props.data.approved_status === false ? (
            <Button color="success" onClick={() => ApprovalKYC({idKyc:props.data._id,userId:props.data.user})}>
              Approve KYC
            </Button>
          ) : null}
          {props.data.lock_status === true ? (
            <Button color="danger" onClick={() => UnlockKYC(props.data._id)}>
              Unlock KYC
            </Button>
          ) : props.data.lock_status === false ? (
            <Button color="success" onClick={() => LockedKYC(props.data._id)}>
              Lock KYC
            </Button>
          ) : null}
        </ModalFooter>
      </Modal>
    </div>
  );
}
