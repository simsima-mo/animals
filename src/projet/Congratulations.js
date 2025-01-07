import React from "react";

const Congratulations = () => {
  return (
    <div style={styles.container}>
      <div style={styles.circle}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={styles.icon}
        >
          <path d="M20 6L9 17l-5-5" />
        </svg>
      </div>
      <p style={styles.message}>Félicitations ! Votre Commande a été réussie .</p>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f9f9f9",
    margin: 0,
    fontFamily: "Arial, sans-serif",
  },
  circle: {
    width: "100px",
    height: "100px",
    border: "5px solid #28a745",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    width: "50px",
    height: "50px",
    color: "#28a745",
  },
  message: {
    marginTop: "20px",
    fontSize: "18px",
    color: "#333",
  },
};

export default Congratulations;
