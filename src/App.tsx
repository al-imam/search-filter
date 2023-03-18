import SearchFilter from "./components/SearchFilter";

function App() {
  return (
    <main>
      <div className="flex justify-center flex-col max-w-screen-sm px-4 md:py-10 mx-auto">
        <h1 className="text-3xl py-4 text-indigo-900 dark:text-white ">
          <a
            href="https://github.com/al-imam"
            className="border-none outline-none rounded-sm focus-visible:ring-4 ring-blue-500 transition-shadow "
          >
            pokémon-table
          </a>
        </h1>
        <SearchFilter />
      </div>
      <div className="p-4 block text-green-400 font-cstm text-center bg-gray-900">
        <a
          href="https://github.com/al-imam"
          className="outline-none border-none focus-visible:underline hover:underline "
        >
          al-imam
        </a>
      </div>
    </main>
  );
}

export default App;
