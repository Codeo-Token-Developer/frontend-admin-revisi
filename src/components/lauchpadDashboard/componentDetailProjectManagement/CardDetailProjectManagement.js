import React, { useEffect, useState } from "react";
import Axios from "axios";

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { useParams } from "react-router-dom";

function CardDetailProjectManagement(props) {
  let [data, setData] = useState(undefined);
  let [loading, setLoading] = useState(false)
  let {id} = useParams()
  //   const [msgs, setMsgs] = useState("");

  useEffect(() => {
    Axios({
      url: `http://localhost:3005/lp/project/${id}`,
      method: "GET",
      headers: {
          admintoken: localStorage.getItem("admincodeotoken")
      }
    })
      .then((res) => {
        setLoading(true);
        setData(res.data);
      })
      .catch((err) => {
        let msg = "";
        if (err.response === undefined) {
          msg = err.message;
        } else {
          msg = err.response.data.message;
        }
        setLoading(false)
      });
  },[]);

  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal(!modal);

  return (
    <div className="row">
      <div className="col-12">
        <div className="card">
          <div className="card-body order-list row">
            <div className="col-lg-12 row">
              <div
                className="col-md-3"
                align="center"
                style={{ backgroundColor: "#1c233f" }}
              >
                <div className="user-avatar rounded-circle pull-width p-2 bg-white mt-5 mb-3 col-8">
                  <img
                    alt=""
                    width="100%"
                    className="rounded-circle"
                    src={!data?"/assets/images/hint.png":data[0].coin_symbol}
                  />
                </div>
                {/* <h3 align="center">{data.full_name}</h3> */}
                <h5 className="mb-5" align="center">
                  {!data?"Unknown Coin name":data[0].full_name}
                </h5>
              </div>
              <div className="col-md-9 pl-5 row">
                <div className="col-md-6">
                  <h5>PROJECT NAME</h5>
                  <h3 className="mb-5">{data===undefined?"Unknown Project":data[0].name}</h3>
                  {/* <h5>SHORT DATA</h5>
                  <h3 className="mb-5">{data===undefined?"Unknown Project":data[0].name}</h3> */}
                  <h5>Technology Foundation</h5>
                  <h3 className="mb-5">{data===undefined?"Unknown Project":data[0].technology_foundation}</h3>
                  <h5>TARGET ALL STAGE</h5>
                  <h3 className="mb-5">{data===undefined?"Unknown Project":data[0].session_supply.toLocaleString()} {data===undefined?null:data[0].name} </h3>
                </div>
                <div className="col-md-6">
                  <h5>TARGET BY STAGE</h5>
                  <h3 className="mb-5">STAGE ( I ) & STAGE ( II )</h3>
                  <h5>RAISE</h5>
                  <h3 className="mb-5">1 BTC</h3>
                  <h5>STATUS</h5>
                  <p className="mb-5 alert alert-warning col-5" align="center">
                    PENDING
                  </p>
                </div>
                <div className="col-12 progress mb-2">
                  <div
                    className="progress-bar bg-primary"
                    role="progressbar"
                    style={{ width: "79%" }}
                    aria-valuenow={79}
                    aria-valuemin={0}
                    aria-valuemax={79}
                  >
                    79%
                  </div>
                </div>
              </div>
            </div>
            <hr className="col-12 mt-4 mb-4" />
            <div className="col-lg-12">
              <h4 className="header-title mt-0 mb-3">Schedule</h4>
            </div>
            <div className="col-lg-12">
              <div className="table-responsive">
                {loading === true ? (
                  <DataList data={data} toggleModal={toggleModal} />
                ) : (
                  <div class="spinner-border text-primary" role="status">
                    <span class="sr-only">Loading...</span>
                  </div>
                )}
                {/*end table*/}
              </div>
            </div>
            <div className="col-lg-12">
              <div className="table-responsive">
                {loading === true ? (
                  <TotalList data={data} />
                ) : (
                  <div class="spinner-border text-primary" role="status">
                    <span class="sr-only">Loading...</span>
                  </div>
                )}
                {/*end table*/}
              </div>
            </div>
            {/*end /div*/}
          </div>
          {/*end card-body*/}
        </div>
        {/*end card*/}
      </div>
      {/*end col*/}
      <ProcessAction statusModal={modal} toggleModal={toggleModal} />
    </div>
  );
}

const TotalList = (props) => {
  return (
    <>
      <table className="table table-hover mb-0">
        <thead className="">
          <tr>
            <th colSpan="2">TOTAL STAGE</th>
            <th>TOTAL TARGET RAISE</th>
            <th>TOTAL RAISE</th>
            <th colSpan="3">TOTAL PERCENTAGE</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="2">All Stage</td>
            <td>100 BTC</td>
            <td>2,5 BTC</td>
            <td colSpan="3">3 %</td>
          </tr>
          {!props.data
            ? []
            : props.data.map((item) => {
                return <></>;
              })}
        </tbody>
      </table>
    </>
  );
};

const DataList = (props) => {
  return (
    <>
      <table className="table table-hover mb-4">
        <thead className="thead-light">
          <tr>
            <th>STAGE</th>
            <th>DATE/TIME</th>
            <th>TARGET RAISE</th>
            <th>RAISE</th>
            <th>PERCENTAGE</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>STAGE ( I )</td>
            <td>29/5/20 - 29/7/20</td>
            <td>50 BTC</td>
            <td>1,5 BTC</td>
            <td>1 %</td>
            <td>
              <button
                className="btn btn-info btn-sm"
                onClick={props.toggleModal}
              >
                PROCESS
              </button>
            </td>
          </tr>
          <tr>
            <td>STAGE ( II )</td>
            <td>29/8/20 - 29/9/20</td>
            <td>50 BTC</td>
            <td>2,5 BTC</td>
            <td>2 %</td>
            <td>
              <button
                className="btn btn-info btn-sm"
                onClick={props.toggleModal}
              >
                PROCESS
              </button>
            </td>
          </tr>
          {props.data === undefined || props.data === null
            ? []
            : props.data.map((item) => {
                return <></>;
              })}
        </tbody>
      </table>
    </>
  );
};

function ProcessAction(props) {
  return (
    <>
      <Modal isOpen={props.statusModal}>
        <ModalHeader toggle={props.toggleModal}>Transfer Confirm</ModalHeader>
        <ModalBody>
          <form>
            <div className="form-group mb-0">
              <label className="full-left">Receiver</label>
              <div className="input-group mt-3">
                <div className="input-group-prepend">
                  <span className="input-group-text bg-light" id="basic-addon1">
                    Address
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="0-X"
                  aria-label="Address"
                  aria-describedby="basic-addon1"
                  name="address"
                  required
                />
              </div>
              <br />
              <label className="full-left">Total</label>
              <div className="input-group mt-3">
                <div className="input-group-prepend">
                  <span className="input-group-text bg-light" id="basic-addon1">
                    CODEO
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="CODEO"
                  aria-label="CODEO"
                  aria-describedby="basic-addon1"
                  required
                />
              </div>
              <br />
              <label className="full-left">TXHASH</label>
              <div className="input-group mt-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="TXHASH"
                  aria-label="TXHASH"
                  aria-describedby="basic-addon1"
                  required
                />
              </div>
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

export default CardDetailProjectManagement;
