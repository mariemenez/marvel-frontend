import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const ComicsByPerso = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { characterId } = useParams();
  // console.log(characterId);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/comics/${characterId}`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [characterId]);
  const characterPic = data.thumbnail.path + "." + data.thumbnail.extension;

  return isLoading ? (
    <p>en cours de chargement</p>
  ) : (
    <div>
      <div className="header-home">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/2560px-Marvel_Logo.svg.png"
          alt="logo-marvel"
        />
        <nav>
          <div className="favoris">
            <i class="fa-solid fa-people-group"></i>{" "}
            <Link className="lien" to={"/characters"}>
              <p>Personnages</p>
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
      <div className="container2 container">
        <div className="comicsbyid-content">
          <div className="characterPic">
            <img src={characterPic} alt="" />
          </div>
          <div className="carousel">
            {data.comics.map((elem, index) => {
              const picture =
                elem.thumbnail.path + "." + elem.thumbnail.extension;

              return (
                <section key={index} className="comicById-container">
                  <img src={picture} alt="" />
                  <h2>{elem.title}</h2>
                  <p>{elem.description}</p>
                </section>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComicsByPerso;
