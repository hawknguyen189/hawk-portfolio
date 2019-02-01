import React from "react";

export class ProjectPet extends React.Component{
  render(){
    return(
      <div className="container py-5">
        <div className="row">
          <div className="col-sm d-sm-flex align-items-center justify-content-center
            flex-sm-column py-4">
            <h3 className="border-bottom">
              My Project Pets
            </h3>
          </div>
        </div>
        <div className="row py-3">
          <div className="col-sm-7 d-sm-flex align-items-center justify-content-center
            flex-sm-column text-sm-left">
            <p className="border-left border-dominating-color border-width-large
              pl-2">
              I, like many other people,
              enjoy spending my time on swimming in the Ocean of Coding Knowledge. Im looking forward to becoming
              an experienced full-stack web developer in the next 3 years.
            </p>
          </div>
          <div className="col-sm-5">
            <img src={require("../../images/portfolio-website-small.png")} alt="Website Iamge" className="img-fluid website-img"/>
            <div className="row py-3">
              <div className="col border rounded border-dominating-color border-width-small mx-1 px-0 ">
                <a href="https://www.findhawk.me/" className="w-100 project-button align-items-center justify-content-center d-flex"
                  rel="noopener noreferrer" target="_blank">
                  <h6>
                    Visit Website
                  </h6>
                </a>
              </div>
              <div className="col border rounded border-dominating-color border-width-small mx-1 px-0"
                rel="noopener noreferrer">
                <a href="https://github.com/HawkNguyen/hawk-portfolio" className="w-100 project-button
                  align-items-center justify-content-center d-flex" target="_blank">
                  <h6>
                    View Code
                  </h6>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
