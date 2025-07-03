import React from "react";
import NavbarComponent from "../../Components/Navbar";
import { useSelector } from "react-redux";
import { getHomeStyles } from "./style";

function Home() {
  const theme = useSelector((state: any) => state.counter.theme);
  const styles = getHomeStyles(theme); 
  return (
    <div style={styles.container as React.CSSProperties}>
      <NavbarComponent />
      <h1 style={styles.mainTitle}>React Boilerplate</h1>
      <div style={styles.card}>
        <p style={styles.text}>
          A solid foundation to kickstart your React project with best practices and a structured setup.
        </p>
      </div>
    </div>
  );
}

export default Home;
