import React from "react";
import {HashLink as Link} from "react-router-hash-link";

export class TechnologyUsed extends React.Component{
  render(){
    return(
      <div className="container-fluid bg-light py-3">
        <div className="container py-5">
          <div className="row">
            <div className="col-sm d-sm-flex align-items-center justify-content-center
              flex-sm-column py-4">
              <h3 className="border-bottom">
                Technologies Used:
              </h3>
            </div>
          </div>
          <div className="row py-3">
            <div className="col-sm-6 py-2">
              <img src={require("../../../images/"+ this.props.responsiveImage + ".png")} alt="Website Iamge" className="img-fluid website-img"/>
            </div>
            <div className="col-sm-6 d-sm-flex
              flex-sm-column text-sm-left">
              <ul className="list-group list-group-flush border-left border-dominating-color border-width-large
                pl-4">
                {
                  this.props.techonologies.map((tech,index) => {
                    return (
                      <li className="list-group-item" key={index}><h6>{tech}</h6></li>
                    )
                  })
                }
              </ul>
              <p  className="border-left border-dominating-color border-width-large
                pl-4 mt-3">
                {this.props.extra}
              </p>
            </div>
          </div>
          <div className="row py-3">
            <div className="col d-flex justify-content-center align-item-centers">
              <Link to="/#projects" className="w-sm-50 project-button align-items-center justify-content-center d-flex
                border rounded border-dominating-color border-width-small">
                <h6 className="w-100 text-center">
                  <i className="fas fa-angle-double-left"></i> Go back to main website
                  </h6>
                </Link>
              </div>
            </div>
          </div>
        </div>
    )
  }
}
