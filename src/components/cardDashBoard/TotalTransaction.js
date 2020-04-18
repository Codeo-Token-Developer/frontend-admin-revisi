import React from 'react';
import axios from 'axios';
import { urlContext } from '../../Context';


function TotalTransaction() {
    
    const [total, setTotal] = React.useState('');
    const [loading, setLoading] = React.useState(false);

    let baseUrl = React.useContext(urlContext);

    React.useEffect(() => {
        axios({
            url: `${baseUrl}/dashboard/totalTransaction`,
            method: 'GET',
            headers: {
                admintoken: localStorage.getItem('admincodeotoken')
            }
        })
        .then(({data}) => {
            setTotal(data.total);
            setLoading(true)
        })
        .catch(err => {
            console.log(err)
        })
    })

    return (
        <div className="col-lg-3">
            <Card 
                 titleData="Total Transaction" /*====== Text Data For Card ======*/
                 totalCount={total} /*====== Total Count Data ======*/
                 upDownClass="mdi mdi-trending-up" /*====== Set Icon Up or Down Total Data ======*/
                 upDownText="text-success" /*====== Set Color For Icon Up or Down (text-success = Green Color) / (text-danger = Red Color) ======*/
                 percentData="4%" /*====== Total Percent Up or Down Today ======*/
                 textPercent="Up From Yesterday" /*====== Text For Up or Down Total Percentage Today ======*/
                 setColor="warning" /*====== Set Color For Shadow or Background ======*/
                 setIcon="dripicons-wallet" /*====== For Change Icon Can Change Here Using Dripicons ======*/
                 loading={loading}
            />
        </div>
    )
};

const Card = (props) => {
    return (
        <div>
        <div className="card card-eco">
            <div className="card-body">
                <h4 className="title-text mt-0">{props.titleData}</h4>
                <div className="d-flex justify-content-between">
                <h3 className={`text-${props.setColor}`}>
                    {props.loading ? props.totalCount : <div className="spinner-border text-warning" role="status">
                    <span className="sr-only">Loading...</span>
                    </div>}
                </h3>
                <i className={`${props.setIcon} card-eco-icon bg-${props.setColor} align-self-center`} />
                </div>
                <p className="mb-0 text-muted text-truncate">
                <span className="text-success">
                    <i className={`${props.upDownClass}`}></i>
                    {props.percentData}
                </span>{" "}
                {props.textPercent}
                </p>
            </div>
        </div>
    </div>
    )
};

export default TotalTransaction;