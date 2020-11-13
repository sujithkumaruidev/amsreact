import React, { Component } from 'react';
import { connect } from "react-redux";
import { getUploadedVideoCrackImages } from "../store/reducers/videoUploadReducer";

class CrackDetected extends Component {
  constructor(props){
    super(props);
    this.state={
      list:null,
      imagePath:"",
      crackedList:null,
      nonCrackedList:null
    }
  }

  componentDidMount(){
        const id = this.props.location.state.videoId;
        this.props.getUploadedVideoCrackImages(id);
  }

  componentDidUpdate(prevProps,prevState){
      if(prevProps.listOfCrackedImage !== this.props.listOfCrackedImage){
        const {pathUrl,videoImagesList} = this.props.listOfCrackedImage[0];
        const noncrack = videoImagesList && videoImagesList.filter((e)=> e.detectStatus === "1");
        const crack = videoImagesList && videoImagesList.filter((e)=> e.detectStatus === "0");
        this.setState({
          imagePath:pathUrl,
      crackedList:crack,
      nonCrackedList:noncrack
        })
      }
  }
    render() {
      const {crackedList,imagePath,nonCrackedList} = this.state;
      console.log("crackedList",crackedList,nonCrackedList);
        return (
            <div>
            <div className="container-fluid">
              <div className="row m-b-40">
                <div className="col-lg-12 col-md-12">
                {(crackedList && crackedList.length > 0) ? <div className="bar-img upload-images">
                    <h4 className="sub-title">Crack Detected Details</h4>
                    <div className="upload-list-images">
                      {crackedList ? crackedList.map((e,i)=><div className="upload-single-image" key={e.id}>
                        <div className="upload-single-image-details">
                          <img src={imagePath+e.imageName} alt={e.imageName}/>
                        </div>
                        <div className="upload-single-text-details">
                          <p>{e.imageName}</p>
                        </div>
                      </div> ) : <div className="">No Crack images</div>}
                      
                    </div>
        </div> : ""}
        {(nonCrackedList && nonCrackedList.length > 0)  && <div className="bar-img upload-images">
                    <h4 className="sub-title">Non Crack Detected Details</h4>
                    <div className="upload-list-images">
                      {nonCrackedList && nonCrackedList.map((e,i)=><div className="upload-single-image" key={e.id}>
                        <div className="upload-single-image-details">
                          <img src={imagePath+e.imageName} alt={e.imageName}/>
                        </div>
                        <div className="upload-single-text-details">
                          <p>{e.imageName}</p>
                        </div>
                      </div> ) }
                      
                    </div>
        </div> }
                </div>
                <div className="col-lg-12 col-md-12">
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
                      <img src="../amsreact/images/upload-image1.jpg" />
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
const mapStateToProps = ({ video}) => {

  return {
      listOfCrackedImage : video.listOfCrackedImage
  };
}
const mapDispatchToProps = {
  getUploadedVideoCrackImages
};
export default connect(mapStateToProps, mapDispatchToProps)(CrackDetected);