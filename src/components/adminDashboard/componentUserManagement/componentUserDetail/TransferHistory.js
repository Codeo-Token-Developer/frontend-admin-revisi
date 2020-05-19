import React from "react";

import ReactToPdf from "react-to-pdf";
import Excel from "react-html-table-to-excel";

import { Button } from "reactstrap";

const PDFref=React.createRef();

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
        format:"c3",
    };


    const dummyData=[

        {
            no:"1",
            TX_Id:"25890048",
            Time:new Date("2020-05-1").toISOString(),
            Type:"TRANSFER COIN",
            Coin:"BTC",
            Amount:"0.121",
            Receiver:"35Fd4afdsXCh4787EDFJcrl4jg4m5srt66",
            Status:"Success",
            TXhash:"https://explorer.blockchain/4353459034u590345903490",
        },

        {
            no:"2",
            TX_Id:"25890048",
            Time:new Date("2020-05-3").toISOString(),
            Type:"TRANSFER COIN",
            Coin:"LTC",
            Amount:"0.122",
            Receiver:"35Fd4afdsXCh4787EDFJcrl4jg4m5srt66",
            Status:"Success",
            TXhash:"https://explorer.blockchain/4353459034u590345903490",
        },

        {
            no:"3",
            TX_Id:"25890048",
            Time:new Date("2020-05-7").toISOString(),
            Type:"RECEIVE COIN",
            Coin:"BTC",
            Amount:"0.123",
            Receiver:"35Fd4afdsXCh4787EDFJcrl4jg4m5srt66",
            Status:"Success",
            TXhash:"https://explorer.blockchain/4353459034u590345903490",
        },


        {
            no:"4",
            TX_Id:"25890048",
            Time:new Date("2020-05-9").toISOString(),
            Type:"TRANSFER COIN",
            Coin:"ETH",
            Amount:"0.124",
            Receiver:"35Fd4afdsXCh4787EDFJcrl4jg4m5srt66",
            Status:"Failed",
            TXhash:"https://explorer.blockchain/4353459034u590345903490",
        },

        {
            no:"5",
            TX_Id:"25890048",
            Time:new Date("2020-05-11").toISOString(),
            Type:"RECEIVE COIN",
            Coin:"BTC",
            Amount:"0.121",
            Receiver:"35Fd4afdsXCh4787EDFJcrl4jg4m5srt66",
            Status:"Failed",
            TXhash:"https://explorer.blockchain/4353459034u590345903490",
        },

    ];

    const handleChange=(e)=>{
        setLogicSelection({...logicSelection,[e.target.name]:e.target.value});
    };

    const filterSort=()=>{
        let searchDatax=dummyData.map((item)=>{
            return Object.values(item);
        }).filter((item)=>{
            return logicSelection.searchKeyword===""?item:item.includes(logicSelection.searchKeyword)?item:null;
        }).filter((item)=>{
            return logicSelection.coin===""||logicSelection.coin==="COIN"?item:item.includes(logicSelection.coin)?item:null;
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

                    {
                        selection===undefined||selection===null||selection.length<=0?"Entry data empty":
                    <div className="table">
                    <div className="float-left m-3">History</div>
                    <div className="float-right m-3">
                    <ReactToPdf targetRef={PDFref} options={options} filename="Trasnfer History">
                    {({toPdf}) => (
                        <Button color="light" className="text-danger" onClick={toPdf}>Export to PDF</Button>
                    )}
                    </ReactToPdf>
                    <Excel
                        id="test-table-xls-button"
                        className="btn btn-light text-warning"
                        table="TradeHistory"
                        filename="tablexls"
                        sheet="tablexls"
                        buttonText="Export to XLS"
                    />
                    </div>


                    <table ref={PDFref} id="TradeHistory" className="table table-borderless border border-light">
                        <thead>
                            <tr>
                                <th></th>
                                <th>TX Id</th>
                                <th>Time</th>
                                <th>Type</th>
                                <th>Coin</th>
                                <th>Amount</th>
                                <th>Receiver /send</th>
                                <th>Status</th>
                                <th>TX Hash</th>
                            </tr>
                        </thead>
                        <tbody>
                     {selection===undefined||selection===null?<div>Entry data empty</div>:selection.map((item,index)=>{

                            return (
                            <tr>
                                <th>{index+1}</th>
                                <th>{item[1]}</th>
                                <th>{new Date(item[2]).toLocaleDateString()+" "+new Date(item[2]).toLocaleTimeString()}</th>
                                <th>{item[3]} </th>
                                <th>{item[4]}</th>
                                <th>{item[5]}</th>
                                <th>{item[6]}</th>
                                <th>{item[7]}</th>
                                <th>{item[8]}</th>
                            </tr>
                            );
                            })}
                            {/* <tr>
                                <th></th>
                                <th>25890048</th>
                                <th>24/09/202021:12:30</th>
                                <th>TRANSFER COIN</th>
                                <th>BTC</th>
                                <th>1.07</th>
                                <th>35Fd4afdsXCh4787EDFJcrl4jg4m5srt66</th>
                                <th>Success</th>
                                <th>https://explorer.blockchain/4353459034u590345903490</th>
                            </tr>

                            <tr>
                                <th></th>
                                <th>25353057</th>
                                <th>24/09/202021:12:30</th>
                                <th>RECEIVE COIN</th>
                                <th>ETH</th>
                                <th>2</th>
                                <th>35Fd6hgfdf65h4787EDFJcrl4jg4m76562</th>
                                <th>Success</th>
                                <th>https://explorer.blockchain/4353459034u590345903490</th>
                            </tr> */}
                        </tbody>


                    </table>
                    </div>
                    }
                </div>
            </div>

            </>
    );
}
