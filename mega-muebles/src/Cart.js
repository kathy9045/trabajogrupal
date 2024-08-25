import React from 'react';
import './Cart.css';

const Cart = ({ cartItems, onRemoveFromCart, onBackToCatalog, totalPrice, onCheckout }) => {
  return (
    <div className="cart">
      <h2>Tu Carrito</h2>
      {cartItems.length > 0 ? (
        <div className="cart-items">
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-info">
                <span>{item.name}</span>
                <span>Precio: ${item.price}</span>
              </div>
              <button onClick={() => onRemoveFromCart(index)}>Eliminar</button>
            </div>
          ))}
          <div className="cart-total">
            <h3>Total: ${totalPrice}</h3>
            <button onClick={onCheckout}>Proceder al Pago</button>
          </div>
        </div>
      ) : (
        <p>No hay artículos en el carrito.</p>
      )}
      
    </div>
  );
};

export default Cart;
















