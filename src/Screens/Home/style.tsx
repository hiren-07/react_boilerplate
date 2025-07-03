export const getHomeStyles = (theme: "light" | "dark") => ({
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
    color: theme === "dark" ? "#f5f5f5" : "#333",
    padding: "20px",
  },
  mainTitle: {
    fontSize: "64px",
    fontWeight: "bold",
    color: theme === "dark" ? "#f5f5f5" : "#333",
    textShadow: theme === "dark" 
      ? "3px 3px 15px rgba(255, 255, 255, 0.3)" 
      : "3px 3px 15px rgba(0, 0, 0, 0.2)",
    marginBottom: "20px",
    animation: "fadeIn 1.2s ease-in-out",
  },
  card: {
    padding: "20px 40px",
    maxWidth: "600px",
    borderRadius: "10px",
    background: theme === "dark" 
      ? "rgba(255, 255, 255, 0.08)" 
      : "rgba(255, 255, 255, 0.9)",
    backdropFilter: "blur(10px)",
    boxShadow: theme === "dark" 
      ? "0px 10px 30px rgba(0, 0, 0, 0.8)" 
      : "0px 10px 30px rgba(0, 0, 0, 0.1)",
  },
  text: {
    fontSize: "18px",
    lineHeight: "1.6",
    color: theme === "dark" ? "#e0e0e0" : "#444",
  },
});