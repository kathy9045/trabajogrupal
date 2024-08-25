import React, { useState } from 'react';
import './CheckoutForm.css';

const CheckoutForm = ({ onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('creditCard'); // Default payment method

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para proceder al pago, por ejemplo, una llamada a una API.
    alert('Pago procesado con éxito!');
    onClose(); // Cerrar el formulario después de procesar el pago
  };

  return (
    <div className="checkout-form-overlay">
      <div className="checkout-form">
        <h2>Formulario de Pago</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Nombre:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <label>
            Correo Electrónico:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label>
            Dirección:
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </label>
          <label>
            Método de Pago:
            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              required
            >
              <option value="creditCard">Tarjeta de Crédito</option>
              <option value="paypal">PayPal</option>
              <option value="bankTransfer">Transferencia Bancaria</option>
            </select>
          </label>
          {paymentMethod === 'creditCard' && (
            <>
              <label>
                Número de Tarjeta:
                <input
                  type="text"
                  placeholder="**** **** **** ****"
                  required
                />
              </label>
              <label>
                Fecha de Expiración:
                <input
                  type="text"
                  placeholder="MM/AA"
                  required
                />
              </label>
              <label>
                Código de Seguridad:
                <input
                  type="text"
                  placeholder="CVV"
                  required
                />
              </label>
            </>
          )}
          {paymentMethod === 'paypal' && (
            <p>Inicie sesión en su cuenta de PayPal para completar el pago.</p>
          )}
          {paymentMethod === 'bankTransfer' && (
            <p>Por favor, realice la transferencia bancaria a las siguientes coordenadas:</p>
          )}
          <button type="submit" className="submit-button">Pagar</button>
          <button type="button" className="cancel-button" onClick={onClose}>Cancelar</button>
        </form>
      </div>
    </div>
  );
};

export default CheckoutForm;


