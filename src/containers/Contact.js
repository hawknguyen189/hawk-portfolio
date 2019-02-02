import React from "react";

export class Contact extends React.Component{
  render () {
    return(
      <footer>
        <div className="container-fluid bg-dark text-white py-5" id="contact">
          <div className="container">
            <div className="row">
              <div className="col-sm-8">
                <h3>
                  Expressing myself
                </h3>
                <p>
                  Hi there, I'm Hawk. Im a front-end web developer who's trying to fill up the puzzle of
                  coding knowledge, piece by piece, slow but steady.
                </p>
                <p>
                  I first knew about web programming is 5 years ago at my university
                  as a requirement for my Information System major. However, I haven't had much chance practicing it until the time I & my friend started building
                  up a website for our start-up project. The project didn't go well; However, it did light up my inner fire, my inspiration about development. Ever since, I started
                  my web development journey by swimming into the ocean of coding knowledge.
                </p>
                <p>
                  I'm seeking an opportunity to work and contribute my knowledge in creating extraordinary experience for company’s technical audience.
                  I know it's hard at first but I strongly believe that I could finally make it by continuously stacking up my knowledge as well as real-life projects.
                </p>
                <p>
                  If you're not satisfied with my projects at first, please give me another chance to come back after couple days for my new coming projects.
                </p>
                <p>
                  I'm a web developer. I build up things, not design it. I do not take any credits for the designs here. I gather most of these designs by surfing around the net then build up a new one from scratch
                  , based on my knowledge and techs.
                </p>

                <div className="footer-contact text-center">
                  <a href="mailto:hocnguyen1809@gmail.com" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-envelope mr-1 mr-sm-2 text-white"></i>
                  </a>

                  <a href="https://github.com/HawkNguyen" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github mx-1 mx-sm-2 text-white"></i>
                  </a>

                  <a href="https://www.linkedin.com/in/hawknguyen189/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin-in mx-1 mx-sm-2 text-white"></i>
                  </a>

                  <a href="https://www.facebook.com/hawknguyen189" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook-f mx-1 mx-sm-2 text-white"></i>
                  </a>
                  <a href="https://t.me/Hawk189" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-telegram-plane mx-1 mx-sm-2 text-white"></i>
                  </a>
                </div>
              </div>
              <div className="col-sm-4">
                <h3>Salut,</h3>
                  <p>
                    <i className="fas fa-map-marker-alt"></i> Address: Montreal, QC H3S 1E6
                  </p>
                  <p>
                    <i className="far fa-envelope"></i> Email: hocnguyen1809@gmail.com
                  </p>
                  <p>
                    <i className="fas fa-phone-volume"></i> Phone: 514-984-4295
                  </p>
              </div>
              <div className="col-sm text-center mt-3">
                &#169; Hawk Nguyen 2019
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}
