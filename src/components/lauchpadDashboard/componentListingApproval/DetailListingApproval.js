import React from "react";

import {Container,Row,Col} from "reactstrap";

import { useParams } from "react-router-dom";
import Axios from "axios";

import {urlContext} from "../../../Context";

import {BTNProjectApprove,BTNProjectReject} from "./ButtonApproveReject";

export function DetailListing(){
    
    let baseUrl=React.useContext(urlContext);
    let {id}=useParams();

    let [data,setData]=React.useState({});
    let {
        approved_status,email,full_name,
        position,project_name,coin_full_name,
        coin_symbol,official_website,session_supply,
        quote_desc,pre_sales_price,timezone,
        short_desc,ieo_ratio,ieo_minimum,
        bonus,ieo_start_time,ieo_end_time,
        referral_reward,technology_fouCoinSymboltion,
        whitepaper,telegram,kakao,twitter,instagram,project_introduction
    }=data;

    let getDetail=React.useCallback(()=>{
        Axios({
            url:`http://localhost:3005/lp/request/${id}`,
            method:'GET',
            headers:{
                admintoken:localStorage.getItem("admincodeotoken")
            }
        }).then(({data})=>{
            setData(data);
        }).catch(err=>{
            let msg="";
            if(err.response===undefined){
                msg=err.message;
            }else{
                msg=err.response.data.message;
            }
            setData(undefined);
        });
    },[id,baseUrl]);

    React.useEffect(getDetail,[]);

    // {
    //     "approved_status": "false",
    //     "_id": "5f33b1fa34ed2c59b80a01f1",
    //     "full_name": "Wawan handrawan",
    //     "email": "handrawanw@gmail.com",
    //     "position": "CEO",
    //     "project_name": "wawanCoin",
    //     "coin_full_name": "wawanCoin",
    //     "coin_symbol": "https://firebasestorage.googleapis.com/v0/b/codeo-token.appspot.com/o/logo%20archidax%201.png?alt=media&token=ae3e3ff3-b1fa-4415-8829-e0d0b5fa1479",
    //     "official_website": "www.wawan.com",
    //     "session_supply": "12000000",
    //     "quote_desc": "quote description test",
    //     "pre_sales_price": "2",
    //     "timezone": "GMT+0700",
    //     "short_desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel nulla nec erat ultrices suscipit id id libero. Aliquam dignissim faucibus orci, eget vestibulum leo cursus sit amet.",
    //     "ieo_ratio": "0.02",
    //     "ieo_minimum": "1",
    //     "bonus": "5",
    //     "ieo_start_time": "2020-08-12",
    //     "ieo_end_time": "2020-08-26",
    //     "referral_reward": "2",
    //     "technology_fouCoinSymboltion": "technology fou fou",
    //     "whitepaper": "https://firebasestorage.googleapis.com/v0/b/codeo-token.appspot.com/o/Metrica%20-%20Responsive%20Bootstrap%204%20Admin%20Dashboard.pdf?alt=media&token=c3455caf-fb4f-4407-9129-f07b61161246",
    //     "telegram": "telegram",
    //     "kakao": "kakao",
    //     "twitter": "twitter",
    //     "instagram": "instagram",
    //     "project_introduction": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel nulla nec erat ultrices suscipit id id libero. Aliquam dignissim faucibus orci, eget vestibulum leo cursus sit amet. Nulla facilisi. Nam ornare lorem et diam molestie mollis. Praesent laoreet nisi sed tempor elementum. Quisque quis diam sit amet enim pharetra dapibus. Sed ornare enim urna, sit amet rhoncus sapien porttitor id. Etiam id tincidunt mauris. Quisque ac ultricies mi. Ut laoreet est eget porttitor mollis. Sed et risus metus. Fusce ornare congue metus non commodo.\n\nUt pulvinar in lorem id tincidunt. Nullam eu augue sit amet libero efficitur cursus. Quisque hendrerit tellus sapien, ut pretium ipsum dictum vel. Praesent mauris lorem, placerat in enim sit amet, euismod efficitur enim. Phasellus et tellus placerat nisl porttitor volutpat. Proin non nunc condimentum, vulputate lorem eu, varius odio. Ut cursus felis eu velit dictum, at consequat sapien rutrum. Aliquam rutrum sapien ut libero dapibus, id porttitor augue facilisis. Vestibulum non sapien luctus, iaculis massa vitae, rhoncus orci.\n\nNullam in ex eu sapien consectetur vulputate vel consectetur erat. Sed in elementum leo. Vivamus sit amet nisl id elit fermentum tristique. Curabitur est metus, tempus quis libero vitae, tincidunt suscipit erat. Duis diam augue, pretium sed felis non, luctus dictum est. Aenean sollicitudin, diam nec faucibus elementum, lectus augue pharetra metus, semper vulputate justo magna sit amet lacus. Nunc et enim at nibh cursus eleifend accumsan ut metus.",
    //     "user": {
    //       "_id": "5f28e5b67256a50e877b0cd9",
    //       "email": "hippo2@mail.com",
    //       "username": "hiposdake"
    //     },
    //     "createdAt": "2020-08-12T09:10:18.207Z",
    //     "updatedAt": "2020-08-12T09:10:18.207Z"
    //   }
    
    return (
        <Container fluid>
            <Row>
                <UserDetailsKYC id={id} data={data===undefined?[]:data} />
                <Col xl="8" lg="8" sm="8" md="8" className="mt-3">
                <div class="card shadow-lg">
                    <div class="card-header">
                    <h4 class="card-title"><i className="fa fa-id-card" /> Detail Listing {approved_status===undefined?"Unknown approved status":approved_status.toString().toLowerCase()==="true"?<span className="badge badge-soft-success">Approved</span>:<span className="badge badge-soft-danger">Not Approved</span>}</h4>
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

export function UserDetailsKYC(props) {

    let {_id,user,createdAt}=props.data;


    return (
            <Col xl="4" lg="4" sm="4" md="4" className="mt-3">
                <div class="card shadow-lg">
                    <img width="300px" height="300px" src={"https://firebasestorage.googleapis.com/v0/b/codeo-token.appspot.com/o/logo%20archidax%201.png?alt=media&token=ae3e3ff3-b1fa-4415-8829-e0d0b5fa1479"} class="card-img-top" alt="gambar" />
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
