import React from "react";
import "./Footer.css";

export default function footer() {
  return (
    <footer>
      <div className="container footerContainer">
        <ul>
          <li className="footerCall ps-2 pb-3">
            Questions? Call <a href="#"> 000-800-919-1694</a>
          </li>
        </ul>
        <div className="row">
          <div className="col-md-3 col-4">
            <ul>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Media Centre</a>
              </li>
              <li>
                <a href="#">Ways to Watch</a>
              </li>
              <li>
                <a href="#">Cookie Preferences</a>
              </li>
              <li>
                <a href="#">Speed Test</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-4">
            <ul>
              <li>
                <a href="#">Help Centre</a>
              </li>
              <li>
                <a href="#">Investor Relations</a>
              </li>
              <li>
                <a href="#">Terms of Use</a>
              </li>
              <li>
                <a href="#">Cookie Preferences</a>
              </li>
              <li>
                <a href="#">Legal Notices</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-4">
            <ul>
              <li>
                <a href="#">Account</a>
              </li>
              <li>
                <a href="#">Jobs</a>
              </li>
              <li>
                <a href="#">Privacy</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Only on Netflix</a>
              </li>
            </ul>
          </div>
          <div className="row pb-4 footerDropdown">
            <div className="col-lg-2 col-md-4 col-6">
              <select
                className="form-select-menu2 mx-4 text-white"
                aria-label="Default select example"
              >
                <option selected value="english">
                  <span>&nbsp;English</span>
                </option>
                <option value="hindi">&nbsp;हिंदी</option>
              </select>
            </div>
          </div>

          <p className="footerCredits">
            Netflix India Cloned by{" "}
            <a href="https://github.com/sukhepadda">@SUKHEPADDA</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
