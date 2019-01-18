import React from "react";
import logo from "./logo.png"

class BrandName extends React.Component{
  render(){
    return (
      <a href="#mainHeader" className="navbar-brand">
        <img src={logo} alt="Find Hawk logo" width="30" height="30"/> FindHawk.ca
      </a>
    )
  }
}
export default BrandName;
