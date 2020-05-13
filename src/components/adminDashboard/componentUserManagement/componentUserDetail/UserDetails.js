import React from "react";

import {urlContext} from "../../../../Context";

import {
    Alert 
} from "reactstrap";

import Avatar from "../picture1.jpg";
import axios from "axios";

function Details(props) {
    
    let baseUrl=React.useContext(urlContext);
    let [data, setData] = React.useState(undefined);
    let [msgs,setMsgs]=React.useState("");
    let [color,setColor]=React.useState("danger");
    let [dalert,setAlert]=React.useState(false);

    const alertToggle=()=>{
        setAlert(!dalert);
    }

    React.useEffect(()=>{
        function getUsers() {
            setAlert(true);
            setColor("info");
            setMsgs(" Please wait, a few minutes, the request is being processed. ");
            axios({
              url: `${baseUrl}/users`,
              method: "GET",
              headers: {
                adminToken: localStorage.getItem("admincodeotoken"),
              },
            })
              .then(({ data }) => {
                setData(data.users.reverse());
                setColor("success");
                setAlert(true);
              })
              .catch((err) => {
                setColor("danger");
                let msg = "";
                if(err.response.data.message===undefined){
                    msg=err.message;
                }else{
                    msg=err.response.data.message;
                }
                setMsgs(msg);
              });
        }
        getUsers();
    },[]);
    
    if(color==="danger"){
        return (
            <Alert
            style={{ height: "auto" }}
            color={color}
            isOpen={dalert}
            toggle={alertToggle}
          >
            {color === "danger" ? (
              <i class="mdi mdi-alert-outline alert-icon"></i>
            ) : color === "info" ? (
              <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
              </div>
            ) : null}
            {msgs}
          </Alert>
        );
    }else if(data===undefined?null:data[props.id]===undefined?true:false){
    return (
        <div className="m-3">
            User Not Found
        </div>
    );
    }else{
    return (
        <div className="container-fluid mt-4">
            <div className="row justify-content-center">
                
                <div className="col-sm-4 col-md-4 justify-content-center">
                    <img width="300" height="300" src={data===undefined?null:data[props.id].avatar===undefined?Avatar:data[props.id].avatar} alt="avatar" />
                    <h4>{data===undefined?null:data[props.id].full_name}</h4>
               </div>
               <div className="col-sm-8 col-md-8">
                   <div className="row">
                       <div style={{"font-size":"16px"}} className="col m-2">
                            Username
                       </div>
                       <div style={{"font-size":"14px"}} className="col">
                         {data===undefined?null:data[props.id].username}
                       </div>
                   </div>

                   <div className="row">
                       <div style={{"font-size":"16px"}} className="col m-2">
                            Email
                       </div>
                       <div style={{"font-size":"14px"}} className="col">
                         {data===undefined?null:data[props.id].email}
                       </div>
                   </div>

                   <div className="row">
                       <div style={{"font-size":"16px"}} className="col m-2">
                            Verification
                       </div>
                       <div style={{"font-size":"14px"}} className="col">
                         {data===undefined?null:(data[props.id].verification===true)?<div className="p-2 badge badge-boxed badge-soft-success">Verify</div>:<div className="badge badge-boxed badge-soft-danger">Not Verify</div>}
                       </div>
                   </div>

                   <div className="row">
                       <div style={{"font-size":"16px"}} className="col m-2">
                            Login
                       </div>
                       <div style={{"font-size":"14px"}} className="col">
                            {data===undefined?null:(data[props.id].isLogin===true)?<div className="p-2 badge badge-boxed badge-soft-success">Login</div>:<div className="badge badge-boxed badge-soft-danger">Not Login</div>}
                       </div>
                   </div>

                   <div className="row">
                       <div style={{"font-size":"16px"}} className="col m-2">
                            Google Authenticator 2FA
                       </div>
                       <div style={{"font-size":"14px"}} className="col">
                             {data===undefined?null:(data[props.id].approval_verified===true)?<div className="p-2 badge badge-boxed badge-soft-success">Active</div>:<div className="badge badge-boxed badge-soft-danger">Not Active</div>}
                        </div>
                   </div>

                   <div className="row">
                       <div style={{"font-size":"16px"}} className="col m-2">
                            Registration Time
                       </div>
                       <div style={{"font-size":"14px"}} className="col">
                            {data===undefined?null:new Date(data[props.id].created_at).toLocaleDateString()+" "+new Date(data[props.id].created_at).toLocaleTimeString()}
                        </div>
                   </div>

                   <div className="row">
                       <div style={{"font-size":"16px"}} className="col m-2">
                            Last Login Time
                       </div>
                       <div style={{"font-size":"14px"}} className="col">
                            {data===undefined?null:new Date(data[props.id].updatedAt).toLocaleDateString()+" "+new Date(data[props.id].updatedAt).toLocaleTimeString()}
                        </div>
                   </div>

                   <div className="row">
                       <div style={{"font-size":"16px"}} className="col m-2">
                            Refferal Address
                       </div>
                       <div style={{"font-size":"14px"}} className="col">
                            {data===undefined?null:data[props.id].referral_address===undefined?"Refferal unknown":data[props.id].referral_address}
                       </div>
                   </div>


                   <div className="row">
                       <div style={{"font-size":"16px"}} className="col m-2">
                            Country
                       </div>
                       <div style={{"font-size":"14px"}} className="col">
                         {data===undefined?null:(data[props.id].id_country===undefined)?<div className="p-2 badge badge-boxed badge-soft-danger">Unknown Country</div>:<div className="badge badge-boxed badge-soft-success">{data[props.id].id_country}</div>}
                       </div>
                   </div>

                </div>

            </div>
        </div>
    );
    }
}

export default Details;