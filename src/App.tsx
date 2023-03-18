import SearchFilter from "./components/SearchFilter";

function App() {
  return (
    <main>
      <div className="flex justify-center flex-col max-w-screen-sm px-4 md:py-10 mx-auto">
        <h1 className="text-3xl py-4 text-indigo-900 dark:text-white ">
          <a
            href="https://github.com/al-imam"
            className="border-none outline-none rounded focus-visible:outline-blue-400 focus-visible:outline-offset-0 outline-2 "
          >
            pokémon-table
          </a>
        </h1>
        <SearchFilter />
      </div>
      <a
        href="https://github.com/al-imam"
        className="p-4 block text-green-400 font-cstm text-center bg-gray-900 outline-none border-none focus-visible:underline hover:underline "
      >
        al-imam
      </a>
    </main>
  );
}

export default App;
