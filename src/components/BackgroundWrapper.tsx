import React from "react";

const styles = {
  container: {
    position: "relative" as const,
    minHeight: "100vh",
    width: "100%",
  },
  background: {
    position: "fixed" as const,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "linear-gradient(to bottom, #A6DAF7, #FFCE04)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    opacity: 0.3,
    zIndex: -1,
  },
  content: {
    position: "relative" as const,
    zIndex: 1,
  },
};

interface BackgroundWrapperProps {
  children: React.ReactNode;
}

const BackgroundWrapper: React.FC<BackgroundWrapperProps> = ({ children }) => {
  return (
    <div style={styles.container}>
      <div style={styles.background}></div>
      <div style={styles.content}>{children}</div>
    </div>
  );
};

export default BackgroundWrapper;
