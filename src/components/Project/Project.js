import React from "react";
import {HashLink as Link} from "react-router-hash-link";

export class Project extends React.Component{
  render (){
    return (
      <div className="col-sm-3" id={this.props.websiteId}>
        <div className="card">
          <div className="card-header">
            {this.props.websiteName}
          </div>
          <Link to="/projectpets/#myPets">
            <img src={require("../../images/"+ this.props.websiteImage + ".png")} alt={this.props.websiteName} className="card-img-top"
              height="150"/>
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
