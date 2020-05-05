// import React from 'react';
// import Io from 'socket.io-client';
// import { urlContext, urlSocketContext } from '../../Context';
// import axios from 'axios';
// let socket;

// function UserLoginTable() {
//   return (
//     <>
//       <Table/>
//     </>
//   )
// };

// const Table = () => {

//   let ENDPOINT = React.useContext(urlSocketContext);

//   let baseUrl = React.useContext(urlContext);

//   const [users, setUsers] = React.useState([])

//   React.useEffect(() => {
//       axios({
//         url: `${baseUrl}/dashboard/totalLogin`,
//         method: 'GET',
//         headers: {
//           admintoken: localStorage.getItem('admincodeotoken')
//         }
//       })
//       .then(({data}) => {
//         console.log(data.total)
//         setUsers(data.total);
//       })
//       .catch(err => {
//         alert(err);
//         console.log(err);
//       })
//   },[baseUrl]);

//   React.useEffect(() => {
//     socket = Io(ENDPOINT);
//     socket.on('user-login', data => {
//       let find = false;
//       let loginStatus = data.isLogin;
//       let loginUsers = users;
//       for (let i = 0; i < loginUsers.length; i++) {
//         if (loginUsers[i].id === data.id) {
//           find = true;
//           loginUsers[i].isLogin = loginStatus
//         }
//       };
//       if (find) {
//         setUsers(loginUsers)
//       }else {
//         let newLoginUser = [];
//         newLoginUser.push(data);
//         for (let i = 0; i < 9; i++) {
//           newLoginUser.push(loginUsers[i])
//         }
//         setUsers(newLoginUser);
//       }
//     })
//     socket.on('user-logout', data => {
//       alert(data.isLogin);
//     })
//   },[ENDPOINT, users])

//     return (
//     <div className="col-6">
//     <div className="card">
//       <div className="card-body order-list">
//         <h4 className="header-title mt-0 mb-3">New User Just Login</h4>
//         <div className="table-responsive">
//           <table className="table table-hover mb-0">
//             <thead className="thead-light">
//               <tr>
//                 <th className="border-top-0">Nama</th>
//                 <th className="border-top-0">Country</th>
//                 <th className="border-top-0">Date/Time</th>
//                 <th className="border-top-0">Status</th>
//               </tr>
//               {/*end tr*/}
//             </thead>
//             <tbody>
//               {/* {listLogin} */}
//               <ListLogin users={users} />

//             </tbody>
//           </table>{" "}
//         {/*end table*/}
//       </div>
//       {/*end /div*/}
//     </div>
//     {/*end card-body*/}
//   </div>
//   {/*end card*/}
// </div>
//     )
// };

// const ListLogin = (props) => {
//   return props.users.map(user => {
//       let isLog = 'danger';
//       if (user.isLogin) {
//         isLog = 'success'
//       }
//     return (
//       <tr key={user.id}>
//         <td>{user.name}</td>
//         <td>{user.country}</td>
//         <td>12:00 AM</td>
//         <td>
//           <span className={`badge badge-boxed badge-soft-${isLog}`}>
//             {user.isLogin ? <>Log In</> : <>Log Out</>}
//           </span>
//         </td>
//       </tr>
//     )
//   })
// }

// export default UserLoginTable;

import React from "react";
import SocketIo from "socket.io-client";
import axios from "axios";
import Tbl from "./TableUserLogin";

class UserLogin extends React.Component {
  state = {
    users: [],
  };

  componentWillMount() {
    axios({
      url: "https://codeo-admin.herokuapp.com/dashboard/totalLogin",
      method: "GET",
      headers: {
        admintoken: localStorage.getItem("admincodeotoken"),
      },
    }).then(({ data }) => {
      // console.log(data.total);
      this.setState({ users: data.total });
    });
  }

  componentDidMount() {
    let ENDPOINT = "codeo-backend-user.herokuapp.com/";
    let socket = SocketIo(ENDPOINT);

    socket.on("user-login", (data) => {
      let loginUsers = this.state.users;
      let fixUsers = [];
      let find = false;
      loginUsers.forEach((loginUser) => {
        if (loginUser.id === data.id) {
          loginUser.isLogin = data.isLogin;
          find = true;
        }
      });

      if (find) {
        this.setState({ users: loginUsers });
      } else {
        fixUsers.push(data);
        for (let i = 0; i < loginUsers.length - 1; i++) {
          fixUsers.push(loginUsers[i]);
        }
        this.setState({ users: fixUsers });
      }
    });

    socket.on("user-logout", (data) => {
      let logoutUsers = this.state.users;
      let fixLogoutUser = [];
      let find = false;
      logoutUsers.forEach((logUser) => {
        if (logUser.id === data.id) {
          logUser.isLogin = data.isLogin;
          find = true;
        }
      });

      if (find) {
        this.setState({ users: logoutUsers });
      } else {
        fixLogoutUser.push(data);
        for (let i = 0; i < logoutUsers.length - 1; i++) {
          fixLogoutUser.push(logoutUsers[i]);
        }
        this.setState({ users: fixLogoutUser });
      }
    });
  }

  render() {
    return (
      <div className="col-6">
        <div className="card">
          <div className="card-body order-list">
            <h4 className="header-title mt-0 mb-3">New User Just Login</h4>
            <div className="table-responsive">
              {/* <table id="datatable" className="table table-hover mb-0">
                <thead className="thead-light">
                  <tr>
                    <th className="border-top-0">Nama</th>
                    <th className="border-top-0">Country</th>
                    <th className="border-top-0">Date/Time</th>
                    <th className="border-top-0">Status</th>
                  </tr> */}
              {/*end tr*/}
              {/* </thead>
                <tbody> */}
              {/* {listLogin} */}
              {/* {this.state.users.length > 0 ? <ListLogin users={this.state.users} /> : ""} */}
              {/* <ListLogin users={this.state.users} /> */}
              {/* </tbody>
              </table> */}
              {/* <Tbl data={ListLogin(this.state.users)}></Tbl> */}
              {/*end table*/}
              <ListLogin users={this.state.users} />
            </div>
            {/*end /div*/}
          </div>
          {/*end card-body*/}
        </div>
        {/*end card*/}
      </div>
    );
  }
}

const ListLogin = (props) => {
  let dataSet = [];

  props.users.map((user, index) => {
    let nameData = user.name;
    let countryData = user.country === " " ? "Unknown Country" : user.country;
    let dateTimeData =
      new Date(user.date).toLocaleDateString() +
      " " +
      new Date(user.date).toLocaleTimeString();
    let statusData = (
      <span
        className={
          user.isLogin
            ? `badge badge-boxed badge-soft-success`
            : `badge badge-boxed badge-soft-danger`
        }
      >
        {user.isLogin ? <>Log In</> : <>Log Out</>}
      </span>
    );

    let values = [index + 1, nameData, countryData, dateTimeData, statusData];

    dataSet.push(values);
  });

  return <Tbl data={dataSet} />;
};

export default UserLogin;
