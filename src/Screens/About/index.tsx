import React from "react";
import NavbarComponent from "../../Components/Navbar";
import { useSelector } from "react-redux";
import { getAboutStyles } from "./style";

function About() {
  const theme = useSelector((state: any) => state.counter.theme);
  const styles = getAboutStyles(theme);

  return (
    <>
      <NavbarComponent />
      <div style={styles.container as React.CSSProperties}>
        <h1 style={styles.mainTitle as React.CSSProperties}>About Us</h1>
        <div style={styles.card as React.CSSProperties}>
          <p style={styles.text as React.CSSProperties}>
            We are a team of passionate developers focused on creating intuitive web applications since 2020.
            Our goal is to deliver high-quality solutions that make a difference.
          </p>
          
          <div style={styles.divider as React.CSSProperties}></div>
          
          <p style={styles.text as React.CSSProperties}>
            Based in San Francisco, our small team brings expertise in React, Node.js, and cloud technologies.
          </p>
          
          <div style={styles.divider as React.CSSProperties}></div>
          
          <p style={styles.contactText as React.CSSProperties}>
            Contact: info@example.com
          </p>
        </div>
      </div>
    </>
  );
}

export default About;