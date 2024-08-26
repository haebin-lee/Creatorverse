import React from "react";
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
      <div style={styles.cardInner}>
        <div style={styles.profileImage}>
          <img src={imageUrl || Profile2} alt={name} style={styles.image} />
        </div>
        <div style={styles.cardContent}>
          <div style={styles.buttonWrapper}>
            <IconButton to={`/creators/${id}`} icon={InfoIcon} label="detail" />
            <IconButton
              to={`/creators/${id}/edit`}
              icon={EditIcon}
              label="edit"
            />
          </div>
          <h1 style={styles.name}>{name}</h1>
          <div style={styles.urlWrapper}>
            <img src={URLIcon} alt="url icon" style={styles.icon} />
            <p style={styles.url}>{url}</p>
          </div>
          <p style={styles.description} title={description}>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CreatorCard;

const styles = {
  card: {
    width: "100%",
    height: "240px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  cardInner: {
    display: "flex",
    height: "100%",
    padding: "20px",
    gap: "10px",
  },
  profileImage: {
    width: "150px",
    height: "150px",
    flexShrink: 0,
    borderRadius: "10px",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  cardContent: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "10px",
    flex: "1",
    overflow: "hidden",
  },
  buttonWrapper: {
    display: "flex",
    gap: "10px",
    justifyContent: "flex-end",
  },
  name: {
    fontSize: "24px",
    margin: "0 0 10px 0",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  urlWrapper: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  url: {
    fontSize: "16px",
    margin: 0,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  description: {
    fontSize: "14px",
    margin: "10px 0 0 0",
    lineHeight: "1.4",
    overflow: "hidden",
    display: "-webkit-box",
    WebkitLineClamp: 3,
    WebkitBoxOrient: "vertical" as const,
    textOverflow: "ellipsis",
  },
  icon: {
    width: "20px",
    height: "20px",
    flexShrink: 0,
  },
};
