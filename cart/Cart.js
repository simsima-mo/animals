import React from "react";

const Cart = ({ cart, setCart }) => {
  // Calculate the total price
  const totalPrice = cart
    .reduce(
      (total, item) =>
        total + parseFloat(item.price.replace("dh", "")) * item.quantity,
      0
    )
    .toFixed(2);

  // Remove item from cart
  const handleRemoveFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1); // Removes the item at the specified index
    setCart(newCart); // Update the cart state
  };

  // Increase or decrease quantity of items in the cart
  const handleQuantityChange = (index, action) => {
    const newCart = [...cart];
    if (action === "increase") {
      newCart[index].quantity += 1;
    } else if (action === "decrease" && newCart[index].quantity > 1) {
      newCart[index].quantity -= 1;
    }
    setCart(newCart);
  };

  return (
    <div className="cart-page">
      <h2>Mon Panier</h2>
      {cart.length === 0 ? (
        <p>Votre panier est vide</p>
      ) : (
        cart.map((item, index) => (
          <div key={index} className="cart-item">
            <div className="cart-item-info">
              <img src={item.image} alt={item.name} style={{ width: '80px' }} />
              <div>
                <p><strong>{item.name}</strong></p>
                <p>{item.price} x {item.quantity}</p>
                <p>{(parseFloat(item.price.replace("dh", "")) * item.quantity).toFixed(2)} dh</p>
              </div>
            </div>
            <div className="cart-item-actions">
              <button onClick={() => handleQuantityChange(index, "decrease")}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => handleQuantityChange(index, "increase")}>+</button>
              <button onClick={() => handleRemoveFromCart(index)}>Supprimer</button>
            </div>
          </div>
        ))
      )}
      {cart.length > 0 && (
        <div className="cart-total">
          <h3>Total: {totalPrice} dh</h3>
        </div>
      )}
      <button className="checkout-button">Passer à la caisse</button>
    </div>
  );
};

export default Cart;
