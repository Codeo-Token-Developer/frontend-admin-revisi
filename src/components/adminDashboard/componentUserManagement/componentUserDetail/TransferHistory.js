import React from "react";

import ReactToPdf from "react-to-pdf";
import Excel from "react-html-table-to-excel";

import { Button } from "reactstrap";
import Axios from "axios";

import Transfer from "./TransferTradeHistory.json";

const PDFref=React.createRef();

const $ = require("jquery");
$.Datatable = require("datatables.net-bs");

export default function TransferHistory() {

    const [selection,setSelection]=React.useState(undefined);
    const [logicSelection,setLogicSelection]=React.useState({
        searchKeyword:"",
        fromData:"",
        toData:"",
        coin:"",
        status:"",
    });

    const options = {
        orientation: "portrait",
        format:"c2",
    };


    const handleChange=(e)=>{
        setLogicSelection({...logicSelection,[e.target.name]:e.target.value});
    };

    // const getTransferHistory=React.useCallback(()=>{
    //     Axios({
    //         url:`http://localhost:1000/historyTransfer`,
    //         method:"GET"
    //     }).then(({data})=>{
    //         setSelection(data.data.dummyData.map((item,index)=>{
    //             return Object.values(item);
    //         }).filter((item,index)=>{
    //           item[0]=index+1;
    //           item[2]=new Date(item[2]).toLocaleDateString()+" "+new Date(item[2]).toLocaleTimeString();
    //           return item;
    //         }));
    //     }).catch(err=>{
    //         console.log(err);
    //     });
    // },[setSelection]);

    // React.useEffect(()=>{
    //    getTransferHistory();
    // },[getTransferHistory]);

    React.useEffect(()=>{
            setSelection(Transfer.dummyData.map((item,index)=>{
                return Object.values(item);
            }).filter((item,index)=>{
              item[0]=index+1;
              item[2]=new Date(item[2]).toLocaleDateString()+" "+new Date(item[2]).toLocaleTimeString();
              return item;
            }));
    },[setSelection,Transfer]);

    if(selection!==undefined){
        if (!$.fn.dataTable.isDataTable("#TransferHistory")) {
            $("#TransferHistory").DataTable({
                dom: '<"wrapper">tip',
                fnDrawCallback: function () {
                    $("#TransferHistory_wrapper").removeClass("form-inline");
                    $(".paginate_button a").addClass("page-link");
                    $(".paginate_button").addClass("page-item");
                  },
                data:selection===undefined?[]:selection,
                columns:[
                    {title:"#"},
                    {title:"TX Id"},
                    {title:"Time"},
                    {title:"Type"},
                    {title:"Coin"},
                    {title:"Amount"},
                    {title:"Receiver"},
                    {title:"Status"},
                    {title:"TXhash"},
                ],
                destroy:true
            });
        }
    }

    const filterSort=()=>{
        let searchDatax=Transfer.dummyData.map((item)=>{
            return Object.values(item);
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
        }).filter((item)=>{
            return logicSelection.searchKeyword===""?item:item.toString().toLowerCase().includes(logicSelection.searchKeyword.toString().toLowerCase())?item:null;
        }).filter((item)=>{
            return logicSelection.coin===""||logicSelection.coin==="COIN"?item:item.includes(logicSelection.coin)?item:null;
        }).filter((item)=>{
            return logicSelection.status===""||logicSelection.status==="STATUS"?item:item.includes(logicSelection.status)?item:null;
        });

        $("#TransferHistory").DataTable({
          destroy:true,
          fnDrawCallback: function () {
              $("#TransferHistory_wrapper").removeClass("form-inline");
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
            {title:"Coin"},
            {title:"Amount"},
            {title:"Receiver"},
            {title:"Status"},
            {title:"TXhash"},
          ],
        });

    };

    return (
        <>
        <div className="row card text-center">

                <div className="card-body table-responsive" style={{backgroundColor: "#151933"}}>

            <table className="table table-borderless">
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
                <select name="coin" class="btn text-white" style={{"background":"#1C233F","boxShadow":"none","border":"none"}} onChange={handleChange}>
                        <option value="COIN">Coin</option>
                        <option value="BTC">BTC</option>
                        <option value="ETH">ETH</option>
                        <option value="LTC">LTC</option>
                    </select>
                </td>

                <td>
                    <select name="status" class="btn text-white" style={{"background":"#1C233F","boxShadow":"none","border":"none"}} onChange={handleChange}>
                        <option value="STATUS">Status</option>
                        <option value="Success">Success</option>
                        <option value="Failed">Failed</option>
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

                    <div className="clearfix">
                    <div className="float-left m-3">Buy Trade History</div>
                        <div className="float-right m-3">
                                    <ReactToPdf targetRef={PDFref} options={options} filename="BuyTradeHistory">
                                    {({toPdf}) => (
                                        <Button color="light" className="text-danger" onClick={toPdf}>Export to PDF</Button>
                                    )}
                                    </ReactToPdf>
                                    <Excel
                                        id="test-table-xls-button"
                                        className="btn btn-light text-warning"
                                        table="TransferHistory"
                                        filename="tablexls"
                                        sheet="tablexls"
                                        buttonText="Export to XLS"
                                    />
                        </div>
                    </div>


                    <table ref={PDFref} className="display table table-borderless" id="TransferHistory" width="100%">
                    </table>

                </div>
            </div>

            </>
    );
}
