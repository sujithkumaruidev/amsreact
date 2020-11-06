import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Navbar from './Navbar';
class Outputs extends Component {
    render() {
        return (
            <div> 
            <header>
            <div className="header_section">
              <div className="menu-btn">
                <a id="desktop-menu"><img className="custom-enter-logo" src="amsreact/images/enter.png" /></a>
                <img className="mobile-logo" src="amsreact/images/logo.jpg" />
              </div>
              <div className="page-title">
                <h2>Outputs</h2>
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
                        <Link to="/changepassword"><i className="fas fa-unlock-alt" />  Change Password</Link>
                      </li> 
                      <li>
                        <Link to="/login"><i className="fas fa-sign-out-alt" />  Logout</Link>
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
            <div className="row m-b-40">
              <div className="col-lg-12 col-md-12">
                <div className="bar-img upload-images">
                  <h4 className="sub-title">Output details</h4>
                  <div className="output-table">
                    <div className="table-responsive">
                      <table>
                        <thead>
                          <tr>
                            <th>Sr. No</th>
                            <th>File Name</th>
                            <th># Total Frames </th>
                            <th># Crack Detected </th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td><div className="output-table-image"><span>01</span></div></td>
                            <td><div className="output-table-image"><span>SG_11061196_11061996.jpg</span></div></td>
                            <td><div className="output-table-image"><span>14 </span></div></td>
                            <td><div className="output-table-image"><span>lorem ipsum </span></div></td>
                            <td>
                              <div className="download-view-btn">
                                <a className="download-btn" href="#" title="Download"><i className="fas fa-download" /></a>
                                <Link className="view-btn" to='/crackdetect' title="View"><i className="fas fa-eye" /></Link>
                                <a data-toggle="modal" data-target="#myModal" className="video-btn" href="#" title="Video"><i className="fas fa-video" /></a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td><div className="output-table-image"><span>02</span></div></td>
                            <td><div className="output-table-image"><span>SG_11061196_11061996.jpg</span></div></td>
                            <td><div className="output-table-image"><span>14 </span></div></td>
                            <td><div className="output-table-image"><span>lorem ipsum </span></div></td>
                            <td>
                              <div className="download-view-btn">
                                <a className="download-btn" href="#" title="Download"><i className="fas fa-download" /></a>
                                <Link className="view-btn" to='/crackdetect' title="View"><i className="fas fa-eye" /></Link>
                                <a data-toggle="modal" data-target="#myModal" className="video-btn" href="#" title="Video"><i className="fas fa-video" /></a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td><div className="output-table-image"><span>03</span></div></td>
                            <td><div className="output-table-image"><span>SG_11061196_11061996.jpg</span></div></td>
                            <td><div className="output-table-image"><span>14 </span></div></td>
                            <td><div className="output-table-image"><span>lorem ipsum </span></div></td>
                            <td>
                              <div className="download-view-btn">
                                <a className="download-btn" href="#" title="Download"><i className="fas fa-download" /></a>
                                <Link className="view-btn" to='/crackdetect' title="View"><i className="fas fa-eye" /></Link>
                                <a data-toggle="modal" data-target="#myModal" className="video-btn" href="#" title="Video"><i className="fas fa-video" /></a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td><div className="output-table-image"><span>04</span></div></td>
                            <td><div className="output-table-image"><span>SG_11061196_11061996.jpg</span></div></td>
                            <td><div className="output-table-image"><span>14 </span></div></td>
                            <td><div className="output-table-image"><span>lorem ipsum </span></div></td>
                            <td>
                              <div className="download-view-btn">
                                <a className="download-btn" href="#" title="Download"><i className="fas fa-download" /></a>
                                <Link className="view-btn" to='/crackdetect' title="View"><i className="fas fa-eye" /></Link>
                                <a data-toggle="modal" data-target="#myModal" className="video-btn" href="#" title="Video"><i className="fas fa-video" /></a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td><div className="output-table-image"><span>05</span></div></td>
                            <td><div className="output-table-image"><span>SG_11061196_11061996.jpg</span></div></td>
                            <td><div className="output-table-image"><span>14 </span></div></td>
                            <td><div className="output-table-image"><span>lorem ipsum </span></div></td>
                            <td>
                              <div className="download-view-btn">
                                <a className="download-btn" href="#" title="Download"><i className="fas fa-download" /></a>
                                <Link className="view-btn" to='/crackdetect' title="View"><i className="fas fa-eye" /></Link>
                                <a data-toggle="modal" data-target="#myModal" className="video-btn" href="#" title="Video"><i className="fas fa-video" /></a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td><div className="output-table-image"><span>06</span></div></td>
                            <td><div className="output-table-image"><span>SG_11061196_11061996.jpg</span></div></td>
                            <td><div className="output-table-image"><span>14 </span></div></td>
                            <td><div className="output-table-image"><span>lorem ipsum </span></div></td>
                            <td>
                              <div className="download-view-btn">
                                <a className="download-btn" href="#" title="Download"><i className="fas fa-download" /></a>
                                <Link className="view-btn" to='/crackdetect' title="View"><i className="fas fa-eye" /></Link>
                                <a data-toggle="modal" data-target="#myModal" className="video-btn" href="#" title="Video"><i className="fas fa-video" /></a>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 col-md-12">
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
                      <video width={560} height={300} controls>
                        <source src="amsreact/images/video.mp4" type="video/mp4" />
                      </video>
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
      </div>
        );
    }
}

export default Outputs