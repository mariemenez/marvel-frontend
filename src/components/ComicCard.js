const ComicCard = ({ comic, picture }) => {
  return (
    <div className="comic-card">
      <img src={picture} alt="" />
    </div>
  );
};

export default ComicCard;
