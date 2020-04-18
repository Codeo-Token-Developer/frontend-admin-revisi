import React from 'react';
import axios from 'axios';
import { urlContext } from '../../Context';

const TotalCodeo = () => {

    let baseUrl = React.useContext(urlContext);

    const [total, setTotal] = React.useState('');
    const [loading, setLoading] = React.useState(false)

    React.useEffect(() => {

        axios({
            url: `${baseUrl}/dashboard/totalVerifiedUser`,
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
            console.log(err);
        })

    },[baseUrl])

    return (
        <div className="col-lg-3">
          <Card
            titleData="Total Codeo" /*====== Text Data For Card ======*/
            totalCount="$ 9.234.419" /*====== Total Count Data ======*/
            upDownClass="" /*====== Set Icon Up or Down Total Data ======*/
            upDownText="" /*====== Set Color For Icon Up or Down (text-success = Green Color) / (text-danger = Red Color) ======*/
            percentData="" /*====== Total Percent Up or Down Today ======*/
            textPercent="&nbsp;" /*====== Text For Up or Down Total Percentage Today ======*/
            setColor="purple" /*====== Set Color For Shadow or Background ======*/
            setIcon="dripicons-wallet" /*====== For Change Icon Can Change Here Using Dripicons ======*/
            loading={loading}
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
          {/* <h3 className={classnames("text-" + props.setColor)}> */}
          <h3 className={`text-${props.setColor}`}>
            {props.totalCount}
          </h3>
            <i className={`${props.setIcon} card-eco-icon bg-${props.setColor} shadow-${props.setColor} align-self-center`} />
        </div>
        <p className="mb-0 text-muted text-truncate">
          {/* <span className={classnames(props.upDownText)}> */}
          <span className={`${props.upDownText}`} >
            {/* <i className={classnames(props.upDownClass)}> </i> */}
            <i className={`${props.upDownClass}`}></i>
            {props.percentData}
          </span>{" "}
          {props.textPercent}
        </p>
      </div>
    </div>
    )

};

export default TotalCodeo;
