import React, { Component } from 'react';
import { connect } from "react-redux";
import { getUploadedVideoCrackImages,listOfImageTypeGet } from "../store/reducers/videoUploadReducer";

class CrackDetected extends Component {
  constructor(props){
    super(props);
    this.state={
      list:null,
      imagePath:"",
      filteredList:null,
      popupShow:false,
      imageObject:{},
      listOfType:null,
      filterType:""
    }
  }

  componentDidMount(){
        let id ;
        if(this.props.location.state){
         id = this.props.location.state && this.props.location.state.videoId;
        }else{
          id = localStorage.getItem("videoId");
        }
        this.props.getUploadedVideoCrackImages(id);
        this.props.listOfImageTypeGet();
  }

  componentDidUpdate(prevProps,prevState){

    if(prevProps.listOfImageTypes !== this.props.listOfImageTypes){
      this.setState({
        listOfType:this.props.listOfImageTypes,
      })
    }

    if(prevState.filterType !== this.state.filterType){
        const {list,filterType} =this.state;
      
        if(filterType !== ""){
          const filterData =  list && list.filter((each,i)=> each.detectStatus === filterType);
          this.setState({
            filteredList:filterData
          })
        }else{
          this.setState({
            filteredList:list
          })
        }
       
    }
      if(prevProps.listOfCrackedImage !== this.props.listOfCrackedImage){
        const {pathUrl,videoImagesList} = this.props.listOfCrackedImage[0];
        this.setState({
          imagePath:pathUrl,
          filteredList:videoImagesList,
          list:videoImagesList
        })
      }

  }

  viewImageShowPopup=(data)=>{
    this.setState({popupShow:true,imageObject:data});
  }

  closeImagePopup=()=>{
    this.setState({
      popupShow:false,imageObject:{}
    })
  }
  handleTypeFilters=(e)=>{
    this.setState({
        filterType: e.target.value
    })
  }
    render() {
      const {filteredList,imagePath,imageObject,listOfType,filterType} = this.state;
      // console.log("crackedList",filteredList);
        return (
            <div>
            <div className="container-fluid">
              <div className="row m-b-40">
                <div className="col-lg-12 col-md-12">
               <div className="bar-img upload-images">
                    <h4 className="sub-title">{filterType !== "" ? filterType : "All" } Detected Details</h4>
                    <div className="filterImageType">
                      <label>Filter by image type</label>
                      <select name="" className="" value={filterType} onChange={(e)=>this.handleTypeFilters(e)}>
                        <option value="">Select type</option>
                        {listOfType && listOfType.map((each,i)=> <option value={each}>{each}</option>)}
                      </select>
                    </div>
                    <div className="upload-list-images">
                      {filteredList ? filteredList.map((e,i)=><div className="upload-single-image" key={e.id}>
                        <div className="upload-single-image-details" onClick={()=>this.viewImageShowPopup(e)}>
                          <img src={imagePath+e.imageName} alt={e.imageName}/>
                        </div>
                        <div className="upload-single-text-details">
                          <p>{e.imageName}</p>
                        </div>
                      </div> ) : <div className="">No images found</div>}
                      
                    </div>
        </div>
        {/* {(nonCrackedList && nonCrackedList.length > 0)  && <div className="bar-img upload-images">
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
        </div> } */}
                </div>
                <div className="col-lg-12 col-md-12">
                </div>
              </div>
            </div>
      
        {/* The Modal */}
        <div className={`modal fade ${this.state.popupShow ? "d-block show in" : "d-none"}`} >
          <div className="modal-dialog viewImage modal-lg ">
            <div className="modal-content">
              {/* Modal Header */}
              <div className="modal-header">
                <h4 className="modal-title">View Images</h4>
                <button type="button" className="close" onClick={this.closeImagePopup}>×</button>
              </div>
              {/* Modal body */}
              <div className="modal-body adddialog">
                <div className="row">
                <div className="col-lg-3 col-xl-3 col-md-12 col-sm-12">
                  <div className="viewImageDetails">
                    <h5>Details</h5>
                    <ul>
                      <li>
                        <label>Name</label>
                        <p>{imageObject && imageObject.imageName}</p>
                      </li>
                      <li>
                        <label>Latitude</label>
                        <p>{imageObject && imageObject.imlat}</p>
                      </li>
                      <li>
                        <label>Longtitude</label>
                        <p>{imageObject && imageObject.imlong}</p>
                      </li>
                    </ul>
                  </div>
                    
                  </div>
                  <div className="col-lg-9 col-xl-9 col-md-12 col-sm-12">
                    <div className="popup-img">
                      <img src={imageObject && (imagePath+imageObject.imageName)} alt={imageObject && imageObject.imageName} />
                    </div> 
                  </div>
                </div>
                {/* Modal footer */}
                <div className="modal-footer">
                  <button type="button" className="btn btn-danger"  onClick={this.closeImagePopup}>Cancel</button>
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
      listOfCrackedImage : video.listOfCrackedImage,
      listOfImageTypes:video.listOfCategories,
  };
}
const mapDispatchToProps = {
  getUploadedVideoCrackImages,listOfImageTypeGet
};
export default connect(mapStateToProps, mapDispatchToProps)(CrackDetected);
