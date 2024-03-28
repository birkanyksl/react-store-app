/* eslint-disable react/prop-types */
import "./CartItem.css";

const CartItem = ({ product }) => {
  return (
    <li className="cart-item">
      <div className="cart-item-img">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="cart-item-info">
        <div className="cart-item-texts">
          <b>{product.name}</b>
          <div>
            <span>{product.price}₺ x </span>
            <span className="cart-item-amount">{product.amount}</span>
          </div>
        </div>
        <a href="/" className="cart-item-remove">
          x
        </a>
      </div>
    </li>
  );
};

export default CartItem;
