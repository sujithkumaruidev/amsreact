import React,{Component} from "react";
import { Link } from "react-router-dom";

class Header extends Component{
    constructor(props){
        super(props);
        this.state={
        }
      }
    

    headerNameReturn=(props)=>{
        // console.log("props,",props);
        const path = props.location.pathname;
        switch(path){
            case "/home/dashboard" :
                return "Dashboard"
            case "/home/uploadimages" :
                return "Upload Images To Train"
            case "/home/uploadvideos" :
                return "Upload Videos - Results"
            case "/home/outputs" :
                return "Outputs"
            case "/home/crackdetect" :
                return "Crack Detected - Results"
            default :
            return "Dashboard"
        }
    }

    render(){
        const title  = this.headerNameReturn(this.props);
        return(
            <header>
          <div className="header_section">
            <div className="menu-btn">
              <div id="desktop-menu"><img className="custom-enter-logo" src="../amsreact/images/enter.png" alt="enter"/></div>
              <img className="mobile-logo" src="../amsreact/images/logo.jpg" alt="logo"/>
            </div>
            <div className="page-title">
              <h2>{title}</h2>
            </div>
            <div className="dropdown">
              <a href="#/" data-toggle="dropdown">
                <div className="avatar_icon">
                  <img src="../amsreact/images/pro-pic.jpg"alt="propic" /></div>
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
                    <Link to="/home/changepassword"><i className="fas fa-unlock-alt" />  Change Password</Link>
                    </li> 
                    <li>
                      <Link to='/login'><i className="fas fa-sign-out-alt" />  Logout</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <a id="sidebar-toggle" className="mobile-menu-toggle" href="#/"> 
              <i className="fas fa-bars" />
            </a>
          </div>
        </header>
        )
    }
}
export default Header;