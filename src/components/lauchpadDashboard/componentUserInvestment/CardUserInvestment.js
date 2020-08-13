import React, { useEffect, useState } from "react";
import Axios from "axios";

const $ = require("jquery");
$.Datatable = require("datatables.net-bs");

function CardUserInvestment(props) {
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
            <h4 className="header-title mt-0 mb-3">User Investment</h4>
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


// {
//   "ieo_minimum": 10,
//   "bonus": 5,
//   "referral_reward": 10,
//   "website": "--",
//   "whitepaper": "https://firebasestorage.googleapis.com/v0/b/codeo-token.appspot.com/o/Pengantar%20Perkuliahan%20OnLine%20(2).doc?alt=media&token=7cec42d5-b10a-4f1f-8b15-df9789dcef36",
//   "telegram": "DFHVC",
//   "kakao": "tyhjfgkfhkghj",
//   "twitter": "ghjkghjk",
//   "instagram": "instagram",
//   "status": true,
//   "_id": "5f34f1ad9856d23ab822b27e",
//   "name": "wawanCoin",
//   "full_name": "wawanCoin",
//   "current_supply": 0,
//   "session_supply": 122111,
//   "ieo_ratio": 1,
//   "technology_foundation": "TREGHMMN",
//   "user": "5f28e5b67256a50e877b0cd9",
//   "start_date": "2020-08-15T00:00:00.000Z",
//   "end_date": "2020-08-20T00:00:00.000Z",
//   "createdAt": "2020-08-13T07:54:21.410Z",
//   "updatedAt": "2020-08-13T07:54:21.410Z"
// }

const DataList = (props) => {
  return (
    <>
      <table id="datatable" className="table">
        <thead className="thead-light">
          <tr>
            <th>#</th>
            <th>ID TRX</th>
            <th>Date/Time</th>
            <th>Project Name</th>
            <th>Investor</th>
            <th>Country</th>
            <th>Total Invest</th>
            <th>TXHASH</th>
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

export default CardUserInvestment;