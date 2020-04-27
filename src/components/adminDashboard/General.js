import React from "react";
import { Link } from "react-router-dom";
import CardGeneral from "./componentGeneral/CardGeneral";

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

export default General;
