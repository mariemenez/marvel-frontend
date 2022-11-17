import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ComicsByPerso = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { characterId } = useParams();
  console.log(characterId);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/comics/${characterId}`
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
    <p>en cours de chargement</p>
  ) : (
    <div>
      <h1>la liste des comics par personnages</h1>
      <p>Je vais faire un carousel geant</p>

      {data.comics.map((elem, index) => {
        const picture = elem.thumbnail.path + "." + elem.thumbnail.extension;

        return (
          <section key={index} className="comicById-container">
            <p>{elem.title}</p>
            <img src={picture} alt="" />
          </section>
        );
      })}
    </div>
  );
};

export default ComicsByPerso;
