import React from "react";
import searchapireq from "./searchapireq";
import "./MovieBox.css";
function MovieBox({
  id,
  title,
  poster_path,
  vote_average,
  release_date,
  overview,
}) {
  return (
    <div className="card text-center bg-secondary mb-3">
      <div className="card-body">
        <img
          className="card-img-top"
          src={searchapireq.imgURL + poster_path}
          alt=""
        />
        <div className="card-body">
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            View More
          </button>
          <div
            className="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">
                    {title}
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <img
                    className="card-img-top modalImg"
                    src={searchapireq.imgURL + poster_path}
                    alt=""
                  />
                  <h3 className="bodyContent mt-2">{title}</h3>
                  <h4 className="bodyContent">IMDB: {vote_average}</h4>
                  <h5 className="bodyContent">Release Date: {release_date}</h5>
                  <h5 className="bodyContent">Overview:</h5>
                  <p className="bodyContent">{overview}</p>
                </div>
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}

export default MovieBox;
