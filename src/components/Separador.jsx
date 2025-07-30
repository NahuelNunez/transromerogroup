import React from "react";

export const Separador = () => {
  const styles = {
    container: {
      width: "100%",
      height: "100px",
      overflow: "hidden",
      backgroundColor: "#FFF4E5",
    },
    svg: {
      display: "block",
      width: "100%",
      height: "100%",
    },
  };
  return (
    <div style={styles.container}>
      <svg viewBox="0 0 1440 100" preserveAspectRatio="none" style={styles.svg}>
        <path
          d="M0,0 C360,100 1080,0 1440,100 L1440,0 L0,0 Z"
          fill="url(#grad)"
        />
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFE9D0" />
            <stop offset="50%" stopColor="#FFD3A3" />
            <stop offset="100%" stopColor="#FFC78C" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};
