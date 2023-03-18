import React, { useState, useMemo } from "react";
import useFetch from "../hooks/useFetch";
import TR from "./TR";
import { Base } from "../PokemonType";

const calcBase = (base: Base): number => {
  return Object.values(base).reduce((a: number, v: number): number => a + v, 0);
};

const SearchFilter: React.FunctionComponent = () => {
  const [input, setInput] = useState<string>("");
  const [sortBy, setSortBy] = useState("lg");
  const { loading, error, pokemon } = useFetch(
    "https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/pokedex.json"
  );

  const filter = useMemo(
    () =>
      pokemon
        .filter((p) =>
          p.name.english.toLowerCase().includes(input.trim().toLowerCase())
        )
        .sort((a, b) =>
          sortBy === "lg"
            ? -calcBase(a.base) - calcBase(b.base)
            : calcBase(a.base) - calcBase(b.base)
        ),
    [input, sortBy, pokemon]
  );

  return (
    <>
      <input
        type="text"
        value={input}
        onChange={(evt) => setInput(evt.target.value)}
        placeholder="Search pokemon"
        className="p-2 font-cstm caret-current rounded-sm outline-none bg-white mb-4 border-none text-center text-gray-700 placeholder:text-slate-300 focus:outline-blue-400 focus:outline-offset-0 outline-4 "
      />
      {loading && "Loading...."}
      {error && "there was an error!!"}
      {loading || error || (
        <table>
          <thead className=" text-indigo-900 bg-blue-900 bg-opacity-10 dark:text-slate-50 dark:bg-indigo-300 dark:bg-opacity-10 ">
            <tr>
              <th className="p-2 font-cstm text-base uppercase font-light">
                name
              </th>
              <th className="p-2 font-cstm text-base uppercase font-light">
                type
              </th>
              <th
                className="p-2 font-cstm text-base uppercase font-light cursor-pointer select-none"
                onClick={() => setSortBy((p) => (p === "lg" ? "sm" : "lg"))}
              >
                base
              </th>
            </tr>
          </thead>
          <tbody className="text-gray-600 dark:text-slate-300 [&>*:nth-child(even)]:bg-indigo-900 [&>*:nth-child(even)]:bg-opacity-5 dark:[&>*:nth-child(even)]:bg-indigo-200 dark:[&>*:nth-child(even)]:bg-opacity-5 ">
            {filter.map((p) => (
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
