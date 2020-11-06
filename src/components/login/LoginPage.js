import axios from 'axios';
import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class LoginPage extends Component {
    constructor(props) {
      super(props);
      this.state = {
        email: '',
        password: ''
      }
    }
    login(e) {
      e.preventDefault();
      console.log('login', this.state);
      const url = 'http://44.233.138.4:9000/AMS/API/user/login';
      axios.post(url, this.state).then(res => {
        console.log(res);
        if(res.status === 200) {
          this.props.history.push(`/`);
        }
      })
    }
    handleChange(e) {
      e.preventDefault();
      this.setState({ [e.target.name] : e.target.value });
    }
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
                          <h4>Log In</h4>
                        </div>
                        <form className="form-validate" onSubmit={(e) => this.login(e)}>
                          <div className="form-group">
                            <div className="floating-label">      
                              <input className="floating-input" value={this.state.email} name="email" type="text" placeholder=" " 
                                onChange={(e) => this.handleChange(e)} />
                              <span className="highlight" />
                              <i className="fas fa-user" aria-hidden="true" />
                              <label htmlFor="email">User Name</label>
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="floating-label">      
                              <input className="floating-input" name="password" value ={this.state.password}
                               type="text" placeholder=" " onChange={(e)=> this.handleChange(e)} />
                              <span className="highlight" />
                              <i className="fas fa-lock" aria-hidden="true" />
                              <label htmlFor="password">Password</label>
                            </div>
                          </div>
                          <input type="submit" id="login" className="btn btn-primary" value="Login"/>
                          {/* This should be submit button but I replaced it with <a> for demo purposes*/}
                        </form>
                        <div className="forgotpwd"><Link to='/forgotpassword' className="forgot-pass">Forgot Password?</Link></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
    }
}
