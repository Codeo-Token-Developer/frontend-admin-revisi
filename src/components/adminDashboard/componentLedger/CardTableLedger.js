import React, { useEffect, useState } from "react";
import axios from "axios";

import {urlContext} from "../../../Context";

const $ = require("jquery");
$.Datatable = require("datatables.net-bs");

export default function CardTableLedger(props) {
  let [msgs, setMsgs] = useState("");
  let [data, setData] = useState(undefined);

  const baseUrl=React.useContext(urlContext);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios({
      // url: `https://codeo-admin.herokuapp.com/ledger`,
      url: `${baseUrl}/ledger`,
      method: "GET",
      headers: {
        adminToken: localStorage.getItem("admincodeotoken"),
      },
    })
      .then(({ data }) => {
        //console.log(data, "ini data axios");
        setData(getUserAccount(data));
        setLoading(true);
        if (!$.fn.dataTable.isDataTable("#datatable")) {
          $("#datatable").DataTable({
            fnDrawCallback: function () {
              $("#datatable_wrapper").removeClass("form-inline");
              $(".paginate_button a").addClass("page-link");
              $(".paginate_button").addClass("page-item");
            },
          });
        }
      })
      .catch((err) => {
        setLoading(null);
        setData({
          date: "date is empty",
          userWallet: "user wallet is empty",
          walletAddress: "wallet address is empty",
          actualBalance: "actual balance is empty",
          eth: "ETH actual balance is empty",
          privateKey: "private key is empty",
        });
        let msg = "";
        if (err.response === undefined) {
          msg = err.message;
        } else {
          msg = err.response.data.message;
        }
        setMsgs(msg);
      });
  }, [baseUrl]);

  // function TerminateLedger(event) {
  //   axios({
  //     url: `${props.baseUrl}/users/${event.id}`,
  //     method: "DELETE",
  //     headers: {
  //       adminToken: localStorage.getItem("admincodeotoken"),
  //     },
  //   })
  //     .then(({ data }) => {
  //       alert(JSON.stringify(data));
  //     })
  //     .catch((err) => {
  //       if (err.response === undefined) {
  //         alert(err.message);
  //       } else {
  //         alert(err.response.data.message);
  //       }
  //       console.log(err);
  //     });
  // }

  const getUserAccount = (data) => {
    let newAccount = [];
    data.forEach((item) => {
      if (item.user) {
        newAccount.push(item);
      }
    });
    return newAccount;
  };

  return (
    <div className="row">
      <div className="col-12">
        <div className="card">
          <div className="card-body order-list">
            <h4 className="header-title mt-0 mb-3">Ledger</h4>
            <div className="table-responsive">
              {loading === true ? (
                <DataList data={data} />
              ) : loading === false ? (
                <div class="spinner-border text-primary" role="status">
                  <span class="sr-only">Loading...</span>
                </div>
              ) : (
                <div>{msgs}</div>
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
    <table id="datatable" className="table table-hover mb-0">
      <thead className="thead-light">
        <tr>
          <th className="border-top-0">Date Create Wallet</th>
          <th className="border-top-0">User Wallet</th>
          <th className="border-top-0">Wallet Address</th>
          <th className="border-top-0">Actual Balance</th>
          <th className="border-top-0">ETH Actual Balance</th>
          <th className="border-top-0">Private Key</th>
          <th className="border-top-0">Action</th>
        </tr>
        {/*end tr*/}
      </thead>
      <tbody>
        {props.data === undefined || props.data === null
          ? []
          : props.data.map((item) => {
              return (
                <tr>
                  <td>
                    {item.created_at === undefined || item.created_at === null
                      ? "Unknown"
                      : new Date(item.created_at).toLocaleDateString() +
                        " " +
                        new Date(item.created_at).toLocaleTimeString()}
                  </td>
                  <td>{item.user.full_name}</td>
                  <td>{item.ETH}</td>
                  <td>{item.balance} CODEO</td>
                  <td>875 ETH</td>
                  <td>a214s63471349aa3718kutknywaqe2</td>
                  <td>
                    <button className="btn btn-xs btn-danger">Terminate</button>
                    <button className="btn btn-xs btn-warning">Lock</button>
                  </td>
                </tr>
              );
            })}
      </tbody>
    </table>
  );
};
