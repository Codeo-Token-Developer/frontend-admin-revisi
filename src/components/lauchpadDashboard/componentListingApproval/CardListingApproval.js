import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Button } from "reactstrap";
import { useRouteMatch } from "react-router-dom";

const $ = require("jquery");
$.Datatable = require("datatables.net-bs");

function CardListingApproval(props) {
  let [dataProjectApproval, setDataProjectApprove] = useState(undefined);
  // const [msgs, setMsgs] = useState("");
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    Axios({
      url: "http://localhost:3005/lp/requests",
      method: "GET",
      headers:{
        admintoken:localStorage.getItem("admincodeotoken")
      }
    }).then(({ data }) => {
      setDataProjectApprove(data.reverse());
      setLoading(true);
    }).catch((err) => {
        setLoading(null);
        setDataProjectApprove({
          id_request : "Data is Empty",
          project_name : "Data is Empty",
          submit_name : "Data is Empty",
          country : "Data is Empty",
          Email : "Data is Empty",
          phone : "Data is Empty"
        });
        // let msg="";
        if (err.response === undefined) {
            // msg=err.message;
        } else {
            // msg=err.response.data.message;
        }
        // setMsgs(msg);
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
  }, [dataProjectApproval]);

  return (
    <div className="row">
      <div className="col-12">
        <div className="card">
          <div className="card-body order-list">
            {/* <button
              type="button"
              className="btn btn-gradient-primary waves-effect waves-light float-right mb-3"
              data-toggle="modal"
              data-animation="bounce"
              data-target=".bs-example-modal-center"
            >
              + Add New
            </button> */}
            <h4 className="header-title mt-0 mb-3">Listing Approval</h4>
            <div className="table-responsive">
              {loading === true ? (
                <DataList dataProjectApproval={dataProjectApproval} />
              ) : (
                <div class="spinner-border text-primary" role="status">
                  <span class="sr-only">Loading...</span>
                </div>
              )}
              {/*end table*/}
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

const DataList = (props) => {

  let {url}=useRouteMatch();

  return (
    <>
      <table id="datatable" className="table">
        <thead className="thead-light">
          <tr>
            <th>#</th>
            <th>ID Request</th>
            <th>Project Name</th>
            <th>Submiter Name</th>
            <th>Email</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.dataProjectApproval === undefined || props.dataProjectApproval === null
            ? []
            : props.dataProjectApproval.filter((item)=>item.approved_status.toLowerCase()==="pending").map((item, no) => {
                
              return (
                  <tr>
                    <td>{no+1}</td>
                    <td>{item._id}</td>
                    <td>{item.project_name}</td>
                    <td>{item.full_name}</td>
                    <td>{item.email}</td>
                    <td>{item.approved_status}</td>
                    <td>
                       <a className="btn btn-primary" href={`/operationMain/listingApprovalDetail/${item._id}`} alt="View Detail">  <i className="fa fa-eye mr-1" /> View Detail</a>
                    </td>
                  </tr>
                );
              })}
        </tbody>
      </table>
      {props.dataTables}
    </>
  );
};

export default CardListingApproval;
