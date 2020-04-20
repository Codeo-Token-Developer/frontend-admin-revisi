import React,{useState,useEffect} from "react";
import axios from "axios";

export default function CardUserManagement(props){

  let [data, setData] = useState(undefined);
  const [msgs,setMsgs]=useState("");

  const [loading,setLoading]=useState(false);

  useEffect(()=>{

    function getUsers() {
      axios({
        url: `${props.baseUrl}/users`,
        method: "GET",
        headers: {
          adminToken: localStorage.getItem("admincodeotoken"),
        },
      })
        .then(({ data }) => {
          setData(data.users);
          setLoading(true);
        })
        .catch((err) => {
          setLoading(null);
          setData({
            username: "Username is empty",
            email: "Email is empty",
            id_country: "Country is empty",
          });
          let msg="";
          if (err.response === undefined) {
            msg=err.message;
          } else {
            msg=err.response.data.message;
          }
          setMsgs(msg);
        });
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
  let confirm=window.confirm("Are you sure delete users "+e.username+" ?");

  if(confirm){

    axios({
      url: `${props.baseUrl}/users/${e.id}`,
      method: "DELETE",
      headers: {
        adminToken: localStorage.getItem("admincodeotoken"),
      },
    })
      .then(({ data }) => {
        alert(JSON.stringify(data));
      })
      .catch((err) => {
        let msg="";
        if (err.response === undefined) {
          msg=err.message;
        } else {
          msg=err.response.data.message;
        }
        setMsgs(msg);
      });
    }else{
      alert("Your cancel delete users "+e.username);
    }
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

                {(loading===true) ? (
                  <DataList data={data} DeleteUsers={DeleteUsers} EditUsers={EditUsers} />
                ) : (loading===false)?
                  <div class="spinner-border text-primary" role="status">
                    <span class="sr-only">Loading...</span>
                  </div>:<div>{msgs}</div>
                }

                  {/*end tr*/}
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

function DataList(props){
  return (
    <>
    <tr>
      <th>Name</th>
      <th>Verification</th>
      <th>Registration time</th>
      <th>Email</th>
      <th>Country</th>
      <th>Action</th>
    </tr>
    {props.data === undefined || props.data === null
      ? []
      : props.data.map((item) => {
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
                {/*
                  <button
                  className="mr-2 btn btn-success"
                  value={item._id}
                  onClick={() =>props.EditUsers(item._id)}
                  >
                  <i className="fas fa-edit text-white font-16"></i>
                  </button>
                */}
                <button
                  className="mr-2 btn btn-danger"
                  value={item._id}
                  onClick={() =>props.DeleteUsers({id:item._id,username:item.username})}
                >
                  <i className="fas fa-trash-alt text-white font-16"></i>
                </button>
              </td>
            </tr>
          );
        })}
    </>
  );
}
