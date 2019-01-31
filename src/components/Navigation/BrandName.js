import React from "react";
import logo from "../../images/logo.png";
import {HashLink as Link} from "react-router-hash-link";

class BrandName extends React.Component{
  render(){
    return (
      <Link to="/" className="navbar-brand" onClick={this.props.onClick}>
        <img src={logo} alt="Find Hawk logo" width="30" height="30"/>
        <span className=""> FindHawk.me</span>
      </Link>
    )
  }
}
export default BrandName;
