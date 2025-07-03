export const styles: { [key: string]: React.CSSProperties } = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      background: "linear-gradient(to right, #141e30, #243b55)",
    },
    card: {
      padding: "40px",
      textAlign: "center",
      borderRadius: "10px",
      background: "rgba(255, 255, 255, 0.1)",
      backdropFilter: "blur(10px)",
      boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
      color: "white",
      maxWidth: "400px",
    },
    title: {
      fontSize: "80px",
      margin: "0",
      fontWeight: "bold",
      textShadow: "2px 2px 10px rgba(255, 255, 255, 0.3)",
    },
    text: {
      fontSize: "18px",
      marginBottom: "20px",
    },
    button: {
      display: "inline-block",
      padding: "10px 20px",
      fontSize: "16px",
      color: "#fff",
      textDecoration: "none",
      background: "#ff4b2b",
      borderRadius: "5px",
      transition: "0.3s ease-in-out",
      boxShadow: "0px 4px 10px rgba(255, 75, 43, 0.5)",
    },
  };
  