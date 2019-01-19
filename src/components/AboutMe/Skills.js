import React from 'react';
import "./Skills.css";
import reactRouter from "./react-router-logo.png";

export class Skills extends React.Component{
  render(){
    return (
      <div className="container-fluid bg-white text-center py-5">
        <h3>
          Technological Skills
        </h3>
        <h5>
          I always enjoy learning new technologies. Especially, those will make your company special.
        </h5>
        <div className="container text-white">
          <div className="row mb-3">
            <div className="col-sm-4">
              <div className="container pl-0 pr-1">
                <div className="row">
                  <div className="col-sm skill-cell rounded">
                    <h6>Semantic HTML5 <i class="fab fa-html5"></i></h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="container pl-0 pr-1">
                <div className="row">
                  <div className="col-sm skill-cell rounded">
                    <h6>Responsive CSS3 <i class="fab fa-css3-alt"></i></h6>
                  </div>
                </div>
              </div>
          </div>
            <div className="col-sm-4">
              <div className="container pl-0 pr-1">
                <div className="row">
                  <div className="col-sm skill-cell rounded">
                    <h6>Interactive JS <i class="fab fa-js-square"></i></h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-sm-4">
              <div className="container pl-0 pr-1">
                <div className="row">
                  <div className="col-sm skill-cell rounded">
                    <h6>Sass <i class="fab fa-sass"></i></h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="container pl-0 pr-1">
                <div className="row">
                  <div className="col-sm skill-cell rounded">
                    <h6>jQuery <i class="fas fa-code"></i></h6>
                  </div>
                </div>
              </div>
          </div>
            <div className="col-sm-4">
              <div className="container pl-0 pr-1">
                <div className="row">
                  <div className="col-sm skill-cell rounded">
                    <h6>Boostrap <i class="fas fa-laptop-code"></i></h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-sm-4">
              <div className="container pl-0 pr-1">
                <div className="row">
                  <div className="col-sm skill-cell rounded">
                    <h6>React <i class="fab fa-react"></i></h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="container pl-0 pr-1">
                <div className="row">
                  <div className="col-sm skill-cell rounded">
                    <h6>Redux <i class="fas fa-network-wired"></i></h6>
                  </div>
                </div>
              </div>
          </div>
            <div className="col-sm-4">
              <div className="container pl-0 pr-1">
                <div className="row">
                  <div className="col-sm skill-cell rounded">
                    <h6>React Router <i class="fas fa-route"></i></h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-sm-3">
              <div className="container pl-0 pr-1">
                <div className="row">
                  <div className="col-sm skill-cell rounded">
                    <h6>NodeJS <i class="fab fa-node-js"></i></h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="container pl-0 pr-1">
                <div className="row">
                  <div className="col-sm skill-cell rounded">
                    <h6>Git Bash <i class="fab fa-git-square"></i></h6>
                  </div>
                </div>
              </div>
          </div>
            <div className="col-sm-3">
              <div className="container pl-0 pr-1">
                <div className="row">
                  <div className="col-sm skill-cell rounded">
                    <h6>Github <i class="fab fa-github"></i></h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="container pl-0 pr-1">
                <div className="row">
                  <div className="col-sm skill-cell rounded">
                    <h6>Webpack <i class="fas fa-cube"></i></h6>
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
