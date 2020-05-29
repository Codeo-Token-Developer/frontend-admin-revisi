import React from "react";

import {
    Nav,NavItem,NavLink,
    TabContent,TabPane,
} from "reactstrap";

import {
    useParams
} from "react-router-dom";

//Component
import UserDetails from "./componentUserDetail/UserDetails";
import WalletInfo from "./componentUserDetail/WalletInfo";
import Deposit from "./componentUserDetail/Deposit";
import TransferHistory from "./componentUserDetail/TransferHistory";
import BuyTradeHistory from "./componentUserDetail/BuyTradeHistory";
import SellTradeHistory from "./componentUserDetail/SellTradeHistory";
//Component

function UserDetail() {
    let {id}=useParams();

    const [activeTabs,setActiveTabs]=React.useState("1");
    const toggle=(tab)=>{
        if(activeTabs!==tab){
            setActiveTabs(tab);
        }
    };

    return (
        <>
    <Nav>
        <NavItem className="d-flex m-4">
            <NavLink style={{"cursor":"pointer","font-size":"18px","font-weight":"500","opacity":"0.9"}} className={activeTabs==="1"?"btn btn-info text-white":"text-white"} onClick={()=>toggle("1")}>User Detail</NavLink>
            <NavLink style={{"cursor":"pointer","font-size":"18px","font-weight":"500","opacity":"0.9"}} className={activeTabs==="2"?"btn btn-info text-white":"text-white"} onClick={()=>toggle("2")}>Wallet</NavLink>
            <NavLink style={{"cursor":"pointer","font-size":"18px","font-weight":"500","opacity":"0.9"}} className={activeTabs==="3"?"btn btn-info text-white":"text-white"} onClick={()=>toggle("3")}>Buy Trade History</NavLink>
            <NavLink style={{"cursor":"pointer","font-size":"18px","font-weight":"500","opacity":"0.9"}} className={activeTabs==="4"?"btn btn-info text-white":"text-white"} onClick={()=>toggle("4")}>Sell Trade History</NavLink>
            <NavLink style={{"cursor":"pointer","font-size":"18px","font-weight":"500","opacity":"0.9"}} className={activeTabs==="5"?"btn btn-info text-white":"text-white"} onClick={()=>toggle("5")}>Transfer/Receive</NavLink>
            <NavLink style={{"cursor":"pointer","font-size":"18px","font-weight":"500","opacity":"0.9"}} className={activeTabs==="6"?"btn btn-info text-white":"text-white"} onClick={()=>toggle("6")}>Deposit/WD</NavLink>
        </NavItem>
    </Nav>

    <TabContent activeTab={activeTabs}>
        {/*TabPane tabId 0 for viewer error*/}
        <TabPane tabId="1">
            <UserDetails id={id} />
        </TabPane>
        <TabPane tabId="2">
            <WalletInfo />
        </TabPane>
        <TabPane tabId="3">
            <BuyTradeHistory />
        </TabPane>
        <TabPane tabId="4">
            <SellTradeHistory />
        </TabPane>
        <TabPane tabId="5">
            <TransferHistory />
        </TabPane>
        <TabPane tabId="6">
            <Deposit />
        </TabPane>
    </TabContent>
        </>
    );
}


export default UserDetail;