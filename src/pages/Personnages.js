import axios from "axios";
import { useEffect, useState } from "react";
import PersoCard from "../components/PersoCard";
import { Link } from "react-router-dom";
// import Cookies from "js-cookie";
import Loading from "../components/Loading";

const Personnages = ({ CharactersFavoris, setCharactersFavoris }) => {
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

  // console.log(data.results);
  return isLoading ? (
    <Loading />
  ) : (
    <div className="background">
      <div className="header-home">
        <div className="picture-input">
          <Link className="lien" to={"/"}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/2560px-Marvel_Logo.svg.png"
              alt="logo-marvel"
            />
          </Link>

          <input
            type="text"
            placeholder="recherchez votre personnage"
            value={filters}
            onChange={(event) => {
              setFilters(event.target.value);
            }}
          />
        </div>

        <nav>
          <div className="favoris">
            <i className="fa-solid fa-book-open"></i>{" "}
            <Link className="lien" to={"/comics"}>
              <p>comics</p>
            </Link>
          </div>
          <div className="favoris">
            <i className="fa-solid fa-bolt-lightning"></i>
            <Link className="lien" to={"/favoris"}>
              <p>Votre liste</p>
            </Link>
          </div>
          <div className="favoris">
            <i className="fa-solid fa-house"></i>{" "}
            <Link className="lien" to={"/"}>
              <p>Home</p>
            </Link>
          </div>
        </nav>
      </div>
      <div className="container">
        <div className="perso-container">
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
                        const newCharactersFavoris = [...CharactersFavoris];
                        const obj = {
                          name: perso.name,
                          picture: picture,
                          description: perso.description,
                        };
                        newCharactersFavoris.push(obj);
                        setCharactersFavoris(newCharactersFavoris);
                        // console.log(newFavoris);
                        localStorage.setItem(
                          "newCharactersFavoris",
                          JSON.stringify(newCharactersFavoris)
                        );

                        const CharactersStorage = JSON.parse(
                          localStorage.getItem("newCharactersFavoris")
                        );
                        console.log(CharactersStorage);
                      }}
                    >
                      <i className="fa-solid fa-bolt-lightning"></i>
                    </div>
                  </div>
                </div>
              </section>
            );
          })}
        </div>
        <div className="pagination">
          <div
            onClick={() => {
              setPage(page - 1);
            }}
          >
            <i className="fa-solid fa-arrow-left"></i>
          </div>
          <p>{page}</p>
          <div
            onClick={() => {
              setPage(page + 1);
            }}
          >
            <i className="fa-solid fa-arrow-right"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Personnages;
