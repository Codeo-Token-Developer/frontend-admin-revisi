import React,{useContext} from 'react'
import { useHistory } from 'react-router-dom'
import { adminContext } from '../../../Context'
import Swal from 'sweetalert2'

import SocketIo from "socket.io-client";
import Notify from "./Notify";
//auth;

export const HeaderRight = () => {
    return(
        <HeaderRightUnstyled />
    )
}

let socketData=[],inc=0;
function AuthOne(props) {

//let baseUrl=React.useContext(urlContext);

const [data,setData]=React.useState(socketData);
const [count,setCount]=React.useState(0);


const ReadMessage=React.useCallback((index)=>{
  // axios({
  //   url:`${baseUrl}/notify/myNews/`,
  //   method:'PATCH',
  //   headers:{
  //     jwttoken:localStorage.getItem("codeoToken")
  //   },
  //   data:{
  //     item:null
  //   }
  // }).then(({data})=>{
  //   delete socketData[index];
  //   inc=0;
  //   setData(socketData.map((item,index)=>{
  //     inc++;
  //     if(index<5){
  //       return item;
  //     }
  //   }));
  //   setCount(inc);
  // }).catch(err=>{
  //   let wrongPass = "";
  //   if (typeof err.response === "undefined") {
  //     wrongPass = err.message;
  //   } else {
  //     wrongPass = err.response.data.message;
  //   }
  //   console.log(wrongPass);
  // });
  delete socketData[index];
  inc=0;
  setData(socketData.map((item,index)=>{
    inc++;
    return item;
  }));
  setCount(inc);
},[]);
//},[baseUrl]);

React.useEffect(()=>{
  let ENDPOINT=`https://codeo-backend-user.herokuapp.com`;
  let soketio=SocketIo(ENDPOINT);
  soketio.on("user-notif",(socket)=>{
    alert(JSON.stringify(socket))
    // socket.data.map((item,index)=>{
    //   socketData.unshift(Notify({type:"Order",message:item.message,title:"Notification",readMessage:()=>ReadMessage(index)}).message);
    // });
    // setData(socketData);
    // inc=0;
    // socketdata.reverse().forEach((item,index)=>{
    //   inc++;
    //   socketData.push(Notify({type:"Message",message:item.message,title:"Notification",indexValue:index,userId:"",click:ReadMessage}).message);
    // });
    // setData(socketData);
    // setCount(inc);
  });
  inc=0;
  let socketdata=[
  {message:"Message1",status:false},{message:"Message2",status:false},{message:"Message3",status:false},{message:"Message4",status:false},
  {message:"Message5",status:false},{message:"Message6",status:false},{message:"Message7",status:false},{message:"Message8",status:false},
  {message:"Message9",status:false},{message:"Message10",status:false}];
    socketdata.reverse().forEach((item,index)=>{
      inc++;
      socketData.push(Notify({type:"Message",message:item.message,title:"Notification",indexValue:index,userId:"",click:ReadMessage}).message);
    });
    setData(socketData);
    setCount(inc);
},[ReadMessage]);

return (
  <>
      <li className="dropdown notification-list">
        <button
          style={{ backgroundColor: "#1c233f", border: "none" }}
          className="nav-link dropdown-toggle arrow-none waves-light waves-effect"
          data-toggle="dropdown"
          aria-haspopup="false"
          aria-expanded="false"
        >
          <i className="dripicons-bell noti-icon" />
          <span className="badge badge-danger badge-pill noti-icon-badge">
            {count===0?null:count}
          </span>
        </button>
        <div className="dropdown-menu dropdown-menu-right dropdown-lg">
          {/* item*/}
          <h6 className="dropdown-item-text">Notifications {count}</h6>
          <div className="slimscroll notification-list">
            {/* item*/}

            {/* item*/}
            {data.map((item,index)=>{
              return item;
            })}
            {/* item*/}
          </div>
          {/* All*/}
          {/* <button className="dropdown-item text-center text-primary">
                    View all <i className="fi-arrow-right" />
                    </button> */}
        </div>
      </li>
    </>
);

  // return (
  //   <>
  //     <li className="dropdown notification-list">
  //       <button
  //         style={{ backgroundColor: "#1c233f", border: "none" }}
  //         className="nav-link dropdown-toggle arrow-none waves-light waves-effect"
  //         data-toggle="dropdown"
  //         aria-haspopup="false"
  //         aria-expanded="false"
  //       >
  //         <i className="dripicons-bell noti-icon" />
  //         <span className="badge badge-danger badge-pill noti-icon-badge">
  //           2
  //         </span>
  //       </button>
  //       <div className="dropdown-menu dropdown-menu-right dropdown-lg">
  //         {/* item*/}
  //         <h6 className="dropdown-item-text">Notifications (18)</h6>
  //         <div className="slimscroll notification-list">
  //           {/* item*/}
  //           <button className="dropdown-item notify-item active">
  //             <div className="notify-icon bg-success">
  //               <i className="mdi mdi-cart-outline" />
  //             </div>
  //             <p className="notify-details">
  //               Your order is placed
  //               <small className="text-muted">
  //                 Dummy text of the printing and typesetting industry.
  //               </small>
  //             </p>
  //           </button>
  //           {/* item*/}
  //           <button className="dropdown-item notify-item">
  //             <div className="notify-icon bg-warning">
  //               <i className="mdi mdi-message" />
  //             </div>
  //             <p className="notify-details">
  //               New Message received
  //               <small className="text-muted">
  //                 You have 87 unread messages
  //               </small>
  //             </p>
  //           </button>
  //           {/* item*/}
  //           <button className="dropdown-item notify-item">
  //             <div className="notify-icon bg-info">
  //               <i className="mdi mdi-glass-cocktail" />
  //             </div>
  //             <p className="notify-details">
  //               Your item is shipped
  //               <small className="text-muted">
  //                 It is a long established fact that a reader will
  //               </small>
  //             </p>
  //           </button>
  //           {/* item*/}
  //           <button className="dropdown-item notify-item">
  //             <div className="notify-icon bg-primary">
  //               <i className="mdi mdi-cart-outline" />
  //             </div>
  //             <p className="notify-details">
  //               Your order is placed
  //               <small className="text-muted">
  //                 Dummy text of the printing and typesetting industry.
  //               </small>
  //             </p>
  //           </button>
  //           {/* item*/}
  //           <button className="dropdown-item notify-item">
  //             <p className="notify-details">
  //               New Message received
  //               <small className="text-muted">
  //                 You have 87 unread messages
  //               </small>
  //             </p>
  //           </button>
  //         </div>
  //         {/* All*/}
  //         {/* <button className="dropdown-item text-center text-primary">
  //                   View all <i className="fi-arrow-right" />
  //                   </button> */}
  //       </div>
  //     </li>
  //   </>
  // );
}

