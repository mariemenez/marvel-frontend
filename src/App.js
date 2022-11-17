import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Personnages from "./pages/Personnages";
import Comics from "./pages/Comics";
import ComicsByPerso from "./pages/ComicsByPerso";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Favoris from "./pages/Favoris";
import { useState } from "react";
import Cookies from "js-cookie";

function App() {
  const [favoris, setFavoris] = useState([]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/characters"
          element={<Personnages favoris={favoris} setFavoris={setFavoris} />}
        />
        <Route path="/comics" element={<Comics />} />
        <Route path="/comics/:characterId" element={<ComicsByPerso />} />
        <Route
          path="/favoris"
          element={<Favoris favoris={favoris} setFavoris={setFavoris} />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
