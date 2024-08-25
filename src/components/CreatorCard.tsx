import EditIcon from "../assets/icon/edit.png";
import InfoIcon from "../assets/icon/info.png";
import URLIcon from "../assets/icon/url.png";
import Profile2 from "../assets/woman2.jpg";
import IconButton from "../shared/components/IconButton";

interface Props {
  id: number;
  name: string;
  url: string;
  description: string;
  imageUrl?: string;
}

function CreatorCard({ id, name, url, description, imageUrl }: Props) {
  return (
    <div style={styles.card}>
      <div style={styles.profileImage}></div>
      <div style={styles.cardContent}>
        <div style={styles.buttonWrapper}>
          <IconButton to={`/creators/${id}`} icon={InfoIcon} label="detail" />
          <IconButton
            to={`/creators/${id}/edit`}
            icon={EditIcon}
            label="edit"
          />
        </div>
        <h1>{name}</h1>
        <div style={{ display: "flex", gap: "10px", fontSize: "24px" }}>
          <img src={URLIcon} alt="url icon" style={styles.icon} />
          <p>{url}</p>
        </div>
      </div>
    </div>
  );
}

export default CreatorCard;

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
