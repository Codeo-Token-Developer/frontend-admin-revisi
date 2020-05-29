import React, { useEffect, useState } from "react";
import Axios from "axios";

// import ReactHTML from "react-html-parser";

import { Button } from "reactstrap";

const $ = require("jquery");
$.Datatable = require("datatables.net-bs");

function CardCMSUpdate(props) {
  let [dataCMS, setDataCMS] = useState(undefined);
  const [msgs, setMsgs] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    Axios({
      url: `${props.baseURL}/cms/`,
      method: "GET",
      headers: {
        admintoken: localStorage.getItem("admincodeotoken"),
      },
    })
      .then(({ data }) => {
        setDataCMS(data.CMS.reverse());
        setLoading(true);
      })
      .catch((err) => {
        setLoading(null);
        setDataCMS({
          title: "Tittle is Empty",
          category: "Category is Empty",
          description: "Description is Empty",
        });
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
  });

  function EditDataCMS(e) {
    Axios({
      url: `${props.baseURL}/cms/${e}`,
      method: "PATCH",
      headers: {
        admintoken: localStorage.getItem("admincodeotoken"),
      },
    })
      .then(({ data }) => {
        alert(JSON.stringify(data));
      })
      .catch((err) => {
        if (err.response === undefined) {
          alert(err.message);
        } else {
          alert(err.response.data.message);
        }
      });
  }

  function DeleteDataCMS(e) {
    Axios({
      url: `${props.baseURL}/cms/${e}`,
      method: "DELETE",
      headers: {
        adminToken: localStorage.getItem("admincodeotoken"),
      },
    })
      .then(({ data }) => {
        alert(JSON.stringify(data));
      })
      .catch((err) => {
        if (err.response === undefined) {
          alert(err.message);
        } else {
          alert(err.response.data.message);
        }
        console.log(err);
      });
  }

  return (
    <div className="row">
      <div className="col-12">
        <div className="card">
          <div className="card-body">
            <button
              type="button"
              className="btn btn-gradient-primary waves-effect waves-light float-right mb-3"
              data-toggle="modal"
              data-animation="bounce"
              data-target=".bs-example-modal-lg"
            >
              + Add News
            </button>
            <h4 className="header-title mt-0">CMS Update</h4>
            <div className="table-responsive dash-social">
              {loading === true ? (
                <DataCMSList
                  dataCMS={dataCMS}
                  DeleteDataCMS={DeleteDataCMS}
                  EditDataCMS={EditDataCMS}
                />
              ) : loading === false ? (
                <div class="spinner-border text-primary" role="status">
                  <span class="sr-only">Loading...</span>
                </div>
              ) : (
                <div>{msgs}</div>
              )}
            </div>
          </div>
          {/*end card-body*/}
        </div>
        {/*end card*/}
      </div>{" "}
      {/*end col*/}
    </div>
  );
}

const DataCMSList = (props) => {
  return (
    <>
      <table id="datatable" className="table">
        <thead className="thead-light">
          <tr>
            <th>Title</th>
            <th>Category</th>
            {/* <th>Description</th> */}
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {props.dataCMS === undefined || props.dataCMS === null
            ? []
            : props.dataCMS.map((item) => {
                return (
                  <tr>
                    <td>{item.title}</td>
                    <td>{item.category}</td>
                    {/* <td>{ReactHTML(item.description)}</td> */}
                    <td>
                      <Button
                        color="light"
                        href="#"
                        value={item._id}
                        className="mr-2"
                        // onClick={() => props.DeleteDataCMS(item._id)}
                      >
                        <i
                          style={{ cursor: "pointer" }}
                          class="far fa-edit text-success font-16"
                        ></i>
                      </Button>
                      <Button
                        color="light"
                        href="#"
                        value={item._id}
                        onClick={() => props.DeleteDataCMS(item._id)}
                      >
                        <i
                          style={{ cursor: "pointer" }}
                          className="fas fa-trash-alt text-danger font-16"
                        ></i>
                      </Button>
                    </td>
                  </tr>
                );
              })}
        </tbody>
      </table>
    </>
  );
};

export default CardCMSUpdate;
