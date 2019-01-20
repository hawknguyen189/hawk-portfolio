import React from "react";

export class Project extends React.Component{
  render (){
    return (
      <div className="col-sm-3">
        <div className="card">
          <div className="card-header">
            {this.props.websiteName}
          </div>
          <img src={this.props.websiteImage} alt="Website Image" className="card-img-top"/>
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
