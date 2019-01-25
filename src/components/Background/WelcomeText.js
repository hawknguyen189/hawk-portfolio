import React from 'react';
import logo from "../../images/logo.png"

const style = {backgroundColor: "rgba(0, 0, 45, 0.4)"};
class WelcomeText extends React.Component {
  render(){
    return (
      <div className="container text-center">
        <div className="row fade-in wow">
          <div className="col-sm-6 text-white d-none d-sm-block ">
            <a href="index.html" className="navbar-brand d-flex justify-content-center align-items-center">
              <img src={logo} alt="Find Hawk logo" width="60" height="60"/>
              <h3 className="pl-2">FindHawk.ca</h3>
            </a>
            <h3 className="text-sm-left">Light Tomorrow With Today</h3>
            <h4 className="text-sm-left">
              "It does not matter how slowly you go as long as you do not stop." – Confucius
            </h4>
          </div>
          <div className="py-4 d-flex col-sm-6 text-white rounded align-middle flex-column align-items-center justify-content-center" style={style}>
            <h3>Welcome to my Workshop</h3>
            <h5>
              <br/>
              If you do not get what you're looking here, please come back after few days. I do regularly update my new projects
              every 3-4 days.
            </h5>
            <a href="#connectMe" className="w-50">
              <button className="btn btn-info bg-transparent w-100">Get in touch</button>
            </a>
          </div>
        </div>

      </div>
    )
  }
}

export default WelcomeText;
