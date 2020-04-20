import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { urlContext } from "../../Context";
import CardBankAccount from "./componentBankAccount/CardBankAccount";
import PopUpBankAccount from "./componentBankAccount/PopUpBankAccount";

function BankAccount() {
  let baseURL = useContext(urlContext)

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
      <CardBankAccount baseURL={baseURL}/>
      <PopUpBankAccount baseURL={baseURL}/>
    </>
  );
}

export default BankAccount;
