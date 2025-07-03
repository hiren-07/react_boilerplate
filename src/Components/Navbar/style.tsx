export const getNavbarStyles = (theme: "light" | "dark") => ({
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 40px",
    background: theme === "dark" 
      ? "rgba(22, 28, 36, 0.9)" 
      : "rgba(255, 255, 255, 0.8)",
    backdropFilter: "blur(10px)",
    boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
    borderRadius: "10px",
    margin: "20px auto",
    width: "90%",
    position: "absolute",
    top: "20px",
    left: "50%",
    transform: "translateX(-50%)",
  },
  brand: {
    fontSize: "20px",
    fontWeight: "bold",
  },
  brandText: {
    textDecoration: "none",
    color: theme === "dark" ? "#fff" : "#333",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: "22px",
  },
  navLinks: {
    display: "flex",
    listStyle: "none",
    gap: "20px",
    margin: "0",
    padding: "0",
  },
  navLink: {
    textDecoration: "none",
    color: theme === "dark" ? "#e0e0e0" : "#333",
    fontSize: "18px",
    padding: "8px 16px",
    borderRadius: "5px",
    transition: "0.3s ease-in-out",
  },
  activeLink: {
    background: "#ff4b2b",
    color: "#fff",
    boxShadow: "0px 4px 10px rgba(157, 108, 99, 0.5)",
  },
  toggleButton: {
    border: "none",
    padding: "5px 10px",
    cursor: "pointer",
    borderRadius: "5px",
    transition: "all 0.1s ease",
    background: theme === "dark" 
    ? "rgba(22, 28, 36, 0.9)" 
    : "rgba(255, 255, 255, 0.8)",    
    color: theme === "dark" ? "#fff" : "#000",
  },
});