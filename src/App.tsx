import { useEffect, useState } from "react";
import "./App.css";
import CharacterList from "./components/CharacterList";
import { useGQL } from "./hooks/useGQL";
import FetchList from "./components/FetchList";

function App() {
  const [characters, setCharacters] = useState([]);
  const [lists, setLists] = useState();
  const { GET_ALL_CHARACTERS, GET_ALL_LISTS } = useGQL();
  // const { data, loading, error } = GET_ALL_CHARACTERS();
  const { data, loading, error } = GET_ALL_LISTS();

  console.log({ data });

  // useEffect(() => {
  //   if (data) {
  //     setCharacters(data.characters.results);
  //   }
  // });
  useEffect(() => {
    if (data) {
      setLists(data?.posts?.data);
    }
  });

  return (
    <>
      <h2>Rick and Morty</h2>
      {/* <CharacterList list={characters} loading={loading} error={error} /> */}
      <FetchList lists={lists} loading={loading} error={error} />
    </>
  );
}

export default App;
