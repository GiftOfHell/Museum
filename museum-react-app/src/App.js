import "./App.css";
import React from "react";

import TicketTable from "./components/TicketTable.js";
import PaintTable from "./components/PaintTable.js";
import LocationTable from "./components/LocationTable.js";

import "./vendors/bootstrap/bootstrap.min.css";
import "./vendors/fontawesome/css/all.min.css";
import "./vendors/themify-icons/themify-icons.css";
import "./vendors/linericon/style.css";
import "./vendors/owl-carousel/owl.theme.default.min.css";
import "./vendors/owl-carousel/owl.carousel.min.css";
import "./vendors/Magnific-Popup/magnific-popup.css";
import "./css/style.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useLocation,
} from "react-router-dom";

import moment from "moment";

function App() {
  return (
    <Router>
      <section class="header-top d-none d-sm-block">
        <div class="container">
          <div class="d-sm-flex justify-content-between">
            <ul class="header-top__info mb-2 mb-sm-0">
              <li>
                <a href="tel:+01432152323">
                  <span class="align-middle">
                    <i class="ti-mobile"></i>
                  </span>
                  +014 321 523 23
                </a>
              </li>
              <li>
                <a href="mailto:info@example.com">
                  <span class="align-middle">
                    <i class="ti-email"></i>
                  </span>
                  Info@example.com
                </a>
              </li>
            </ul>
            <ul class="header-top__social">
              <li>
                <a href="#">
                  <i class="ti-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="ti-twitter-alt"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="ti-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="ti-skype"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <header class="header_area">
        <div class="main_menu">
          <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container box_1620">
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>

              <div
                class="collapse navbar-collapse offset"
                id="navbarSupportedContent"
              >
                <ul class="nav navbar-nav menu_nav justify-content-end">
                  <li class="nav-item active">
                    <a class="nav-link" href="#">
                      <Link to="/">Home</Link>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      <Link to="/paint">Picture</Link>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      <Link to="/location">Location</Link>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      <Link to="/ticket">Tickets</Link>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
      <section class="hero-banner">
        <div class="hero-banner__content text-center">
          <h1>Museum</h1>
        </div>
      </section>
      <section class="section-margin">
        <div className="App">
          <section>
            <Switch>
              <Route path="/paint">
                <PaintTable />
              </Route>

              <Route path="/location">
                <LocationTable />
              </Route>

              <Route path="/ticket">
                <TicketTable />
              </Route>
            </Switch>
          </section>
        </div>
      </section>
      <footer class="footer-area">
        <div class="container">
          <div class="row">
            <div class="col-lg-3  col-md-6 col-sm-6">
              <div class="single-footer-widget">
                <h6>About Agency</h6>
                <p>
                  The world has become so fast paced that people don’t want to
                  stand by reading a page of information, they would much rather
                  look at a presentation and understand the message. It has come
                  to a point
                </p>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="single-footer-widget">
                <h6>Navigation Links</h6>
                <div class="row">
                  <div class="col">
                    <ul>
                      <li>
                        <a href="#">Home</a>
                      </li>
                      <li>
                        <a href="#">Feature</a>
                      </li>
                      <li>
                        <a href="#">Services</a>
                      </li>
                      <li>
                        <a href="#">Portfolio</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3  col-md-6 col-sm-6">
              <div class="single-footer-widget">
                <h6>Newsletter</h6>
                <p>
                  For business professionals caught between high OEM price and
                  mediocre print and graphic output.
                </p>
                <div id="mc_embed_signup">
                  <form
                    target="_blank"
                    action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
                    method="get"
                    class="subscription relative"
                  >
                    <div class="input-group d-flex flex-row">
                      <input
                        name="EMAIL"
                        placeholder="Email Address"
                        onfocus="this.placeholder = ''"
                        onblur="this.placeholder = 'Email Address '"
                        required=""
                        type="email"
                      />
                      <button class="btn bb-btn">
                        <span class="lnr lnr-location"></span>
                      </button>
                    </div>
                    <div class="mt-10 info"></div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div class="footer-bottom">
            <div class="container">
              <div class="align-items-center">
                <p class="col-lg-8 col-sm-12 footer-text m-0 text-center text-lg-left">
                  Copyright &copy;
                  <script>document.write(new Date().getFullYear());</script> All
                  rights reserved | This template is made with{" "}
                  <i class="fa fa-heart" aria-hidden="true"></i> by{" "}
                  <a href="https://colorlib.com" target="_blank">
                    Colorlib
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <script src="vendors/jquery/jquery-3.2.1.min.js"></script>
      <script src="vendors/bootstrap/bootstrap.bundle.min.js"></script>
      <script src="vendors/owl-carousel/owl.carousel.min.js"></script>
      <script src="vendors/Magnific-Popup/jquery.magnific-popup.min.js"></script>
      <script src="js/jquery.ajaxchimp.min.js"></script>
      <script src="js/mail-script.js"></script>
      <script src="js/main.js"></script>
    </Router>
  );
}

export default App;
