import React from 'react';
import { urlContext } from '../../Context';
import axios from 'axios';

function TotalGenerateWallet() {

    let baseUrl = React.useContext(urlContext);

    const [TotalWallet, setTotalWallet] = React.useState('');
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        axios({
            url: `${baseUrl}/dashboard/totalGenerateWallet`,
            method: 'GET',
            headers: {
                admintoken: localStorage.getItem('admincodeotoken')
            }
        })
        .then(({data}) => {
            setTotalWallet(data.total);
            setLoading(true);
        })
        .catch(err => {
          setLoading(null);
            console.log(err);
        })
    },[baseUrl])

    return (
        <>
        <div className="col-lg-3">
          <Card
            titleData="Total Generate Wallet" /*====== Text Data For Card ======*/
            loading={loading}
            totalCount={TotalWallet} /*====== Total Count Data ======*/
            upDownClass="mdi mdi-trending-up" /*====== Set Icon Up or Down Total Data ======*/
            upDownText="text-success" /*====== Set Color For Icon Up or Down (text-success = Green Color) / (text-danger = Red Color) ======*/
            percentData="72.5%" /*====== Total Percent Up or Down Today ======*/
            textPercent="Up From Last Week" /*====== Text For Up or Down Total Percentage Today ======*/
            setColor="success" /*====== Set Color For Shadow or Background ======*/
            setIcon="dripicons-cart" /*====== For Change Icon Can Change Here Using Dripicons ======*/
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
          <h3 className={`${props.upDownText}`}>
          {props.loading===true ? props.totalCount :(props.loading===false)? <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
            </div>:0}
          </h3>
          <i className={`${props.setIcon} card-eco-icon bg-${props.setColor} shadow-${props.setColor} align-self-center`} />
        </div>
        <p className="mb-0 text-muted text-truncate">
          <span className={`${props.upDownText}`}>
            <i className={`${props.upDownClass}`}> </i>
            {props.percentData}
          </span>{" "}
          {props.textPercent}
        </p>
      </div>
    </div>
        </div>
    )
};

export default TotalGenerateWallet;
