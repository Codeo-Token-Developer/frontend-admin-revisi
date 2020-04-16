import React from 'react';
import axios from 'axios';
import { urlContext } from '../../Context';

const TotalVerifiedUser = () => {

    let baseUrl = React.useContext(urlContext);

    const [total, setTotal] = React.useState('');

    React.useEffect(() => {

        axios({
            url: `${baseUrl}/dashboard/totalVerifiedUser`,
            method: 'GET',
            headers: {
                admintoken: localStorage.getItem('admincodeotoken')
            }
        })
        .then(({data}) => {
            console.log(data)
            setTotal(data.total)
        })
        .catch(err => {
            console.log(err);
        })

    },[baseUrl])
    
    return (
        <div className="col-lg-3">
            <Card
            titleData="Verified Users" /*====== Text Data For Card ======*/
            totalCount={total} /*====== Total Count Data ======*/
            upDownClass="mdi mdi-trending-down" /*====== Set Icon Up or Down Total Data ======*/
            upDownText="text-danger" /*====== Set Color For Icon Up or Down (text-success = Green Color) / (text-danger = Red Color) ======*/
            percentData="4%" /*====== Total Percent Up or Down Today ======*/
            textPercent="Down From Last Month" /*====== Text For Up or Down Total Percentage Today ======*/
            setColor="secondary" /*====== Set Color For Shadow or Background ======*/
            setIcon="dripicons-jewel" /*====== For Change Icon Can Change Here Using Dripicons ======*/
            />
      </div>
    )
};

const Card = (props) => {


    return (
        <div className="card card-eco">
        <div className="card-body">
          <h4 className="title-text mt-0">{props.titleData}</h4>
          <div className="d-flex justify-content-between">
                <h3 className="text-secondary">
              {props.totalCount}
            </h3>
            <i className="dripicons-jewel bg-secondary shadow-secondary align-self-center"  />
          </div>
          <p className="mb-0 text-muted text-truncate">
            <span className={props.upDownText}>
              <i className={props.upDownClass}> </i>
              {props.percentData}
            </span>{" "}
            {props.textPercent}
          </p>
        </div>
      </div>
    )

};

export default TotalVerifiedUser;
