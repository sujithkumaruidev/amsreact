import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Navbar from './Navbar';
export default class Home extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
             
        }
    }
    
    render() {
        return (
           <div>
        <header>
          <div className="header_section">
            <div className="menu-btn">
              <div id="desktop-menu"><img className="custom-enter-logo" src="amsreact/images/enter.png" /></div>
              <img className="mobile-logo" src="amsreact/images/logo.jpg"alt="logo"/>
            </div>
            <div className="page-title">
              <h2>Dashboard</h2>
            </div>
            <div className="dropdown">
              <a href="javascript:void(0);" data-toggle="dropdown">
                <div className="avatar_icon">
                  <img src="amsreact/images/pro-pic.jpg"alt="propic" /></div>
              </a>
              <div className="dropdown-menu">
                <div className="dropdown-header d-flex flex-column align-items-center">
                  <div className="info text-center">
                    <p className="name font-weight-bold mb-0">Username</p>
                    <p className="email text-muted mb-0">user@gmail.com</p>
                  </div>
                </div>
                <div className="dropdown-body">
                  <ul>
                    <li>
                    <Link to="/changepassword"><i className="fas fa-unlock-alt" />  Change Password</Link>
                    </li> 
                    <li>
                      <Link to='/login'><i className="fas fa-sign-out-alt" />  Logout</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <a id="sidebar-toggle" className="mobile-menu-toggle">
              <i className="fas fa-bars" />
            </a>
          </div>
        </header>
        
        <div id="wrapper" className="desktop-wrapper desktop-wrapper page-content d-flex align-items-stretch">
          <Navbar />
          <div className="content-inner pagecontent">
            {/* Page Header*/}
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="row datepickerbox m-b-40">
                    <div className="col-lg-6 col-xl-6 col-md-12 col-sm-12">
                      <div className="card card-block">
                        <div className="number-bold-bg"><i className="fas fa-image" /></div>
                        <h4>No of images Trained</h4>
                        <div className="numbers-bold">
                          <strong>11</strong>
                        </div> 
                      </div>
                    </div>
                    <div className="col-lg-6 col-xl-6 col-md-12 col-sm-12">
                      <div className="card card-block">
                        <div className="number-bold-bg"><i className="fas fa-video" /></div>
                        <h4>No of videos uploaded </h4>
                        <div className="numbers-bold"><strong>11</strong>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-xl-6 col-md-12 col-sm-12">
                      <div className="card card-block">
                        <div className="number-bold-bg"><i className="fas fa-crop-alt" /></div>
                        <h4>Total Frames Captured</h4>
                        <div className="numbers-bold"><strong>11</strong>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-xl-6 col-md-12 col-sm-12">
                      <div className="card card-block">
                        <div className="number-bold-bg"><i className="fas fa-file" /></div>
                        <h4>Total Results detected</h4>
                        <div className="numbers-bold"><strong>11</strong>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="bar-img ">
                    <h4 className="sub-title">Category</h4>
                    <img src="amsreact/images/bar.png" alt="bar" />
                  </div>
                </div>
              </div>
              <div className="row datepickerbox m-b-40">
                <div className="col-lg-6 col-xl-6 col-md-12 col-sm-12">
                  <div className="donuts-chart-img">
                    <h4 className="sub-title">Category</h4>
                    <img src="amsreact/images/DoughnutChart.png" alt="chart" />
                  </div>
                </div>
                <div className="col-lg-6 col-xl-6 col-md-12 col-sm-12">
                  <div className="map-img donuts-chart-img">
                    <h4 className="sub-title">Category</h4>
                    <img src="amsreact/images/map.png" alt="map" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* The Modal */}
        <div className="modal fade" id="myModal">
          <div className="modal-dialog">
            <div className="modal-content">
              {/* Modal Header */}
              <div className="modal-header">
                <h4 className="modal-title">Add New</h4>
                <button type="button" className="close" data-dismiss="modal">×</button>
              </div>
              {/* Modal body */}
              <div className="modal-body adddialog">
                <div className="row">
                  <div className="col-lg-4 col-xl-4 col-md-12 col-sm-12">
                    <div className="form-group">
                      <label htmlFor="intcode">Initative Code</label>
                      <input type="text" className="form-control" id="cde" name="intcode" />
                    </div>
                  </div>
                  <div className="col-lg-4 col-xl-4 col-md-12 col-sm-12">
                    <div className="form-group">
                      <label htmlFor="prj-id">Project Leader ID</label>
                      <select className="form-control" id="prj-id">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-4 col-xl-4 col-md-12 col-sm-12">
                    <div className="form-group">
                      <label htmlFor="pwd">Project Title</label>
                      <input type="password" className="form-control" id="pwd" name="password" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4 col-xl-4 col-md-12 col-sm-12">
                    <div className="form-group">
                      <label htmlFor="prj-id">Project Manager ID</label>
                      <select className="form-control" id="prj-id">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-4 col-xl-4 col-md-12 col-sm-12">
                    <div className="form-group">
                      <label htmlFor="prj-id">Department</label>
                      <select className="form-control" id="prj-id">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              {/* Modal footer */}
              <div className="modal-footer">
                <button type="button" className="btn btn-info" data-dismiss="modal">Save</button>
                <button type="button" className="btn btn-danger" data-dismiss="modal">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </div>
        )
    }
}
