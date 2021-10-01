import React from "react";
const style = {
  width: "3.5rem",
  height: "3.5rem"
};

export class ConnectMe extends React.Component {
  render() {
    return (
      <section
        className="container-fluid bg-white py-5 d-flex align-items-center"
        id="connectMe"
        style={{ height: "21rem" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-sm d-sm-flex align-items-sm-left justify-content-center flex-sm-column">
              <h3 className="align-self-start border-bottom px-2">
                Connect with me:
              </h3>
              <p>
                Get in touch, share the passion, and lead the path to the glory
              </p>
            </div>
            <div className="col-sm">
              <div className="container d-flex justify-content-center contact-container">
                <a
                  href="mailto:hocnguyen1809@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i
                    className="fas fa-envelope fa-2x dominating-color border-width-small  border rounded
                    border-dominating-color mx-1 mx-sm-2"
                    style={style}
                  ></i>
                </a>

                <a
                  href="https://github.com/hawknguyen189"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i
                    className="fab fa-github fa-2x dominating-color border-width-small  border rounded
                    border-dominating-color mx-1 mx-sm-2"
                    style={style}
                  ></i>
                </a>

                <a
                  href="https://www.linkedin.com/in/hawknguyen189/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i
                    className="fab fa-linkedin-in fa-2x dominating-color border-width-small  border rounded
                    border-dominating-color mx-1 mx-sm-2"
                    style={style}
                  ></i>
                </a>

                <a
                  href="https://www.facebook.com/hawknguyen189"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i
                    className="fab fa-facebook-f fa-2x dominating-color border-width-small  border rounded
                    border-dominating-color mx-1 mx-sm-2"
                    style={style}
                  ></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
