import React, { useState } from "react";
import useFetch from "../hooks/useFetch";
import TR from "./TR";
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
        className="p-2 rounded-sm outline-none mb-4 border-none text-center text-slate-900 placeholder:text-slate-300 "
      />
      {loading && "Loading...."}
      {error && "there was an error!!"}
      {loading || error || (
        <table>
          <thead className="text-bold text-left text-slate-50 bg-indigo-300 bg-opacity-10 border-b-2 border-b-violet-500">
            <tr>
              <th className="p-2 font-cstm text-base">name</th>
              <th className="p-2 font-cstm text-base">type</th>
              <th className="p-2 font-cstm text-base">base</th>
            </tr>
          </thead>
          <tbody className="text-slate-300 [&>*:nth-child(even)]:bg-indigo-200 [&>*:nth-child(even)]:bg-opacity-5 ">
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
