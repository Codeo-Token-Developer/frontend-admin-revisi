import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Button } from "reactstrap";
import { useRouteMatch } from "react-router-dom";

let inc=1;
const $ = require("jquery");
$.Datatable = require("datatables.net-bs");

function CardProjectManagement(props) {
  let [dataProjectApproval, setDataProjectApprove] = useState(undefined);
  // const [msgs, setMsgs] = useState("");
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    Axios({
      url: "http://localhost:3005/lp/projects",
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
  }, [dataProjectApproval,setDataProjectApprove,setLoading]);

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
            <h4 className="header-title mt-0 mb-3">Listing Approval {inc}</h4>
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
            <th>Project Name</th>
            <th>Target All Stage</th>
            <th>Ratio</th>
            <th>Progress</th>
            <th>Percentage</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {props.dataProjectApproval === undefined || props.dataProjectApproval === null
            ? []
            : props.dataProjectApproval.map((item, no) => {
              let { start_date } = item;
              let createdStart = new Date(start_date);
              let createdNow = new Date();
              let startContract = createdNow.getTime() - createdStart.getTime();

                return (
                  <tr>
                    <td>{no+1}</td>
                    <td>{item._id}</td>
                    <td>{item.session_supply + '  ' + item.name}</td>
                    <td>{item.ieo_ratio}</td>
                    <td>{(item.current_supply / item.session_supply * 100).toFixed(2) + " %"}</td>
                    <td>{(startContract / 86400000).toFixed(2) + " Days"}</td>
                    <td>
                       <a className="btn btn-primary" href={`/operationMain/projectmanagement/${item._id}`} alt="View Detail">  <i className="fa fa-eye mr-1" /> View Detail</a>
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

export default CardProjectManagement;
