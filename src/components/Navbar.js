import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Navbar extends Component {
    render() {
        return (
          <div>
           <nav id="sidebar-wrapper" className="dasboard-menu side-navbar">
            {/* Sidebar Header*/}
            <div className="sidebar-header d-flex align-items-center">
              <img src="amsreact/images/logo.jpg" alt="imglogo" />
            </div>
            {/* Sidebar Navidation Menus*/}
            <div className="sidebar_body">
              <ul className="list-unstyled">
                <li className="active"><NavLink to='/'><div className="menu-icon"><i className="fas fa-tachometer-alt" /></div><span>Dashboard </span></NavLink></li>
                <li className="" ><NavLink to='/uploadimages'><div className="menu-icon"><i className="fas fa-sync-alt" /></div> <span>Upload Images to Train </span></NavLink></li>
                <li className="" ><NavLink to='/uploadvideos'><div className="menu-icon"><i className="fas fa-video-slash" /></div> <span>Upload Videos &amp; Results
                    </span></NavLink></li>
                <li className="" ><NavLink to='/outputs'><div className="menu-icon"><i className="fas fa-share-square" /></div><span>Output(s)</span></NavLink></li>
                {/* <li class=""><a href="changepassword.html"><div class="menu-icon"><i class="fas fa-lock-open"></i></div><span>Change Password</span> </a></li> */}
                {/* <li><a href="#exampledropdownDropdown" aria-expanded="false" data-toggle="collapse"> <i class="icon-interface-windows"></i>Example dropdown </a>
                        <ul id="exampledropdownDropdown" class="collapse list-unstyled ">
                          <li><a href="#">Page</a></li>
                          <li><a href="#">Page</a></li>
                          <li><a href="#">Page</a></li>
                        </ul>
                      </li> */}
              </ul>
            </div>
          </nav>
          </div>
        )
    }
}
