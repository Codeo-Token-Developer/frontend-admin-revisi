import React,{useState} from "react";

import axios from "axios";

export default function DropdownUserManagement(props) {

const [data, setData] = useState({
  username: "",
  password: "",
  fullname: "",
  email: "",
});

let [msgs,setMsgs]=useState("");

const handleChange = (e) => {
  setData({ ...data, [e.target.name]: e.target.value });
};

const handleSubmit = (e) => {
  e.preventDefault();

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
      alert(JSON.stringify(data));
      setMsgs("");
    })
    .catch((err) => {
      let msg="";
      if (err.response === undefined) {
        msg=err.message;
      } else {
        msg=err.response.data.message;
      }
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
            <div>{msgs}</div>
            <button type="submit" className="btn btn-sm btn-gradient-primary">
              Save
            </button>
            <button type="reset" className="btn btn-sm btn-gradient-danger">
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
}
