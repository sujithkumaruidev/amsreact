import React,{Component} from 'react';
import { connect } from "react-redux";
import { allCrackedImagesForProject } from "../store/reducers/projectReducer";

import MapBox from "./MapBox";
class Dashboard extends Component{
  constructor(props){
    super(props);
    this.state={
      selectProject:{},
      allCrackedImages:{}
    }
  }
  componentDidMount(){
   
    if( this.props.selectedProject){
        this.setState({
          selectProject:this.props.selectedProject
        },()=>{
          this.props.allCrackedImagesForProject();
        })
    }
}

componentDidUpdate(prevProps,prevState){
  if(prevProps.projectsCrackedImages !== this.props.projectsCrackedImages){
    this.setState({
      allCrackedImages:this.props.projectsCrackedImages
    })
  }
}

    render(){
    
      const {selectProject,allCrackedImages}=this.state;
      const {detectResult,location,totalFrames,videoCount}= allCrackedImages && allCrackedImages;
      // console.log("allCrackedImages",allCrackedImages);
        return(
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-12 col-md-12">
                  <div class="selected_project_title">
                <h2>Database : {selectProject && selectProject.projectName}</h2>
                </div></div>
                <div className="col-lg-12 col-md-12">
                  <div className="row datepickerbox m-b-40">
                    <div className="col-lg-3 col-xl-3 col-md-12 col-sm-12">
                      <div className="card card-block">
                        <div className="number-bold-bg"><i className="fas fa-image" /></div>
                        <h4>No of images Trained</h4>
                        <div className="numbers-bold">
                          <strong>11</strong>
                        </div> 
                      </div>
                    </div>
                    <div className="col-lg-3 col-xl-3 col-md-12 col-sm-12">
                      <div className="card card-block">
                        <div className="number-bold-bg"><i className="fas fa-video" /></div>
                        <h4>No of videos uploaded </h4>
                          <div className="numbers-bold"><strong>{videoCount || 0}</strong>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-xl-3 col-md-12 col-sm-12">
                      <div className="card card-block">
                        <div className="number-bold-bg"><i className="fas fa-crop-alt" /></div>
                        <h4>Total Frames Captured</h4>
                        <div className="numbers-bold"><strong>{totalFrames || 0}</strong>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-xl-3 col-md-12 col-sm-12">
                      <div className="card card-block">
                        <div className="number-bold-bg"><i className="fas fa-file" /></div>
                        <h4>Total Results detected</h4>
                        <div className="numbers-bold"><strong>{detectResult || 0}</strong>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="col-lg-6 col-md-6">
                  <div className="bar-img ">
                    <h4 className="sub-title">Category</h4>
                    <img src="../amsreact/images/bar.png" alt="bar" />
                  </div>
                </div> */}
              </div>
              {/* <div className="row datepickerbox m-b-40">
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
              </div> */}
              <div className="row datepickerbox m-b-40">
                <div className="col-lg-12 col-xl-12 col-md-12 col-sm-12">
                <div className="map-img donuts-chart-img">
                    <h4 className="sub-title">Map</h4>
                    <div className="maploction">
                    {location && <MapBox markerList={location}/>}
                    </div>
                  </div>
                </div>
              </div>
            </div>
        )
    }
}
const mapStateToProps = ({ auth,project}) => {

  return {
    selectedProject : auth.selectedProject,
    projectsCrackedImages : project.projectsCrackedImages
  };
}
const mapDispatchToProps = {
  allCrackedImagesForProject
};
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
