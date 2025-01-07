import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AccountSelection from "./AccountSelection";

const Cart = ({ cart, setCart }) => {
  const [isUserInfoProvided, setIsUserInfoProvided] = useState(false); // Suivi des informations utilisateur
  const [showAccountSelection, setShowAccountSelection] = useState(false);
  const navigate = useNavigate();

  // Calcul du prix total
  const totalPrice = cart
    .reduce(
      (total, item) =>
        total + parseFloat(item.price.replace("dh", "")) * item.quantity,
      0
    )
    .toFixed(2);

  // Supprimer un article du panier
  const handleRemoveFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  // Changer la quantité
  const handleQuantityChange = (index, action) => {
    const newCart = [...cart];
    if (action === "increase") {
      newCart[index].quantity += 1;
    } else if (action === "decrease" && newCart[index].quantity > 1) {
      newCart[index].quantity -= 1;
    }
    setCart(newCart);
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert(
        "Veuillez ajouter des articles à votre panier avant de passer à la caisse."
      );
      return;
    }else{
      navigate("/payment");
    }

    if (isUserInfoProvided) {
      // Si les informations de l'utilisateur sont déjà fournies
      navigate("/payment");
    } else {
      // Sinon, afficher AccountSelection pour saisir les informations
      setShowAccountSelection(true);
    }
  };

  return (
    <div className="cart-page">
      <h2>Mon Panier</h2>
      {cart.length === 0 ? (
        <p>Votre panier est vide. Veuillez ajouter des articles à votre panier avant de passer à la caisse.</p>
      ) : (
        cart.map((item, index) => (
          <div key={index} className="cart-item">
            <div className="cart-item-info">
              <img src={item.image} alt={item.name} style={{ width: "80px" }} />
              <div>
                <p>
                  <strong>{item.name}</strong>
                </p>
                <p>
                  {item.price} x {item.quantity}
                </p>
                <p>
                  {(
                    parseFloat(item.price.replace("dh", "")) * item.quantity
                  ).toFixed(2)}{" "}
                  dh
                </p>
              </div>
            </div>
            <div className="cart-item-actions">
              <button onClick={() => handleQuantityChange(index, "decrease")}>
                -
              </button>
              <span>{item.quantity}</span>
              <button onClick={() => handleQuantityChange(index, "increase")}>
                +
              </button>
              <button onClick={() => handleRemoveFromCart(index)}>
                Supprimer
              </button>
            </div>
          </div>
        ))
      )}
      {cart.length > 0 && (
        <div className="cart-total">
          <h3>Total: {totalPrice} dh</h3>
        </div>
      )}
      <button className="checkout-button" onClick={handleCheckout}>
        Passer à la caisse
      </button>

      {/* Afficher AccountSelection si nécessaire */}
      {showAccountSelection && (
        <AccountSelection
          onUserInfoProvided={() => {
            setIsUserInfoProvided(true); // Marquer les informations comme fournies
            navigate("/payment"); // Naviguer vers la page de paiement
          }}
        />
      )}
    </div>
  );
};

export default Cart;
