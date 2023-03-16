import React, { useState, useEffect } from "react";
import MovieBox from "./MovieBox";
import searchapireq from "./searchapireq";
import "./MovieSearch.css";

function MovieSearch() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(searchapireq.apiURL)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.results);
        setMovies(data.results);
      });
  }, []);

  const searchMovieFunction = async (e) => {
    // e.preventDefault();
    console.log("searching");
    try{
      const url = `https://api.themoviedb.org/3/search/movie?api_key=2950f935c91571f9066f42ad4a94dda7&query`;
      console.log(url);

    }catch(err){
    }
  };

  return (
    <>
      <nav className="navbar-expand-lg bg-body-tertiary">
        <div claclassNamess="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form
              onSubmit={searchMovieFunction()}
              className="d-flex"
              role="search"
            >
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <div className="main">
        <div className="container-search">
          <div className="grid">
            {movies.map((movieReq) => {
              return <MovieBox key={movieReq.id} {...movieReq} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieSearch;
