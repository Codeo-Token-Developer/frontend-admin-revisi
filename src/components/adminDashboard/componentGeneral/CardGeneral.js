import React from 'react'
import FeeFormGeneral from './formGeneral/FeeFormGeneral';
import RefFormGeneral from './formGeneral/RefFormGeneral';


function CardGeneral(props) {
  // const [dataFee, setDataFee] = useState()
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
                <RefFormGeneral/>
                {/* ================================== FORM DATA ================================== */}
              </div>
              {/*end card-body*/}
            </div>
            {/*end card*/}
          </div>
        </div>
    );
}

export default CardGeneral