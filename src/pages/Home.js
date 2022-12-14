import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="header-comicsByPerso">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/2560px-Marvel_Logo.svg.png"
          alt="logo-marvel"
        />
        <nav>
          <Link className="lien" to={"/favoris"}>
            <div className="favoris">
              <i className="fa-solid fa-bolt-lightning"></i>
              <p>Favoris</p>
            </div>
          </Link>
          <Link className="lien" to={"/"}>
            <div className="favoris">
              <i className="fa-solid fa-house"></i> <p>Home</p>
            </div>
          </Link>
        </nav>
      </div>
      <div className="imagefond">
        <section className="content-home">
          <Link to={"/comics"} className="lien">
            <div className="left-home">
              <h1>
                LES <br /> COMICS
              </h1>
            </div>
          </Link>
          <Link to={"/characters"} className="lien">
            <div className="right-home">
              <h1>
                LES <br /> PERSO-
                <br /> NNAGES
              </h1>
            </div>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Home;
