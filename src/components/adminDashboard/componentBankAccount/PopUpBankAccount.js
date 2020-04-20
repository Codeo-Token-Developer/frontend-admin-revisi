import React, { useState } from 'react'
import Axios from 'axios';

function PopUpBankAccount(props) {
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
}

export default PopUpBankAccount