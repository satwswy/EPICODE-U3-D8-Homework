import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import TvShows from "./components/TvShows";
import Home from "./components/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <div>
          <h1>Hello</h1>
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tvShows" element={<TvShows/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
