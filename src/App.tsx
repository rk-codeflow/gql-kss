import { useEffect, useState } from "react";
import "./App.css";
import CharacterList from "./components/CharacterList";
import { useGQL } from "./hooks/useGQL";
import FetchList from "./components/FetchList";

function App() {
  const [characters, setCharacters] = useState([]);
  const { GET_ALL_CHARACTERS } = useGQL();
  const { data, loading, error } = GET_ALL_CHARACTERS();

  useEffect(() => {
    if (data) {
      setCharacters(data.characters.results);
    }
  });

  return (
    <>
      <CharacterList list={characters} loading={loading} error={error} />
      <FetchList />
    </>
  );
}

export default App;
