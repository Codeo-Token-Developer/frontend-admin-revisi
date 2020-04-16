import React from 'react';
import axios from 'axios'
import { urlContext } from '../../Context';

const TotalActiveUser = (props) => {

    let baseUrl = React.useContext(urlContext);

    const [totalActiveUser, setTotalActiveUser] = React.useState('')

    React.useEffect(() => {
        axios({
            url: `${baseUrl}/dashboard/totalActiveUser`,
            method: 'GET',
            headers: {
                admintoken: localStorage.getItem('admincodeotoken')
            }
        })
        .then(({data}) => {
            setTotalActiveUser(data.total)
        })
        .catch(err => {
            console.log(err)
        })
    },[baseUrl])

    return (
        <div className="col-lg-3">
          <Card
            totalCount={totalActiveUser} /*====== Total Count Data ======*/
            textPercent="Up From Yesterday"
            percentData="5.5%"
            titleData="Total Active User"
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
                    <h3 className="text-purple">
                        {props.totalCount}
                    </h3>
                    <i className="dripicons-cart card-eco-icon bg-purple align-self-center" />
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
};

export default TotalActiveUser;