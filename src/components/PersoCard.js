const PersoCard = ({ perso, picture }) => {
  return (
    <div className="perso-card">
      <img src={picture} alt="" />
      {/* <p>{perso.description}</p> */}
    </div>
  );
};

export default PersoCard;
