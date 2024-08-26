import { Link } from "react-router-dom";
import backgroundImg from "./assets/background.jpg";

function App() {
  return (
    <>
      <div style={styles.backgroundImg}></div>
      <header style={styles.header}>
        <h1 style={styles.title}>CREATORVERSE</h1>
        <div style={styles.buttonContainer}>
          <button>
            <Link to="/creators" style={styles.link}>
              View Creators
            </Link>
          </button>
          <button>
            <Link to="/add" style={styles.link}>
              Add a creator
            </Link>
          </button>
        </div>
      </header>
    </>
  );
}

export default App;

const styles = {
  backgroundImg: {
    backgroundImage: `url(${backgroundImg})`,
    backgroundSize: "cover",
    backgroundPosition: "relative",
    position: "absolute" as const,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.3,
    zIndex: -1,
  },
  header: {
    height: "100vh",
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: "4rem",
    marginBottom: "2rem",
  },
  buttonContainer: {
    display: "flex",
    gap: "5rem",
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
};
