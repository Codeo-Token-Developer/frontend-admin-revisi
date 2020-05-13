import React, { useDebugValue } from "react";

export default function BuyTradeHistory() {
    
    const [data,setData]=React.useState(undefined);
       
    const [selection,setSelection]=React.useState(undefined);
    const [logicSelection,setLogicSelection]=React.useState({
        searchKeyword:"",
        fromData:"",
        toData:"",
        marketPair:"",
        status:"",
    });

    const [datax,setDatax]=React.useState(undefined);

    const dummyData=[

        {
            no:1,
            TX_Id:258900489,
            CreatedAt:new Date("2020-05-1").toISOString(),
            Username:"DIANJAYA",
            Pair:"BTC/USDT",
            Price:"10000",
            Amount:"0.225",
            Pending:"0",
            Total:"2000",
            Status:"Success",
        },
        {
            no:2,
            TX_Id:258900489,
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
            no:3,
            TX_Id:258900489,
            CreatedAt:new Date("2020-05-5").toISOString(),
            Username:"XIANJAYA",
            Pair:"ETH/USDT",
            Price:"10000",
            Amount:"0.225",
            Pending:"0",
            Total:"2000",
            Status:"Failed"
        },
        {
            no:4,
            TX_Id:258900489,
            CreatedAt:new Date("2020-05-7").toISOString(),
            Username:"YIANJAYA",
            Pair:"BTC/USDT",
            Price:"10000",
            Amount:"0.225",
            Pending:"0",
            Total:"2000",
            Status:"Failed",
        },
        {
            no:5,
            TX_Id:258900489,
            CreatedAt:new Date("2020-05-9").toISOString(),
            Username:"BIANJAYA",
            Pair:"BTC/USDT",
            Price:"10000",
            Amount:"0.225",
            Pending:"0",
            Total:"2000",
            Status:"Failed",
        },
        {
            no:6,
            TX_Id:258900489,
            CreatedAt:new Date("2020-06-9").toISOString(),
            Username:"MIANJAYA",
            Pair:"BTC/USDT",
            Price:"10000",
            Amount:"0.225",
            Pending:"0",
            Total:"2000",
            Status:"Failed",
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
            return logicSelection.marketPair===""||logicSelection.marketPair==="MARKETPAIR"?item:item.includes(logicSelection.marketPair)?item:null;
        }).filter((item)=>{
            return logicSelection.status===""||logicSelection.status==="STATUS"?item:item.includes(logicSelection.status)?item:null;
        }).filter((item,index)=>{
            let now=new Date(item[2]);
            let fromDate=new Date(logicSelection.fromData);
            let toDate=new Date(logicSelection.toData);
            if(now.getDate()>=fromDate.getDate()&&now.getDate()<=toDate.getDate()){
                return item;
            }else{
                return null;
            }
        });
        setSelection(undefined);
        setSelection(searchDatax);
    };

    const sortData=(dummyData)=>{
        
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
                    <select name="marketPair" class="btn btn-secondary dropdown-toggle" style={{"background":"#1C233F","boxShadow":"none","border":"none"}} onChange={handleChange}>
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
                    <select name="status" class="btn btn-secondary dropdown-toggle" style={{"background":"#1C233F","boxShadow":"none","border":"none"}} onChange={handleChange}>
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

                    <table className="table table-borderless border border-light">
                        <thead>
                            <tr>
                                <th></th>
                                <th>TX Id</th>
                                <th>Created At</th>
                                <th>Username</th>
                                <th>Pair</th>
                                <th>Price</th>
                                <th>Amount</th>
                                <th>Pending</th>
                                <th>Total</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>

                            {selection===undefined||selection===null?[]:selection.map((item,index)=>{

                                return (
                                <tr>
                                    <th>{index+1}</th>
                                    <th>{item[1]}</th>
                                    <th>{new Date(item[2]).toLocaleDateString()}</th>
                                    <th>{item[3]} </th>
                                    <th>{item[4]}</th>
                                    <th>{item[5]}</th>
                                    <th>{item[6]}</th>
                                    <th>{item[7]}</th>
                                    <th>{item[8]}</th>
                                    <th>{item[9]}</th>
                                </tr>
                                );
                            })}

                            {/* <tr>
                                <th>1</th>
                                <th>258900489</th>
                                <th>24/09/202021:12:30</th>
                                <th>DIANJAYA </th>
                                <th>BTC/USD</th>
                                <th>10000</th>
                                <th>0.225</th>
                                <th>0</th>
                                <th>2000</th>
                                <th>Success</th>
                            </tr> */}

                            {/* <tr>
                                <th>2</th>
                                <th>258900489</th>
                                <th>{new Date().toISOString()}</th>
                                <th>DIANJAYA </th>
                                <th>BTC/USD</th>
                                <th>10000</th>
                                <th>0.225</th>
                                <th>0</th>
                                <th>2000</th>
                                <th>Success</th>
                            </tr> */}


                        </tbody>

                        <tfoot>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>Total</td>
                                <td>0.0025</td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>

            </>
    );
}