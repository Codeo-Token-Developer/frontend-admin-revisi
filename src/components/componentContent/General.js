import React from "react";
import { Link } from "react-router-dom";

function General() {
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
                <li className="breadcrumb-item active">General</li>
              </ol>
            </div>
            <h4 className="page-title">General</h4>
          </div>
        </div>
      </div>

      <CardGeneral />
    </>
  );
}

const CardGeneral = () => {
  return (
    <div className="row">
      <div className="col-lg-6">
        <div className="card">
          <div className="card-body">
            <h4 className="mt-0 header-title">Fees Setting</h4>
            <p className="text-muted mb-3">
              Edit Fees Setting For Transfer Codeo
            </p>
            {/* ================================== FORM DATA ================================== */}
            <FeeFormGeneral />
            {/* ================================== FORM DATA ================================== */}
          </div>
          {/*end card-body*/}
        </div>
        {/*end card*/}
      </div>

      <div className="col-lg-6">
        <div className="card">
          <div className="card-body">
            <h4 className="mt-0 header-title">Ref Setting</h4>
            <p className="text-muted mb-3">
              Edit Ref Setting For Referral Code
            </p>
            {/* ================================== FORM DATA ================================== */}
            <RefFormGeneral />
            {/* ================================== FORM DATA ================================== */}
          </div>
          {/*end card-body*/}
        </div>
        {/*end card*/}
      </div>
    </div>
  );
};

function FeeFormGeneral(props) {
  return (
    <form>
      <div className="form-group">
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">Fee</span>
          </div>
          <input
            type="text"
            name="fee_setting"
            className="form-control"
            value="0.3"
          />
          <div className="input-group-append">
            <span className="input-group-text">
              <i className="fas fa-percent" />
            </span>
          </div>
        </div>
      </div>
      <button type="submit" className="btn btn-gradient-primary float-left">
        Update
      </button>
      <button type="button" className="btn btn-gradient-danger float-right">
        Reset
      </button>
    </form>
  );
}

function RefFormGeneral(props) {
  return (
    <form>
      <div className="form-group">
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">Ref</span>
          </div>
          <input
            type="text"
            name="ref_setting"
            className="form-control"
            value="0.3"
          />
          <div className="input-group-append">
            <span className="input-group-text">
              <i className="fas fa-percent" />
            </span>
          </div>
        </div>
      </div>
      <button type="submit" className="btn btn-gradient-primary float-left">
        Update
      </button>
      <button type="button" className="btn btn-gradient-danger float-right">
        Reset
      </button>
    </form>
  );
}

export default General;
