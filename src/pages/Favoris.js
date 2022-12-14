import { Link } from "react-router-dom";
const Favoris = ({ picture }) => {
  const CharactersStorage = JSON.parse(
    localStorage.getItem("newCharactersFavoris")
  );
  // console.log(CharactersStorage);

  const ComicsStorage = JSON.parse(localStorage.getItem("NewComicsFavoris"));
  // console.log(ComicsStorage);
  return (
    <div className="background">
      <div className="header-comicsByPerso">
        <Link className="lien" to={"/"}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/2560px-Marvel_Logo.svg.png"
            alt="logo-marvel"
          />
        </Link>

        <nav>
          <Link className="lien" to={"/characters"}>
            <div className="favoris">
              <i className="fa-solid fa-people-group"></i> <p>Personnages</p>
            </div>
          </Link>
          <Link className="lien" to={"/comics"}>
            <div className="favoris">
              <i className="fa-solid fa-book-open"></i> <p>comics</p>
            </div>
          </Link>
          <Link className="lien" to={"/"}>
            <div className="favoris">
              <i className="fa-solid fa-house"></i> <p>Home</p>
            </div>
          </Link>
        </nav>
      </div>
      <section className="favoris-container container">
        <div className="character-favoris-content">
          <h2>Vos personnages favoris :</h2>
          {CharactersStorage ? (
            <div className="carousel-character">
              {CharactersStorage.map((elem, index) => {
                return (
                  <div key={index} className="carousel-card-character">
                    <img src={elem.picture} alt="" />
                    <p>{elem.name}</p>
                    <p>{elem.description}</p>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="emptyFavorisList">
              <p>Vous n'avez pas encore de personnages favoris !</p>
            </div>
          )}
        </div>
        <div className="comics-favoris-content">
          <h2>Vos comics favoris :</h2>
          {ComicsStorage ? (
            <div className="carousel-comic">
              {ComicsStorage.map((item, index) => {
                return (
                  <div key={index} className="carousel-card-comic">
                    <img src={item.picture} alt="test" />
                    <p>{item.title}</p>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="emptyFavorisList">
              <p>Vous n'avez pas encore de comics favoris !</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Favoris;
