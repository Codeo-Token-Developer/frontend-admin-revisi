import React from "react";

import ReactToPdf from "react-to-pdf";
import Excel from "react-html-table-to-excel";

import { Button } from "reactstrap";

const $ = require("jquery");
$.Datatable = require("datatables.net-bs");

const PDFref=React.createRef();
const refPdf=React.createRef();

function Deposit() {

    const [selection,setSelection]=React.useState(undefined);
    const [dataCard,setDataCard]=React.useState(undefined);

    const [typeDW,setDW]=React.useState(false);
    const [typeTR,setTR]=React.useState(false);

    const [logicSelection,setLogicSelection]=React.useState({
        searchKeyword:"",
        fromData:"",
        toData:"",
        status:"",
    });

    //https://www.npmjs.com/package/react-to-pdf
    //https://www.npmjs.com/package/react-html-table-to-excel

    const dummyDataBank=[

        {
            no:"1",
            TX_Id:"25890048",
            Time:new Date("2020-01-1").toISOString(),
            Type:"WITHDRAW",
            BANK_NAME:"BANK BCA",
            Amount:"0.123",
            BANK_Account:"35Fd4afdsXCh4787EDFJcrl4jg4m5srt66",
            Transfer_Process:"Failed",
            Status:"https://explorer.blockchain/4353459034u590345903490",
        },


        {
            no:"2",
            TX_Id:"25890048",
            Time:new Date("2020-05-1").toISOString(),
            Type:"WITHDRAW",
            BANK_NAME:"BANK BCA",
            Amount:"0.121",
            BANK_Account:"35Fd4afdsXCh4787EDFJcrl4jg4m5srt66",
            Transfer_Process:"Success",
            Status:"https://explorer.blockchain/4353459034u590345903490",
        },

        {
            no:"3",
            TX_Id:"25890048",
            Time:new Date("2020-05-3").toISOString(),
            Type:"DEPOSIT",
            BANK_NAME:"BANK BNI",
            Amount:"0.121",
            BANK_Account:"35Fd4afdsXCh4787EDFJcrl4jg4m5srt66",
            Transfer_Process:"Success",
            Status:"https://explorer.blockchain/4353459034u590345903490",
        },

        {
            no:"4",
            TX_Id:"25890048",
            Time:new Date("2020-05-5").toISOString(),
            Type:"DEPOSIT",
            BANK_NAME:"BANK MANDIRI",
            Amount:"0.121",
            BANK_Account:"35Fd4afdsXCh4787EDFJcrl4jg4m5srt66",
            Transfer_Process:"Success",
            Status:"https://explorer.blockchain/4353459034u590345903490",
        },

    ];

    const optionsBank = {
        orientation: "portrait",
        format:"c2",
    };
    const optionsCard = {
        orientation: "portrait",
        format:"c2",
    };

//https://stackblitz.com/edit/react-component-to-pdf?file=DocService.js
    const dummyDataCard=[

        {
            no:"1",
            TX_Id:"25890049",
            Time:new Date("2020-05-1").toISOString(),
            Type:"TRANSFER_COIN",
            BANK_NAME:"BANK BCA",
            Amount:"0.121",
            BANK_Account:"35Fd4afdsXCh4787EDFJcrl4jg4m5srt66",
            Transfer_Process:"Success",
            Status:"https://explorer.blockchain/4353459034u590345903490",
        },

        {
            no:"2",
            TX_Id:"25890052",
            Time:new Date("2020-05-3").toISOString(),
            Type:"TRANSFER_COIN",
            BANK_NAME:"BANK BCA",
            Amount:"0.121",
            BANK_Account:"35Fd4afdsXCh4787EDFJcrl4jg4m5srt66",
            Transfer_Process:"Success",
            Status:"https://explorer.blockchain/4353459034u590345903490",
        },

        {
            no:"3",
            TX_Id:"25890051",
            Time:new Date("2020-05-5").toISOString(),
            Type:"RECEIVE_COIN",
            BANK_NAME:"BANK BRI",
            Amount:"0.121",
            BANK_Account:"35Fd4afdsXCh4787EDFJcrl4jg4m5srt66",
            Transfer_Process:"Success",
            Status:"https://explorer.blockchain/4353459034u590345903490",
        },

    ];

    const handleChange=(e)=>{
        setLogicSelection({...logicSelection,[e.target.name]:e.target.value});
    };

    React.useEffect(()=>{
        setSelection(dummyDataBank.map((item,index)=>{
            return Object.values(item);
        }).filter((item,index)=>{
          item[0]=index+1;
          item[2]=new Date(item[2]).toLocaleDateString()+" "+new Date(item[2]).toLocaleTimeString();
          return item;
        }));

        setDataCard(dummyDataCard.map((item,index)=>{
            return Object.values(item);
        }).filter((item,index)=>{
          item[0]=index+1;
          item[2]=new Date(item[2]).toLocaleDateString()+" "+new Date(item[2]).toLocaleTimeString();
          return item;
        }));
      },[]);
  
        if (!$.fn.dataTable.isDataTable("#BankTable")) {
            $("#BankTable").DataTable({
                dom: '<"wrapper">tip',
                fnDrawCallback: function () {
                    $("#BankTable_wrapper").removeClass("form-inline");
                    $(".paginate_button a").addClass("page-link");
                    $(".paginate_button").addClass("page-item");
                  },
                data:selection===undefined?[]:selection,
                columns:[
                    {title:"No"},
                    {title:"TX Id"},
                    {title:"Time"},
                    {title:"Type"},
                    {title:"BANK_NAME"},
                    {title:"Amount"},
                    {title:"BANK_Account"},
                    {title:"Transfer_Process"},
                    {title:"Status"},
                ],
                destroy:true
            });
        }

        if (!$.fn.dataTable.isDataTable("#CreditCard")) {
            $("#CreditCard").DataTable({
                dom: '<"wrapper">tip',
                fnDrawCallback: function () {
                    $("#CreditCard_wrapper").removeClass("form-inline");
                    $(".paginate_button a").addClass("page-link");
                    $(".paginate_button").addClass("page-item");
                  },
                data:dataCard===undefined?[]:dataCard,
                columns:[
                    {title:"No"},
                    {title:"TX Id"},
                    {title:"Time"},
                    {title:"Type"},
                    {title:"BANK_NAME"},
                    {title:"Amount"},
                    {title:"BANK_Account"},
                    {title:"Transfer_Process"},
                    {title:"Status"},
                ],
                destroy:true
            });
        }

    const filterSort=()=>{
    
        if(["DEPOSIT","WITHDRAW","NONE"].includes(logicSelection.status)){
            setDW(true);
            setTR(false);
            let searchDatax=dummyDataBank.map((item)=>{
                return Object.values(item);
            }).filter((item)=>{
                return logicSelection.searchKeyword===""?item:item.toString().toLowerCase().includes(logicSelection.searchKeyword.toString().toLowerCase())?item:null;
            }).filter((item)=>{
                if(logicSelection.status===item[3]){
                    return item;
                }else if(logicSelection.status==="NONE"){
                    return item;
                }else{
                    return null;
                }
            }).filter((item,index)=>{
                if(logicSelection.fromData===""&&logicSelection.toData===""){
                    item[2]=new Date(item[2]).toLocaleDateString()+" "+new Date(item[2]).toLocaleTimeString();
                    return item;
                  }else if(logicSelection.fromData===""||logicSelection.toData===""){
                    item[2]=new Date(item[2]).toLocaleDateString()+" "+new Date(item[2]).toLocaleTimeString();
                    return item;
                  }else{
                    let now=new Date(item[2]);
                    let fromDate=new Date(logicSelection.fromData);
                    let toDate=new Date(logicSelection.toData);
                    if(now>=fromDate&&now<=toDate){
                      item[0]=index+1;
                      item[2]=new Date(item[2]).toLocaleDateString()+" "+new Date(item[2]).toLocaleTimeString();
                        return item;
                    }else{
                        return null;
                    }
                  }
            });
           
            $("#BankTable").DataTable({
                destroy:true,
                fnDrawCallback: function () {
                    $("#BankTable_wrapper").removeClass("form-inline");
                    $(".paginate_button a").addClass("page-link");
                    $(".paginate_button").addClass("page-item");
                  },
                data:searchDatax,
                dom: '<"wrapper">tip',
                columns:[
                    {title:"No"},
                    {title:"TX Id"},
                    {title:"Time"},
                    {title:"Type"},
                    {title:"BANK_NAME"},
                    {title:"Amount"},
                    {title:"BANK_Account"},
                    {title:"Transfer_Process"},
                    {title:"Status"},
                ],
              });
        }else if(["TRANSFER_COIN","RECEIVE_COIN","NONE"].includes(logicSelection.status)){
            setDW(false);
            setTR(true);
            let searchDatax=dummyDataCard.map((item)=>{
                return Object.values(item);
            }).filter((item)=>{
                return logicSelection.searchKeyword===""?item:item.toString().toLowerCase().includes(logicSelection.searchKeyword.toString().toLowerCase())?item:null;
            }).filter((item)=>{
                if(logicSelection.status===item[3]){
                    return item;
                }else if(logicSelection.status==="NONE"){
                    return item;
                }else{
                    return null;
                }
            }).filter((item,index)=>{
                if(logicSelection.fromData===""&&logicSelection.toData===""){
                    item[2]=new Date(item[2]).toLocaleDateString()+" "+new Date(item[2]).toLocaleTimeString();
                    return item;
                  }else if(logicSelection.fromData===""||logicSelection.toData===""){
                    item[2]=new Date(item[2]).toLocaleDateString()+" "+new Date(item[2]).toLocaleTimeString();
                    return item;
                  }else{
                    let now=new Date(item[2]);
                    let fromDate=new Date(logicSelection.fromData);
                    let toDate=new Date(logicSelection.toData);
                    if(now>=fromDate&&now<=toDate){
                      item[0]=index+1;
                      item[2]=new Date(item[2]).toLocaleDateString()+" "+new Date(item[2]).toLocaleTimeString();
                        return item;
                    }else{
                        return null;
                    }
                  }
            });
            $("#CreditCard").DataTable({
                destroy:true,
                fnDrawCallback: function () {
                    $("#CreditCard_wrapper").removeClass("form-inline");
                    $(".paginate_button a").addClass("page-link");
                    $(".paginate_button").addClass("page-item");
                  },
                data:searchDatax,
                dom: '<"wrapper">tip',
                columns:[
                    {title:"No"},
                    {title:"TX Id"},
                    {title:"Time"},
                    {title:"Type"},
                    {title:"BANK_NAME"},
                    {title:"Amount"},
                    {title:"BANK_Account"},
                    {title:"Transfer_Process"},
                    {title:"Status"},
                ],
              });
            
        }
    };
    
    return (
        <div className="row card text-center">

        <div className="card-body table-responsive" style={{backgroundColor: "#151933"}}>

        <table className="table table-borderless m-3">
            <tbody>
            <tr>
                <td></td>
                <td></td>
                <td>
                    <div className="input-group">
                        <tr>
                            <td>
                                Search
                            </td>
                            <td>
                                <input type="text" name="searchKeyword" className="form-control" placeholder="Keyword" onChange={handleChange} />
                            </td>
                        </tr>
                       
                    </div>
                </td>

                <td>
                    <div className="input-group">
                        <tr>
                            <td>
                                From
                            </td>
                            <td>
                                <input type="date" name="fromData" className="form-control" placeholder="Date Picker" onChange={handleChange} />
                            </td>
                        </tr>
                       
                    </div>
                </td>

                <td>
                    <div className="input-group">
                        <tr>
                            <td>
                                To 
                            </td>
                            <td>
                                <input type="date" name="toData" className="form-control" placeholder="Date Picker" onChange={handleChange} />
                            </td>
                        </tr>
                       
                    </div>
                </td>

                <td>
                    
                <select name="status" class="btn text-white" style={{"background":"#1C233F","boxShadow":"none","border":"none"}} onChange={handleChange}>
                        <option value="NONE">Type</option>
                        <option value="DEPOSIT">Deposit</option>
                        <option value="WITHDRAW">Withdraw</option>
                        <option value="TRANSFER_COIN">Transfer Coin</option>
                        <option value="RECEIVE_COIN">Receive Coin</option>
                </select>
                   
                </td>
                
                <td>
                   <button className="btn btn-primary" onClick={filterSort}>Filter</button>
                </td>

                <td></td>
                <td></td>
            </tr>
            </tbody>
        </table>

                <div className="clearfix mt-5">
                    <div className="float-left m-2"><h5>BANK DEPOSIT WITHDRAW</h5></div>
                    <div className="float-right m-2">
                    <Excel
                        id="test-table-xls-button"
                        className="btn btn-light text-warning"
                        table="BankTable"
                        filename="tablexls"
                        sheet="tablexls"
                        buttonText="Export to XLS"
                    />
                    </div>
                    <table ref={PDFref} className="display table table-borderless" id="BankTable" width="100%">
                    </table>
                </div>
                
               
                    <div className="clearfix mt-5">
                    <div className="float-left">
                        <h5>CREDIT CARD AND PAYPAL DEPOSIT / WITHDRAW</h5>
                    </div>
                    <div className="float-right m-2">
                        <Excel
                            id="test-table-xls-button"
                            className="btn btn-light text-warning"
                            table="CreditCard"
                            filename="tablexls"
                            sheet="tablexls"
                            buttonText="Export to XLS"
                        />
                    </div>
                    </div>
                    <table ref={refPdf} className="display table table-borderless" id="CreditCard" width="100%">
                    </table>
                    
                </div>
            </div>
    )
}


export default Deposit;