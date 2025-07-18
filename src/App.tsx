import { useEffect, useState } from "react";
import "./App.css";
import CharacterList from "./components/CharacterList";
import { useGQL } from "./hooks/useGQL";

function App() {
  const [list, setList] = useState([]);
  const { GET_ALL_CHARACTERS } = useGQL();
  const { data, loading, error } = GET_ALL_CHARACTERS();

  useEffect(() => {
    if (data) {
      setList(data.characters.results);
    }
  });
  return (
    <>
      <h2>Rick and Morty</h2>
      <CharacterList list={list} loading={loading} error={error} />
    </>
  );
}

export default App;
