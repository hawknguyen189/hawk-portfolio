import React from "react";
import {Link} from "react-router-dom";

export class Project extends React.Component{
  render (){
    return (
      <div className="col-sm-3">
        <div className="card">
          <div className="card-header">
            {this.props.websiteName}
          </div>
          <Link to="/projectstore">
            <img src={require("../../images/"+ this.props.websiteImage + ".png")} alt={this.props.websiteName} className="card-img-top"/>
          </Link>
          <div className="card-body">
            <p className="class-text">
              {this.props.websiteContent}
            </p>
          </div>
        </div>
      </div>
    )
  }
}
