import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const listCard = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
  gap: "10px",
  marginTop: "20px",
};

const list: React.CSSProperties = {
  background: "lightblue",
  padding: "5px 10px",
  borderRadius: "10px",
  lineHeight: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  // height: "100%",
};
const FetchList = ({ lists, loading, error }: any) => {
  const deletePost = (id: string) => {
    console.log("deleted id", id);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          height: "50px",
        }}
      >
        <input type="text" placeholder="Enter something here" />
      </div>

      <div style={listCard}>
        {lists &&
          lists.map((item: any) => (
            <div style={list}>
              <p
                style={{
                  marginBottom: 0,
                  fontSize: "2rem",
                  fontWeight: "bold",
                }}
              >
                #{item.id}
              </p>
              <h2>{item.title}</h2>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <MdModeEdit style={{ cursor: "pointer", fontSize: "20px" }} />
                <MdDelete
                  style={{ cursor: "pointer", fontSize: "20px" }}
                  onClick={() => deletePost(item.id)}
                />
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default FetchList;
