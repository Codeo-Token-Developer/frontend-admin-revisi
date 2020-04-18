import React, { useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

function BankAccount() {
  return (
    <>
      <div className="row">
        <div className="col-sm-12">
          <div className="page-title-box">
            <div className="float-right">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link href="/">Admin</Link>
                </li>
                <li className="breadcrumb-item active">Bank Account</li>
              </ol>
            </div>
            <h4 className="page-title">Bank Account</h4>
          </div>
        </div>
      </div>

      <CardBankAccount />
      <PopupModal />
    </>
  );
}

const CardBankAccount = (props) => {
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
            >
              + Add New
            </button>
            <h4 className="header-title mt-0 mb-3">Bank Account</h4>
            <div className="table-responsive">
              <table className="table table-hover mb-0">
                <thead className="thead-light">
                  <tr>
                    <th className="border-top-0">Bank Name</th>
                    <th className="border-top-0">Swift Code</th>
                    <th className="border-top-0">Action</th>
                  </tr>
                  {/*end tr*/}
                </thead>
                <tbody>
                  <tr>
                    <td>BCA</td>
                    <td>5236421</td>
                    <td>
                      <Link href="#" className="mr-2">
                        <i className="fas fa-edit text-info font-16" />
                      </Link>
                      <Link href="#">
                        <i className="fas fa-trash-alt text-danger font-16" />
                      </Link>
                    </td>
                  </tr>
                  {/*end tr*/}
                </tbody>
              </table>{" "}
              {/*end table*/}
            </div>
            {/*end /div*/}
          </div>
          {/*end card-body*/}
        </div>
        {/*end card*/}
      </div>
      {/*end col*/}
    </div>
  );
};

const PopupModal = () => {
  const stateBankAccount = {
    bankAccount: "",
    swiftCode: ""
  }
  const [dataBankAccount, setDataBankAccount] = useState(stateBankAccount);

  const handleChangeBankAccount = (e) => {
    setDataBankAccount({
      ...dataBankAccount,
      [e.target.name]: e.target.value
    })
  }

  const submitBankAccount = (e) => {
    e.preventDefault();
    Axios({
      url: "https://hookb.in/kxe28PpVRYcM9mrmLeB0",
      method: "POST",
      data: {
        bankAccount: dataBankAccount.bankAccount,
        swiftCode: dataBankAccount.swiftCode
      }
    })
    .then(res => {
      alert("SUCCESS")
    })
    .catch(err => {
      alert("FAILED")
    })
  }


  return (
    <div
      className="modal fade bs-example-modal-center"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="myLargeModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title mt-0" id="myLargeModalLabel">
              Add New
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
            <form onSubmit={submitBankAccount}>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="Title">Bank Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="bank_name"
                      name="bankAccount"
                      onChange={handleChangeBankAccount}
                      required
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="Email">Swift Code</label>
                    <input
                      type="text"
                      className="form-control"
                      id="swift_code"
                      name="swiftCode"
                      onChange={handleChangeBankAccount}
                      required
                    />
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-sm btn-gradient-primary float-left"
              >
                Save
              </button>
              <button
                type="button"
                className="btn btn-sm btn-gradient-danger float-right"
              >
                Clear
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

export default BankAccount;
