import SearchFilter from "./components/SearchFilter";

function App() {
  return (
    <div className="flex justify-center flex-col max-w-screen-sm px-4 py-10 mx-auto">
      <h1 className="text-3xl py-4 text-indigo-900 dark:text-white ">
        <a
          href="https://github.com/al-imam"
          className="border-none outline-none rounded focus-visible:outline-blue-400 focus-visible:outline-offset-0 outline-4 "
        >
          pokémon-table
        </a>
      </h1>
      <SearchFilter />
    </div>
  );
}

export default App;
