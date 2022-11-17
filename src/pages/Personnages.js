import axios from "axios";
import { useEffect, useState } from "react";
import PersoCard from "../components/PersoCard";
import { Link } from "react-router-dom";
// import Cookies from "js-cookie";

const Personnages = ({ favoris, setFavoris }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [filters, setFilters] = useState("");
  const [page, setPage] = useState(1);

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
    <div className="background">
      <div className="header-home">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/2560px-Marvel_Logo.svg.png"
          alt="logo-marvel"
        />
        <input
          type="text"
          placeholder="recherchez votre personnage"
          value={filters}
          onChange={(event) => {
            setFilters(event.target.value);
          }}
        />
        <nav>
          <div className="favoris">
            <i class="fa-solid fa-book-open"></i>{" "}
            <Link className="lien" to={"/comics"}>
              <p>comics</p>
            </Link>
          </div>
          <div className="favoris">
            <i class="fa-solid fa-bolt-lightning"></i>
            <Link className="lien" to={"/favoris"}>
              <p>Votre liste</p>
            </Link>
          </div>
          <div className="favoris">
            <i class="fa-solid fa-house"></i>{" "}
            <Link className="lien" to={"/"}>
              <p>Home</p>
            </Link>
          </div>
        </nav>
      </div>
      <div className="container">
        <h1>la liste des personnages</h1>
        <div className="perso-container container">
          {data.results.map((perso, index) => {
            const picture =
              perso.thumbnail.path + "." + perso.thumbnail.extension;
            // console.log(perso._id);

            return (
              <section key={index}>
                <div className="perso-big-card">
                  <div>
                    <Link className="lien" to={`/comics/${perso._id}`}>
                      <PersoCard perso={perso} picture={picture} />
                    </Link>
                  </div>
                  <div className="perso-info">
                    <h2>{perso.name}</h2>
                    <div
                      className="addFavoris"
                      onClick={() => {
                        const newFavoris = [...favoris];
                        const obj = {
                          name: perso.name,
                          picture: picture,
                          description: perso.description,
                        };
                        newFavoris.push(obj);
                        setFavoris(newFavoris);
                        // console.log(newFavoris);
                        localStorage.setItem(
                          "newFavoris",
                          JSON.stringify(newFavoris)
                        );

                        const storage = JSON.parse(
                          localStorage.getItem("newFavoris")
                        );
                        console.log(storage);
                      }}
                    >
                      <i class="fa-solid fa-bolt-lightning"></i>
                    </div>
                  </div>
                </div>
              </section>
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
    </div>
  );
};

export default Personnages;
