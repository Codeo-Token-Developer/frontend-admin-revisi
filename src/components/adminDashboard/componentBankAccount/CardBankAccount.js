import React, { useState, useEffect } from "react";
import Axios from "axios";
//import { Link } from "react-router-dom";

const $ = require("jquery");
$.Datatable = require("datatables.net-bs");

function CardBankAccount(props) {
  let [data, setData] = useState(undefined);
  const [msgs, setMsgs] = useState("");
  //const [loading, setLoading] = useState(false);

  useEffect(() => {
    Axios({
      url: ``,
      method: "GET",
      // headers: {
      //     admintoken: localStorage.getItem("admincodeotoken")
      // }
    })
      .then((res) => {
        setData(data.res); //change data.res
        //setLoading(true);
        alert(res);
        dataTables();
      })
      .catch((err) => {
        //setLoading(null);
        setData({
          bankAccount: "Bank Account is Empty",
          swiftCode: "Swift Code is Empty",
        });
        let msg = "";
        if (err.response === undefined) {
          msg = err.message;
        } else {
          msg = err.response.data.message;
        }
        setMsgs(msg);
      });
  });

  function dataTables() {
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

  // const EditDataBankAccount = (e) => {
  //   Axios({
  //     url: ``,
  //     method: "PATCH",
  //     // headers: {
  //     //     admintoken: localStorage.getItem("codeoadmintoken")
  //     // }
  //   })
  //     .then((res) => {
  //       alert(res);
  //     })
  //     .catch((err) => {
  //       alert(err);
  //     });
  // };
  //
  // const DeleteDataBankAccount = (e) => {
  //   let confirmation = window.confirm(
  //     "Are you sure delete users " + e.bankAccount + " ?"
  //   );
  //   if (confirmation) {
  //     Axios({
  //       url: ``,
  //       method: "DELETE",
  //       headers: {
  //         admintoken: localStorage.getItem("admincodeotoken"),
  //       },
  //     })
  //       .then(({ data }) => {
  //         alert(JSON.stringify(data));
  //       })
  //       .catch((err) => {
  //         let msg = "";
  //         if (err.response === undefined) {
  //           msg = err.message;
  //         } else {
  //           msg = err.response.data.message;
  //         }
  //         setMsgs(msg);
  //       });
  //   } else {
  //     alert("Your cancel delete users " + e.bankAccount);
  //   }
  // };

  return (
    <div className="row">
      <div className="col-12">
        <div className="card">
          {msgs}
          <div className="card-body order-list">
            <button
              type="button"
              className="btn btn-gradient-primary waves-effect waves-light float-right mb-3"
              data-toggle="modal"
              data-animation="bounce"
              data-target=".bs-example-modal-center"
            >
              + Add New
            </button>
            <h4 className="header-title mt-0 mb-3">Bank Account</h4>
            <div className="table-responsive">
              <table id="datatable" className="table table-hover mb-0">
                <thead className="thead-light">
                  <tr>
                    <th className="border-top-0">Bank Name</th>
                    <th className="border-top-0">Swift Code</th>
                    <th className="border-top-0">Action</th>
                  </tr>
                  {/* {(loading===true) ? (
                        <DataListBankAccount data={data} DeleteUsers={DeleteUsers} EditUsers={EditUsers} dataTables={dataTables} />
                    ) : (loading===false) ?
                        <div class="spinner-border text-primary" role="status">
                            <span class="sr-only">Loading...</span>
                        </div>:<div>{msgs}</div>
                    } */}
                </thead>
                <tbody></tbody>
              </table>
              {dataTables}
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

// function DataListBankAccount(props) {
//   return (
//     <>
//       <tr>
//         <th className="border-top-0">Bank Name</th>
//         <th className="border-top-0">Swift Code</th>
//         <th className="border-top-0">Action</th>
//       </tr>
//       {props.data === undefined || props.data === null
//         ? []
//         : props.data.map((item) => {
//             return (
//               <tr>
//                 <td>BCA</td>
//                 <td>5236421</td>
//                 <td>
//                   <Link href="#" className="mr-2">
//                     <i className="fas fa-edit text-info font-16" />
//                   </Link>
//                   <Link href="#">
//                     <i className="fas fa-trash-alt text-danger font-16" />
//                   </Link>
//                 </td>
//               </tr>
//             );
//           })}
//     </>
//   );
// }

export default CardBankAccount;
