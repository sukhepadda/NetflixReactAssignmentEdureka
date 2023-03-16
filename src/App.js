import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/landingpage/HomePage"
import MovieLists from "./components/movielistpage/MovieLists"
import MovieSearch from "./components/searchmoviepage/MovieSearch"
import Footer from "./components/Footer";


function App() {
  return (
    <div className="app">
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/lists" element={<MovieLists/>} />
        <Route path="/searchmovie" element={<MovieSearch/>} />

      </Routes>
      {<Footer/>}

    </Router>
   
    </div>
  );
}

export default App;
