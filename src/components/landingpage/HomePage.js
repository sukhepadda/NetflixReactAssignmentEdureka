import React from "react";
import { Link } from "react-router-dom";

import logoImg from "./images/logo.png";
import content1 from "./images/content1.png";
import content2 from "./images/content2.jpg";
import content3 from "./images/content3.png";
import iconImg from "./images/icon.png";


import "./HomePage.css";

function HomePage() {
  return (
    <div>
      <nav className="navbar navbar-light p-0">
        <div className="container-fluid px-5">
          <a href="#" className="navbar-brand">
            {" "}
            <img className="nav-logo" src={logoImg} alt="Netflix" />{" "}
          </a>
          <form className="d-flex">
            <select
              className="form-select-menu mx-4 text-white"
              aria-label="Default select example"
            >
              <option selected value="english">
                <span>&nbsp;English</span>
              </option>
              <option value="hindi">&nbsp;हिंदी</option>
            </select>
            <i className="fa-solid fa-globe"></i>
            <Link to="/lists" type="button" className="btn btn-danger top-sign-in">
              Sign In
            </Link>
          </form>
        </div>
      </nav>

      <div className="bg-img">
        <div className="layer">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1 className="headerTitleOne">
                Unlimited movies, TV <br />
                shows and more.
              </h1>
              <h3 className="headerTitleTwo">
                Watch anywhere. Cancel anytime.
              </h3>
              <h5 className="headerTitleThree">
                Ready to watch? Enter your email to create or restart your
                membership.
              </h5>
            </div>
          </div>
          <div className="row w-100">
            <div className="col-md-2 col-1"></div>
            <div className="col-md-8 col-10 p-0 main-search">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email address"
                />
                <Link className="input-group-text" to="/lists">
                  {/* <span className="" id="basic-addon2"> */}
                    Get Started &nbsp;{" "}
                    <i className="bi bi-chevron-right text-white"></i>
                  {/* </span> */}
                </Link>
              </div>
            </div>
            <div className="col-md-2 col-1"></div>
          </div>
        </div>
      </div>
      <section>
        <div className="container">
          <div className="row align-items-center textCenter768">
            <div className="col-lg-6">
              <h2 className="sec-h2">Enjoy on your TV.</h2>
              <p className="sec-p">
                Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
                Blu-ray players and more.
              </p>
            </div>
            <div className="col-lg-6">
              <img className="story-card-img" src={content1} />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row align-items-center reverse textCenter768">
            <div className="col-lg-6">
              <img src={content2} />
            </div>
            <div className="col-lg-6">
              <h2 className="sec-h2">Download your shows to watch offline.</h2>
              <p className="sec-p">
                Save your favourites easily and always have something to watch.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row align-items-center textCenter768">
            <div className="col-lg-6">
              <h2 className="sec-h2">Watch everywhere.</h2>
              <p className="sec-p">
                Stream unlimited movies and TV shows on your phone, tablet,
                laptop, and TV.
              </p>
            </div>
            <div className="col-lg-6">
              <img src={content3} />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row align-items-center reverse textCenter768">
            <div className="col-lg-6">
              <img src="https://occ-0-4994-2186.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABYjXrxZKtrzxQRVQNn2aIByoomnlbXmJ-uBy7du8a5Si3xqIsgerTlwJZG1vMpqer2kvcILy0UJQnjfRUQ5cEr7gQlYqXfxUg7bz.png?r=420" />
            </div>
            <div className="col-lg-6">
              <h2 className="sec-h2">Create profile for children.</h2>
              <p className="sec-p">
                Send children on adventures with their favorite characters in a
                space made just for them-freew with your membership.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="faq">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2 className="faq-h2 mb-5">Frequently Asked Questions</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-2 col-1"></div>
            <div className="col-lg-6 col-md-8 col-10 p-0">
              <a
                className="btn text-white"
                data-bs-toggle="collapse"
                href="#multiCollapseExample1"
                role="button"
                aria-expanded="false"
                aria-controls
                autoplay="multiCollapseExample1"
              >
                What is Netflix? <img className="plusIcon" src={iconImg} />
              </a>
              <div
                className="collapse multi-collapse"
                id="multiCollapseExample1"
              >
                <div className="card card-body">
                  Netflix is a streaming service that offers a wide variety of
                  award-winning TV shows, movies, anime, documentaries and more
                  – on thousands of internet-connected devices. <br />
                  <br />
                  You can watch as much as you want, whenever you want, without
                  a single ad – all for one low monthly price. There's always
                  something new to discover, and new TV shows and movies are
                  added every week!
                </div>
              </div>
              <a
                className="btn text-white"
                data-bs-toggle="collapse"
                href="#multiCollapseExample2"
                role="button"
                aria-expanded="false"
                aria-controls
                autoplay="multiCollapseExample2"
              >
                Where can I watch? <img className="plusIcon" src={iconImg} />
              </a>
              <div
                className="collapse multi-collapse"
                id="multiCollapseExample2"
              >
                <div className="card card-body">
                  Watch anywhere, anytime, on an unlimited number of devices.
                  Sign in with your Netflix account to watch instantly on the
                  web at netflix.com from your personal computer or on any
                  internet-connected device that offers the Netflix app,
                  including smart TVs, smartphones, tablets, streaming media
                  players and game consoles.
                </div>
              </div>
              <a
                className="btn text-white"
                data-bs-toggle="collapse"
                href="#multiCollapseExample3"
                role="button"
                aria-expanded="false"
                aria-controls
                autoplay="multiCollapseExample3"
              >
                How do I cancel? <img className="plusIcon" src={iconImg} />
              </a>
              <div
                className="collapse multi-collapse"
                id="multiCollapseExample3"
              >
                <div className="card card-body">
                  Netflix is flexible. There are no annoying contracts and no
                  commitments. You can easily cancel your account online in two
                  clicks. There are no cancellation fees – start or stop your
                  account anytime.
                </div>
              </div>
              <a
                className="btn text-white"
                data-bs-toggle="collapse"
                href="#multiCollapseExample4"
                role="button"
                aria-expanded="false"
                aria-controls
                autoplay="multiCollapseExample4"
              >
                What can I watch on Netflix?{" "}
                <img className="plusIcon" src={iconImg} />
              </a>
              <div
                className="collapse multi-collapse"
                id="multiCollapseExample4"
              >
                <div className="card card-body">
                  Netflix has an extensive library of feature films,
                  documentaries, TV shows, anime, award-winning Netflix
                  originals, and more. Watch as much as you want, anytime you
                  want.
                </div>
              </div>
              <a
                className="btn text-white"
                data-bs-toggle="collapse"
                href="#multiCollapseExample5"
                role="button"
                aria-expanded="false"
                aria-controls
                autoplay="multiCollapseExample5"
              >
                Is Netflix good for kids?{" "}
                <img className="plusIcon" src={iconImg} />
              </a>
              <div
                className="collapse multi-collapse"
                id="multiCollapseExample5"
              >
                <div className="card card-body">
                  The Netflix Kids experience is included in your membership to
                  give parents control while kids enjoy family-friendly TV shows
                  and films in their own space. <br />
                  <br />
                  Kids profiles come with PIN-protected parental controls that
                  let you restrict the maturity rating of content kids can watch
                  and block specific titles you don’t want kids to see.
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-2 col-1"></div>
          </div>
        </div>

        <div className="bottom-search">
          <p className="text-center bottomSearchPara ">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <div className="row">
            <div className="col-md-2 col-1"></div>
            <div className="col-md-8 col-10 p-0 main-search">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email address"
                />
                 <Link className="input-group-text" to="/lists">
                  {/* <span className="" id="basic-addon2"> */}
                    Get Started &nbsp;{" "}
                    <i className="bi bi-chevron-right text-white"></i>
                  {/* </span> */}
                </Link>
              </div>
            </div>
            <div className="col-md-2 col-1"></div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default HomePage;
