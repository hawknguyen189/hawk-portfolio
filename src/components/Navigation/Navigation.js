import React from "react";
import {HashLink as Link} from "react-router-hash-link";

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
          </li>
          <li className="nav-item">
            <Link to="/#contact" className="nav-link text-white">CONTACT</Link>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link text-white">RESUME</a>
          </li>
        </ul>
      </div>
    )
  }
}
export default Navigation;
