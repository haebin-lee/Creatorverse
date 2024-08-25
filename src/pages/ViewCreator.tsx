import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import IconDelete from "../assets/icon/trash.png";
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
      <div style={styles.card}>
        <div style={styles.profileImage}></div>
        <div style={styles.cardContent}>
          <div style={styles.buttonWrapper}>
            <IconButton
              onClick={handleDelete}
              icon={IconDelete}
              label="delete"
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
    </>
  );
}
export default ViewCreator;

const styles = {
  card: {
    display: "flex",
    minWidth: "500px",
    padding: "30px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    minHeight: "300px",
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
  button: {
    cursor: "pointer",
    backgroundColor: "transparent",
    border: "none",
    padding: 0,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    width: "1.5rem",
    height: "1.5rem",
  },
};
