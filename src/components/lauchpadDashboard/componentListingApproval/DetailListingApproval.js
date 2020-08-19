import React from "react";

import {Container,Row,Col} from "reactstrap";

import { useParams } from "react-router-dom";
import Axios from "axios";

import {urlContext} from "../../../Context";

import {BTNProjectApprove,BTNProjectReject} from "./ButtonApproveReject";

export function DetailListing(){
    
    let baseUrl=React.useContext(urlContext);
    let {id}=useParams();

    let [DataAPI,setDataAPI]=React.useState({});
    let [loading,setLoading]=React.useState(false);

    let getDetail=React.useCallback(()=>{
        setLoading(true)
        Axios({
            url:`http://localhost:3005/lp/request/${id}`,
            method:'GET',
            headers:{
                admintoken:localStorage.getItem("admincodeotoken")
            }
        }).then(({data})=>{
            setDataAPI(data);
        }).catch(err=>{
            let msg="";
            if(err.response===undefined){
                msg=err.message;
            }else{
                msg=err.response.data.message;
            }
            // setData(undefined);
        })
        .finally(() => setLoading(false))
    },[id,baseUrl]);
    React.useEffect(getDetail,[]);

if(DataAPI&&DataAPI.length>0){

    return (
        <>
            <h1>Loading...</h1>
            {id}
        </>
    );

}else{

    let {
        approved_status,email,full_name,
        position,project_name,coin_full_name,
        coin_symbol,official_website,session_supply,
        quote_desc,pre_sales_price,timezone,
        short_desc,ieo_ratio,ieo_minimum,
        bonus,ieo_start_time,ieo_end_time,
        referral_reward,technology_fouCoinSymboltion,
        whitepaper,telegram,kakao,twitter,instagram,project_introduction
    }=DataAPI;

    return (
        <Container fluid>
            <Row>
                <UserDetailsKYC id={id} data={!DataAPI?[]:DataAPI} />
                <Col xl="8" lg="8" sm="8" md="8" className="mt-3">
                <div class="card shadow-lg">
                    <div class="card-header">
                        <h4 class="card-title"><i className="fa fa-id-card" /> Detail Listing
                        <span className={approved_status===undefined?"":approved_status.toLowerCase()==="pending"?"badge badge-soft-warning":
                        approved_status.toLowerCase()==="approved"?
                        "badge badge-soft-success":"badge badge-soft-danger"}>
                            {approved_status}
                        </span>
                        </h4>
                    </div>
                    <div class="card-body">
                        <table class="table">
                            <caption>FORM Apply Project</caption>
                            <tbody>
                                <tr>
                                    <th>Email</th>
                                    <td>{email===undefined?"Unknown approved status":email}</td>
                                </tr>
                                <tr>
                                    <th>Full name</th>
                                    <td>{full_name}</td>
                                </tr>
                                <tr>
                                    <th>Position</th>
                                    <td>{position===undefined?"Unknown position":position}</td>
                                </tr>
                                <tr>
                                    <th>Project name</th>
                                    <td>{project_name===undefined?"None":project_name}</td>
                                </tr>
                                <tr>
                                    <th>Coin Full Name</th>
                                    <td><img width="35px" height="35px" src={coin_symbol===undefined?null:coin_symbol} />  {coin_full_name===undefined?"Unknown position":coin_full_name}</td>
                                </tr>
                                <tr>
                                    <th>Official Website</th>
                                    <td>{official_website===undefined?"None":official_website}</td>
                                </tr>
                                <tr>
                                    <th>Session Supply</th>
                                    <td>{session_supply===undefined?"None":session_supply}</td>
                                </tr>
                                <tr>
                                    <th>Quote Description</th>
                                    <td>
                                        <div style={{overflow:"auto",maxHeight:"500px"}}>
                                            {quote_desc===undefined?"None":quote_desc}
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th>Pre Sales Price</th>
                                    <td>{pre_sales_price===undefined?"None":pre_sales_price}</td>
                                </tr>
                                <tr>
                                    <th>Timezone</th>
                                    <td>{timezone===undefined?"None":timezone}</td>
                                </tr>
                                <tr>
                                    <th>Short Description</th>
                                    <td>
                                        <div style={{overflow:"auto",maxHeight:"500px"}}>
                                            {short_desc===undefined?"None":short_desc}
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th>IEO Ratio</th>
                                    <td>
                                        {ieo_ratio===undefined?"None":ieo_ratio}
                                    </td>
                                </tr>
                                <tr>
                                    <th>IEO Minimum</th>
                                    <td>
                                        {ieo_minimum===undefined?"None":ieo_minimum}
                                    </td>
                                </tr>
                                <tr>
                                    <th>Bonus</th>
                                    <td>
                                        {bonus===undefined?"None":bonus}
                                    </td>
                                </tr>
                                <tr>
                                    <th>IEO Start Time</th>
                                    <td>
                                        {ieo_start_time===undefined?"None":ieo_start_time}
                                    </td>
                                </tr>
                                <tr>
                                    <th>IEO End Time</th>
                                    <td>
                                        {ieo_end_time===undefined?"None":ieo_end_time}
                                    </td>
                                </tr>

                                <tr>
                                    <th>Referral Reward</th>
                                    <td>
                                        {referral_reward===undefined?"None":referral_reward}
                                    </td>
                                </tr>

                                <tr>
                                    <th>Technology Coin Symbol</th>
                                    <td>
                                        {technology_fouCoinSymboltion===undefined?"None":technology_fouCoinSymboltion}
                                    </td>
                                </tr>

                                <tr>
                                    <th>Whitepaper</th>
                                    <td>
                                        <a href={whitepaper===undefined?"None":whitepaper} target="_blank" download><i className="fa fa-download" /> Download</a>
                                    </td>
                                </tr>

                                <tr>
                                    <th>Referral Reward</th>
                                    <td>
                                        {referral_reward===undefined?"None":referral_reward}
                                    </td>
                                </tr>

                                <tr>
                                    <th>Kakao</th>
                                    <td>
                                        {kakao===undefined?"None":kakao}
                                    </td>
                                </tr>

                                <tr>
                                    <th>Twitter</th>
                                    <td>
                                        {twitter===undefined?"None":twitter}
                                    </td>
                                </tr> 
                                
                                <tr>
                                    <th>Instagram</th>
                                    <td>
                                        {instagram===undefined?"None":instagram}
                                    </td>
                                </tr> 

                                <tr>
                                    <th>Short Description</th>
                                    <td>
                                        <div style={{overflow:"auto",maxHeight:"750px"}}>
                                            {project_introduction===undefined?"None":project_introduction}
                                        </div>
                                    </td>
                                </tr>
                                
                            </tbody>
                        </table>
                    </div>
                </div>
                </Col>
            </Row>
        </Container>
    );

}

}

export function UserDetailsKYC(props) {

    let {_id,user,createdAt,coin_symbol}=props.data;

    return (
            <Col xl="4" lg="4" sm="4" md="4" className="mt-3">
                <div class="card shadow-lg">
                    <img src={!coin_symbol?"https://firebasestorage.googleapis.com/v0/b/codeo-token.appspot.com/o/logo%20archidax%201.png?alt=media&token=ae3e3ff3-b1fa-4415-8829-e0d0b5fa1479":coin_symbol} class="card-img-top" alt="gambar" />
                    <div class="card-body">
                        <h5 class="card-title">From : {user===undefined?"Unknown username":user.username} </h5>
                        <p className="card-text">Sending Project : {createdAt===undefined?"Unknown date":new Date(createdAt).toLocaleDateString()+" "+new Date(createdAt).toLocaleTimeString()} </p>
                        <p className="card-text">Email : {user===undefined?"Unknown email":user.email}  </p>
                    </div>
                    <div class="card-footer">
                        <div className="clearfix">
                            <div className="float-left">
                                <BTNProjectApprove projectId={_id} />
                            </div>
                            <div className="float-right">
                                <BTNProjectReject  projectId={_id} />
                            </div>
                        </div>
                    </div>
                </div>
            </Col>
    )
}