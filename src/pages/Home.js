import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="header-home">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/2560px-Marvel_Logo.svg.png"
          alt="logo-marvel"
        />
        <div className="favoris">
          <i class="fa-solid fa-bolt-lightning"></i>
          <Link className="" to={"/favoris"}>
            <p>Votre liste</p>
          </Link>
        </div>
      </div>
      <section className="content-home">
        <Link to={"/comics"}>
          <div className="left-home">
            <p>Découvrez les comics</p>
          </div>
        </Link>
        <Link to={"/characters"}>
          <div className="right-home">
            <p>Découvrez les personnages</p>
          </div>
        </Link>
        <Link to={"/favoris"}>
          <div className="favorie">
            <p>consulter vos favoris</p>
          </div>
        </Link>
      </section>
    </div>
  );
};

export default Home;
