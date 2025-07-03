import React from "react";
import { Link } from "react-router-dom";
import { styles } from "./style";

function NoPage() {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>404</h1>
        <p style={styles.text}>Oops! The page you’re looking for doesn’t exist.</p>
        <Link to="/" style={styles.button}>
          Go to Home
        </Link>
      </div>
    </div>
  );
}

export default NoPage;
