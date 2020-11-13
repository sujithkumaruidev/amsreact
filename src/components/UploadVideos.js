import React, { Component } from 'react'
import { connect } from "react-redux";
import { uploadProjectBasedVideo ,getUploadedVideoList,uploadVideoMessageClear,uploadVideoCrackDetect} from "../store/reducers/videoUploadReducer";
import Alert from 'react-bootstrap/Alert'; 

 class UploadVideos extends Component {
  constructor(props){
    super(props);
    this.state={
      selectedFiles:[],
      selectProject:{},
      lists:null,
      showAlert: false,
      alertMessage:'',
      alertVariant: '',
    }
  }

  readFile=(e)=> {
    console.log('readfiles',e.target.files, typeof e.target.files, Object.values(e.target.files));
    const selectedFiles = Object.values(e.target.files);
    this.setState({selectedFiles},()=>{
      console.log("selectedFiles",selectedFiles,"0-",selectedFiles[0]);
      this.uploadVideoProjectBased();
    });
  }
  

  uploadVideoProjectBased = ()=>{
    const {selectedFiles,selectProject} =this.state;
    const formData = new FormData();
      formData.append("projectId", selectProject && selectProject.id);
      formData.append('video', selectedFiles[0]);
    this.props.uploadProjectBasedVideo(formData);
  }
componentDidMount(){
    if( this.props.selectedProject){
        this.setState({
          selectProject:this.props.selectedProject
        })
        const project = this.props.selectedProject;
        this.props.getUploadedVideoList(project && project.id);
    }
}
componentDidUpdate(prevProps,prevState){
  if(prevProps.selectedProject !== this.props.selectedProject){
      this.setState({
        selectProject:this.props.selectedProject
      },()=>{
        const project = this.props.selectedProject;
    this.props.getUploadedVideoList(project && project.id);
      })
  }
  if(this.props.videoUploadSuccess !== ""){
            this.setState({selectedFiles:{},alertVariant:'success', alertMessage: this.props.videoUploadSuccess, showAlert : true},()=>{
              this.props.uploadVideoMessageClear();
              setTimeout(()=> {
                this.setState({showAlert:false});
              }, 3000);
              
            })
  }

  if(this.props.videoUploadError !== ""){
    this.setState({selectedFiles:{},alertVariant:'danger', alertMessage: this.props.videoError, showAlert : true},()=>{
      this.props.uploadVideoMessageClear();
      setTimeout(()=> {
        this.setState({showAlert:false});
      }, 3000);
      
    })
  }

  if(prevProps.listOfVideo !== this.props.listOfVideo){
      const startDetect = this.props.listOfVideo && this.props.listOfVideo[0].videosList.filter((each,i)=> each.status === 0);
      this.setState({
        lists : startDetect
      })
  }
  if(this.props.videoCrackSuccess !== ""){
    this.setState({selectedFiles:{},alertVariant:'success', alertMessage: this.props.videoCrackSuccess, showAlert : true},()=>{
      this.props.uploadVideoMessageClear();
      setTimeout(()=> {
        this.setState({showAlert:false});
      }, 3000);
      
    })
}

if(this.props.videoCrackError !== ""){
this.setState({selectedFiles:{},alertVariant:'danger', alertMessage: this.props.videoCrackError, showAlert : true},()=>{
this.props.uploadVideoMessageClear();
setTimeout(()=> {
this.setState({showAlert:false});
}, 3000);

})
}

}

  crackVideoToFrames=(data)=>{
      console.log("data",data);
      const { videoName,id } = data;
      const req = {"FramesPerSecond":1,"videoName":videoName,"videoId":id}
      this.props.uploadVideoCrackDetect(req);
  }
    render() {
        const { selectProject ,lists } = this.state;
        console.log("lvsds",lists);
        return (
            <div>  
              <Alert variant={this.state.alertVariant} show= {this.state.showAlert}
         onClose={() => this.setState({showAlert: false})} dismissible>
        <Alert.Heading>{this.state.alertMessage}</Alert.Heading>
      </Alert> 
        <div className="container-fluid">
          <div className="row m-b-40">
            <div className="col-lg-12 col-md-12">
            <div class="selected_project_title">
                <h2>{selectProject && selectProject.projectName}</h2>
                </div>
              <div className="bar-img upload-images">
                <h4 className="sub-title">Videos</h4>
                <form action="upload.php" method="POST">
                  <input type="file" onChange={this.readFile}/>
                  <div className="drag-and-drop-btn"><i className="fas fa-cloud-upload-alt" />
                    <p>DRAG &amp; DROP</p>
                    <a href="#">Browse your files(s)</a>
                    <div className="upload-txt"><span>You can upload images in video format. Maximum file size 5MB.</span></div>
                    {
                        this.state && this.state.selectedFiles && this.state.selectedFiles.length > 0 ?
                    <div>
                        <span>
                        { this.state.selectedFiles.map((file, i) => <span key={i} className="space-1">{file.name}</span>)}
                        </span>
                        {this.state.selectedFiles.length === 1 ? 'is' : 'are' } uploading .....
                    </div> : ''}
                  </div>
                  {/* <button type="submit">Upload</button> */}
                </form>
                <div className="upload-images-heading">
                  <h4>List Of Videos</h4>
                </div>
                <div className="output-table">
                    <div className="table-responsive">
                      <table>
                        <thead>
                          <tr>
                            <th>Sr. No</th>
                            <th>Uploaded Video Name</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                        {(lists && lists.length > 0) ? lists.map((each,i)=>
                          <tr key={each.id}>
                            <td><div className="output-table-image"><span>{i+1}</span></div></td>
                        <td><div className="output-table-image"><span>{each.videoName}</span></div></td>
                            <td>
                              <div className="download-view-btn">
                                <button className="startDetect" onClick={()=>this.crackVideoToFrames(each)}>Start Detect</button>
                              </div>
                            </td>
                          </tr>) : <tr><td colSpan={3}>No Videos Found</td></tr>}
                          
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
                      <source src="../amsreact/images/video.mp4" type="video/mp4" />
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
        )
    }
}
const mapStateToProps = ({ auth ,video}) => {

  return {
    selectedProject : auth.selectedProject,
    videoError:video.uploadError,
    videoUploadSuccess:video.videoUploadSuccess,
    videoUploadError:video.videoUploadError,
    listOfVideo:video.videoList,
    videoCrackSuccess: video.videoCrackSuccess,
    videoCrackError : video.videoCrackError
  };
}
const mapDispatchToProps = {
  uploadProjectBasedVideo , getUploadedVideoList,uploadVideoMessageClear,uploadVideoCrackDetect
};
export default connect(mapStateToProps, mapDispatchToProps)(UploadVideos);

