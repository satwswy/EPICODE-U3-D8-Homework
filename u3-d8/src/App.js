
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import NavBar from './components/NavBar';
import GalleryOne from './components/GalleryOne';
import GalleryTwo from './components/GalleryTwo'
import GalleryThree from './components/GalleryThree'

function App() {
  return (
    <div>
      <NavBar />
      <h1>Harry Potter</h1>
      <hr />
      <GalleryOne />
      <h1>Hobbit</h1>
      <hr />
      <GalleryTwo />
      <h1>Batman</h1>
      <hr />
      <GalleryThree />
      

    </div>
  );
}

export default App;
