export const getReduxExampleStyles = (theme: "light" | "dark") => ({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    textAlign: "center",
    background: theme === "dark"
      ? "linear-gradient(135deg, #1a1f29, #2c3e50, #1e3c72)"
      : "linear-gradient(135deg, #e6f2ff, #f0f8ff, #c9d6ff)",
    padding: "20px",
    color: theme === "dark" ? "#f5f5f5" : "#333",

  },
  mainTitle: {
    fontSize: "48px",
    fontWeight: "bold",
    textShadow: "2px 2px 10px rgba(255, 255, 255, 0.3)",
    marginBottom: "30px",
  },
  card: {
    padding: "30px",
    maxWidth: "500px",
    borderRadius: "10px",
    background: theme === "dark" ? "rgba(255, 255, 255, 0.08)" : "rgba(255, 255, 255, 0.9)",
    backdropFilter: "blur(10px)",
    boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
  },
  text: {
    fontSize: "18px",
    lineHeight: "1.6",
    marginBottom: "20px",
  },
  counterValue: {
    margin: "30px 0",
  },
  count: {
    fontSize: "60px",
    fontWeight: "bold",
    color: "#6bb0ff",
    textShadow: "0 0 10px rgba(107, 176, 255, 0.5)",
  },

  button: {
    padding: "12px 25px",
    backgroundColor: "#6bb0ff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "background-color 0.3s",
    margin: "0 10px",
  },
});
