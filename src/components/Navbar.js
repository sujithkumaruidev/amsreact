import React, { Component } from 'react'
import { NavLink,withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import { getProjectList } from "../store/reducers/projectReducer";
import { projectNameStore } from "../store/reducers/authReducer";

 class Navbar extends Component {
   constructor(props){
     super(props);
     this.state={
       view:false,
       list:null,
       projectId:""
     }
   }
   componentDidMount(){
    this.props.getProjectList();
      if(this.props.projectId){
        this.setState({
          projectId : this.props.projectId && this.props.projectId.id
        })
      }
    }

    componentDidUpdate(prevProps,prevState){
      if(prevProps.projects !== this.props.projects){
        this.setState({
          list: this.props.projects
        })
      }
      if(prevProps.projectId !== this.props.projectId){
        this.setState({
          projectId : this.props.projectId && this.props.projectId.id
        })
      }
      
    }
   viewProjectSeletion=()=>{
     this.setState({
       view : true
     })
   }
   projectSelectedId=(e)=>{
      this.setState({
        [e.target.name] : e.target.value
      },()=>{
        const projectSelected = this.state.list && this.state.list.find((e) => e.id === parseInt(this.state.projectId));
        this.props.projectNameStore(projectSelected);
        sessionStorage.setItem("projectId",JSON.stringify(projectSelected));
      })
   }

   addProjectLink =()=>{
     this.props.history.push("/home/project");
   }
    render() {
      const {view,list,projectId} =this.state;
      const path = this.props.location.pathname;
        return (
          <div>
           <nav id="sidebar-wrapper" className="dasboard-menu side-navbar">
            {/* Sidebar Header*/}
            <div className="sidebar-header d-flex align-items-center">
              <img src="../amsreact/images/logo.jpg" alt="imglogo" />
            </div>
            {/* Sidebar Navidation Menus*/}
            <div className="sidebar_body">
              <ul className="list-unstyled">
                <li className={path === "/home/dashboard" ? "active" : ""}><NavLink to='/home/dashboard'><div className="menu-icon"><i className="fas fa-tachometer-alt" /></div><span>Dashboard </span></NavLink></li>
                <li className={path === "/home/uploadimages" ? "active" : ""} ><NavLink to='/home/uploadimages'><div className="menu-icon"><i className="fas fa-sync-alt" /></div> <span>Upload Images to Train </span></NavLink></li>
                <li className={path === "/home/uploadvideos" ? "active" : ""} ><NavLink to='/home/uploadvideos'><div className="menu-icon"><i className="fas fa-video-slash" /></div> <span>Upload Videos &amp; Results
                    </span></NavLink></li>
                <li className={path === "/home/outputs" ? "active" : ""}  ><NavLink to='/home/outputs'><div className="menu-icon"><i className="fas fa-share-square" /></div><span>Output(s)</span></NavLink></li>
                <li className={path === "/home/listOfImageType" ? "active" : ""}  ><NavLink to='/home/listOfImageType'><div className="menu-icon"><i className="fas fa-share-square" /></div><span>List Of Image Type</span></NavLink></li>
                {/* <li class=""><a href="changepassword.html"><div class="menu-icon"><i class="fas fa-lock-open"></i></div><span>Change Password</span> </a></li> */}
                {/* <li><a href="#exampledropdownDropdown" aria-expanded="false" data-toggle="collapse"> <i class="icon-interface-windows"></i>Example dropdown </a>
                        <ul id="exampledropdownDropdown" class="collapse list-unstyled ">
                          <li><a href="#">Page</a></li>
                          <li><a href="#">Page</a></li>
                          <li><a href="#">Page</a></li>
                        </ul>
                      </li> */}
                    <li class="sub-menu" onClick={this.viewProjectSeletion}><a href="#/"><div class="menu-icon"><i class="fas fa-database"></i></div><span>System Administration</span></a>
                        <ul class={`system-admin-menu ${view ? "d-block" : "d-none"}`} >
                          <li><button type="button" onClick={this.addProjectLink}>+ Add Project</button></li>
                          <li><span>Select Database</span></li>
                          <li><select name="projectId" onChange={this.projectSelectedId} value={projectId}>
                          <option value="">Select Project</option>
                         {list && list.map((each,i)=><option value={each.id} key={i}>{each.projectName}</option> ) }   
                          </select></li>
                        </ul>
                      </li>
              </ul>
            </div>
          </nav>
          </div>
        )
    }
}
const mapStateToProps = ({ project,auth}) => {

  return {
      projects: project.projectList,
      projectId:auth.selectedProject,
  };
}
const mapDispatchToProps = {
    getProjectList,projectNameStore
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar));
