import React from 'react';
import "./Skills.css";
import d3 from "../../images/d3-white.png"

export class Skills extends React.Component{
  render(){
    return (
      <div className="container-fluid bg-white text-center py-5">
        <div className="heading-text pb-5 col-sm d-sm-flex align-items-center justify-content-center flex-sm-column">
          <h3 className="border-bottom px-2">
            Technological Skills
          </h3>
          <p>
            I always enjoy learning new technologies. Especially, those will make your company special.
          </p>
        </div>
        <div className="container text-white">
          <div className="row mb-3">
            <div className="col-sm-4">
              <div className="container pl-0 pr-1 pb-1">
                <div className="row">
                  <div className="col-sm skill-cell border rounded border-dominating-color border-width-small">
                    <h6>Semantic HTML5 <i className="fab fa-html5"></i></h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="container pl-0 pr-1 pb-1">
                <div className="row">
                  <div className="col-sm skill-cell rounded border border-dominating-color border-width-small">
                    <h6>Responsive CSS3 <i className="fab fa-css3-alt"></i></h6>
                  </div>
                </div>
              </div>
          </div>
            <div className="col-sm-4">
              <div className="container pl-0 pr-1 pb-1">
                <div className="row">
                  <div className="col-sm skill-cell rounded border border-dominating-color border-width-small">
                    <h6>Interactive JS <i className="fab fa-js-square"></i></h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-sm-3">
              <div className="container pl-0 pr-1 pb-1">
                <div className="row">
                  <div className="col-sm skill-cell rounded border border-dominating-color border-width-small">
                    <h6>Sass <i className="fab fa-sass"></i></h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="container pl-0 pr-1 pb-1">
                <div className="row">
                  <div className="col-sm skill-cell rounded border border-dominating-color border-width-small">
                    <h6>jQuery <i className="fas fa-code"></i></h6>
                  </div>
                </div>
              </div>
          </div>
            <div className="col-sm-3">
              <div className="container pl-0 pr-1 pb-1">
                <div className="row">
                  <div className="col-sm skill-cell rounded border border-dominating-color border-width-small">
                    <h6>Boostrap <i className="fas fa-laptop-code"></i></h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="container pl-0 pr-1 pb-1">
                <div className="row">
                  <div className="col-sm skill-cell rounded border border-dominating-color border-width-small">
                    <h6>D3 <img className="mb-1" src={d3} alt="d3 logo" width="16" height="16"/></h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-sm-4">
              <div className="container pl-0 pr-1 pb-1">
                <div className="row">
                  <div className="col-sm skill-cell rounded border border-dominating-color border-width-small">
                    <h6>React <i className="fab fa-react"></i></h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="container pl-0 pr-1 pb-1">
                <div className="row">
                  <div className="col-sm skill-cell rounded border border-dominating-color border-width-small">
                    <h6>Redux <i className="fas fa-network-wired"></i></h6>
                  </div>
                </div>
              </div>
          </div>
            <div className="col-sm-4">
              <div className="container pl-0 pr-1 pb-1">
                <div className="row">
                  <div className="col-sm skill-cell rounded border border-dominating-color border-width-small">
                    <h6>React Router <i className="fas fa-route"></i></h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-sm-3">
              <div className="container pl-0 pr-1 pb-1">
                <div className="row">
                  <div className="col-sm skill-cell rounded border border-dominating-color border-width-small">
                    <h6>NodeJS <i className="fab fa-node-js"></i></h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="container pl-0 pr-1 pb-1">
                <div className="row">
                  <div className="col-sm skill-cell rounded border border-dominating-color border-width-small">
                    <h6>Git Bash <i className="fab fa-git-square"></i></h6>
                  </div>
                </div>
              </div>
          </div>
            <div className="col-sm-3">
              <div className="container pl-0 pr-1 pb-1">
                <div className="row">
                  <div className="col-sm skill-cell rounded border border-dominating-color border-width-small">
                    <h6>Github <i className="fab fa-github"></i></h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="container pl-0 pr-1 pb-1">
                <div className="row">
                  <div className="col-sm skill-cell rounded border border-dominating-color border-width-small">
                    <h6>Webpack <i className="fas fa-cube"></i></h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
