import React, { useEffect, useState } from "react";
import Axios from "axios";

const $ = require("jquery");
$.Datatable = require("datatables.net-bs");

function CardProjectManagement(props) {
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

  //const [modal, setModal] = useState(false);
  //const toggleModal = () => setModal(!modal);

  return (
    <div className="row">
      <div className="col-12">
        <div className="card">
          <div className="card-body order-list">
            <h4 className="header-title mt-0 mb-3">Project Management</h4>
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
            <th>Project Name</th>
            <th>Target All Stage</th>
            <th>Raise</th>
            <th>Progress</th>
            <th>Percentage</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>PROJECT A</td>
            <td>100 BTC</td>
            <td>1,5 BTC</td>
            <td>STAGE 2</td>
            <td>1,5 %</td>
            <td>
              <a
                href="/operationMain/projectManagement/ID1"
                className="btn btn-primary btn-sm"
              >
                See Details
              </a>
            </td>
          </tr>
          {props.data === undefined || props.data === null
            ? []
            : props.data.map((item) => {
                return <></>;
              })}
        </tbody>
      </table>
    </>
  );
};

export default CardProjectManagement;
