import React, { useState } from "react";

const PaymentForm = () => {
  const [formData, setFormData] = useState({
    cardNumber: "",
    expirationDate: "",
    securityCode: "",
    cardName: "",
    useShippingAddress: true,
    paymentMethod: "creditCard",
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique pour traiter le formulaire
    console.log("Données du formulaire :", formData);
  };

  return (
    <div style={{ backgroundColor: "darkseagreen", padding: "20px", borderRadius: "8px" }}>
      <h2>Paiement</h2>
      <p>Toutes les transactions sont sécurisées et chiffrées.</p>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="radio"
            id="creditCard"
            name="paymentMethod"
            value="creditCard"
            checked={formData.paymentMethod === "creditCard"}
            onChange={handleInputChange}
          />
          <label htmlFor="creditCard">Carte de crédit</label>
          <img src="visa-logo.png" alt="Visa" style={{ marginLeft: "10px" }} />
          <img src="mastercard-logo.png" alt="Mastercard" style={{ marginLeft: "5px" }} />
        </div>

        {formData.paymentMethod === "creditCard" && (
          <>
            <div>
              <label htmlFor="cardNumber">Numéro de carte</label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleInputChange}
                placeholder="Saisissez un numéro de carte"
              />
            </div>

            <div style={{ display: "flex", gap: "10px" }}>
              <div>
                <label htmlFor="expirationDate">Date d'expiration (MM/AA)</label>
                <input
                  type="text"
                  id="expirationDate"
                  name="expirationDate"
                  value={formData.expirationDate}
                  onChange={handleInputChange}
                  placeholder="MM/AA"
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
                placeholder="Entrez votre nom tel qu’il est écrit sur votre carte"
              />
            </div>

            <div>
              <input
                type="checkbox"
                id="useShippingAddress"
                name="useShippingAddress"
                checked={formData.useShippingAddress}
                onChange={handleInputChange}
              />
              <label htmlFor="useShippingAddress">
                Utiliser l'adresse d'expédition comme adresse de facturation
              </label>
            </div>
          </>
        )}

        <div>
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

        <div>
          <input type="checkbox" id="terms" name="terms" required />
          <label htmlFor="terms">
            J'ai lu et j'accepte la{" "}
            <a href="/policy" target="_blank" rel="noopener noreferrer">
              politique d'expédition
            </a>{" "}
            et la{" "}
            <a href="/refund-policy" target="_blank" rel="noopener noreferrer">
              politique de remboursement
            </a>.
          </label>
        </div>

        <button type="submit">Payer</button>
      </form>
    </div>
  );
};

export default PaymentForm;
