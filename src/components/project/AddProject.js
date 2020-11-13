import React,{Component} from "react";
import { connect } from "react-redux";
import { addNewProject , messagesClearInStore , updateProject} from "../../store/reducers/projectReducer";
import Alert from 'react-bootstrap/Alert'; 

class AddProject extends Component{
    constructor(props){
        super(props);
        this.state={
            fields: {},
            errors: {},
            submitStatus:false,
            updateId:null,
            alertVariant:'', 
            alertMessage: "", 
            showAlert:false 
        }
    }

    componentDidUpdate(prevProps,prevState){
        if(this.props.addProjectSuccess !== ""){
            
            this.setState({fields:{},alertVariant:'success', alertMessage: this.props.addProjectSuccess && this.props.addProjectSuccess.message, showAlert : true},()=>{
                this.props.messagesClearInStore();
                setTimeout(()=> {
                    this.setState({showAlert:false});
                  }, 3000);
            })
        }
        if(this.props.updateSuccess !== ""){
            this.setState({fields:{},alertVariant:'success', alertMessage: this.props.updateSuccess && this.props.updateSuccess.message, showAlert : true},()=>{
                this.props.backToAddProject();
                this.props.messagesClearInStore();
                setTimeout(()=> {
                  this.setState({showAlert:false});
                }, 3000);
                
              })
           
        }
        if(this.props.errorAddProject !== ""){
            this.setState({fields:{},alertVariant:'warning', alertMessage: this.props.errorAddProject && this.props.errorAddProject.message, showAlert : true},()=>{
                this.props.backToAddProject();
                this.props.messagesClearInStore();
                setTimeout(()=> {
                  this.setState({showAlert:false});
                }, 3000);
                
              })
        }

        if(prevProps.updateProjectId !== this.props.updateProjectId){
            this.setState({
                updateId:this.props.updateProjectId,
                fields:this.props.updateProjectId
            })
        }
    }

  
    handleSubmit=()=>{
        const {fields,updateId} =this.state;
        this.setState({submitStatus:true})
        if(this.validateForm()){
            this.setState({submitStatus:false});
            if(updateId === null){
                this.props.addNewProject(fields);
            }else{
                delete fields.dates
                fields.projectId = fields.id;
                delete fields.id
                this.props.updateProject(fields)
            }
           
        }
    }
  handleChange =(e)=>{
    const { fields } = this.state;
    const name = e.target.name;
    const value = e.target.value;
    fields[name] = value;
    this.setState({
        fields
    })
  }
    validateForm() {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
        if (!fields["projectDesc"]) {
            formIsValid = false;
            errors["projectDesc"] = "Please enter the description.";
        }
        if (!fields["projectName"]) {
            formIsValid = false;
            errors["projectName"] = "Please enter the name.";
        }
       
        this.setState({
            errors: errors
        });
        return formIsValid;
    }
    projectAdd=()=>{
        this.props.backToAddProject();
        this.setState({
            fields:{}
        })
    }
    render(){
        const {fields,errors,submitStatus,updateId} =this.state;
        return (
            <div className="row m-b-40">
                <Alert variant={this.state.alertVariant} show= {this.state.showAlert}
         onClose={() => this.setState({showAlert: false})} dismissible>
        <Alert.Heading>{this.state.alertMessage}</Alert.Heading>
      </Alert> 
                  <div className="col-lg-12 col-md-12">
                    <div className="bar-img upload-images">
                      <h4 className="sub-title">{updateId  ? "Edit Project" : "Add Project" }</h4>
                      <div className="Change-Password">
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <div className="form-group">
                          <label htmlFor="name">Name :</label>
                          <input type="text" name="projectName" value={(fields && Object.keys(fields).length !== 0) ? fields.projectName : ""} className="form-control" id="name" onChange={(e)=>this.handleChange(e)} />
                          {submitStatus && <label className="error">{errors && errors.projectName}</label>}
                        </div>
                        <div className="form-group">
                          <label htmlFor="description">Description</label>
                          <textarea name="projectDesc" value={(fields && Object.keys(fields).length !== 0) ? fields.projectDesc : ""} className="form-control" id="description" onChange={(e)=>this.handleChange(e)}></textarea>
        {submitStatus && <label className="error">{errors && errors.projectDesc}</label> }
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        
                      </div>
                      <div className="col-lg-12 col-md-12">
                        <div className="forgotpwd"><a href="javascript:void(0);" className="submit-btn forgot-pass" onClick={this.handleSubmit}>Submit</a></div>
        {updateId  && <div className="forgotpwd"><a href="javascript:void(0);" className="submit-btn forgot-pass" onClick={this.projectAdd}>Add Project</a></div> }
                      </div>
                    </div>
                  </div>
                      </div>
                  </div>
              </div>
        )
    }
}
const mapStateToProps = ({ project}) => {

    return {
        addProjectSuccess: project.addSuccess,
        errorAddProject:project.addError,
        updateSuccess:project.updateSuccess,
        updateError: project.updateError
    };
  }
  const mapDispatchToProps = {
    addNewProject , messagesClearInStore ,updateProject
  };
  export default connect(mapStateToProps, mapDispatchToProps)(AddProject);