import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ForgotPassword extends Component {
    render() {
        return (
            <div className="loginpage">
        <div className="loginpagedetails container d-flex align-items-center ">
          <div className="login-form">
            <div className="row">
              {/* Logo & Information Panel*/}
              <div className="col-lg-6">
                <div className="info d-flex align-items-center justify-content-center">
                  <div className="content">
                    <div className="logo">
                      <img src="images/logo.jpg" />
                    </div>
                  </div>
                </div>
              </div>
              {/* Form Panel    */}
              <div className="col-lg-6 bg-white">
                <div className="form d-flex align-items-center">
                  <div className="content">
                    {/* <div class="logoimg">
                              <img class="img-fluid" src="images/logo.png" alt="logo"/>
                          </div>  */}
                    <div className="signupheading">
                      <h4>Forgot Password</h4>
                    </div>
                    <form method="post" className="form-validate" noValidate="novalidate">
                      <div className="form-group">
                        <div className="floating-label">      
                          <input className="floating-input" name="loginUsername" type="text" placeholder=" " />
                          <span className="highlight" />
                          <i className="fas fa-envelope" aria-hidden="true" />
                          <label htmlFor="login-username">Email</label>
                        </div>
                      </div>
                      {/* <div class="form-group">
                                            <div class="floating-label">      
                                                    <input class="floating-input" name="login-password" type="text" placeholder=" ">
                                                    <span class="highlight"></span>
                                                    <i class="fas fa-lock" aria-hidden="true"></i>
                                                      <label for="login-password">Password</label>
                                                  </div>
                                                </div> */}
                      <Link id="login" to='/' className="btn btn-primary">Submit</Link>
                      {/* This should be submit button but I replaced it with <a> for demo purposes*/}
                      {/* </form><div class="forgotpwd"><a href="#" class="forgot-pass">Sign In</a></div> */}
                    </form></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        )
    }
}
