const listStyle: React.CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  color: "white",
  gap: "1rem",
};

const listStyleCards: React.CSSProperties = {
  background: "tomato",
};
const CharacterList = ({ list, loading, error }: any) => {
  console.log({ list });

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div style={listStyle}>
      {list.map((item: any) => (
        <div style={listStyleCards}>
          <img src={item.image} alt={item.name} />
          <h4 style={{ textAlign: "center" }}>Name: {item.name}</h4>
          <p style={{ textAlign: "center" }}>Origin: {item.origin.name}</p>
        </div>
      ))}
    </div>
  );
};

export default CharacterList;
