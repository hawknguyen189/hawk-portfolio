import React from "react";
import {HashLink as Link} from "react-router-hash-link";
import resume from "../../misc/HocNguyen-Resume.pdf";

class Navigation extends React.Component{
  render(){
    return(
      <div className="collapse navbar-collapse" id="mainNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link to="/#aboutMe" className="nav-link text-white">ABOUT ME</Link>
          </li>
          <li className="nav-item">
            <Link to="/#projects" className="nav-link text-white">PROJECTS</Link>
          </li>
          <li className="nav-item">
            <Link to="/#testinomials" className="nav-link text-white">TESTIMONIALS</Link>
          </li>
          <li className="nav-item">
            <Link to="/#connectMe" className="nav-link text-white">CONNECT WITH ME</Link>
          </li>
          <li className="nav-item">
            <Link to="/#contact" className="nav-link text-white">CONTACT</Link>
          </li>
          <li className="nav-item">
            <a href={resume} className="nav-link text-white" target="_blank" rel="noopener noreferrer">RESUME <i className="fas fa-download"></i></a>
          </li>
        </ul>
      </div>
    )
  }
}
export default Navigation;
