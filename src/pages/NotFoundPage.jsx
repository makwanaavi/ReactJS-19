import { Link } from "react-router-dom";

const ErrorPage = () => (
  <div
    style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      background: "linear-gradient(135deg, #2193b0, #6dd5ed)",
      color: "white",
      textAlign: "center",
      padding: "2rem",
    }}
  >
    <h1 style={{ fontSize: "6rem", marginBottom: "1rem" }}>404</h1>
    <h2 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>Page Not Found</h2>
    <p style={{ fontSize: "1.5rem", marginBottom: "2rem" }}>
      Oops! The page you are looking for does not exist.
    </p>
    <Link
      to="/"
      style={{
        background: "#fff",
        color: "#2193b0",
        padding: "1rem 2rem",
        borderRadius: "8px",
        textDecoration: "none",
        fontWeight: "bold",
        fontSize: "1.2rem",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      }}
    >
      Go Home
    </Link>
  </div>
);

export default ErrorPage;
