const ComicCard = ({ comic, picture }) => {
  return (
    <div className="comic-card">
      <img src={picture} alt="" />
      <p>{comic.title}</p>
      <p>{comic.description}</p>
    </div>
  );
};

export default ComicCard;
