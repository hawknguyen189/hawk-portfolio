import React from "react";
import { HashLink as Link } from "react-router-hash-link";

export class Project extends React.Component {
  render() {
    return (
      <div className="col-sm-3" id={this.props.websiteId}>
        <div className="card  text-center">
          <div className="card-header">{this.props.websiteName}</div>
          <Link to={`/projectpets/${this.props.websiteId}/#projectShowing`}>
            {/* It seems that webpack resolves ES module require() calls to an object that looks like this: {default: module}, instead of to the flattened module itself. 
            This behavior is somewhat controversial and is discussed in this issue. */}
            {/* Therefore, to get your src attribute to resolve correctly, you need to be able to
             access the default property of the exported module. If you're using a framework, you should be able to do something like this: */}
            <img
              src={
                require("../../images/" + this.props.websiteImage + ".png")
                  .default
              }
              alt={this.props.websiteName}
              className="card-img-top"
              height="150"
            />
          </Link>
          <div className="card-body" style={{ height: "180px" }}>
            <p className="class-text">{this.props.websiteContent}</p>
          </div>
        </div>
      </div>
    );
  }
}
