import React from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { urlContext } from '../Context';
import Swal from 'sweetalert2';

function Login () {
    return (  
    <div>
        <div className="account-body accountbg">
          {/* Log In page */}
          <div className="row vh-100 ">
            <div className="col-12 align-self-center">
              <div className="auth-page">
                <div className="card auth-card shadow-lg">
                  <div className="card-body">
                    <div className="px-3">
                      <div className="auth-logo-box">
                        <a href="index.html" className="logo logo-admin">
                          <img
                            src="../assets/images/codeoku.png"
                            height={55}
                            alt="logo"
                            className="auth-logo"
                          />
                        </a>
                      </div>
                      {/*end auth-logo-box*/}
                      <div className="text-center auth-logo-text">
                        <h4 className="mt-0 mb-3 mt-5">Codeo Admin</h4>
                        <p className="text-muted mb-0">
                          Sign in to continue to Acess Backend.
                        </p>

                        <LoginForm/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
    )
};

const LoginForm = (props) => {

    const [loginData, setLoginData] = React.useState({ email: '', password: '' });

    let baseUrl = React.useContext(urlContext)

    const handleChange = (e) => {
        setLoginData({...loginData, [e.target.name]: e.target.value})
    }

    let history = useHistory();

    const onLogin = (e) => {
        
        e.preventDefault();
        Swal.showLoading();
        axios({
            url: `${baseUrl}/admins/login`,
            method: 'POST',
            data: {
                email: loginData.email,
                password: loginData.password
            }
        })
        .then(({data}) => {
            Swal.close();
            localStorage.setItem('admincodeotoken', data.token);
            history.push('/operationMain')
        })
        .catch(err => {
            Swal.close();
            Swal.fire({
                icon: 'error',
                text: err.response.data.message,
              })
        })
    }

    return (
        <form className="form-horizontal auth-form my-4" onSubmit={onLogin}>
        <div className="form-group">
          <label htmlFor="username">Email</label>
          <div className="input-group mb-3">
            <span className="auth-form-icon">
              <i className="dripicons-user" />
            </span>
            <input
              type="email"
              name="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
              onChange={handleChange}
            />
          </div>
        </div>
  
        <div className="form-group">
          <label htmlFor="userpassword">Password</label>
          <div className="input-group mb-3">
            <span className="auth-form-icon">
              <i className="dripicons-lock" />
            </span>
            <input
              type="password"
              name="password"
              className="form-control"
              id="userpassword"
              placeholder="Enter password"
              onChange={handleChange}
            />
          </div>
        </div>
  
        <div className="form-group row mt-4">
          <div className="col-sm-6">
            <div className="custom-control custom-switch switch-success">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customSwitchSuccess"
              />
              <label
                className="custom-control-label text-muted"
                htmlFor="customSwitchSuccess"
              >
                Remember me
              </label>
            </div>
          </div>
        </div>
  
        <div className="form-group mb-0 row">
          <div className="col-12 mt-2">
            <button
              className="btn btn-gradient-primary btn-round btn-block waves-effect waves-light"
              type="submit"
            >
              Log In <i className="fas fa-sign-in-alt ml-1" />
            </button>
          </div>
        </div>
      </form>
    )
};

export default Login;