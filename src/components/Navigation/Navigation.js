import React from "react";

class Navigation extends React.Component{
  render(){
    return(
      <div className="collapse navbar-collapse" id="mainNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a href="#aboutMe" className="nav-link text-white">ABOUT ME</a>
          </li>
          <li className="nav-item">
            <a href="#projects" className="nav-link text-white">PROJECTS</a>
          </li>
          <li className="nav-item">
            <a href="#testinomials" className="nav-link text-white">TESTIMONIALS</a>
          </li>
          <li className="nav-item">
            <a href="#connectMe" className="nav-link text-white">CONNECT WITH ME</a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link text-white">CONTACT</a>
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
