import axios from "axios";
import { useEffect, useState } from "react";
import ComicCard from "../components/ComicCard";

const Comics = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [filters, setFilters] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/comics?title=${filters}&page=${page}`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
    console.log("useEffect executed");
  }, [filters, page]);
  return isLoading ? (
    <div>en cours de chargement page comics</div>
  ) : (
    <div>
      <h1>la liste des comics</h1>
      <input
        type="text"
        placeholder="recherchez votre personnage"
        value={filters}
        onChange={(event) => {
          setFilters(event.target.value);
        }}
      />
      {data.results.map((comic, index) => {
        const picture = comic.thumbnail.path + "." + comic.thumbnail.extension;
        // console.log(picture);

        return (
          <section key={index} className="comics-container">
            <ComicCard comic={comic} picture={picture} />
          </section>
        );
      })}
      <button
        onClick={() => {
          setPage(page + 1);
        }}
      >
        page suivante
      </button>
      <p>{page}</p>
      <button
        onClick={() => {
          setPage(page - 1);
        }}
      >
        page précédente
      </button>
    </div>
  );
};

export default Comics;
