import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import GalleryOne from "./components/GalleryOne";
import GalleryTwo from "./components/GalleryTwo";
import GalleryThree from "./components/GalleryThree";
import TvShows from "./components/TvShows";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <div>
          <TvShows />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
