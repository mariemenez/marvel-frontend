import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Personnages from "./pages/Personnages";
import Comics from "./pages/Comics";
import ComicsByPerso from "./pages/ComicsByPerso";
import Home from "./pages/Home";
// import Footer from "./components/Footer";
import Favoris from "./pages/Favoris";
import { useState } from "react";

function App() {
  const [CharactersFavoris, setCharactersFavoris] = useState([]);
  const [ComicsFavoris, setComicsFavoris] = useState([]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/characters"
          element={
            <Personnages
              CharactersFavoris={CharactersFavoris}
              setCharactersFavoris={setCharactersFavoris}
            />
          }
        />
        <Route
          path="/comics"
          element={
            <Comics
              ComicsFavoris={ComicsFavoris}
              setComicsFavoris={setComicsFavoris}
            />
          }
        />
        <Route path="/comics/:characterId" element={<ComicsByPerso />} />
        <Route path="/favoris" element={<Favoris />} />
      </Routes>
    </Router>
  );
}

export default App;
