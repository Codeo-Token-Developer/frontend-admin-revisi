import React from 'react'

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

export default FeeFormGeneral