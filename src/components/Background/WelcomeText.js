import React from 'react';
import logo from "../BrandName/logo.png"

const style = {backgroundColor: "rgba(0, 0, 45, 0.4)"};
class WelcomeText extends React.Component {
  render(){
    return (
      <div className="container text-center">
        <div className="row">
          <div className="col-sm-6 text-white">
            <a href="#mainHeader" className="navbar-brand d-flex justify-content-center align-items-center">
              <img src={logo} alt="Find Hawk logo" width="60" height="60"/>
              <h3 className="pl-2">FindHawk.ca</h3>
            </a>
            <h3 className="text-sm-left">Light Tomorrow With Today</h3>
            <h4 className="text-sm-left">
              "It does not matter how slowly you go as long as you do not stop." – Confucius
            </h4>
          </div>
          <div className="d-none d-sm-flex col-sm-6 text-white rounded align-middle flex-column align-items-center justify-content-center" style={style}>
            <h3>Welcome to my Workshop</h3>
            <h5>
              I'm always looking for new projects or coding mates. Please do not
              hesitate to contact me!
            </h5>
            <button className="btn btn-info bg-transparent">Get in touch</button>
          </div>
        </div>

      </div>
    )
  }
}

export default WelcomeText;
