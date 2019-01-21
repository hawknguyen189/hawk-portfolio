import React from "react";

class Navigation extends React.Component{
  render(){
    return(
      <div className="collapse navbar-collapse" id="mainNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a href="#aboutMe" className="nav-link">ABOUT ME</a>
          </li>
          <li className="nav-item">
            <a href="#projects" className="nav-link">PROJECTS</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">TESTIMONIALS</a>
          </li>
          <li className="nav-item">
            <a href="#connectMe" className="nav-link">CONNECT WITH ME</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">CONTACT</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">RESUME</a>
          </li>
        </ul>
      </div>
    )
  }
}
export default Navigation;
