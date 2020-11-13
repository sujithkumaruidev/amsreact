import React,{Component} from 'react';

class Dashboard extends Component{
    render(){
        return(
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
                    <img src="../amsreact/images/bar.png" alt="bar" />
                  </div>
                </div>
              </div>
              <div className="row datepickerbox m-b-40">
                <div className="col-lg-6 col-xl-6 col-md-12 col-sm-12">
                  <div className="donuts-chart-img">
                    <h4 className="sub-title">Category</h4>
                    <img src="../amsreact/images/DoughnutChart.png" alt="chart" />
                  </div>
                </div>
                <div className="col-lg-6 col-xl-6 col-md-12 col-sm-12">
                  <div className="map-img donuts-chart-img">
                    <h4 className="sub-title">Category</h4>
                    <img src="../amsreact/images/map.png" alt="map" />
                  </div>
                </div>
              </div>
            </div>
        )
    }
}
export default Dashboard;