import React,{useState} from "react";

import axios from "axios";

import {Alert,Button} from "reactstrap";

export default function DropdownUserManagement(props) {

const [data, setData] = useState({
  username: "",
  password: "",
  fullname: "",
  email: "",
});

let [msgs,setMsgs]=useState("");
let [color,setColor]=useState("danger");
let [dalert,setAlert]=useState(false);

let dalertToggle=()=>setAlert(!dalert);

const handleChange = (e) => {
  setData({ ...data, [e.target.name]: e.target.value });
};

const handleSubmit = (e) => {
  e.preventDefault();
  setAlert(true);
  setColor('info');
  setMsgs(" Please wait, a few minutes, the request is being processed. ");
  axios({
    url: `${props.baseUrl}/users`,
    method: "POST",
    headers: {
      adminToken: localStorage.getItem("admincodeotoken"),
    },
    data: {
      full_name: data.fullname,
      username: data.username,
      password: data.password,
      email: data.email,
    },
  })
    .then(({ data }) => {
      setAlert(true);
      setColor('success');
      setMsgs(data.message);
      setData({
        username: "",
        password: "",
        fullname: "",
        email: "",
      });
    })
    .catch((err) => {
      let msg="";
      if (err.response === undefined) {
        msg=err.message;
      } else {
        msg=err.response.data.message;
      }
      setAlert(true);
      setColor('danger');
      setMsgs(msg);
      setData({
        username: "",
        password: "",
        fullname: "",
        email: "",
      });
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
            onClick={()=>setAlert(false)}
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
                    value={data.username}
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
                    value={data.password}
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
                    value={data.fullname}
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
                    value={data.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>
            <Alert style={{height:"auto"}} color={color} isOpen={dalert} toggle={dalertToggle}>{color==="danger"?<i class="mdi mdi-alert-outline alert-icon"></i>:(color==="info")?<div class="spinner-border" role="status">
              <span class="sr-only">Loading...</span>
            </div>:null}{msgs}</Alert>
            <Button type="submit" color="primary">Save</Button>
            <Button type="reset" color="danger">Reset</Button>
          </form>
        </div>
      </div>
      {/* /.modal-content */}
    </div>
    {/* /.modal-dialog */}
  </div>
);
}
