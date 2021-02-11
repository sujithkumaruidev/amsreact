import React, { Component } from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch, withRouter } from 'react-router-dom';
import Navbar from './Navbar';
import CrackDetected from './CrackDetected';
import UploadImages from './UploadImages';
import UploadVideos from './UploadVideos';
import Outputs from './Outputs';
import ChangePassword from './login/ChangePassword';
import Header from "./Header";
import Dashboard from "./Dashboard";
import Project from "./project";
import UploadImagesType from "./UploadImageType";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>

        <Header {...this.props} />
        <div id="wrapper" className="desktop-wrapper desktop-wrapper page-content d-flex align-items-stretch">
          <Navbar {...this.props} />
          <div className="content-inner pagecontent">
            {/* Page Header*/}
            <Switch>
              <Redirect exact path='/home' to='/home/dashboard' />
              <Route path='/home/dashboard' component={Dashboard} />
              <Route path='/home/uploadimages' component={UploadImages} />
              <Route path='/home/uploadvideos' component={UploadVideos} />
              <Route path='/home/outputs' component={Outputs} />
              <Route path='/home/changepassword' component={ChangePassword} />
              <Route path='/home/crackdetect' component={CrackDetected} />
              <Route path='/home/project' component={Project} />
              <Route path='/home/listOfImageType' component={UploadImagesType}/>
            </Switch>
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
export default withRouter(Home);