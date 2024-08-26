import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import IconDelete from "../assets/icon/trash.png";
import IconEdit from "../assets/icon/edit.png";
import URLIcon from "../assets/icon/url.png";
import Profile2 from "../assets/woman2.jpg";
import { supabase } from "../client";
import IconButton from "../shared/components/IconButton";
import { Creator } from "./ShowCreators";

function ViewCreator() {
  const { id } = useParams();
  const [creator, setCreator] = useState<Creator | null>(null);
  useEffect(() => {
    (async () => {
      const { data } = await supabase.from("creators").select("*").eq("id", id);
      setCreator(data ? (data[0] as Creator) : null);
    })();
  }, [id]);

  const navigate = useNavigate();
  const handleDelete = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    await supabase.from("creators").delete().eq("id", id);
    navigate("/creators");
  };
  return (
    <>
      <div
        style={{
          padding: "10rem 30rem 0rem 30rem",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
        }}
      >
        <h1 style={{ textAlign: "center" }}>
          This is {creator?.name}'s profile!
        </h1>
        <div style={styles.card}>
          <div style={styles.profileImage}></div>
          <div style={styles.cardContent}>
            <div style={styles.buttonWrapper}>
              <IconButton
                onClick={handleDelete}
                icon={IconDelete}
                label="delete"
              />
              <IconButton
                to={`/creators/${id}/edit`}
                icon={IconEdit}
                label="edit"
              />
            </div>
            <h1>{creator?.name}</h1>
            <div style={{ display: "flex", gap: "10px", fontSize: "24px" }}>
              <img src={URLIcon} alt="url icon" style={styles.icon} />
              <p>{creator?.url}</p>
            </div>
            <div style={{ display: "flex", gap: "10px", fontSize: "24px" }}>
              <img src={URLIcon} alt="url icon" style={styles.icon} />
              <p>{creator?.description}</p>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
          <button style={styles.button} onClick={() => navigate("/")}>
            Main
          </button>
          <button
            className="pico-background-grey-200"
            style={styles.button}
            onClick={() => navigate("/creators")}
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
}
export default ViewCreator;

const styles = {
  card: {
    display: "flex",
    minWidth: "500px",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    minHeight: "300px",
    overflow: "hidden",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    gap: "40px",
  },
  profileImage: {
    width: "30%",
    minHeight: "240px",
    backgroundImage: `url(${Profile2})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "2rem",
  },
  cardContent: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "10px",
    flex: "1",
  },
  buttonWrapper: {
    display: "flex",
    gap: "20px",
    justifyContent: "flex-end",
  },
  icon: {
    width: "1.5rem",
    height: "1.5rem",
  },
  button: {
    color: "white",
    border: "none",
    width: "100px",
    height: "50px",
    borderRadius: "5px",
  },
};
