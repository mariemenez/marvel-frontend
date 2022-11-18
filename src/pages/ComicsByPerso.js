import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";

const ComicsByPerso = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { characterId } = useParams();
  // console.log(characterId);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://site--marvel-backend--6gc2xpkgkrgz.code.run/comics/${characterId}`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [characterId]);

  return isLoading ? (
    <Loading />
  ) : (
    <div className="background">
      <div className="header-comicsByPerso">
        <Link className="lien" to={"/"}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/2560px-Marvel_Logo.svg.png"
            alt="logo-marvel"
          />
        </Link>

        <nav>
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
        <div className="comicsbyid-content">
          <div className="characterPic">
            <img
              src={data.thumbnail.path + "." + data.thumbnail.extension}
              alt="characterPic"
            />
          </div>
          <div className="carousel">
            {data.comics.map((elem, index) => {
              const comicPicture =
                elem.thumbnail.path + "." + elem.thumbnail.extension;

              return (
                <section key={index} className="comicById-container">
                  <img src={comicPicture} alt="" />
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
