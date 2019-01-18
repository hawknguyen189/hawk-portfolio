import React from 'react';

export class IntroduceMe extends React.Component {
  render(){
    return (
      <section className="container container-fluid bg-light">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <h3>Hi there! I'm Hoc Nguyen. You can call me Hawk. Im a front-end
                web developer.
              </h3>
              <h5>
                Cras mattis consectetur purus sit amet fermentum.
                Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
              </h5>
            </div>
            <div className="col-sm-6"></div>
          </div>
        </div>
      </section>
    )
  }
}
