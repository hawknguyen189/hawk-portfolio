import React from "react";

class CollapseButton extends React.Component{
  render(){
    return(
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    )
  }
}
export default CollapseButton;
