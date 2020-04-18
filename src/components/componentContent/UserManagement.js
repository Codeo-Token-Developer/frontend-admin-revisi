import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { urlContext } from "../../Context";

function UserManagement() {
  let country = [
    "United Arab Emirates",
    "Argentina",
    "Austria",
    "Australia",
    "Belgium",
    "Brazil",
    "Canada",
    "Switzerland",
    "China",
    "Germany",
    "Spain",
    "France",
    "United Kingdom",
    "Indonesia",
    "India",
    "Italy",
    "Japan",
    "South Korea",
    "Mexico",
    "Nigeria",
    "Netherlands",
    "Norway",
    "Poland",
    "Russia",
    "Saudi Arabia",
    "Sweden",
    "Thailand",
    "Turkey",
    "United States",
    "Venezuela",
  ];
  let baseUrl = useContext(urlContext);

  return (
    <>
      <div className="row">
        <div className="col-sm-12">
          <div className="page-title-box">
            <div className="float-right">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="#a">Admin</a>
                </li>
                <li className="breadcrumb-item active">User Management</li>
              </ol>
            </div>
            <h4 className="page-title">User Management</h4>
          </div>
        </div>
      </div>
      <CardUserManagement baseUrl={baseUrl} />
      <DropdownUserManagement baseUrl={baseUrl} country={country || []} />
    </>
  );
}

const CardUserManagement = (props) => {
  // const [status, setStatus] = useState(false);
  let [data, setData] = useState([
    {
      username: "Username is empty",
      verification: undefined,
      created_at: undefined,
      email: "Email is empty",
      id_country: "Country is empty",
    },
  ]);

  function Main(data) {
    useEffect(() => {
      data.getUser();
    }, [data]);
  }

  Main({
    getUser: getUsers,
  });

  function EditUsers(e) {
    axios({
      url: `${props.baseUrl}/users/me/${e}`,
      method: "GET",
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
        console.log(err);
      });
  }

  function DeleteUsers(e) {
    axios({
      url: `${props.baseUrl}/users/${e}`,
      method: "DELETE",
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
        console.log(err);
      });
  }

  function getUsers() {
    axios({
      url: `${props.baseUrl}/users`,
      method: "GET",
      headers: {
        admintoken: localStorage.getItem("admincodeotoken"),
      },
    })
      .then(({ data }) => {
        setData(data.users);
      })
      .catch((err) => {
        setData({
          username: "Username is empty",
          email: "Email is empty",
          id_country: "Country is empty",
        });
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
              + Add New
            </button>
            <h4 className="header-title mt-0">User Details</h4>
            <div className="table-responsive dash-social">
              <table id="datatable" className="table">
                <thead className="thead-light">
                  <tr>
                    <th>Name</th>
                    <th>Verification</th>
                    <th>Registration time</th>
                    <th>Email</th>
                    <th>Country</th>
                    <th>Action</th>
                  </tr>
                  {/*end tr*/}
                  {data === undefined || data === null
                    ? []
                    : data.map((item) => {
                        return (
                          <tr>
                            <td>{item.username}</td>
                            <td>
                              {item.verification ? (
                                <div className="alert alert-success">
                                  Verify
                                </div>
                              ) : (
                                <div className="alert alert-danger">
                                  Not Verify
                                </div>
                              )}
                            </td>
                            <td>
                              {item.created_at === undefined ||
                              item.created_at === null
                                ? "Unknown"
                                : new Date(
                                    item.created_at
                                  ).toLocaleDateString() +
                                  " " +
                                  new Date(
                                    item.created_at
                                  ).toLocaleTimeString()}
                            </td>
                            <td>{item.email}</td>
                            <td>
                              {item.id_country === undefined ||
                              item.id_country === null
                                ? "Unknown Country"
                                : item.id_country}
                            </td>
                            <td>
                              {/*
                                              <button className="mr-2 btn btn-success" value={item._id} onClick={()=>EditUsers(item._id)}><i className="fas fa-edit text-white font-16"></i></button>
                                              */}
                              <button
                                className="mr-2 btn btn-success"
                                value={item._id}
                                onClick={() => EditUsers(item._id)}
                              >
                                <i className="fas fa-edit text-white font-16"></i>
                              </button>
                              <button
                                className="mr-2 btn btn-danger"
                                value={item._id}
                                onClick={() => DeleteUsers(item._id)}
                              >
                                <i className="fas fa-trash-alt text-white font-16"></i>
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                </thead>
                <tbody></tbody>
              </table>
            </div>
          </div>
          {/*end card-body*/}
        </div>
        {/*end card*/}
      </div>{" "}
      {/*end col*/}
    </div>
  );
};

const DropdownUserManagement = (props) => {
  const [data, setData] = useState({
    username: "",
    password: "",
    fullname: "",
    email: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios({
      url: `${props.baseUrl}/users`,
      method: "POST",
      headers: {
        admintoken: localStorage.getItem("admincodeotoken"),
      },
      data: {
        full_name: data.fullname,
        username: data.username,
        password: data.password,
        email: data.email,
      },
    })
      .then(({ data }) => {
        alert(JSON.stringify(data));
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div
      className="modal fade bs-example-modal-lg"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="myLargeModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title mt-0" id="myLargeModalLabel">
              Add News
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-hidden="true"
            >
              ×
            </button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="Title">Username</label>
                    <input
                      type="text"
                      className="form-control"
                      name="username"
                      id="Nama"
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="Title">Password </label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      onChange={handleChange}
                      id="Nama"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="Title">Full Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="fullname"
                      id="Nama"
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="Email">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="Email"
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>
              <button type="submit" className="btn btn-sm btn-gradient-primary">
                Save
              </button>
              <button type="button" className="btn btn-sm btn-gradient-danger">
                Delete
              </button>
            </form>
          </div>
        </div>
        {/* /.modal-content */}
      </div>
      {/* /.modal-dialog */}
    </div>
  );
};

export default UserManagement;
