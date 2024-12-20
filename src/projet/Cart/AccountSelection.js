import React from "react";
import { useNavigate } from "react-router-dom";

const AccountSelection = ({ cart }) => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  if (cart.length === 0) {
    return null;
  }

  return (
    <div className="account-selection">
      <style>
        {`
          .account-selection {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 20px;
            background-color: #f7f7f7;
            border: 1px solid #ddd;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          }

          .account-selection h2 {
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 10px;
          }

          .account-selection p {
            font-size: 18px;
            margin-bottom: 20px;
          }

          .account-selection-button {
            background-color: #f39c12;
            color: #fff;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
          }

          .account-selection-button:hover {
            background-color: black;
          }

          .account-selection-button:active {
            transform: translateY(2px);
          }
        `}
      </style>
      <h2 style={{color : "#f39c12"}}>Créer un compte ou se connecter</h2>
      <p>Veuillez vous connecter ou créer un compte pour continuer le paiement</p>
      <button className="account-selection-button" onClick={handleLogin}>
      Allez vous connecter
      </button>
    </div>
  );
};

export default AccountSelection;