import { useEffect, useState } from "react";
import { Pokemon } from "../PokemonType";

interface Fetch {
  loading: boolean;
  error: boolean;
  pokemon: Pokemon[];
}

const useFetch = (url: string): Fetch => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setPokemon(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(true);
        setLoading(false);
        console.log(error);
      });
  }, [url]);

  return {
    loading,
    error,
    pokemon,
  };
};

export default useFetch;
