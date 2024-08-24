import React, { useRef, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import backgroundImg from "./assets/background.jpg";

const styles = {
  appContainer: {
    width: "100%",
    minHeight: "200vh",
  },
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
  contentSection: {
    minHeight: "100vh",
    padding: "2rem",
    position: "relative",
  },
  contentBackground: {
    position: "absolute" as const,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#FDBE00",
    opacity: 0.3,
    zIndex: -1,
  },
  contentWrapper: {
    position: "relative" as const,
    zIndex: 1,
  },
};

function App() {
  const creatorsRef = useRef(null);
  const addRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/creators" && creatorsRef.current) {
      creatorsRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (location.pathname === "/add" && addRef.current) {
      addRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <div style={styles.appContainer}>
      <div style={styles.backgroundImg}></div>
      <header style={styles.header}>
        <h1 style={styles.title}>CREATORVERSE</h1>
        <div style={styles.buttonContainer}>
          <button
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#5a6268")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#6c757d")
            }
          >
            <Link to="/creators" style={styles.link}>
              View Creators
            </Link>
          </button>
          <button
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#0056b3")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#007bff")
            }
          >
            <Link to="/add" style={styles.link}>
              Add a creator
            </Link>
          </button>
        </div>
      </header>
      <div ref={creatorsRef} id="creators" style={styles.contentSection}>
        <div style={styles.contentBackground}></div>
        <div style={styles.contentWrapper}>
          {location.pathname === "/creators" && <Outlet />}
        </div>
      </div>
      <div ref={addRef} id="add" style={styles.contentSection}>
        <div style={styles.contentBackground}></div>
        <div style={styles.contentWrapper}>
          {location.pathname === "/add" && <Outlet />}
        </div>
      </div>
    </div>
  );
}

export default App;
