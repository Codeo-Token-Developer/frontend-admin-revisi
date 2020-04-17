import React from 'react';
import axios from 'axios';
import { urlContext } from '../../Context';
import Io from 'socket.io-client';

const TotalUser = () => {   

    const [total, setTotal] = React.useState(false);

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

    let ENDPOINT = 'http://localhost:3005'
    // let ENDPOINT = baseUrl

    React.useEffect(() => {
        const socket = Io(ENDPOINT);
        socket.on('user-register', data => {
            setTotal(data);
        })

        return () => {
            socket.emit('disconnect')
        }

    },[ENDPOINT]);

    return (
        <>
            <div className="col-lg-3">
            <Card
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

const Card = (props) => {
    return (
        <div>
            <div className="card card-eco">
            <div className="card-body">
                <h4 className="title-text mt-0">{props.titleData}</h4>
                <div className="d-flex justify-content-between">
                <h3 className="text-purple">
                    {props.totalCount ? props.totalCount : <div class="spinner-border text-primary" role="status">
                    <span class="sr-only">Loading...</span>
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
}

export default TotalUser;