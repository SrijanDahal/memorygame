import { useEffect, useState } from "react";

function FetchPokemon() {
  const [pokemon, setPokemon] = useState<{ names: string[]; urls: string[] }>({
    names: [],
    urls: [],
  });
  const [clickedPokemon, setClickedPokemon] = useState<string[]>([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const [array, setarray] = useState<number[]>([
    1, 2, 13, 14, 5, 546, 7, 84, 39, 17, 23, 56,
  ]);

  function shuffleArray() {
    const suffledArray = [...array];
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [suffledArray[i], suffledArray[j]] = [suffledArray[j], suffledArray[i]];
    }
    setarray(suffledArray);
  }

  function handleClick(url: string) {
    const isClicked = clickedPokemon.includes(url);
    if (isClicked) {
      setScore(0);
      setClickedPokemon([]);
      if (score >= highScore) {
        setHighScore(score);
      }
      return;
    } else {
      setClickedPokemon((prev) => [...prev, url]);
    }
    setScore(score < 12 ? score + 1 : 0);
  }

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=1000"
      );
      const data = await response.json();

      const names = array.map((id) => data.results[id - 1]?.name ?? "Unknown");
      const urls = array.map(
        (id) =>
          `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
      );
      console.log(pokemon);
      setPokemon({ names, urls }); // ✅ one update
    }
    fetchData();
  }, [array]);

  return (
    <>
      <div style={{ margin: "0 30px 0 30px", padding: "20px" }}>
        <h3>Score: {score}</h3>
        <h3>High Score: {highScore}</h3>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gridTemplateRows: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "20px",
          margin: "30px",
          padding: "20px",
        }}
      >
        {pokemon.urls.map((url, index) => (
          <button
            className="pokemon-button"
            key={pokemon.names[index]}
            onClick={() => {
              shuffleArray();
              handleClick(url);
            }}
            style={{
              backgroundColor: "lightblue",
              borderRadius: "10px",
              border: "none",
              background: "none",
              cursor: "pointer",
              padding: "0px",
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "10px",
              }}
            >
              <img src={url} alt="pokemon" style={{ height: "100px" }} />
              <h1>{pokemon.names[index]}</h1>
            </div>
          </button>
        ))}
      </div>
    </>
  );
}

export { FetchPokemon };
