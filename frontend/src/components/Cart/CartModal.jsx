import React from 'react';
import { useCart } from '../../context/CartContext.jsx';
import './CartModal.css';

function CartModal({ isOpen, onClose }) {
  const { cartItems, updateQuantity, removeFromCart, cartTotal } = useCart();

  if (!isOpen) {
    return null;
  }

  return (
    <div className="cart-modal-overlay">
      <div className="cart-modal">
        <div className="cart-modal-header">
          <h2>Seu Carrinho</h2>
          <button onClick={onClose} className="close-button">&times;</button>
        </div>
        <div className="cart-modal-body">
          {cartItems.length === 0 ? (
            <p className="empty-cart-message">Seu carrinho está vazio.</p>
          ) : (
            <div className="cart-items-list">
              {cartItems.map(item => (
                <div key={item.id} className="cart-item">
                  <img src={item.imageUrl} alt={item.nome} className="cart-item-image" />
                  <div className="cart-item-details">
                    <span className="cart-item-name">{item.nome}</span>
                    <span className="cart-item-price">R$ {parseFloat(item.preco).toFixed(2)}</span>
                  </div>
                  <div className="cart-item-quantity">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                  </div>
                  <button onClick={() => removeFromCart(item.id)} className="remove-item-button">Remover</button>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="cart-modal-footer">
          <div className="cart-total">
            <span>Total:</span>
            <strong>R$ {cartTotal.toFixed(2)}</strong>
          </div>
          <button className="checkout-button" disabled={cartItems.length === 0}>
            Finalizar Pedido
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartModal;
