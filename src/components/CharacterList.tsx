const listStyle = {
  display: "flex",
  flexWrap: "wrap",
  background: "tomato",
  color: "white",
  gap: "1rem",
};
const CharacterList = ({ list, loading }: any) => {
  console.log({ list });
  return (
    <div style={listStyle}>
      {list.map((item: any) => (
        <p>{item.name}</p>
      ))}
    </div>
  );
};

export default CharacterList;
