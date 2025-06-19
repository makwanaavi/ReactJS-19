import axios from "axios";
import { useEffect, useState } from "react";

function Movie() {
  const [state, setstate] = useState(null);

  useEffect(() => {
    const ApiUrl =
      "http://www.omdbapi.com/?i=tt3896198&apikey=1c12799f&s=titanic&page=1";

    const fetchData = async () => {
      try {
        const res = await axios.get(ApiUrl);
        setstate(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  console.log(state);

  return (
    <div className="">
      {state?.Search?.map((item) => (
        <div className="flex">
          <h2 key={item.imdbID}>{item.Title}</h2>
          <img src={item.Poster} alt="" />
        </div>
      ))}
    </div>
  );
}

export default Movie;
