import "./Pokemon.css";
import { useEffect, useState } from "react";

function HowNotFetchApi() {
  const [apidata, setApiData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const API_URL = "https://pokeapi.co/api/v2/pokemon?limit=100";

  const fetchPokemon = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();

      const detailedData = await Promise.all(
        data.results.map(async (pokemon) => {
          const res = await fetch(pokemon.url);
          return await res.json();
        })
      );

      setApiData(detailedData);
      setLoading(false);
    } catch (err) {
      console.error("Fetch error:", err);
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const filteredData = apidata.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="container">
      <header>
        <h1 className="text-3xl text-center mb-6">Let's Catch Pokémon</h1>
        <div className="flex justify-center">
          <input
            type="text"
            placeholder="Search Pokémon..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-2 border rounded w-full max-w-md"
          />
        </div>
      </header>

      <ul className="card-demo grid grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-4 mt-10">
        {filteredData.map((item) => (
          <li className="pokemon-card m-10 p-10" key={item.id}>
            <figure>
              <img
                src={item.sprites.other.dream_world.front_default}
                alt={item.name}
                className="pokeman-image"
              />
            </figure>

            <h2 className="text-center text-red-500">Name: {item.name}</h2>
            <div className="grid-three-cols">
              <h2 className="pokemon-info">Height: {item.height}</h2>
              <h2 className="pokemon-info">Weight: {item.weight}</h2>
              <h2 className="pokemon-info">
                Speed: {item.stats[5]?.base_stat}
              </h2>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default HowNotFetchApi;
