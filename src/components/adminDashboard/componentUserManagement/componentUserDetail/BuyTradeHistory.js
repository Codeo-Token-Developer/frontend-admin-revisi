import React from "react";

import ReactToPdf from "react-to-pdf";
import Excel from "react-html-table-to-excel";

import { Button } from "reactstrap";

const $ = require("jquery");
$.Datatable = require("datatables.net-bs");

let index=0;

const PDFref=React.createRef();

export default function BuyTradeHistory(props) {

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

    React.useEffect(()=>{
        setSelection(dummyData.map((item)=>{
            return Object.values(item);
        }));


        if (!$.fn.dataTable.isDataTable("#TradeHistory")) {
           
            $("#TradeHistory").DataTable({
                data:dummyData.map((item)=>{
                    return Object.values(item);
                }),
                fnDrawCallback: function () {
                    $("#TradeHistory_wrapper").removeClass("form-inline");
                    $(".paginate_button a").addClass("page-link");
                    $(".paginate_button").addClass("page-item");
                  },

                columns:[
                    {title:"1"},
                    {title:"TX Id"},
                    {title:"Created At"},
                    {title:"Username"},
                    {title:"Pair"},
                    {title:"Price"},
                    {title:"Amount"},
                    {title:"Pending"},
                    {title:"Total"},
                    {title:"Status"}
                ]
            });
   
        }
    },[]);


    const handleChange=(e)=>{
        setLogicSelection({...logicSelection,[e.target.name]:e.target.value});
    };

    const filterSort=()=>{
        let searchDatax=dummyData.map((item)=>{
            return Object.values(item);
        }).filter((item)=>{
            return logicSelection.searchKeyword===""?item:item.includes(logicSelection.searchKeyword)?item:null;
        }).filter((item)=>{
            return logicSelection.marketPair===""||logicSelection.marketPair==="MARKETPAIR"?item:item.includes(logicSelection.marketPair)?item:null;
        }).filter((item)=>{
            return logicSelection.status===""||logicSelection.status==="STATUS"?item:item.includes(logicSelection.status)?item:null;
        }).filter((item,index)=>{
            let now=new Date(item[2]);
            let fromDate=new Date(logicSelection.fromData);
            let toDate=new Date(logicSelection.toData);
            if(now>=fromDate&&now<=toDate){
                return item;
            }else{
                return null;
            }
        });
        setSelection(undefined);
        setSelection(searchDatax);
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
                    <select name="marketPair" class="btn text-white" style={{"background":"#1C233F","boxShadow":"none","border":"none"}} onChange={handleChange}>
                        <option value="MARKETPAIR">...</option>
                        <option value="BTC/USDT">BTC/USDT</option>
                        <option value="ETH/USDT">ETH/USDT</option>
                    </select>
                    {/* {<div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" style={{"background":"#1C233F","boxShadow":"none","border":"none"}} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                       Market Pair
                    </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <button name="marketPair" class="dropdown-item btn btn-default" onClick={handleChange}>BTC/USDT</button>
                            <button name="marketPair" class="dropdown-item btn btn-default" onClick={handleChange}>ETH/USDT</button>
                        </div>
                    </div>} */}
                </td>

                <td>
                    <select name="status" class="btn text-white" style={{"background":"#1C233F","boxShadow":"none","border":"none"}} onChange={handleChange}>
                        <option value="STATUS">...</option>
                        <option value="Success">Success</option>
                        <option value="Failed">Failed</option>
                    </select>
                    {/* <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" onChange={handleChange} style={{"background":"#1C233F","boxShadow":"none","border":"none"}} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                       Status
                    </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <button class="dropdown-item btn btn-default">Success</button>
                            <button class="dropdown-item btn btn-default">Failed</button>
                        </div>
                    </div> */}
                </td>

                <td>
                   <button className="btn btn-primary" onClick={filterSort}>Filter</button>
                </td>

                <td></td>
                <td></td>
            </tr>
            </tbody>
        </table>

        <table className="display table table-borderless" id="TradeHistory" width="100%">

        </table>
                    
                </div>
            </div>
            </>
    );
}


// {selection===undefined||selection===null||selection.length<=0?"Entry data empty":
//                     <div className="table">
//                     <div className="float-left m-3">History</div>
//                     <div className="float-right m-3">
//                     <ReactToPdf targetRef={PDFref} options={options} filename={props.filename}>
//                     {({toPdf}) => (
//                         <Button color="light" className="text-danger" onClick={toPdf}>Export to PDF</Button>
//                     )}
//                     </ReactToPdf>
//                     <Excel
//                         id="test-table-xls-button"
//                         className="btn btn-light text-warning"
//                         table="TradeHistory"
//                         filename="tablexls"
//                         sheet="tablexls"
//                         buttonText="Export to XLS"
//                     />
//                     </div>
//                     <table ref={PDFref} id="TradeHistory" className="table table-borderless border border-light m-1">
//                         <thead>
//                             <tr>
//                                 <th></th>
//                                 <th>TX Id</th>
//                                 <th>Created At</th>
//                                 <th>Username</th>
//                                 <th>Pair</th>
//                                 <th>Price</th>
//                                 <th>Amount</th>
//                                 <th>Pending</th>
//                                 <th>Total</th>
//                                 <th>Status</th>
//                             </tr>
//                         </thead>

//                             <tbody>
//                             {selection===undefined||selection===null?[]:selection.map((item,index)=>{

//                                 return (
//                                 <tr>
//                                     <td>{index+1}</td>
//                                     <td>{item[1]}</td>
//                                     <td>{new Date(item[2]).toLocaleDateString()+" "+new Date(item[2]).toLocaleTimeString()}</td>
//                                     <td>{item[3]} </td>
//                                     <td>{item[4]}</td>
//                                     <td>{item[5]}</td>
//                                     <td>{item[6]}</td>
//                                     <td>{item[7]}</td>
//                                     <td>{item[8]}</td>
//                                     <td>{item[9]}</td>
//                                 </tr>
//                                 );
//                             })}

//                             {/* <tr>
//                                 <th>1</th>
//                                 <th>258900489</th>
//                                 <th>24/09/202021:12:30</th>
//                                 <th>DIANJAYA </th>
//                                 <th>BTC/USD</th>
//                                 <th>10000</th>
//                                 <th>0.225</th>
//                                 <th>0</th>
//                                 <th>2000</th>
//                                 <th>Success</th>
//                             </tr> */}

//                             {/* <tr>
//                                 <th>2</th>
//                                 <th>258900489</th>
//                                 <th>{new Date().toISOString()}</th>
//                                 <th>DIANJAYA </th>
//                                 <th>BTC/USD</th>
//                                 <th>10000</th>
//                                 <th>0.225</th>
//                                 <th>0</th>
//                                 <th>2000</th>
//                                 <th>Success</th>
//                             </tr> */}
//                         </tbody>


//                         <tfoot>
//                             <tr>
//                                 <td></td>
//                                 <td></td>
//                                 <td></td>
//                                 <td></td>
//                                 <td></td>
//                                 <td>Total</td>
//                                 <td>0.0025</td>
//                                 <td></td>
//                                 <td></td>
//                             </tr>
//                         </tfoot>
//                     </table>
//                     </div>
//                     }