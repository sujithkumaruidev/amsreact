import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Navbar from './Navbar'
import axios from 'axios';
import './UploadImages.css';
import Alert from 'react-bootstrap/Alert';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

export default class UploadImages extends Component {

  constructor() {
    super();
    this.state = {
      selectedFiles: [],
      imageType: 'crack',
      selectedImage: '',
      images: [],
      showAlert: false,
      alertMessage:'',
      alertVariant: ''
    }
  }
  componentDidMount() {
    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    };
    this.getImages();
  }
  getImages(){
    const {imageType} = this.state;
    const url = imageType === 'crack' ? 'http://44.233.138.4:9000/AMS/API/list/crack/images' : imageType === 'nocrack' ? 
      'http://44.233.138.4:9000/AMS/API/list/noncrack/images' : ''; 
      console.log('url', url);
    axios.get(url).then(res => {
      console.log('res', res.data.data);
      this.setState({images: res.data.data})
    });
  }
  readFile(e) {
    console.log('readfiles',e.target.files, typeof e.target.files, Object.values(e.target.files));
    const selectedFiles = Object.values(e.target.files);
    this.setState({selectedFiles}, ()=> {
      this.uploadFiles();
    });
  }
  handleImageTypeChange(e) {
    console.log('event', e);
    this.setState({imageType:e}, () => {
      this.getImages();
    });
  }
  getTrainImages() {
    const url = 'http://44.233.138.4:9000/AMS/API/train/images';
    axios.get(url).then(res => {
      console.log('res', res);
      // this.setState({images: res.data.data})
    });
  }
  uploadFiles() {
    const {imageType, selectedFiles} = this.state;
    console.log('on crack', selectedFiles);
    const url = imageType === 'crack' ? 'http://44.233.138.4:9000/AMS/API/upload/crack/images' : imageType === 'nocrack' ? 
      'http://44.233.138.4:9000/AMS/API/upload/noncroack/images' : '';
    const formData = new FormData();
    selectedFiles.forEach(file=>{
      formData.append("file", file);
    });
    formData.append('ImageType', imageType);
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    }
    axios.post(url, formData, config).then(res => {
      console.log('res', res);
      this.setState({selectedFiles: [], alertVariant:'success', alertMessage: 'Image Uploaded Successfully', showAlert : true},()=> {
        setTimeout(()=> {
          this.setState({showAlert:false});
        }, 3000);
      });
      this.getImages();
    })
  }
  printImageName(imagePath) {
    return imagePath.replace(/^.*[\\\/]/, '');
  }

  deleteImage() {
    const {imageType, selectedImage} = this.state;
    const url = imageType === 'crack' ? 'http://44.233.138.4:9000/AMS/API/delete/crack/images' : imageType === 'nocrack' ? 
    'http://44.233.138.4:9000/AMS/API/delete/noncrack/images' : '';
    const params = {"fileName":[selectedImage]};
    axios.post(url, params).then(res => {
      console.log('res', res);
      this.getImages();
    })
  }

  render() {
      return (
        <div>
        <header>
      <div className="header_section">
        <div className="menu-btn">
          <a id="desktop-menu"><img className="custom-enter-logo" src="images/enter.png" /></a>
          <img className="mobile-logo" src="images/logo.jpg" />
        </div>
        <div className="page-title">
          <h2>Upload Images To Train</h2>
        </div>
        <div className="dropdown">
          <a href="javascript:void(0);" data-toggle="dropdown">
            <div className="avatar_icon">
              <img src="images/pro-pic.jpg" /></div>
          </a>
          <div className="dropdown-menu">
            <div className="dropdown-header d-flex flex-column align-items-center">
              <div className="info text-center">
                <p className="name font-weight-bold mb-0">Username</p>
                <p className="email text-muted mb-0">user@gmail.com</p>
              </div>
            </div>
            <div className="dropdown-body">
              <ul>
                <li>
                  <Link to="/changepassword"><i className="fas fa-unlock-alt" />  Change Password</Link>
                </li>
                <li>
                  <Link to='/login'><i className="fas fa-sign-out-alt" />  Logout</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <a id="sidebar-toggle" className="mobile-menu-toggle">
          <i className="fas fa-bars" />
        </a>
      </div>
    </header>
        <div id="wrapper" className="desktop-wrapper desktop-wrapper page-content d-flex align-items-stretch">
        <Navbar />
          <div className="content-inner pagecontent">
      {/* Page Header*/}
      <Alert variant={this.state.alertVariant} show= {this.state.showAlert}
         onClose={() => this.setState({showAlert: false})} dismissible>
        <Alert.Heading>{this.state.alertMessage}</Alert.Heading>
      </Alert>
      <div className="container-fluid">
        <div className="row m-b-40">
          <div className="col-lg-12 col-md-12">
            <div className="bar-img upload-images">
              
              <div className="d-flex justify-content-between">
                <h4 className="m-4">Images</h4>
                <React.Fragment>
                  <div className="imageInfoBtns">
                    <button className="btn btn-info m-4" onClick={() => this.getTrainImages()}>Train</button>
                  
                    <Dropdown className="m-4" onSelect={(e)=> this.handleImageTypeChange(e)}>
                      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                        {this.state.imageType}
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item value="crack" eventKey="crack">Crack</Dropdown.Item>
                        <Dropdown.Item value="nocrack" eventKey='nocrack'>NoCrack</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  
                </React.Fragment>
              </div>
                                      
              <form action="upload.php" method="POST">
                <input type="file" accept=".zip" multiple onChange={(e)=> this.readFile(e)} />``
                <div className="drag-and-drop-btn"><i className="fas fa-cloud-upload-alt" />
                  <p>DRAG &amp; DROP</p>
                  <a href="#">Browse your files(s)</a>
                  <div className="upload-txt">
                    <span>You can upload .zip includes images only. Maximum file size 5MB.</span>
                    {
                        this.state && this.state.selectedFiles && this.state.selectedFiles.length > 0 ?
                    <div>
                        <span>
                        { this.state.selectedFiles.map((file, i) => <span key={i} className="space-1">{file.name}</span>)}
                        </span>
                        {this.state.selectedFiles.length === 1 ? 'is' : 'are' } uploading .....
                    </div> : ''}
                  </div>
                </div>
                {/* <button type="submit">Upload</button> */}
                
              </form>
              <div className="upload-images-heading">
                <h4>Extracted Images</h4>
              </div>
              { 
                this.state && this.state.images && this.state.images.length > 0 ? 
                 this.state.images.map((image, index) => 
                 <div className="upload-list-images" key={index} onClick={()=>this.setState({selectedImage: image})}> 
                  <div className="upload-single-image" data-toggle="modal" data-target="#myModal">
                    <div className="upload-single-image-details">
                      <img src={image} />
                    </div>
                    <div className="upload-single-text-details">
                      <p>{this.printImageName(image)}</p>
                    </div>
                  </div>
                </div>)
                : <></>
              }
            </div>
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
          <h4 className="modal-title">Uploaded Image</h4>
          <button type="button" className="close" data-dismiss="modal">×</button>
        </div>
        {/* Modal body */}
        <div className="modal-body adddialog">
          <div className="row">
            <div className="col-lg-12 col-xl-12 col-md-12 col-sm-12">
              <div className="popup-img">
                <img src={this.state.selectedImage} />
              </div> 
            </div>
          </div>
          {/* Modal footer */}
          <div className="modal-footer">
            <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={()=> this.deleteImage()}>Delete</button>

            <button type="button" className="btn btn-danger" data-dismiss="modal">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
    </div>
    </div>
      )
  }
}
