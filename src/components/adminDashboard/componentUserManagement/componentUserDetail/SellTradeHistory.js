import React from "react";

import { Button } from "reactstrap";

import ReactToPdf from "react-to-pdf";
import Excel from "react-html-table-to-excel";

const PDFref=React.createRef();

const $ = require("jquery");
$.Datatable = require("datatables.net-bs");

export default function SellSellTradeHistory(props) {

    const [selection,setSelection]=React.useState(undefined);
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

    const dummyData=[

      {
          no:"1",
          TX_Id:"258900481",
          CreatedAt:new Date("2020-01-2").toISOString(),
          Username:"DIANJAYA",
          Pair:"BTC/USDT",
          Price:"10000",
          Amount:"0.125",
          Pending:"0",
          Total:"2000",
          Status:"Success",
      },

      {
          no:"2",
          TX_Id:"258900481",
          CreatedAt:new Date("2020-01-23").toISOString(),
          Username:"DIANJAYA",
          Pair:"ETH/USDT",
          Price:"10000",
          Amount:"0.125",
          Pending:"0",
          Total:"1234",
          Status:"Success",
      },

      {
          no:"3",
          TX_Id:"258900481",
          CreatedAt:new Date("2020-02-3").toISOString(),
          Username:"DIANJAYA",
          Pair:"BTC/USDT",
          Price:"10000",
          Amount:"0.125",
          Pending:"0",
          Total:"2000",
          Status:"Success",
      },

      {
          no:"4",
          TX_Id:"25890048123",
          CreatedAt:new Date("2020-02-15").toISOString(),
          Username:"DIANJAYA",
          Pair:"ETH/USDT",
          Price:"10000",
          Amount:"0.125",
          Pending:"0",
          Total:"2000",
          Status:"Success",
      },

      {
          no:"5",
          TX_Id:"258900481",
          CreatedAt:new Date("2020-03-3").toISOString(),
          Username:"YIANJAYA",
          Pair:"ETH/USDT",
          Price:"10000",
          Amount:"0.125",
          Pending:"0",
          Total:"2000",
          Status:"Failed",
      },

      {
          no:"6",
          TX_Id:"2589004851",
          CreatedAt:new Date("2020-03-20").toISOString(),
          Username:"DIANJAYA",
          Pair:"BTC/USDT",
          Price:"10000",
          Amount:"0.125",
          Pending:"0",
          Total:"2000",
          Status:"Success",
      },

      {
          no:"7",
          TX_Id:"258900481",
          CreatedAt:new Date("2020-04-3").toISOString(),
          Username:"DIANJAYA",
          Pair:"ETH/USDT",
          Price:"10000",
          Amount:"0.025",
          Pending:"0",
          Total:"5000",
          Status:"Success",
      },

        {
          no:"8",
          TX_Id:"258900481",
          CreatedAt:new Date("2020-04-23").toISOString(),
          Username:"DIANJAYA",
          Pair:"BTC/USDT",
          Price:"10000",
          Amount:"0.125",
          Pending:"0",
          Total:"2000",
          Status:"Success",
        },

        {
            no:"9",
            TX_Id:"258900481",
            CreatedAt:new Date("2020-05-1").toISOString(),
            Username:"DIANJAYA",
            Pair:"BTC/USDT",
            Price:"10000",
            Amount:"0.125",
            Pending:"0",
            Total:"2000",
            Status:"Success",
        },
        {
            no:"10",
            TX_Id:"258900482",
            CreatedAt:new Date("2020-05-3").toISOString(),
            Username:"YIANJAYA",
            Pair:"ETH/USDT",
            Price:"10000",
            Amount:"0.225",
            Pending:"0",
            Total:"2000",
            Status:"Success"
        },
        {
            no:"11",
            TX_Id:"258900483",
            CreatedAt:new Date("2020-05-5").toISOString(),
            Username:"XIANJAYA",
            Pair:"ETH/USDT",
            Price:"10000",
            Amount:"0.325",
            Pending:"0",
            Total:"2000",
            Status:"Failed"
        },
        {
            no:"12",
            TX_Id:"258900484",
            CreatedAt:new Date("2020-05-7").toISOString(),
            Username:"YIANJAYA",
            Pair:"BTC/USDT",
            Price:"10000",
            Amount:"0.425",
            Pending:"0",
            Total:"2000",
            Status:"Failed",
        },
        {
            no:"13",
            TX_Id:"258900485",
            CreatedAt:new Date("2020-05-9").toISOString(),
            Username:"BIANJAYA",
            Pair:"BTC/USDT",
            Price:"10000",
            Amount:"0.525",
            Pending:"0",
            Total:"2000",
            Status:"Failed",
        },
        {
            no:"14",
            TX_Id:"258900486",
            CreatedAt:new Date("2020-06-9").toISOString(),
            Username:"MIANJAYA",
            Pair:"BTC/USDT",
            Price:"10000",
            Amount:"0.625",
            Pending:"0",
            Total:"2000",
            Status:"Failed",
        },
        {
            no:"15",
            TX_Id:"258900486",
            CreatedAt:new Date("2020-06-29").toISOString(),
            Username:"MIANJAYA",
            Pair:"ETH/USDT",
            Price:"10000",
            Amount:"0.625",
            Pending:"0",
            Total:"2000",
            Status:"Failed",
        },
    ];

    const handleChange=(e)=>{
        setLogicSelection({...logicSelection,[e.target.name]:e.target.value});
    };

    React.useEffect(()=>{
      setSelection(dummyData.map((item,index)=>{
          return Object.values(item);
      }).filter((item,index)=>{
        item[0]=index+1;
        item[2]=new Date(item[2]).toLocaleDateString()+" "+new Date(item[2]).toLocaleTimeString();
        return item;
      }));
    },[]);

      if (!$.fn.dataTable.isDataTable("#SellTradeHistory")) {
          $("#SellTradeHistory").DataTable({
              dom: '<"wrapper">tip',
              fnDrawCallback: function () {
                  $("#SellTradeHistory_wrapper").removeClass("form-inline");
                  $(".paginate_button a").addClass("page-link");
                  $(".paginate_button").addClass("page-item");
                },
              data:selection===undefined?[]:selection,
              dom: 'Brtip',
              buttons: [
                  {
                      extend: 'pdfHtml5',
                      messageTop: 'PDF created by PDFMake with Buttons for DataTables.'
                  }
              ],
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


    const filterSort=()=>{
      let searchDatax=dummyData.map((item)=>{
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
                            table="BuyTradeHistory"
                            filename="tablexls"
                            sheet="tablexls"
                            buttonText="Export to XLS"
                        />
            </div>
        </div>
        <table className="display table table-borderless" id="SellTradeHistory" width="100%">
        </table>

                </div>
            </div>
            </>
    );
}