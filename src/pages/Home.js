import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="header-home">
        <p>c'est le header</p>
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
      </section>
    </div>
  );
};

export default Home;
