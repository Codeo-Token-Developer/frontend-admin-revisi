import React, { useContext } from 'react'
import { Link, useRouteMatch, useHistory } from 'react-router-dom'
import { adminContext } from '../../../Context'
import Swal from 'sweetalert2'

//auth;

export const HeaderRight = () => {
    return(
        <HeaderRightUnstyled />
    )
}

function AuthOne(props){
    return(
        <li className="dropdown notification-list">
            <a className="nav-link dropdown-toggle arrow-none waves-light waves-effect" data-toggle="dropdown" href="#a1" role="button" aria-haspopup="false" aria-expanded="false">
                <i className="dripicons-bell noti-icon" />
                <span className="badge badge-danger badge-pill noti-icon-badge">2</span>
            </a>
            <div className="dropdown-menu dropdown-menu-right dropdown-lg">
                {/* item*/}
            <h6 className="dropdown-item-text">
                Notifications (18)
            </h6>
                <div className="slimscroll notification-list">
                    {/* item*/}
                    <a href="#a" className="dropdown-item notify-item active">
                        <div className="notify-icon bg-success"><i className="mdi mdi-cart-outline" /></div>
                        <p className="notify-details">Your order is placed<small className="text-muted">Dummy text of the printing and typesetting industry.</small></p>
                    </a>
                    {/* item*/}
                    <a href="#b" className="dropdown-item notify-item">
                        <div className="notify-icon bg-warning"><i className="mdi mdi-message" /></div>
                        <p className="notify-details">New Message received<small className="text-muted">You have 87 unread messages</small></p>
                    </a>
                    {/* item*/}
                    <a href="#C" className="dropdown-item notify-item">
                        <div className="notify-icon bg-info"><i className="mdi mdi-glass-cocktail" /></div>
                        <p className="notify-details">Your item is shipped<small className="text-muted">It is a long established fact that a reader will</small></p>
                    </a>
                    {/* item*/}
                    <a href="#Yourorderisplaced" className="dropdown-item notify-item">
                        <div className="notify-icon bg-primary"><i className="mdi mdi-cart-outline" /></div>
                        <p className="notify-details">Your order is placed<small className="text-muted">Dummy text of the printing and typesetting industry.</small></p>
                    </a>
                    {/* item*/}
                    <a href="#NewMessageReceived" className="dropdown-item notify-item">
                        <div className="notify-icon bg-danger"><i className="mdi mdi-message" /></div>
                        <p className="notify-details">New Message received<small className="text-muted">You have 87 unread messages</small></p>
                    </a>
                </div>
                {/* All*/}
                <a href="#ViewAll" className="dropdown-item text-center text-primary">
                    View all <i className="fi-arrow-right" />
                </a>
            </div>
        </li>
    )
}

function AuthTwo(props){
    let history = useHistory();

    let user = useContext(adminContext);

    //let { url } = useRouteMatch();

    const logout = () => {
        Swal.showLoading();
        localStorage.removeItem('admincodeotoken');
        history.push('/operation')
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
                <span className="ml-1 nav-user-name hidden-sm" style={{color: 'white'}}> Ivan <i className="mdi mdi-chevron-down" /> </span>
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
    )
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
