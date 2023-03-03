import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/landingpage/HomePage"
import MovieLists from "./components/movielistpage/MovieLists.js"


function App() {
  return (
    <div className="app">
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/lists" element={<MovieLists/>} />
      </Routes>
    </Router>
   
    </div>
  );
}

export default App;
