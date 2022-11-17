const Favoris = ({ favoris, setFavoris }) => {
  return (
    <div>
      <p>la page des favoris</p>
      <div>
        {favoris.map((elem) => {
          return (
            <div>
              <p>{elem.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Favoris;
