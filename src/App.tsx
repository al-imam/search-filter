import SearchFilter from "./components/SearchFilter";

function App() {
  return (
    <div>
      <h1>
        <a
          href="https://github.com/al-imam"
          style={{
            color: "var(--gray-8)",
            fontSize: "1.5rem",
            fontWeight: "bold",
            textDecoration: "underline var(--gray-8)",
          }}
        >
          pokémon-table
        </a>
      </h1>
      <SearchFilter />
    </div>
  );
}

export default App;
