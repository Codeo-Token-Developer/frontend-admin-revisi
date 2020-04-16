import React from 'react';
import axios from 'axios';
import { urlContext } from '../../Context';


const TotalUser = () => {   

    const [total, setTotal] = React.useState('');

    let baseUrl = React.useContext(urlContext);

    React.useEffect(() => {
        axios({
            url: `${baseUrl}/dashboard/totalUser`,
            method: 'GET',
            headers: {
                admintoken: localStorage.getItem('admincodeotoken')
            }
        })
        .then(({data}) => {
            setTotal(data.total)
        })
        .catch(err => {
            console.log(err)
        })
    },[baseUrl])

    return (
        <>
            <div className="col-lg-3">
            <CardDashboardComponent
                titleData="Total User" /*====== Text Data For Card ======*/
                totalCount={total} /*====== Total Count Data ======*/
                upDownClass="mdi mdi-trending-up" /*====== Set Icon Up or Down Total Data ======*/
                upDownText="text-success" /*====== Set Color For Icon Up or Down (text-success = Green Color) / (text-danger = Red Color) ======*/
                percentData="5.5%" /*====== Total Percent Up or Down Today ======*/
                textPercent="Up From Yesterday" /*====== Text For Up or Down Total Percentage Today ======*/
                setColor="purple" /*====== Set Color For Shadow or Background ======*/
                setIcon="dripicons-user-group" /*====== For Change Icon Can Change Here Using Dripicons ======*/
            />
            </div>
        </>
    )

};


const CardDashboardComponent = (props) => {
    return (
        <div>
            <div className="card card-eco">
            <div className="card-body">
                <h4 className="title-text mt-0">{props.titleData}</h4>
                <div className="d-flex justify-content-between">
                <h3 className="text-purple">
                    {props.totalCount}
                </h3>
                <i className="dripicons-user-group card-eco-icon bg-purple align-self-center" />
                </div>
                <p className="mb-0 text-muted text-truncate">
                <span className="text-success">
                    <i className="mdi mdi-trending-up"> </i>
                    {props.percentData}
                </span>{" "}
                {props.textPercent}
                </p>
            </div>
        </div>
    </div>
    )
}

export default TotalUser;