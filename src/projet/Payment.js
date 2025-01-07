import React, { useState } from "react";
import "./PaymentForm.css";
import { useNavigate } from "react-router-dom";

const PaymentPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    cardNumber: "",
    expirationDate: "",
    securityCode: "",
    cardName: "",
    paymentMethod: "creditCard",
  });
  const [error, setError] = useState(""); // Pour afficher un message d'erreur

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Vérification si tous les champs sont remplis
    if (
      !formData.email ||
      !formData.cardNumber ||
      !formData.expirationDate ||
      !formData.securityCode ||
      !formData.cardName
    ) {
      setError("Veuillez remplir tous les champs avant de continuer.");
      return;
    }

    // Réinitialiser le message d'erreur si tout est valide
    setError("");
    navigate("/congratulations"); // Redirige vers la page Congratulations
  };

  return (
    <div className="payment-container">
      <form className="payment-form" onSubmit={handleSubmit}>
        <div className="payment-method">
          <h1 style={{ color: "rgba(137, 67, 10, 0.989)" }}>Paiement</h1>
          <p>Merci pour votre achat ! Veuillez compléter les détails de paiement.</p>
          <h2 style={{ color: "rgba(248, 191, 122, 0.989)", fontWeight: "bolder" }}>
            Méthode de paiement
          </h2>
          <div className="payment-option">
            <input
              type="radio"
              id="creditCard"
              name="paymentMethod"
              value="creditCard"
              checked={formData.paymentMethod === "creditCard"}
              onChange={handleInputChange}
            />
            <label htmlFor="creditCard">Carte de Crédit</label>
          </div>
          <div className="payment-option">
            <input
              type="radio"
              id="paypal"
              name="paymentMethod"
              value="paypal"
              checked={formData.paymentMethod === "paypal"}
              onChange={handleInputChange}
            />
            <label htmlFor="paypal">PayPal</label>
          </div>
        </div>

        {formData.paymentMethod === "creditCard" && (
          <div className="card-details">
            <h2 style={{ color: "rgba(248, 191, 122, 0.989)", fontWeight: "bolder" }}>
              Détails de la carte
            </h2>

            {/* Champ Email */}
            <div>
              <label htmlFor="email">Adresse Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="exemple@domaine.com"
                required
              />
            </div>

            <div>
              <label htmlFor="cardNumber">Numéro de carte</label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleInputChange}
                placeholder="1234 5678 9012 3456"
                required
              />
            </div>
            <div className="input-group">
              <div>
                <label htmlFor="expirationDate">Date d'expiration</label>
                <input
                  type="text"
                  id="expirationDate"
                  name="expirationDate"
                  value={formData.expirationDate}
                  onChange={handleInputChange}
                  placeholder="MM/AA"
                  required
                />
              </div>
              <div>
                <label htmlFor="securityCode">Code de sécurité</label>
                <input
                  type="text"
                  id="securityCode"
                  name="securityCode"
                  value={formData.securityCode}
                  onChange={handleInputChange}
                  placeholder="CVV"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="cardName">Nom sur la carte</label>
              <input
                type="text"
                id="cardName"
                name="cardName"
                value={formData.cardName}
                onChange={handleInputChange}
                placeholder="John Doe"
                required
              />
            </div>
          </div>
        )}

        {/* Message d'erreur */}
        {error && <p className="error-message">{error}</p>}

        <button
          style={{
            borderRadius: "15px",
            background: "linear-gradient(to right, rgba(255, 212, 160, 0.989), rgba(137, 67, 10, 0.989))",
          }}
          type="submit"
          className="submit-btn"
        >
          Confirmer le paiement
        </button>
      </form>
    </div>
  );
};

export default PaymentPage;
