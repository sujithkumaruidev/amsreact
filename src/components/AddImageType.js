import React,{ Component } from "react";

class AddImageType extends Component{

    constructor(props){
        super(props);
        this.state={
            typeName:"",
            error:false
        }
    }
    
    addCategoriesType=()=>{
        if(this.state.typeName !== ""){
            this.props.addTypeAction(this.state);
        }else{
            this.setState({error:true})
        }
        
    }
    updateCategoriesType=()=>{
        if(this.state.typeName !== ""){
            this.props.updateTypeAction(this.state);
        }else{
            this.setState({error:true})
        }
        
    }

    componentDidMount(){
        if(this.props.editType !== ""){
            this.setState({
                typeName:this.props.editType
            })
        }
        if(this.props.editType === ""){
            this.setState({
                typeName:""
            })
        }
    }

    onChangeHandle=(e)=>{
        this.setState({typeName: e.target.value,error:false})
    }
    render(){
        const {close,editType} =this.props;
        const {typeName,error}=this.state;
        return (
            <div className="modal fade show in d-block">
            <div className="modal-dialog modal-sm">
              <div className="modal-content">
                {/* Modal Header */}
                <div className="modal-header">
                  <h4 className="modal-title">{editType === "" ? "Add" : "Update"} Upload Image Type</h4>
                  <button type="button" className="close" onClick={close}>×</button>
                </div>
                {/* Modal body */}
                <div className="modal-body adddialog">
                  <div className="row">
                    <div className="col-lg-12 col-xl-12 col-md-12 col-sm-12">
                        <div className="form-group">
                            <label style={{color:"#555555"}}>Type Name</label>
                            <input type="text" name="type" className="form-control" value={typeName} onChange={(e)=>this.onChangeHandle(e) }/>
                            {error &&  <label className="error" style={{color:"#f30a0a"}}>Please enter the Type</label>}
                        </div>
                    </div>
                  </div>
                  {/* Modal footer */}
                  <div className="modal-footer">
                 {editType === "" ? <button type="button" className="btn btn-danger" onClick={this.addCategoriesType}>Add</button> : 
                    <button type="button" className="btn btn-danger" onClick={this.updateCategoriesType}>Update</button> } 

                    <button type="button" className="btn btn-danger" onClick={close}>Cancel</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
    }

}export default AddImageType;