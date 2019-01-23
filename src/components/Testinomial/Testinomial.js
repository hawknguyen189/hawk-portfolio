import React from "react";
const style = {
  height: "12rem"
};
export class Testinomial extends React.Component{
  render() {
    return (
      <div className="col-sm d-flex justify-content-center align-items-center
        wow fadeIn" data-wow-duration="2s" data-wow-delay="0.5s" style={style}>
        <div id="testinomialsCarousel" className="border-left carousel slide w-50 h-100 d-flex justify-content-center align-items-center" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#testinomialsCarousel" data-slide-to="0" className="active dominating-background-color"></li>
            <li data-target="#testinomialsCarousel" data-slide-to="1" className="dominating-background-color"></li>
            <li data-target="#testinomialsCarousel" data-slide-to="2" className="dominating-background-color"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <p className="d-block w-100">
                1/
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse
                lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.
              </p>
            </div>
            <div className="carousel-item">
              <p className="d-block w-100">
                2/
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse
                lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.
              </p>
            </div>
            <div className="carousel-item">
              <p className="d-block w-100">
                3/
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse
                lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
