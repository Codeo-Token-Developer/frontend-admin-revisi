import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

import {
  Alert,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";

import { adminContext } from "../../../Context";

const $ = require("jquery");
$.Datatable = require("datatables.net-bs");

export default function CardUserManagement(props) {
  let admin = useContext(adminContext);
  let [data, setData] = useState(undefined);
  const [indexs, setIndex] = useState(0);

  const [color, setColor] = useState("danger");
  const [dalert, setAlert] = useState(false);
  const [msgs, setMsgs] = useState("");

  const toggleAlert = () => setAlert(!dalert);

  const [loading, setLoading] = useState(false);

  const [userModal, setUserModal] = useState(false);
  const [statusModal, setStatusModal] = useState(false);
  const toggleModal = () => setStatusModal(!statusModal);

  const toggleUserModal = () => setUserModal(!userModal);

  useEffect(() => {
    function getUsers() {
      axios({
        url: `${props.baseUrl}/users`,
        method: "GET",
        headers: {
          adminToken: localStorage.getItem("admincodeotoken"),
        },
      })
        .then(({ data }) => {
          setData(data.users.reverse());
          setLoading(true);
        })
        .catch((err) => {
          setLoading(null);
          setData({
            username: "Username is empty",
            email: "Email is empty",
            id_country: "Country is empty",
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
    }

    getUsers();
  });

  function EditUsers(e) {
    axios({
      url: `${props.baseUrl}/users/me/${e}`,
      method: "GET",
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

  function DeleteUsers(e) {
    setAlert(true);
    setColor("info");
    setMsgs(" Please wait, a few minutes, the request is being processed. ");
    axios({
      url: `${props.baseUrl}/users/${e.id}`,
      method: "DELETE",
      headers: {
        adminToken: localStorage.getItem("admincodeotoken"),
      },
    })
      .then(({ data }) => {
        setAlert(false);
        setColor("success");
        setMsgs(data.message);
        toggleModal();
        setStatusModal(false);
      })
      .catch((err) => {
        let msg = "";
        if (err.response === undefined) {
          msg = err.message;
        } else {
          msg = err.response.data.message;
        }
        setAlert(true);
        setColor("danger");
        setMsgs(msg);
      });
  }

  return (
    <div className="row">
      <div className="col-12">
        <div className="card">
          <div className="card-body">
            <h4 className="header-title mt-0 mb-3">User Management</h4>
            <div className="table-responsive dash-social">
              {loading === true ? (
                <DataList
                  admin={admin}
                  data={data}
                  indexs={indexs}
                  setIndex={setIndex}
                  DeleteUsers={DeleteUsers}
                  EditUsers={EditUsers}
                  statusModal={statusModal}
                  toggleModal={toggleModal}
                  userModal={userModal}
                  toggleUserModal={toggleUserModal}
                  color={color}
                  dalert={dalert}
                  toggleAlert={toggleAlert}
                  msgs={msgs}
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

function DeleteUsersConfirm(props) {
  const Deleted = () => {
    if (props.admin !== undefined || props.admin !== null) {
      if (props.admin.role === "super") {
        props.DeleteUsers({
          id: props.data._id,
          username: props.data.username,
        });
      }
    }
  };
  return (
    <>
      <Modal isOpen={props.statusModal}>
        <ModalHeader toggle={props.toggleModal}>
          <h3>
            <i className="fas fa-trash-alt text-white font-16"></i> Deleted
            Users
          </h3>
        </ModalHeader>
        <ModalBody>
          <table className="table table-responsive">
            <tr>
              <td>Status Verification</td>
              <td>:</td>
              <td>
                {props.data === undefined || props.data === null ? (
                  "Unknown Verification"
                ) : props.data.verification === undefined ||
                  props.data.verification === null ? (
                  "Unknown Verification"
                ) : props.data.verification ? (
                  <span className="badge badge-success">Verify</span>
                ) : (
                  <span className="badge badge-danger">Not Verify</span>
                )}
              </td>
            </tr>
            <tr>
              <td>Registration Time</td>
              <td>:</td>
              <td>
                {props.data === undefined || props.data === null
                  ? "Unknown Registration Time"
                  : props.data.email === undefined ||
                    props.data.created_at === null
                  ? "Unknown Registration Time"
                  : new Date(props.data.created_at).toLocaleDateString() +
                    " " +
                    new Date(props.data.created_at).toLocaleTimeString()}
              </td>
            </tr>
            <tr>
              <td>Last Login</td>
              <td>:</td>
              <td>
                {props.data === undefined || props.data === null
                  ? "Unknown Last Login"
                  : props.data.updatedAt === undefined ||
                    props.data.updatedAt === null
                  ? "Unknown Last Login"
                  : new Date(props.data.updatedAt).toLocaleDateString() +
                    " " +
                    new Date(props.data.updatedAt).toLocaleTimeString()}
              </td>
            </tr>
          </table>
          <Alert
            style={{ height: "auto" }}
            color={props.color}
            isOpen={props.dalert}
            toggle={props.dalertToggle}
          >
            {props.color === "danger" ? (
              <i class="mdi mdi-alert-outline alert-icon"></i>
            ) : props.color === "info" ? (
              <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
              </div>
            ) : null}
            {props.msgs}
          </Alert>
          <div>Are you sure deleted user account {props.data.email} ?</div>
        </ModalBody>
        <ModalFooter>
          <Button onClick={props.toggleModal} color="danger">
            <i className="fas fa-times text-white font-16"></i>
          </Button>
          {props.admin === undefined || props.admin === null ? null : props
              .admin.role === "super" ? (
            <Button onClick={Deleted} color="success">
              <i className="fas fa-check text-white font-16"></i>
            </Button>
          ) : null}
        </ModalFooter>
      </Modal>
    </>
  );
}

function UsersDetails(props) {
  return (
    <>
      <Modal isOpen={props.statusModal}>
        <ModalHeader toggle={props.toggleModal}>
          <i className="fas fa-users text-white font-16"></i> User Details
        </ModalHeader>
        <ModalBody>
          <table className="table table-responsive">
            <div>
              {props.data === undefined || props.data === null ? (
                <img
                  className="text-center"
                  width="200"
                  height="200"
                  src="/assets/images/picture1.jpg"
                  alt="profile_picture"
                />
              ) : props.data.avatar === undefined ||
                props.data.avatar === null ? (
                <img
                  className="text-center"
                  width="200"
                  height="200"
                  src="/assets/images/picture1.jpg"
                  alt="profile_picture"
                />
              ) : (
                <img
                  className="text-center"
                  width="200"
                  height="200"
                  src={props.data.avatar}
                  alt="profile_picture"
                />
              )}
            </div>
            <br />
            <h4>{props.data.full_name}</h4>
            <tr>
              <td>Email</td>
              <td>:</td>
              <td>
                {props.data === undefined || props.data === null
                  ? "Unknown Email"
                  : props.data.email === undefined || props.data.email === null
                  ? "Unknown Email"
                  : props.data.email}
              </td>
            </tr>
            <tr>
              <td>Username</td>
              <td>:</td>
              <td>
                {props.data === undefined || props.data === null
                  ? "Unknown Username"
                  : props.data.username === undefined ||
                    props.data.username === null
                  ? "Unknown Username"
                  : props.data.username}
              </td>
            </tr>
            <tr>
              <td>Status Verification</td>
              <td>:</td>
              <td>
                {props.data === undefined || props.data === null ? (
                  "Unknown Verification"
                ) : props.data.verification === undefined ||
                  props.data.verification === null ? (
                  "Unknown Verification"
                ) : props.data.verification ? (
                  <span className="alert alert-success">
                    <i className="fa fa-check mr-1"></i> Verify
                  </span>
                ) : (
                  <span className="alert alert-danger">
                    <i className="fa fa-times mr-1"></i> Not Verify
                  </span>
                )}
              </td>
            </tr>
            <tr>
              <td>Registration Time</td>
              <td>:</td>
              <td>
                {props.data === undefined || props.data === null
                  ? "Unknown Registration Time"
                  : props.data.email === undefined ||
                    props.data.created_at === null
                  ? "Unknown Registration Time"
                  : new Date(props.data.created_at).toLocaleDateString() +
                    " " +
                    new Date(props.data.created_at).toLocaleTimeString()}
              </td>
            </tr>
            <tr>
              <td>Last Login</td>
              <td>:</td>
              <td>
                {props.data === undefined || props.data === null
                  ? "Unknown Last Login"
                  : props.data.updatedAt === undefined ||
                    props.data.updatedAt === null
                  ? "Unknown Last Login"
                  : new Date(props.data.updatedAt).toLocaleDateString() +
                    " " +
                    new Date(props.data.updatedAt).toLocaleTimeString()}
              </td>
            </tr>
            <tr>
              <td>Country </td>
              <td>:</td>
              <td>
                {props.data === undefined || props.data === null
                  ? "Unknown Country"
                  : props.data.id_country === undefined ||
                    props.data.id_country === null
                  ? "Unknown Country"
                  : props.data.id_country}
              </td>
            </tr>
          </table>
        </ModalBody>
      </Modal>
    </>
  );
}

function DataList(props) {
  const toggleUserModals = (init) => {
    props.toggleUserModal();
    props.setIndex(init);
  };
  const modalToggle = (init) => {
    props.toggleModal();
    props.setIndex(init);
  };

  return (
    <>
      <table id="datatable" className="table">
        <thead className="thead-light">
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Verification</th>
            <th>Registration time</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {props.data === undefined || props.data === null
            ? []
            : props.data.map((item, index) => {
                return (
                  <>
                    <tr>
                      <td>{index + 1}</td>
                      <td>{item.username}</td>
                      <td>
                        {item.verification ? (
                          <span className="alert alert-success">
                            <i className="fa fa-check mr-1"></i> Verify
                          </span>
                        ) : (
                          <span className="alert alert-danger">
                            <i className="fa fa-times mr-1"></i> Not Verify
                          </span>
                        )}
                      </td>
                      <td>
                        {item.created_at === undefined ||
                        item.created_at === null
                          ? "Unknown"
                          : new Date(item.created_at).toLocaleDateString() +
                            " " +
                            new Date(item.created_at).toLocaleTimeString()}
                      </td>
                      <td>{item.email}</td>

                      <td>
                        {/*
                                <button className="mr-2 btn btn-success" value={item._id} onClick={()=>EditUsers(item._id)}><i className="fas fa-edit text-white font-16"></i></button>
                                */}
                        {/*
                  <button
                  className="mr-2 btn btn-success"
                  value={item._id}
                  onClick={() =>props.EditUsers(item._id)}
                  >
                  <i className="fas fa-edit text-white font-16"></i>
                  </button>
                */}
                        <a href="/operationMain/UserDetail"
                          className="mr-2 btn btn-info"
                        >
                          <i className="fas fa-users text-white font-16"></i>
                        </a>

                        {props.admin === undefined ||
                        props.admin === null ? null : props.admin.role ===
                          "super" ? (
                          <button
                            className="mr-2 btn btn-danger"
                            value={index}
                            onClick={() => modalToggle(index)}
                          >
                            <i className="fas fa-trash-alt text-white font-16"></i>
                          </button>
                        ) : null}
                      </td>
                    </tr>
                  </>
                );
              })}
          <UsersDetails
            data={props.data[props.indexs]}
            statusModal={props.userModal}
            toggleModal={props.toggleUserModal}
          />
          <DeleteUsersConfirm
            admin={props.admin}
            data={props.data[props.indexs]}
            statusModal={props.statusModal}
            toggleModal={props.toggleModal}
            dalert={props.dalert}
            toggleAlert={props.toggleAlert}
            DeleteUsers={props.DeleteUsers}
            color={props.color}
            dalertToggle={props.dalertToggle}
            msgs={props.msgs}
          />
        </tbody>
      </table>
    </>
  );
}
