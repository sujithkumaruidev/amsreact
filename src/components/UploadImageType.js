import React, { Component } from 'react'
import {withRouter} from "react-router-dom"
import { connect } from 'react-redux';
import AddImageType from "./AddImageType";
import { listOfImageTypeGet , addImageCategoiesType,updateImageCategoiesType} from "../store/reducers/videoUploadReducer";

class UploadImageType extends Component {
    constructor(props){
      super(props);
      this.state={
        addTypeModal:false,
        editImageType:"",
        selectProject:null,
        lists:[]
      }
    }
    componentDidMount(){
      if( this.props.projectSelected){
          this.setState({
            selectProject:this.props.projectSelected
          })
        this.props.listOfImageTypeGet();
      }
      
  }
    closeAddImageTypePopup=()=>{
      this.setState({
        addTypeModal:false,
        editImageType:"",
      })
    }

    addImageTypePopupOpen=(path)=>{
      this.setState({
        addTypeModal:true,

      })
    }

   
    componentDidUpdate(prevProps,prevState){
      
        if(prevProps.listOfCategories !== this.props.listOfCategories){
            this.setState({
                lists:this.props.listOfCategories
            })
        }
        if(prevProps.addCategoriesSuccess !== this.props.addCategoriesSuccess){
            this.setState({
                addTypeModal:false
            })
        }
        if(prevProps.renameCategoriesSuccess !== this.props.renameCategoriesSuccess){
            this.setState({
                addTypeModal:false
            })
        }
    }
    
    addType=({typeName})=>{
        const formData = new FormData();
        formData.append("categoryName", typeName);
        this.props.addImageCategoiesType(formData);

    }
    updateType=({typeName})=>{
        const formData = new FormData();
        formData.append("categoryName", this.state.editImageType);
        formData.append("newName", typeName);
        this.props.updateImageCategoiesType(formData);
    }
    editCategoriesPopup=(e)=>{
        this.setState({
            editImageType:e,
            addTypeModal:true
        })
    }

    render() {
        const {addTypeModal,editImageType,lists}=this.state;
        return (
            <div> 
          {/* Page Header videoFile={}*/ }
          <div className="container-fluid">
            {addTypeModal && <AddImageType  close={this.closeAddImageTypePopup} editType={editImageType} addTypeAction={(data)=>this.addType(data)} updateTypeAction={(data)=>this.updateType(data)}/>}

            {/* <MapShowPopup closeMap={this.closeImageLocations}/> */}
            <div className="row m-b-40">
              <div className="col-lg-12 col-md-12">
              <div class="selected_project_title">
                {/* <h2>Database : {selectProject && selectProject.projectName}</h2> */}
                </div>
                <div className="bar-img upload-images">
                  <h4 className="sub-title">Upload Image Type List</h4>
                  <div className="text-right mr-3">
                  <button className="adduploadImage" type="button" onClick={this.addImageTypePopupOpen}>+ Add Image Type</button>
                  </div>
                  <div className="output-table">
                    <div className="table-responsive">
                      <table>
                        <thead>
                          <tr>
                            <th>Sr. No</th>
                            <th>Upload Type Name</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {(lists && lists.length > 0) ? lists.map((e,i)=><tr key={i}>
                            <td><div className="output-table-image"><span>{i+1}</span></div></td>
                            <td><div className="output-table-image"><span>{e}</span></div></td>
                            <td>
                              <div className="download-view-btn">
                                <a className="download-btn" href="#/" title="Edit" onClick={()=>this.editCategoriesPopup(e)}><i className="fas fa-edit" /></a>
                                {/* <a className="download-btn" href="#" title="Delete"><i className="fas fa-trash" /></a> */}
                              </div>
                            </td>
                          </tr>) : <tr><td colSpan={3}>No Upload Image Type found</td></tr>} 
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
    // videoError:video.uploadError,
    // listOfVideo:video.videoList
    listOfCategories:video.listOfCategories,
    errorListCategories:video.errorListCategories,
    addCategoriesSuccess:video.addCategoriesSuccess,
    addCategoriesFail:video.addCategoriesFail,
    renameCategoriesSuccess:video.renameCategoriesSuccess,
    renameCategoriesFail:video.renameCategoriesFail,
  };
}
const mapDispatchToProps = {
    listOfImageTypeGet , addImageCategoiesType,updateImageCategoiesType
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UploadImageType));
