import "./Pokemon.css";
import { useEffect, useState } from "react";

function HowNotFetchApi() {
  const [apidata, setApiData] = useState(null);
  const [loading, setLoading] = useState(true);

  const API_KEY = "https://pokeapi.co/api/v2/pokemon/rattata";

  const fetchpockemen = () => {
    fetch(API_KEY)
      .then((res) => res.json())
      .then((data) => {
        setApiData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("Fetch error:", err)
        setApiData(false)
      });
  };

  useEffect(() => {
    fetchpockemen();
  }, []);
  console.log(apidata);

  if (apidata) {
    return (
      <section className="container">
        <header>
          <h1>lets Catch Pokemen</h1>
        </header>

        <ul className="card-demo">
          <li className="pokemon-card">
            <figure>
              <img
                src={apidata.sprites.other.dream_world.front_default}
                alt={apidata.name}
                className="pokeman-image"
              />
            </figure>
            <h1>{apidata.name}</h1>
          </li>
        </ul>
      </section>
    );
  }
}

export default HowNotFetchApi;
