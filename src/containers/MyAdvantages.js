import React from "react";

export class MyAdvantages extends React.Component{
  render(){
    return (
      <section className="container-fluid bg-light py-5" id="whyMe">
        <div className="container">
          <div className="row">
            <div className="col-sm d-sm-flex align-items-center justify-content-center flex-sm-column
              wow">
              <h3 className="border-bottom px-2 text-center">
                Answers to your "Why me?"
              </h3>
              <p>
                Here is the list of my self-anwsers before my pursuit to web devlopment field
              </p>
            </div>
          </div>
          <div className="row py-5">
            <div className="col-sm-3 d-flex flex-column wow jello" data-wow-duration="1s"  data-wow-delay="0.5s">
              <i className="fas fa-code fa-5x dominating-color pb-4 text-center"></i>
              <h4 className="text-center pb-2">
                Passion about Coding
              </h4>
              <p>
                “You must not only aim right,
                but draw the bow with all your might.” -Henry David Thoreau
              </p>
            </div>
            <div className="col-sm-3 d-flex flex-column wow jello" data-wow-duration="1s"  data-wow-delay="1s">
              <i className="far fa-hand-point-up fa-5x dominating-color pb-4 text-center"></i>
              <h4 className="text-center pb-2">
                Attitude of Graditute
              </h4>
              <p>
                Thanks to all thing happens to my life, all bad and good things that lead to my success
              </p>
            </div>
            <div className="col-sm-3 d-flex flex-column wow jello" data-wow-duration="1s"  data-wow-delay="1.5s">
              <i className="fas fa-book-reader fa-5x dominating-color pb-4 text-center"></i>
              <h4 className="text-center pb-2">
                Adaptability
              </h4>
              <p>
                Always stay up to date with the industry and be eagle to learn new thing.
              </p>
            </div>
            <div className="col-sm-3 d-flex flex-column wow jello" data-wow-duration="1s"  data-wow-delay="2s">
              <i className="fab fa-accessible-icon fa-5x dominating-color pb-4  text-center"></i>
              <h4 className="text-center pb-2">
                Enough Stubbornness
              </h4>
              <p>
                When stubbornness comes from a place of true conviction and
                understanding, it can be a powerful motivator of innovation and productivity.
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
