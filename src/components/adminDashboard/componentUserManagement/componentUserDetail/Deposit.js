import React from "react";

import Excel from "react-html-table-to-excel";

const tablePdf=React.createRef();

function Deposit() {

    const [selection,setSelection]=React.useState(undefined);
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
            Time:new Date("2020-05-1").toISOString(),
            Type:"WITHDRAW",
            BANK_NAME:"BANK BCA",
            Amount:"0.121",
            BANK_Account:"35Fd4afdsXCh4787EDFJcrl4jg4m5srt66",
            Transfer_Process:"Success",
            Status:"https://explorer.blockchain/4353459034u590345903490",
        },

        {
            no:"2",
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
            no:"3",
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

    const filterSort=()=>{
    
        if(["DEPOSIT","WITHDRAW","NONE"].includes(logicSelection.status)){
            setDW(true);
            setTR(false);
            let searchDatax=dummyDataBank.map((item)=>{
                return Object.values(item);
            }).filter((item)=>{
                return logicSelection.searchKeyword===""?item:item.includes(logicSelection.searchKeyword)?item:null;
            }).filter((item)=>{
                if(logicSelection.status===item[3]){
                    return item;
                }else if(logicSelection.status==="NONE"){
                    return item;
                }else{
                    return null;
                }
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
        }else if(["TRANSFER_COIN","RECEIVE_COIN","NONE"].includes(logicSelection.status)){
            setDW(false);
            setTR(true);
            let searchDatax=dummyDataCard.map((item)=>{
                return Object.values(item);
            }).filter((item)=>{
                return logicSelection.searchKeyword===""?item:item.includes(logicSelection.searchKeyword)?item:null;
            }).filter((item)=>{
                if(logicSelection.status===item[3]){
                    return item;
                }else if(logicSelection.status==="NONE"){
                    return item;
                }else{
                    return null;
                }
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

                <div className="table">
                    <div className="float-left m-2"><h5>BANK DEPOSIT WITHDRAW</h5></div>
                    <div className="float-right m-2">
                        <Excel
                    id="test-table-xls-button"
                    className="btn btn-light text-warning"
                    table="table-to-xls"
                    filename="tablexls"
                    sheet="tablexls"
                    buttonText="Export to XLS"/>
                    </div>

                    <table id="table-to-xls" style={{width:"500",height:"500"}} className="table table-borderless border border-light" ref={tablePdf}>
                    <thead>
                    {
                        typeDW===false||selection===undefined||selection===null||selection.length<=0?<div className="float=left">Entry data empty</div>:
                    
                        <tr>
                                <th></th>
                                <th>TX Id</th>
                                <th>Time</th>
                                <th>Type</th>
                                <th>BANK NAME</th>
                                <th>Amount</th>
                                <th>BANK Account</th>
                                <th>Transfer Process</th>
                                <th>Status</th>
                        </tr>
                    }
                        </thead>
                        <tbody>
                     {typeDW===false||selection===undefined||selection===null?null:selection.map((item,index)=>{
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

                        </tbody>

                    </table>
            </div>


                    <div className="table">
                    <div className="float-left">
                        <h5>CREDIT CARD AND PAYPAL DEPOSIT / WITHDRAW</h5>
                    </div>
                    <div className="float-right m-2">
                        <span className="m-2">Export to PDF</span>
                        <Excel
                            id="test-table-xls-button"
                            className="btn btn-light text-warning"
                            table="creditCard"
                            filename="tablexls"
                            sheet="tablexls"
                            buttonText="Export to XLS"
                        />
                    </div>

                    <table id="creditCard" className="table table-borderless border border-light">
                    <thead>
                    {
                        typeTR===false||selection===undefined||selection===null||selection.length<=0?<div className="float=left">Entry data empty</div>:
                    
                        <tr>
                                <th></th>
                                <th>TX Id</th>
                                <th>Time</th>
                                <th>Type</th>
                                <th>Method</th>
                                <th>Amount $</th>
                                <th>CARD NUMBER/EMAIL </th>
                                <th>Transfer Process</th>
                                <th>Status</th>
                        </tr>
                    }
                        </thead>
                        <tbody>
                    
                     {typeTR===false||selection===undefined||selection===null?null:selection.map((item,index)=>{
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

                        </tbody>

                        
                    
                    </table>
                </div>
                    
                    
                </div>
            </div>
    )
}


export default Deposit;