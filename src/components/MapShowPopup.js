import React,{ Component } from "react";
import MapBox from "./MapBox";
import { connect } from "react-redux";
import { getUploadedVideoCrackImages } from "../store/reducers/videoUploadReducer";

class MapShowPopup extends Component{
    constructor(props){
      super(props);
      this.state={
        crackedList:null,
      }
    }
    componentDidMount(){
        // if(this.props.videoId !== ""){
          this.props.getUploadedVideoCrackImages(this.props.mapVideoListId);
        // }
    }
    componentDidUpdate(prevProps,prevState){
      // console.log("videoImagesList",prevProps,this.props);
      if(prevProps.listOfCrackedImage !== this.props.listOfCrackedImage){
        const {videoImagesList} = this.props.listOfCrackedImage[0];
        const crack = videoImagesList && videoImagesList;
        this.setState({
          // imagePath:pathUrl,
      crackedList:crack,
      // nonCrackedList:noncrack
        })
      }
    }

    render(){
        const {closeMap} =this.props;
        const {crackedList}=this.state;
        // console.log("crackedList",crackedList);
        return (
            <div className="modal fade show d-block">
            <div className="modal-dialog mapcontentLg">
              <div className="modal-content">
                {/* Modal Header */}
                <div className="modal-header">
                  <h4 className="modal-title">Image Locations</h4>
                  <button type="button" className="close" onClick={closeMap}>×</button>
                </div>
                {/* Modal body */}
                <div className="modal-body adddialog">
                  <div className="row">
                    <div className="col-lg-12 col-xl-12 col-md-12 col-sm-12">
                      <div className="popup-img">
                        {crackedList && <MapBox markerList={crackedList}/>}
                      </div> 
                    </div>
                  </div>
                  {/* Modal footer */}
                  <div className="modal-footer">
                    <button type="button" className="btn btn-danger" onClick={closeMap}>Cancel</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
    }

}
const mapStateToProps = ({ video}) => {
  // console.log("video",video);
  return {
      listOfCrackedImage : video.listOfCrackedImage
  };
}
const mapDispatchToProps = {
  getUploadedVideoCrackImages
};
export default connect(mapStateToProps, mapDispatchToProps)(MapShowPopup);