function AuthTwo(props){
    let history = useHistory();

    let user = useContext(adminContext);

    //let { url } = useRouteMatch();

    const logout = () => {
        Swal.showLoading();
        localStorage.removeItem('admincodeotoken');
        history.push('/')
        Swal.close();
    };

    return(
        <li className="dropdown">
          {/*
            <button style={{backgroundColor: "#1c233f", border: "none"}} className="nav-link dropdown-toggle waves-effect waves-light nav-user" data-toggle="dropdown" role="button" aria-haspopup="false" aria-expanded="false">
            */
          }

            <button className="nav-link dropdown-toggle waves-effect waves-light nav-user" data-toggle="dropdown" aria-haspopup="false" aria-expanded="false" style={{backgroundColor: "#1c233f", border: "none", color: 'white'}}>
                <img src="../assets/images/users/user-4.jpg" alt="profile-user" className="rounded-circle" />
                <span className="ml-1 nav-user-name hidden-sm" style={{color: 'white'}}>{(user===undefined||user===null)?"ADMIN":user.full_name}<i className="mdi mdi-chevron-down" /> </span>
            </button>
            <div className="dropdown-menu dropdown-menu-right">
                {/* <Link to={`${url}/profile`}> */}
                    <button className="dropdown-item">
                        <i className="dripicons-user text-muted mr-2" /> Profile
                    </button>
                {/* </Link> */}
                <div className="dropdown-divider" />
                <button className="dropdown-item" type="button" onClick={logout} ><i className="dripicons-exit text-muted mr-2" /> Logout</button>
            </div>
        </li>
    );
}

function HeaderRightUnstyled(props){
    return(
        <nav className="navbar-custom">
            <ul className="list-unstyled topbar-nav float-right mb-0">

                <AuthOne />
                <AuthTwo />

            </ul>
            {/*end topbar-nav*/}
            <ul className="list-unstyled topbar-nav mb-0">
                <li>
                    <button className="button-menu-mobile nav-link waves-effect waves-light">
                        <i className="dripicons-menu nav-icon" />
                    </button>
                </li>
            </ul>
        </nav>
    )
}
