import axios from "axios";
import React from "react";
import Swal from "sweetalert2";
import {urlContext} from "../../../Context";
import {Button} from "reactstrap";

import {useHistory} from "react-router-dom";

export function BTNProjectApprove(props) {
    let baseUrl = React.useContext(urlContext);
  
    let history = useHistory();
  
    let UpdateProject = React.useCallback(() => {
    Swal.showLoading();
      let projectId = props.projectId;
      axios({
        url: `${baseUrl}/lp/approve/${projectId}`,
        method: 'POST',
        headers: {
          admintoken: localStorage.getItem('admincodeotoken'),
        },
      })
        .then(({ data }) => {
          Swal.fire({
            icon: 'success',
            title: 'Project Approve',
            text: data.message,
            timer: 5000,
          }).then(() => {
            history.push('/operationMain/listingApproval');
          });
        })
        .catch((err) => {
          let msg = '';
          if (err.response === undefined) {
            msg = err.message;
          } else {
            msg = err.response.data.message;
          }
          Swal.fire({
            icon: 'error',
            title: 'Project Approve Error',
            text: msg,
            timer: 0,
          });
        });
    }, [baseUrl, props.projectId, history]);
  
    return <Button color="success" onClick={UpdateProject}>Project Approve</Button>;
  }
  
  export function BTNProjectReject(props) {
    let baseUrl = React.useContext(urlContext);
  
    let history = useHistory();
  
    let UpdateProject = React.useCallback(() => {
        Swal.showLoading();
      let projectId = props.projectId;
      axios({
        url: `http://localhost:3005/lp/reject/${projectId}`,
        method: 'POST',
        headers: {
          admintoken: localStorage.getItem('admincodeotoken'),
        },
      })
        .then(({ data }) => {
          Swal.fire({
            icon: 'success',
            title: 'Project Reject',
            text: data.message,
            timer: 5000,
          });
          history.push('/operationMain/listingApproval');
        })
        .catch((err) => {
          let msg = '';
          if (err.response.data.message === undefined) {
            msg = err.message;
          } else {
            msg = err.response.data.message;
          }
          Swal.fire({
            icon: 'error',
            title: 'Project Reject Error',
            text: msg,
            timer: 0,
          });
        });
    }, [baseUrl, props.projectId, history]);
  
    return <Button color="danger" onClick={UpdateProject}>PROJECT Reject</Button>;
  }
  