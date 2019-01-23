import React from "react";
import {Testinomial} from "../components/Testinomial/Testinomial"

export class Testinomials extends React.Component{
  render(){
    return (
      <section className="container-fluid bg-white py-5 text-center" id="testinomials">
        <div className="container">
          <div className="row">
            <div className="col-sm d-sm-flex align-items-center justify-content-center
              flex-sm-column wow tada" data-wow-duration="2s" data-wow-delay="0.5s">
              <h3 className="border-bottom px-2">
                Client & Teammate Testinomials
              </h3>
              <p>
                Some of the feedbacks on my code path
              </p>
            </div>
          </div>
          <div className="row">
            <Testinomial/>
          </div>
        </div>
      </section>
    )
  }
}
