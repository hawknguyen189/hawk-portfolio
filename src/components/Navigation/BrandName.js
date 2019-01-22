import React from "react";
import logo from "../../images/logo.png"

class BrandName extends React.Component{
  render(){
    return (
      <a href="index.html" className="navbar-brand">
        <img src={logo} alt="Find Hawk logo" width="30" height="30"/>
        <span className=""> FindHawk.ca</span>
      </a>
    )
  }
}
export default BrandName;
