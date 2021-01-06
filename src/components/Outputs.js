import React, { Component } from 'react'
import {withRouter} from "react-router-dom"
import { connect } from 'react-redux';
import VideoPlayPopup from "./VideoPlayPopup";
import MapShowPopup from "./MapShowPopup";
import { getUploadedVideoList,uploadVideoMessageClear} from "../store/reducers/videoUploadReducer";

class Outputs extends Component {
    constructor(props){
      super(props);
      this.state={
        showVideoPopup:false,
        lists:null,
        videoPath:"",
        individualPath:"",
        selectProject:null,
        imageLocationShow:false,
        mapVideoListId:""
      }
    }
    componentDidMount(){
      if( this.props.projectSelected){
          this.setState({
            selectProject:this.props.projectSelected
          })
          const project = this.props.projectSelected;
          this.props.getUploadedVideoList(project && project.id);
      }
  }
    closeVideoPopup=()=>{
      this.setState({
        showVideoPopup:false
      })
    }

    videoPopupOpen=(path)=>{
      this.setState({
        showVideoPopup:true,
        individualPath:path
      })
    }

    openImageLocations=(id)=>{
      this.setState({
        imageLocationShow:true,
        mapVideoListId:id
      })
    }
    closeImageLocations=()=>{
      this.setState({
        imageLocationShow:false,
        mapVideoListId:""
      })
    }
    componentDidUpdate(prevProps,prevState){
      if(prevProps.projectSelected !== this.props.projectSelected){
          this.setState({
            selectProject:this.props.projectSelected
          },()=>{
            const project = this.props.projectSelected;
        this.props.getUploadedVideoList(project && project.id);
          })
      }
     
    
      if(prevProps.listOfVideo !== this.props.listOfVideo){
          const startDetect = this.props.listOfVideo && this.props.listOfVideo[0].videosList.filter((each,i)=> each.status === 1);
          this.setState({
            lists : startDetect,
            videoPath : this.props.listOfVideo && this.props.listOfVideo[0].pathUrl
          })
      }
    }
    crackedImageShow = (id)=>{
      localStorage.setItem("videoId",id);
      this.props.history.push('/home/crackdetect', {videoId : id})
    }
    render() {
        const {lists,videoPath,mapVideoListId,showVideoPopup,individualPath,selectProject,imageLocationShow} =this.state;
        console.log("list",lists,mapVideoListId);
        return (
            <div> 
          {/* Page Header videoFile={}*/ }
          <div className="container-fluid">
            {showVideoPopup && <VideoPlayPopup  close={this.closeVideoPopup} videoFile={individualPath}/>}
            {imageLocationShow && <MapShowPopup closeMap={this.closeImageLocations} mapVideoListId={mapVideoListId}/> }
            {/* <MapShowPopup closeMap={this.closeImageLocations}/> */}
            <div className="row m-b-40">
              <div className="col-lg-12 col-md-12">
              <div class="selected_project_title">
                <h2>Database : {selectProject && selectProject.projectName}</h2>
                </div>
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
                          {(lists && lists.length > 0) ? lists.map((e,i)=><tr key={i}>
                            <td><div className="output-table-image"><span>{i+1}</span></div></td>
                            <td><div className="output-table-image"><span>{e.videoName}</span></div></td>
                            <td><div className="output-table-image"><span>{e.totalFrames} </span></div></td>
                            <td><div className="output-table-image"><span>{e.detectedFrames} </span></div></td>
                            <td>
                              <div className="download-view-btn">
                                <a className="download-btn" href="#" title="Download"><i className="fas fa-download" /></a>
                                <a className="download-btn" href="#" title="Map" onClick={()=>this.openImageLocations(e.id)}><i className="fas fa-map" /></a>
                                <a className="video-btn" href="#" onClick={()=>this.crackedImageShow(e.id)} title="View"><i className="fas fa-eye" /></a>
                                <a className="video-btn" href="#" title="Video" onClick={() => this.videoPopupOpen(videoPath+e.videoName)}><i className="fas fa-video" /></a>
                              </div>
                            </td>
                          </tr>) : <tr><td colSpan={5}>No Videos Found</td></tr>} 
                         
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
        );
    }
}
const mapStateToProps = ({ auth ,video}) => {

  return {
    projectSelected : auth.selectedProject,
    videoError:video.uploadError,
    listOfVideo:video.videoList

  };
}
const mapDispatchToProps = {
  getUploadedVideoList,uploadVideoMessageClear
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Outputs));
