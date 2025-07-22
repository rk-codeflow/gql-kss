import { useEffect, useState } from "react";
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import crudOpsGQL from "../hooks/crudGQL";

interface Post {
  id: string;
  title: string;
  body: string;
}

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
};
const FetchList = () => {
  const [lists, setLists] = useState<Post[]>([]);
  const [formData, setFormData] = useState({
    title: "",
    body: "",
  });

  const { GET_ALL_LISTS, DELETE_POST, CREATE_POST } = crudOpsGQL();
  const { data, loading, error } = GET_ALL_LISTS();

  const [handleCreate, { loading: createLoading }] = CREATE_POST();
  const [handleDelete, { loading: deleteLoading }] = DELETE_POST();

  useEffect(() => {
    if (data) {
      setLists(data?.posts?.data);
    }
  }, [data]);

  // Create post
  const createPost = async (e: any) => {
    e.preventDefault();
    try {
      const res = await handleCreate({
        variables: {
          input: {
            title: formData.title,
            body: formData.body,
          },
        },
      });

      const newformData = res?.data?.createPost;
      if (newformData) {
        setLists([newformData, ...lists]); // Add new post to the top of the list
        setFormData({ title: "", body: "" }); // Clear form fields
      }
      console.log({ res });
    } catch (error) {
      console.log(error);
    }
  };

  const deletePost = async (id: string) => {
    const confirm = window.confirm("Are you sure you want to delete?");

    if (!confirm) {
      return;
    }

    try {
      const res = await handleDelete({
        variables: {
          id,
        },
      });

      if (res?.data?.deletePost) {
        setLists(lists.filter((item: any) => item.id !== id));
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }
  return (
    <>
      <h1>Data Fetching / Updating</h1>
      {/* <div
        style={{
          display: "flex",
          justifyContent: "center",
          height: "50px",
        }}
      >
        <input type="text" placeholder="Enter something here" />
      </div> */}

      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          maxWidth: 500,
          margin: "0 auto",
        }}
        onSubmit={createPost}
      >
        <input
          type="text"
          placeholder="Enter title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />
        <textarea
          name="body"
          id="body"
          placeholder="Enter body text"
          rows={3}
          value={formData.body}
          onChange={(e) => setFormData({ ...formData, body: e.target.value })}
        ></textarea>
        <button type="submit">Create</button>
      </form>

      {deleteLoading && (
        <p
          style={{
            textAlign: "center",
            color: "red",
            marginTop: "10px",
            fontSize: "4rem",
          }}
        >
          Deleting...
        </p>
      )}

      <div style={listCard}>
        {lists &&
          lists.map((item: any) => (
            <div style={list} key={item.id}>
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
              <p>{item.body}</p>
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
