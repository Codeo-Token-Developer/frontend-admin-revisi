import React, { useEffect, useState } from "react";
import Axios from "axios";

import {
  Alert,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";

const $ = require("jquery");
$.Datatable = require("datatables.net-bs");

function CardBannerLaunchpad(props) {
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

  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal(!modal);

  return (
    <div className="row">
      <div className="col-12">
        <div className="card">
          <div className="card-body order-list">
            <button
              type="button"
              className="btn btn-gradient-primary waves-effect waves-light float-right mb-3"
              data-toggle="modal"
              data-animation="bounce"
              data-target=".bs-example-modal-center"
              onClick={toggleModal}
            >
              + Add New
            </button>
            <h4 className="header-title mt-0 mb-3">Banner Slider</h4>
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
      <AddBanner statusModal={modal} toggleModal={toggleModal} />
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
            <th>Banner</th>
            <th>Action</th>
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

function AddBanner(props) {
  return (
    <>
      <Modal isOpen={props.statusModal}>
        <ModalHeader toggle={props.toggleModal}>
          <i className="fas fa-users text-white font-16 mr-1"></i> Add Banner
        </ModalHeader>
        <ModalBody>
          <form>
            <div className="custom-file mb-3">
              <input
                type="file"
                className="custom-file-input"
                id="customFile"
              />
              <label className="custom-file-label" htmlFor="customFile">
                Choose file
              </label>
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" size="lg">
            Save
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default CardBannerLaunchpad;
