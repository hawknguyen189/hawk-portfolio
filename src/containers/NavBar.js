import React from 'react';
import BrandName from "../components/BrandName/BrandName"
import Navigation from "../components/Navigation/Navigation"
import CollapseButton from "../components/Navigation/CollapseButton"

export class NavBar extends React.Component {
  render(){
    return (
      <nav className="navbar navbar-expand-lg navbar-dark text-white bg-transparent fixed-top">
        <BrandName/>
        <CollapseButton/>
        <Navigation/>
      </nav>
    )
  }
}
