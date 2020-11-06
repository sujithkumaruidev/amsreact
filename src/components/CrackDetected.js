import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Navbar from './Navbar'
export default class CrackDetected extends Component {
    render() {
        return (
            <div>
        <header>
          <div className="header_section">
            <div className="menu-btn">
              {/* <a id="desktop-menu"><img className="custom-enter-logo" src="amsreactimages/enter.png" /></a> */}
              <img className="mobile-logo" src="amsreact/images/logo.jpg" />
            </div>
            <div className="page-title">
              <h2>Crack Detected - Results</h2>
            </div>
            <div className="dropdown">
              <a href="javascript:void(0);" data-toggle="dropdown">
                <div className="avatar_icon">
                  <img src="amsreact/images/pro-pic.jpg" /></div>
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
                      <a href="changepassword.html"><i className="fas fa-unlock-alt" />  Change Password</a>
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
        <div id="wrapper" className="desktop-wrapper page-content d-flex align-items-stretch">
        <Navbar />
          <div className="content-inner pagecontent">
            {/* Page Header*/}
            <div className="container-fluid">
              <div className="row m-b-40">
                <div className="col-lg-12 col-md-12">
                  <div className="bar-img upload-images">
                    <h4 className="sub-title">Crack Detected Details</h4>
                    <div className="upload-list-images">
                      <div className="upload-single-image" data-toggle="modal" data-target="#myModal">
                        <div className="upload-single-image-details">
                          <img src="amsreact/images/upload-image.jpg" />
                        </div>
                        <div className="upload-single-text-details">
                          <p>SG_11061196_11061996.jpg</p>
                        </div>
                      </div>
                      <div className="upload-single-image">
                        <div className="upload-single-image-details">
                          <img src="amsreact/images/upload-image1.jpg" />
                        </div>
                        <div className="upload-single-text-details">
                          <p>SG_11061196_11061996.jpg</p>
                        </div>
                      </div>
                      <div className="upload-single-image">
                        <div className="upload-single-image-details">
                          <img src="amsreact/images/upload-image2.jpg" />
                        </div>
                        <div className="upload-single-text-details">
                          <p>SG_11061196_11061996.jpg</p>
                        </div>
                      </div>
                      <div className="upload-single-image">
                        <div className="upload-single-image-details">
                          <img src="amsreact/images/upload-image3.jpg" />
                        </div>
                        <div className="upload-single-text-details">
                          <p>SG_11061196_11061996.jpg</p>
                        </div>
                      </div>
                      <div className="upload-single-image">
                        <div className="upload-single-image-details">
                          <img src="amsreact/images/upload-image4.jpg" />
                        </div>
                        <div className="upload-single-text-details">
                          <p>SG_11061196_11061996.jpg</p>
                        </div>
                      </div>
                      <div className="upload-single-image">
                        <div className="upload-single-image-details">
                          <img src="amsreact/images/upload-image5.jpg" />
                        </div>
                        <div className="upload-single-text-details">
                          <p>SG_11061196_11061996.jpg</p>
                        </div>
                      </div>
                      <div className="upload-single-image">
                        <div className="upload-single-image-details">
                          <img src="amsreact/images/upload-image6.jpg" />
                        </div>
                        <div className="upload-single-text-details">
                          <p>SG_11061196_11061996.jpg</p>
                        </div>
                      </div>
                      <div className="upload-single-image">
                        <div className="upload-single-image-details">
                          <img src="amsreact/images/upload-image7.jpg" />
                        </div>
                        <div className="upload-single-text-details">
                          <p>SG_11061196_11061996.jpg</p>
                        </div>
                      </div>
                      <div className="upload-single-image">
                        <div className="upload-single-image-details">
                          <img src="amsreact/images/upload-image8.jpg" />
                        </div>
                        <div className="upload-single-text-details">
                          <p>SG_11061196_11061996.jpg</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12">
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
                <h4 className="modal-title">Uploaded Videos</h4>
                <button type="button" className="close" data-dismiss="modal">×</button>
              </div>
              {/* Modal body */}
              <div className="modal-body adddialog">
                <div className="row">
                  <div className="col-lg-12 col-xl-12 col-md-12 col-sm-12">
                    <div className="popup-img">
                      <img src="amsreact/images/upload-image1.jpg" />
                    </div> 
                  </div>
                </div>
                {/* Modal footer */}
                <div className="modal-footer">
                  <button type="button" className="btn btn-danger" data-dismiss="modal">Cancel</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        )
    }
}
