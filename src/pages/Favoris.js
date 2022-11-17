import { Link } from "react-router-dom";
const Favoris = ({ picture }) => {
  const storage = JSON.parse(localStorage.getItem("newFavoris"));
  console.log(storage);
  return (
    <div>
      <Link to={"/"}>
        <p>retour a la page Home</p>
      </Link>
      <p>la page des favoris</p>
      {storage.map((elem) => {
        return (
          <div>
            <p>{elem.name}</p>
            <p>{elem.description}</p>
            <img src={elem.picture} alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default Favoris;
