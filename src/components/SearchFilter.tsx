import React, { useState } from "react";
import useFetch from "../hooks/useFetch";
import TR from "./TR";
import classes from "./searchFilter.module.css";
import { Base } from "../PokemonType";

const calcBase = (base: Base): number => {
  return Object.values(base).reduce((a: number, v: number): number => a + v, 0);
};

const SearchFilter: React.FunctionComponent = () => {
  const [input, setInput] = useState<string>("");
  const { loading, error, pokemon } = useFetch(
    "https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/pokedex.json"
  );

  return (
    <>
      <input
        type="text"
        value={input}
        onChange={(evt) => setInput(evt.target.value)}
        placeholder="Search pokemon"
      />
      {loading && "Loading...."}
      {error && "there was an error!!"}
      {loading || error || (
        <table className={classes.table}>
          <thead>
            <tr>
              <th className={classes.headerCell}>Name</th>
              <th className={classes.headerCell}>Type</th>
              <th className={classes.headerCell}>Base</th>
            </tr>
          </thead>
          <tbody className={classes.tableBody}>
            {pokemon
              .filter((p) =>
                p.name.english
                  .toLowerCase()
                  .includes(input.trim().toLowerCase())
              )
              .slice(0, 50)
              .map((p) => (
                <TR
                  key={p.id}
                  name={p.name.english}
                  type={p.type.join(" ")}
                  base={calcBase(p.base)}
                />
              ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default SearchFilter;
