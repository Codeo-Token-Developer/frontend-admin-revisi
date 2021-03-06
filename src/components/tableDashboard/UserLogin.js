import React, { useEffect, useState, useContext } from "react";
//import Io from "socket.io-client";
import { urlContext, urlSocketContext } from "../../Context";
import axios from "axios";
//let socket;

const $ = require("jquery");
$.Datatable = require("datatables.net-bs");

function UserLoginTable() {
  let ENDPOINT = useContext(urlSocketContext);

  let baseUrl = useContext(urlContext);

  let [msgs, setMsgs] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios({
      url: `${baseUrl}/dashboard/totalLogin`,
      method: "GET",
      headers: {
        admintoken: localStorage.getItem("admincodeotoken"),
      },
    })
      .then(({ data }) => {
        // console.log(JSON.stringify(data));
        
        // let newData = [];
        // data.total.forEach((person) => {
        //   let personItem = [];
        //   personItem.push(person.id);
        //   personItem.push(person.name);
        //   // personItem.push(person.country);
        //   personItem.push(person.date);
        //   personItem.push(personItem.isLogin);
        //   if (person.isLogin===true) {
        //     personItem.push("Login");
        //   } else {
        //     personItem.push("Logout");
        //   }
        //   newData.push(personItem);
        // });
        setUsers(data.total);
        setLoading(true);

        // console.log(newData);

        if (!$.fn.dataTable.isDataTable("#datatable2")) {

         $("#datatable2").DataTable({
          fnDrawCallback: function () {
              $("#datatable2_wrapper").removeClass("form-inline");
              $(".paginate_button a").addClass("page-link");
              $(".paginate_button").addClass("page-item");
            },
          });

        }
      })
      .catch((err) => {
        //setLoading(null);
        let msg = "";
        if (err.response === undefined) {
          msg = err.message;
        } else {
          msg = err.response.data.message;
        }
        setMsgs(msg);
      });
  },[baseUrl]);
  //}, [baseUrl]);

  useEffect(() => {

    // socket = Io(ENDPOINT);
    // socket.on("user-login", (data) => {

    //   let find = false;
    //   let loginStatus = data.isLogin;
    //   let loginUsers = users;
    //   for (let i = 0; i < loginUsers.length; i++) {
    //     if (loginUsers[i].id === data.id) {
    //       find = true;
    //       loginUsers[i].isLogin = loginStatus;
    //     }
    //   }
    //   if (find) {
    //     setUsers(loginUsers);
    //   } else {
    //     let newLoginUser = [];
    //     newLoginUser.push(data);
    //     for (let i = 0; i < 9; i++) {
    //       newLoginUser.push(loginUsers[i]);
    //     }
    //     setUsers(newLoginUser);
    //   }
    // });
    // socket.on("user-logout", (data) => {
    //   alert(data.isLogin);
    // });

  }, [ENDPOINT, users]);

  return (
    <div className="col-6">
      <div className="card">
        <div className="card-body order-list">
          <h4 className="header-title mt-0 mb-3">New User Just Login</h4>
          <div className="table-responsive">
            {loading === true ? (
              <DataList users={users} />
            ) : loading === false ? (
              <div class="spinner-border text-primary" role="status">
                <span class="sr-only">Loading...</span>
              </div>
            ) : (
              <div>{msgs}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const DataList = (props) => {
  console.log(JSON.stringify(props.users));
  
  return (
    <table id="datatable2" className="table">
      <thead className="thead-light">
        <tr>
          <th>#</th>
          <th>Nama</th>
          {/* <th>Country</th> */}
          <th>Date/Time</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody>
        {props.users.map((user, index) => {
          // let isLog = "danger";
          // if (user[3]==="Login") {
          //   isLog = "success";
          // }
          return (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              {/* <td>{user[2] === " " ? "Unknown Country" : user[2]}</td> */}
              <td>{new Date(user.date).toLocaleDateString()+" "+new Date(user.date).toLocaleTimeString()}</td>
              <td>
                {
                  user.isLogin===true?<span className={`badge badge-boxed badge-soft-success`}>
                    Login
                  </span>:user.isLogin===true?<span className={`badge badge-boxed badge-soft-danger`}>
                    Logout
                  </span>:<span className={`badge badge-boxed badge-soft-danger`}>
                    Unknown Login
                  </span>
                }
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default UserLoginTable;
