export const getAboutStyles = (theme: "light" | "dark") => ({
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
    fontSize: "48px",
    fontWeight: "bold",
    textShadow: theme === "dark"
      ? "2px 2px 10px rgba(255, 255, 255, 0.3)"
      : "2px 2px 10px rgba(0, 0, 0, 0.1)",
    marginBottom: "30px",
    animation: "fadeIn 1.2s ease-in-out",
  },
  card: {
    padding: "30px",
    maxWidth: "600px",
    borderRadius: "10px",
    background: theme === "dark"
      ? "rgba(255, 255, 255, 0.08)"
      : "rgba(255, 255, 255, 0.9)",
    backdropFilter: "blur(10px)",
    boxShadow: theme === "dark"
      ? "0px 10px 30px rgba(0, 0, 0, 0.4)"
      : "0px 10px 30px rgba(0, 0, 0, 0.1)",
  },
  text: {
    fontSize: "18px",
    lineHeight: "1.6",
    marginBottom: "15px",
    color: theme === "dark" ? "#e0e0e0" : "#444",
  },
  divider: {
    height: "1px",
    width: "100%",
    background: theme === "dark" 
      ? "rgba(255, 255, 255, 0.15)" 
      : "rgba(0, 0, 0, 0.1)",
    margin: "20px 0",
  },
  contactText: {
    fontSize: "16px",
    color: theme === "dark" ? "#7bbfff" : "#0066cc",
  }
});