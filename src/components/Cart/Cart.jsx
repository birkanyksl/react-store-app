/* eslint-disable react/prop-types */
import "./Cart.css";
import CartItem from "./CartItem";
import products from "../../productData";

const Cart = ({ onClose }) => {
  const cartItems = (
    <ul className="cart-items">
      {products.map((product) => (
        <CartItem key={product.id} product={product} />
      ))}
    </ul>
  );

  return (
    <div className="offcanvas">
      <div className="content">
        <div className="cart-head">
          <h2>Sepetim</h2>
          <a href="/" className="cart-close" onClick={onClose}>
            X
          </a>
        </div>
        {cartItems}
        <div className="total">
          <span>Toplam Değer</span>
          <span>10₺</span>
        </div>
        <div className="actions">
          <button className="cart-order">Sipariş Ver</button>
          <button className="cart-clear">Temizle</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
