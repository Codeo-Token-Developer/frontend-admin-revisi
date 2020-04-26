import React ,{useState,useEffect,useContext} from 'react';


import axios from "axios";
import {DataList} from '../adminDashboard/componentKYCApproval/CardInfoKYC';

import {urlContext} from "../../Context";

function KYCTable(props) {

  let [msgs,setMsgs]=useState("");
  let [data,setData]=useState(undefined);
  const [loading,setLoading]=useState(false);

  let baseUrl=useContext(urlContext);

    useEffect(()=>{

      function getKyc(){
        axios({
          url:`${baseUrl}/kyc`,
          method:"GET",
          headers:{
            adminToken:localStorage.getItem("admincodeotoken")
          }
        }).then(({data})=>{
            setData(data.kycs);
            setLoading(true);
        }).catch(err=>{
          setLoading(null);
          let msg="";
          if (err.response === undefined) {
            msg=err.message;
          } else {
            msg=err.response.data.message;
          }
          setMsgs(msg);
        });
      };
      getKyc();

    });

    return (
        <>
        <div class="col-6">
            <div class="card">
                <div class="card-body order-list">
                <h4 class="header-title mt-0 mb-3">New KYC Application</h4>
                  {(loading===true) ? (
                    <DataList baseUrl={baseUrl} data={data} />
                  ) : (loading===false)?
                  <div class="spinner-border text-primary" role="status">
                    <span class="sr-only">Loading...</span>
                  </div>:<div>{msgs}</div>
                  }
                </div>
            </div>
        </div>
        </>
    );
};

// function Detail() {
//   return (
//       <>
//               <div class="col-6">
//                           <div class="card">
//                               <div class="card-body order-list">
//                                   <h4 class="header-title mt-0 mb-3">New KYC Application</h4>
//                                   <div class="table-responsive">
//                                       <table class="table table-hover mb-0">
//                                           <thead class="thead-light">
//                                               <tr>
//                                                   <th class="border-top-0">Date</th>
//                                                   <th class="border-top-0">Name</th>
//                                                   <th class="border-top-0">Action</th>
//                                               </tr>
//                                           </thead>
//                                           <tbody>
//                                               <tr>
//                                                   <td>17-02-2020 09:00 AM</td>
//                                                   <td>Master Thomas</td>
//                                                   <td><button class="btn btn-xs btn-danger">View Details</button></td>
//                                               </tr>
//                                               <tr>
//                                                   <td>17-02-2020 10:00 AM</td>
//                                                   <td>Noob Ivan</td>
//                                                   <td><button class="btn btn-xs btn-danger">View Details</button></td>
//                                               </tr>
//                                               <tr>
//                                                   <td>17-02-2020 08:18 AM</td>
//                                                   <td>CEO Agatha</td>
//                                                   <td><button class="btn btn-xs btn-danger">View Details</button></td>
//                                               </tr>
//                                               <tr>
//                                                   <td>17-02-2020 09:00 AM</td>
//                                                   <td>Master Thomas</td>
//                                                   <td><button class="btn btn-xs btn-danger">View Details</button></td>
//                                               </tr>
//                                               <tr>
//                                                   <td>17-02-2020 09:00 AM</td>
//                                                   <td>Master Thomas</td>
//                                                   <td><button class="btn btn-xs btn-danger">View Details</button></td>
//                                               </tr>
//                                               <tr>
//                                                   <td>17-02-2020 09:00 AM</td>
//                                                   <td>Master Thomas</td>
//                                                   <td><button class="btn btn-xs btn-danger">View Details</button></td>
//                                               </tr><tr>
//                                                   <td>17-02-2020 09:00 AM</td>
//                                                   <td>Master Thomas</td>
//                                                   <td><button class="btn btn-xs btn-danger">View Details</button></td>
//                                               </tr><tr>
//                                                   <td>17-02-2020 09:00 AM</td>
//                                                   <td>Master Thomas</td>
//                                                   <td><button class="btn btn-xs btn-danger">View Details</button></td>
//                                               </tr><tr>
//                                                   <td>17-02-2020 09:00 AM</td>
//                                                   <td>Master Thomas</td>
//                                                   <td><button class="btn btn-xs btn-danger">View Details</button></td>
//                                               </tr><tr>
//                                                   <td>17-02-2020 09:00 AM</td>
//                                                   <td>Master Thomas</td>
//                                                   <td><button class="btn btn-xs btn-danger">View Details</button></td>
//                                               </tr><tr>
//                                                   <td>17-02-2020 09:00 AM</td>
//                                                   <td>Master Thomas</td>
//                                                   <td><button class="btn btn-xs btn-danger">View Details</button></td>
//                                               </tr>
//                                           </tbody>
//                                       </table>
//                                   </div>
//                               </div>
//                           </div>
//                       </div>
//       </>
//   );
// }

export default KYCTable;
