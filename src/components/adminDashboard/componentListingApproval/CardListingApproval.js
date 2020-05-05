import React, { useEffect, useState } from "react";
import Axios from "axios";

const $ = require("jquery");
$.Datatable = require("datatables.net-bs");

function CardListingApproval(props) {
  let [data, setData] = useState(undefined);
  //   const [msgs, setMsgs] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    Axios({
      url: ``,
      method: "GET",
      // headers: {
      //     admintoken: localStorage.getItem("admincodeotoken")
      // }
    })
      .then((res) => {
        setData(data.res);
        setLoading(true);
      })
      .catch((err) => {
        setLoading(true);
        // setLoading(null);
        // let msg = "";
        // if (err.response === undefined) {
        //   msg = err.message;
        // } else {
        //   msg = err.response.data.message;
        // }
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
  });

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
                <DataList data={data} />
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
  return (
    <>
      <table id="datatable" className="table">
        <thead className="thead-light">
          <tr>
            <th>#</th>
            <th>ID Request</th>
            <th>Project Name</th>
            <th>Submiter Name</th>
            <th>Country</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.data === undefined || props.data === null
            ? []
            : props.data.map((item) => {
                return <></>;
              })}
        </tbody>
      </table>
      {props.dataTables}
    </>
  );
};

export default CardListingApproval;
