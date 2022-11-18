import axios from "axios";
import { useEffect, useState } from "react";
import ComicCard from "../components/ComicCard";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";

const Comics = ({ ComicsFavoris, setComicsFavoris }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [filters, setFilters] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/comics?title=${filters}&page=${page}`
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
            placeholder="recherchez votre BD"
            value={filters}
            onChange={(event) => {
              setFilters(event.target.value);
            }}
          />
        </div>

        <nav>
          <div className="favoris">
            <i className="fa-solid fa-people-group"></i>{" "}
            <Link className="lien" to={"/characters"}>
              <p>Personnages</p>
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
        <div className="comics-container">
          {data.results.map((comic, index) => {
            const picture =
              comic.thumbnail.path + "." + comic.thumbnail.extension;
            // console.log(picture);

            return (
              <section key={index}>
                <div className="comic-big-card">
                  <div>
                    <ComicCard comic={comic} picture={picture} />
                  </div>
                  <div className="comic-info">
                    <h2>{comic.title}</h2>
                    <div
                      className="addFavoris"
                      onClick={() => {
                        const NewComicsFavoris = [...ComicsFavoris];
                        const obj = {
                          title: comic.title,
                          picture: picture,
                          description: comic.description,
                        };
                        NewComicsFavoris.push(obj);
                        setComicsFavoris(NewComicsFavoris);
                        localStorage.setItem(
                          "NewComicsFavoris",
                          JSON.stringify(NewComicsFavoris)
                        );

                        const ComicsStorage = JSON.parse(
                          localStorage.getItem("NewComicsFavoris")
                        );
                        console.log(ComicsStorage);
                      }}
                    >
                      <i className="fa-solid fa-bolt-lightning"></i>
                    </div>
                  </div>
                  <p>{comic.description}</p>
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

export default Comics;
