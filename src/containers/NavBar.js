import React from 'react';
import BrandName from "../components/Navigation/BrandName"
import Navigation from "../components/Navigation/Navigation"
import CollapseButton from "../components/Navigation/CollapseButton"
const style={backgroundColor: "rgba(21,31,33,0.5)"};

export class NavBar extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    window.scrollTo(0,0);
  }
  render(){
    return (
      <nav style={style} className="navbar navbar-expand-lg navbar-dark text-white fixed-top border-bottom">
        <BrandName onClick={this.handleClick}/>
        <CollapseButton/>
        <Navigation/>
      </nav>
    )
  }
}
