import axios from "axios";
import { useEffect, useState } from "react";
import PersoCard from "../components/PersoCard";
import { Link } from "react-router-dom";

const Personnages = ({ favoris, setFavoris }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [filters, setFilters] = useState("");
  const [page, setPage] = useState(1);

  // const [favoris, setFavoris] = useState([]);

  // const addFavoris = () => {
  //   const newFavoris = [...favoris];
  //   const obj = {
  //     name: "ok",
  //     description: "description ici",
  //   };
  //   newFavoris.push(obj);
  //   setFavoris(newFavoris);
  //   console.log(newFavoris);
  // };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/characters?name=${filters}&page=${page}`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
    console.log("useEffect executed");
  }, [filters, page]);

  return isLoading ? (
    <div>en cours de chargement</div>
  ) : (
    <div className="container">
      <h1>la liste des personnages</h1>
      <input
        type="text"
        placeholder="recherchez votre personnage"
        value={filters}
        onChange={(event) => {
          setFilters(event.target.value);
        }}
      />
      <div className="perso-container container">
        {data.results.map((perso, index) => {
          const picture =
            perso.thumbnail.path + "." + perso.thumbnail.extension;
          // console.log(perso._id);

          return (
            <section key={index}>
              <Link to={`/comics/${perso._id}`}>
                <PersoCard perso={perso} picture={picture} />
              </Link>
              <button
                onClick={() => {
                  const newFavoris = [...favoris];
                  const obj = {
                    name: perso.name,
                    description: perso.description,
                  };
                  newFavoris.push(obj);
                  setFavoris(newFavoris);
                  console.log(newFavoris);
                }}
              >
                Favoris
              </button>
            </section>
          );
        })}
      </div>
      <div>
        {favoris.map((elem) => {
          return (
            <div>
              <p>{elem.name}</p>
            </div>
          );
        })}
      </div>
      <button
        onClick={() => {
          setPage(page + 1);
        }}
      >
        page suivante
      </button>
      <p>{page}</p>
      <button
        onClick={() => {
          setPage(page - 1);
        }}
      >
        page précédente
      </button>
    </div>
  );
};

export default Personnages;
