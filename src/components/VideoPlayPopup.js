import React,{ Component } from "react";

class VideoPlayPopup extends Component{
    
    render(){
        const {videoFile,close} =this.props;
        return (
            <div className="modal fade show d-block">
            <div className="modal-dialog">
              <div className="modal-content">
                {/* Modal Header */}
                <div className="modal-header">
                  <h4 className="modal-title">Uploaded Videos</h4>
                  <button type="button" className="close" onClick={close}>×</button>
                </div>
                {/* Modal body */}
                <div className="modal-body adddialog">
                  <div className="row">
                    <div className="col-lg-12 col-xl-12 col-md-12 col-sm-12">
                      <div className="popup-img">
                        <video width={560} height={300} controls>
                          <source src={videoFile} type="video/mp4" />
                        </video>
                      </div> 
                    </div>
                  </div>
                  {/* Modal footer */}
                  <div className="modal-footer">
                    <button type="button" className="btn btn-danger" onClick={close}>Cancel</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
    }

}export default VideoPlayPopup;