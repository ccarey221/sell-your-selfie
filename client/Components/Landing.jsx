import React from 'react';

const Landing = () => (
  <div className="container">
    <div className="header row">
      <div className="col-sm-12 col-md-4 text-right text-uppercase">
        <h1 className="text-thick"> #SellYourSelfie </h1>
        <h3 className="text-thin"> description??</h3>
      </div>
      <div className="col-sm-12 col-md-4 text-right text-uppercase" />
      <div className="col-sm-12 col-md-4 text-right text-uppercase" />
    </div>
    <div className=" row col-md-12">
      <div className="row col-md-12">
        <hr />
      </div>
      <div className="row col-md-12">
        <nav className=" navbar navbar-light bg-faded">
          <div className="navbar-inner">
            <div className="container">
              <ul className="nav navbar-nav">
                <li>
                  <a href="auth/twitter">Sign in with
                    <img
                      src="images/twitter_logo.png"
                      alt="twitter"
                      style={{ width: '42px', height: '42px', border: 0 }}
                    />
                  </a>
                </li>
                <li><a href="#sign-up"> Sign Up </a></li>
                <li><a href="#how-it-works"> How It works </a></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
    <div className="col-md-12">

      <div className="main-body row">
        <div className="col-md-12">
          <div className="container-fluid">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
      </div>
      <div className="footer-sub_header row">
        <div className="col-md-12">
          <h2 className="text-muted"> Selfie Posts </h2>
        </div>
      </div>
      <div className="sub footer row text-center">
        <div className="photo-frame col-12 col-md-4">
          <img className="img-responsive"
            src="http://placeimg.com/350/200/tech"
            alt="pic 1" />
          <h3 className="text-uppercase"> Appify </h3>
        </div>
        <div className="col-12 col-md-4">
          <img className="img-responsive" src="http://placeimg.com/350/200/tech" alt="pic 2" />
          <h3 className="text-uppercase"> Appify </h3>
        </div>
        <div className="col-12 col-md-4">
          <img className="img-responsive" src="http://placeimg.com/350/200/tech" alt="pic 3" />
          <h3 className="text-uppercase"> Appify </h3>
        </div>
      </div>
      <div className="col-md-12">
        <h2 className="text-muted"> Footer </h2>
      </div>
    </div>
  </div>
);

export default Landing;
