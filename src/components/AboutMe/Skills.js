import React from "react";
import "./Skills.css";

export class Skills extends React.Component {
  render() {
    return (
      <div className="container-fluid bg-white text-center py-5">
        <div
          className="heading-text pb-5 col-sm d-sm-flex align-items-center justify-content-center
          flex-sm-column wow"
        >
          <h3 className="border-bottom px-2">Technological Skills</h3>
          <p>
            I always enjoy learning new technologies. Especially, those will
            make your company special.
          </p>
        </div>
        <div
          className="container text-white wow slideInUp"
          data-wow-duration="2s"
          data-wow-delay="0.5s"
        >
          {/* first line */}
          <div className="row mb-3">
            <div className="col-sm-4">
              <div className="container pl-0 pr-1 pb-1">
                <div className="row">
                  <div className="col-sm skill-cell rounded border border-dominating-color border-width-small">
                    <h6>
                      React <i className="fab fa-react"></i>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="container pl-0 pr-1 pb-1">
                <div className="row">
                  <div className="col-sm skill-cell rounded border border-dominating-color border-width-small">
                    <h6>
                      GraphQL <i className="fas fa-sitemap"></i>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="container pl-0 pr-1 pb-1">
                <div className="row">
                  <div className="col-sm skill-cell rounded border border-dominating-color border-width-small">
                    <h6>
                      TypeScript <i className="far fa-file-code"></i>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* second line */}
          <div className="row mb-3">
            <div className="col-sm-3">
              <div className="container pl-0 pr-1 pb-1">
                <div className="row">
                  <div className="col-sm skill-cell rounded border border-dominating-color border-width-small">
                    <h6>
                      D3 <i className="fas fa-chart-area"></i>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="container pl-0 pr-1 pb-1">
                <div className="row">
                  <div className="col-sm skill-cell rounded border border-dominating-color border-width-small">
                    <h6>
                      NodeJS <i className="fab fa-node-js"></i>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="container pl-0 pr-1 pb-1">
                <div className="row">
                  <div className="col-sm skill-cell rounded border border-dominating-color border-width-small">
                    <h6>
                      Bootstrap 5 <i className="fas fa-laptop-code"></i>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="container pl-0 pr-1 pb-1">
                <div className="row">
                  <div
                    className="col-sm skill-cell rounded border border-dominating-color 
                  border-width-small d-flex"
                  >
                    {/*<h6>D3 <img className="mb-1" src={d3} alt="d3 logo" width="16" height="16"/></h6>*/}
                    <h6>
                      Jest Testing/Debugging{" "}
                      <i className="fas fa-code-branch"></i>{" "}
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* third line */}
          <div className="row mb-3">
            <div className="col-sm-4">
              <div className="container pl-0 pr-1 pb-1">
                <div className="row">
                  <div className="col-sm skill-cell border rounded border-dominating-color border-width-small">
                    <h6>
                      NextJS <i className="fas fa-file-code"></i>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="container pl-0 pr-1 pb-1">
                <div className="row">
                  <div className="col-sm skill-cell rounded border border-dominating-color border-width-small">
                    <h6>
                      React Hooks <i className="fab fa-react"></i>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="container pl-0 pr-1 pb-1">
                <div className="row">
                  <div className="col-sm skill-cell rounded border border-dominating-color border-width-small">
                    <h6>
                      React Router <i className="fas fa-route"></i>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* fourth line */}
          <div className="row mb-3">
            <div className="col-sm-3">
              <div className="container pl-0 pr-1 pb-1">
                <div className="row">
                  <div className="col-sm skill-cell rounded border border-dominating-color border-width-small">
                    <h6>
                      ExpressJS <i className="fab fa-node-js"></i>
                    </h6>
                    {/*<h6>D3 <img className="mb-1" src={d3} alt="d3 logo" width="16" height="16"/></h6>*/}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="container pl-0 pr-1 pb-1">
                <div className="row">
                  <div className="col-sm skill-cell rounded border border-dominating-color border-width-small">
                    <h6>
                      Git Bash <i className="fab fa-github"></i>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="container pl-0 pr-1 pb-1">
                <div className="row">
                  <div className="col-sm skill-cell rounded border border-dominating-color border-width-small">
                    <h6>
                      Web3 <i className="fab fa-js-square"></i>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="container pl-0 pr-1 pb-1">
                <div className="row">
                  <div className="col-sm skill-cell rounded border border-dominating-color border-width-small">
                    <h6>
                      Solidity <i className="fas fa-cube"></i>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
