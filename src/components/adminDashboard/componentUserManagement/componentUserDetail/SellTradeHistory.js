import React from "react";

import { Button } from "reactstrap";

import ReactToPdf from "react-to-pdf";
import Excel from "react-html-table-to-excel";

import SellDummy from "./SellDummy.json";

// import axios from "axios";

const PDFref=React.createRef();

const $ = require("jquery");
$.Datatable = require("datatables.net-bs");

export default function SellSellTradeHistory(props) {

    const [selection,setSelection]=React.useState(undefined);
    //const [data,setData]=React.useState(undefined);
    const [logicSelection,setLogicSelection]=React.useState({
        searchKeyword:"",
        fromData:"",
        toData:"",
        marketPair:"",
        status:"",
    });

    const options = {
      orientation: "portrait",
      format:"c2",
    };

    const handleChange=(e)=>{
        setLogicSelection({...logicSelection,[e.target.name]:e.target.value});
    };

    // const getTradeSellHistory=React.useCallback(()=>{
    //     axios({
    //         url:`http://localhost:1000/balance`,
    //         method:"GET"
    //     }).then(({data})=>{
    //         setSelection(data.data.dummyData.map((item,index)=>{
    //             return Object.values(item);
    //         }).filter((item,index)=>{
    //             item[0]=index+1;
    //             item[2]=new Date(item[2]).toLocaleDateString()+" "+new Date(item[2]).toLocaleTimeString();
    //             return item;
    //         }));
    //     }).catch(err=>{
    //         console.log(err);
    //     });
    // },[setSelection]);

    // React.useEffect(()=>{
    //     getTradeSellHistory();
    // },[getTradeSellHistory]);

    const getTradeSellHistory=React.useCallback(()=>{
            setSelection(SellDummy.dummyData.map((item,index)=>{
                return Object.values(item);
            }).filter((item,index)=>{
                item[0]=index+1;
                item[2]=new Date(item[2]).toLocaleDateString()+" "+new Date(item[2]).toLocaleTimeString();
                return item;
            }));
    },[setSelection]);

    React.useEffect(()=>{
        getTradeSellHistory();
    },[getTradeSellHistory]);

    if(selection!==undefined){
      if (!$.fn.dataTable.isDataTable("#SellTradeHistory")) {
          $("#SellTradeHistory").DataTable({
              dom: '<"wrapper">tip',
              fnDrawCallback: function () {
                  $("#SellTradeHistory_wrapper").removeClass("form-inline");
                  $(".paginate_button a").addClass("page-link");
                  $(".paginate_button").addClass("page-item");
                },
              data:selection===undefined?[]:selection,
              columns:[
                  {title:"No"},
                  {title:"TX Id"},
                  {title:"Created At"},
                  {title:"Username"},
                  {title:"Pair"},
                  {title:"Price"},
                  {title:"Amount"},
                  {title:"Pending"},
                  {title:"Total"},
                  {title:"Status"}
              ],
              destroy:true
          });
      }
    }

    const filterSort=()=>{
      let searchDatax=SellDummy.dummyData.map((item)=>{
          return Object.values(item);
      }).filter((item)=>{
        return logicSelection.searchKeyword===""?item:item.toString().toLowerCase().includes(logicSelection.searchKeyword.toString().toLowerCase())?item:null;
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
          return logicSelection.marketPair===""||logicSelection.marketPair==="MARKETPAIR"?item:item.includes(logicSelection.marketPair)?item:null;
      }).filter((item)=>{
          return logicSelection.status===""||logicSelection.status==="STATUS"?item:item.includes(logicSelection.status)?item:null;
      });

      $("#SellTradeHistory").DataTable({
        destroy:true,
        fnDrawCallback: function () {
            $("#SellTradeHistory_wrapper").removeClass("form-inline");
            $(".paginate_button a").addClass("page-link");
            $(".paginate_button").addClass("page-item");
          },
        data:searchDatax,
        dom: '<"wrapper">tip',
        columns:[
            {title:"No"},
            {title:"TX Id"},
            {title:"Created At"},
            {title:"Username"},
            {title:"Pair"},
            {title:"Price"},
            {title:"Amount"},
            {title:"Pending"},
            {title:"Total"},
            {title:"Status"}
        ],
      });

    };

    return (
        <>
        <div className="row card text-center">
            <div className="card-body table-responsive" style={{backgroundColor: "#151933"}}>
            <table className="table table-borderless">
            <tr>
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
                    <select name="marketPair" class="btn text-white" style={{"background":"#1C233F","boxShadow":"none","border":"none"}} onChange={handleChange}>
                        <option value="MARKETPAIR">...</option>
                        <option value="BTC/USDT">BTC/USDT</option>
                        <option value="ETH/USDT">ETH/USDT</option>
                    </select>
                </td>
                <td>
                    <select name="status" class="btn text-white" style={{"background":"#1C233F","boxShadow":"none","border":"none"}} onChange={handleChange}>
                        <option value="STATUS">...</option>
                        <option value="Success">Success</option>
                        <option value="Failed">Failed</option>
                    </select>
                </td>
                <td>
                   <button className="btn btn-primary" onClick={filterSort}>Filter</button>
                </td>
            </tr>
        </table>

    <div className="clearfix">
        <div className="float-left m-3">Sell Trade History</div>
            <div className="float-right m-3">
                        <ReactToPdf targetRef={PDFref} options={options} filename="BuyTradeHistory">
                        {({toPdf}) => (
                            <Button color="light" className="text-danger" onClick={toPdf}>Export to PDF</Button>
                        )}
                        </ReactToPdf>
                        <Excel
                            id="test-table-xls-button"
                            className="btn btn-light text-warning"
                            table="SellTradeHistory"
                            filename="tablexls"
                            sheet="tablexls"
                            buttonText="Export to XLS"
                        />
            </div>
        </div>
        <table className="display table table-borderless" id="SellTradeHistory" width="100%">
            <tfoot>
                {new Date().toLocaleDateString()+" "+new Date().toLocaleTimeString()}
            </tfoot>
        </table>

        </div>
    </div>
            </>
    );
}
