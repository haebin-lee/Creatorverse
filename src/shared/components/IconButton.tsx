import { Link } from "react-router-dom";

function IconButton({
  to,
  onClick,
  icon,
  label,
}: {
  to?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  icon: string;
  label?: string;
}) {
  if (onClick) {
    return (
      <button onClick={onClick} style={styles.button}>
        <img src={icon} alt={label || "icon"} style={styles.icon} />
      </button>
    );
  }
  return (
    <Link to={to} style={styles.button}>
      <img src={icon} alt={label || "icon"} style={styles.icon} />
    </Link>
  );
}
export default IconButton;

const styles = {
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
