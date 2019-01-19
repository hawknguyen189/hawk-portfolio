import React from 'react';
import logo from "../BrandName/logo.png"

const style = {backgroundColor: "rgba(0, 0, 45, 0.4)"};
class WelcomeText extends React.Component {
  render(){
    return (
      <div className="container text-center">
        <div className="row">
          <div className="col-sm-6 text-white d-none d-sm-block ">
            <a href="#mainHeader" className="navbar-brand d-flex justify-content-center align-items-center">
              <img src={logo} alt="Find Hawk logo" width="60" height="60"/>
              <h3 className="pl-2 dominating-color">FindHawk.ca</h3>
            </a>
            <h3 className="text-sm-left">Light Tomorrow With Today</h3>
            <h4 className="text-sm-left">
              "It does not matter how slowly you go as long as you do not stop." – Confucius
            </h4>
          </div>
          <div className="d-flex col-sm-6 text-white rounded align-middle flex-column align-items-center justify-content-center" style={style}>
            <h3>Welcome to my Workshop</h3>
            <h5>
              Do you get what you're looking for here? Are you satisfied with my works?
              <br/>
              If not, please come back after few days. I do regularly update my new projects
              every 2 or 3 days.
            </h5>
            <button className="btn btn-info bg-transparent">Get in touch</button>
          </div>
        </div>

      </div>
    )
  }
}

export default WelcomeText;
