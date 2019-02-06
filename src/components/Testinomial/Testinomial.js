import React from "react";
const style = {
  height: "12rem"
};
export class Testinomial extends React.Component{
  render() {
    return (
      <div className="col-sm d-flex justify-content-center align-items-center
        wow fadeIn" data-wow-duration="2s" data-wow-delay="0.5s" style={style}>
        <div id="testinomialsCarousel" className="border-left carousel slide w-sm-50 h-100 d-flex justify-content-center align-items-center" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#testinomialsCarousel" data-slide-to="0" className="active dominating-background-color"></li>
            <li data-target="#testinomialsCarousel" data-slide-to="1" className="dominating-background-color"></li>
            <li data-target="#testinomialsCarousel" data-slide-to="2" className="dominating-background-color"></li>
          </ol>
          <div className="carousel-inner px-3">
            <div className="carousel-item active">
              <h6 className="d-block w-100">
                 "Hawk has done a fantastic job overall. Everything is very clean and slick. Love the way he managed to solve the problems" - Vince Ng, Seattle, US.
              </h6>
            </div>
            <div className="carousel-item">
              <h6 className="d-block w-100">
                 "It has been a real pleasure working with Hawk. He has been very professional and very clear in all communications, which I appreciate." - Hung Huy, Ho Chi Minh city, VN.
              </h6>
            </div>
            <div className="carousel-item">
              <h6 className="d-block w-100">
                 "His communication was excellent from the outset and showed a willingness to persevere until the perfect design was achieved." - Hana, Ho Chi Minh city, VN
              </h6>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
