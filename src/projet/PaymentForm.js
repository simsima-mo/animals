import React, { useState } from "react";

const PaymentForm = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  const handlePayment = (e) => {
    e.preventDefault();
    // Add payment processing logic here
    alert("Paiement réussi !");
  };

  return (
    <div className="payment-form">
      <h2>Informations de Paiement</h2>
      <form onSubmit={handlePayment}>
        <label>
          Numéro de carte
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            required
          />
        </label>
        <label>
          Date d'expiration
          <input
            type="text"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            placeholder="MM/YY"
            required
          />
        </label>
        <label>
          CVV
          <input
            type="text"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            required
          />
        </label>
        <button type="submit">Payer</button>
      </form>
    </div>
  );
};

export default PaymentForm;