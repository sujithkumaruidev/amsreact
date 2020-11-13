import React, { Component } from "react";
import AddProject from "./AddProject";
import { connect } from "react-redux";
import { getProjectList } from "../../store/reducers/projectReducer";

class Project extends Component {
    constructor(props){
        super(props);
        this.state={
          list:null,
          editId:null
        }
    }
    componentDidMount(){
      this.props.getProjectList();
    }

    componentDidUpdate(prevProps,prevState){
        if(prevProps.listOfProject !== this.props.listOfProject){
          this.setState({
            list: this.props.listOfProject
          })
        }
    }

    editProjectDetails=(id)=>{
      const editObject = this.state.list && this.state.list.find((each)=> each.id === id);
      this.setState({
        editId:editObject
      })
    }
    addProjectBack=()=>{
      this.setState({
        editId:null
      })
  }
    render(){
      const {list,editId}=this.state;
      // console.log("list",list);
        return(
            <div className="container-fluid">
              <AddProject updateProjectId={editId} backToAddProject={this.addProjectBack}/>
            <div className="row m-b-40">
              <div className="col-lg-12 col-md-12">
                <div className="bar-img upload-images">
                  <h4 className="sub-title">List Of Projects</h4>
                  <div className="output-table">
                    <div className="table-responsive">
                      <table>
                        <thead>
                          <tr>
                            <th>Sr. No</th>
                            <th>Project Name</th>
                            <th>Project Description </th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {list ? list.map((each,i)=>
                         <tr key={i}>
                            <td><div className="output-table-image"><span>{i+1}</span></div></td>
                            <td><div className="output-table-image"><span>{each.projectName}</span></div></td>
                            <td><div className="output-table-image"><span>{each.projectDesc ? each.projectDesc : ""}</span></div></td>
                            <td>
                              <div className="download-view-btn">
                                <a className="download-btn" href="#" title="Edit" onClick={()=> this.editProjectDetails(each.id)}><i className="fas fa-edit" /></a>
                                <a className="video-btn" href="#" title="Delete" onClick={()=> this.deleteProjectDetails(each.id)}><i className="fas fa-trash" /></a>
                              </div>
                            </td>
                          </tr>)
                          :<tr><td colSpan={4}>No Project Found</td></tr>}
                          
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
        )
    }

}

const mapStateToProps = ({ project}) => {

  return {
      listOfProject: project.projectList,
  };
}
const mapDispatchToProps = {
    getProjectList
};
export default connect(mapStateToProps, mapDispatchToProps)(Project);